import { FABLE_API_BASE } from "@/consts/fable";

export type FableAuthor = {
  name: string;
};

export type FableBook = {
  id: string;
  title: string;
  subtitle: string;
  coverImage: string;
  coverImageSmall: string;
  pageCount: number;
  authors: FableAuthor[];
  url: string;
};

export type FableReadingSource = "current_reading" | "last_read";

export type FableReadingDisplay = {
  book: FableBook;
  authorLine: string;
  source: FableReadingSource;
  finishedThisYear: number | null;
  profileUrl: string;
};

type FableUserLookup = {
  id: string;
  display_name?: string;
  url?: string;
  private_profile?: boolean;
};

type FableBookList = {
  id: string;
  system_type?: string;
  count?: number;
};

type FableBookListResponse = {
  results?: FableBookList[];
};

type FableBookApi = {
  id: string;
  title: string;
  subtitle?: string;
  cover_image?: string;
  cover_image_small?: string;
  page_count?: number;
  authors?: FableAuthor[];
  url?: string;
};

type FableListBookEntry = {
  book: FableBookApi;
};

type FableListBooksResponse = {
  results?: FableListBookEntry[];
};

async function fableGet<T>(path: string): Promise<T> {
  const res = await fetch(`${FABLE_API_BASE}${path}`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`Fable HTTP ${res.status}`);
  }
  return res.json() as Promise<T>;
}

function mapBook(raw: FableBookApi): FableBook {
  return {
    id: raw.id,
    title: raw.title,
    subtitle: raw.subtitle?.trim() ?? "",
    coverImage: raw.cover_image ?? "",
    coverImageSmall: raw.cover_image_small ?? raw.cover_image ?? "",
    pageCount: raw.page_count ?? 0,
    authors: raw.authors ?? [],
    url: raw.url ?? "",
  };
}

function formatAuthorLine(authors: FableAuthor[]): string {
  const names = authors.map((a) => a.name).filter(Boolean);
  if (names.length === 0) return "";
  if (names.length === 1) return `— ${names[0]}`;
  if (names.length === 2) return `— ${names[0]} & ${names[1]}`;
  return `— ${names.slice(0, -1).join(", ")} & ${names[names.length - 1]}`;
}

async function fetchListBook(
  userId: string,
  listId: string,
  ordering?: string,
): Promise<FableBookApi | null> {
  const params = new URLSearchParams({ limit: "1" });
  if (ordering) params.set("ordering", ordering);
  const books = await fableGet<FableListBooksResponse>(
    `/v2/users/${userId}/book_lists/${listId}/books?${params.toString()}`,
  );
  return books.results?.[0]?.book ?? null;
}

export async function fetchFableReading(
  username: string,
): Promise<FableReadingDisplay | null> {
  const lookup = await fableGet<FableUserLookup>(
    `/usernames/${encodeURIComponent(username)}`,
  );
  if (!lookup.id) return null;
  if (lookup.private_profile) {
    throw new Error("Fable profile is private");
  }

  const lists = await fableGet<FableBookListResponse>(
    `/v2/users/${lookup.id}/book_lists/?media_type=book`,
  );

  const currentList = lists.results?.find(
    (list) => list.system_type === "current_reading",
  );
  const finishedList = lists.results?.find(
    (list) => list.system_type === "finished",
  );

  let rawBook: FableBookApi | null = null;
  let source: FableReadingSource = "current_reading";

  if (currentList?.id) {
    rawBook = await fetchListBook(lookup.id, currentList.id);
  }

  if (!rawBook && finishedList?.id) {
    rawBook = await fetchListBook(lookup.id, finishedList.id, "-updated_at");
    source = "last_read";
  }

  if (!rawBook) return null;

  const book = mapBook(rawBook);

  return {
    book,
    authorLine: formatAuthorLine(book.authors),
    source,
    finishedThisYear: finishedList?.count ?? null,
    profileUrl: lookup.url ?? `https://fable.co/${username}`,
  };
}
