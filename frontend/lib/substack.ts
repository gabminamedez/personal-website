/** Substack public archive API (`/api/v1/archive`). */

export type SubstackArchivePost = {
  type?: string;
  slug?: string;
};

const PAGE_SIZE = 50;

export async function fetchSubstackPostCount(
  host: string,
): Promise<number> {
  let offset = 0;
  let total = 0;

  while (offset < 500) {
    const url = `https://${host}/api/v1/archive?sort=new&offset=${offset}&limit=${PAGE_SIZE}`;
    const res = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "personal-website",
      },
      cache: "force-cache",
    });

    if (!res.ok) {
      throw new Error(`Substack HTTP ${res.status}`);
    }

    const batch = (await res.json()) as SubstackArchivePost[];
    if (!Array.isArray(batch) || batch.length === 0) break;

    total += batch.length;
    if (batch.length < PAGE_SIZE) break;
    offset += PAGE_SIZE;
  }

  return total;
}
