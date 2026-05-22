/** GitHub GraphQL (public user stats). */

export type GitHubStats = {
  projectsShipped: number;
  /** Null when only repo count was fetched (GraphQL unavailable). */
  totalCommits: number | null;
};

type GraphQLResponse = {
  data?: {
    user?: {
      repositories?: { totalCount: number };
      contributionsCollection?: { totalCommitContributions: number };
    } | null;
  };
  errors?: { message: string }[];
};

const GITHUB_GRAPHQL = "https://api.github.com/graphql";

function statsQuery(toIso: string) {
  return `
    query ($login: String!) {
      user(login: $login) {
        repositories(ownerAffiliations: OWNER, privacy: PUBLIC, isFork: false) {
          totalCount
        }
        contributionsCollection(from: "2008-01-01T00:00:00Z", to: "${toIso}") {
          totalCommitContributions
        }
      }
    }
  `;
}

export async function fetchGitHubStats(
  login: string,
  token?: string,
): Promise<GitHubStats> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(GITHUB_GRAPHQL, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query: statsQuery(new Date().toISOString()),
      variables: { login },
    }),
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`GitHub HTTP ${res.status}`);
  }

  const json = (await res.json()) as GraphQLResponse;
  if (json.errors?.length) {
    throw new Error(json.errors[0]?.message ?? "GitHub GraphQL error");
  }

  const user = json.data?.user;
  if (!user) {
    throw new Error("GitHub user not found");
  }

  const projectsShipped = user.repositories?.totalCount;
  const totalCommits =
    user.contributionsCollection?.totalCommitContributions;

  if (
    typeof projectsShipped !== "number" ||
    typeof totalCommits !== "number"
  ) {
    throw new Error("Incomplete GitHub stats");
  }

  return { projectsShipped, totalCommits };
}

/** REST fallback when GraphQL is rate-limited (repo count only). */
export async function fetchProjectsShippedRest(
  login: string,
): Promise<number> {
  const repos: { fork?: boolean }[] = [];
  let page = 1;

  while (page <= 10) {
    const res = await fetch(
      `https://api.github.com/users/${login}/repos?per_page=100&type=owner&page=${page}`,
      {
        headers: { Accept: "application/vnd.github+json" },
        cache: "no-store",
      },
    );
    if (!res.ok) {
      throw new Error(`GitHub REST HTTP ${res.status}`);
    }
    const batch = (await res.json()) as { fork?: boolean }[];
    if (!Array.isArray(batch) || batch.length === 0) break;
    repos.push(...batch);
    if (batch.length < 100) break;
    page += 1;
  }

  return repos.filter((r) => !r.fork).length;
}
