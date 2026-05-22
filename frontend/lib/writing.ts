import { WRITING_CSV_URL } from "@/consts/writing";
import { parseCsvRows } from "@/lib/csv";

export type WritingPost = {
  title: string;
  type: string;
  bio: string;
  date: string;
  url: string;
};

const REQUIRED_HEADERS = ["title", "type", "bio", "url"] as const;

function rowToPost(headers: string[], cells: string[]): WritingPost | null {
  const map = new Map<string, string>();
  headers.forEach((header, idx) => {
    map.set(header.trim().toLowerCase(), (cells[idx] ?? "").trim());
  });

  const title = map.get("title") ?? "";
  if (!title) return null;

  const date = map.get("date") ?? map.get("published") ?? "";

  return {
    title,
    type: map.get("type") ?? "",
    bio: map.get("bio") ?? "",
    date,
    url: map.get("url") ?? "",
  };
}

export function formatWritingDate(iso: string): string {
  const match = iso.trim().match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!match) return iso;
  return `${match[1]} · ${match[2]} · ${match[3]}`;
}

function sortByDateDesc(posts: WritingPost[]): WritingPost[] {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}

export async function fetchWritingPosts(options?: {
  cacheBust?: boolean;
}): Promise<WritingPost[]> {
  const url = options?.cacheBust
    ? `${WRITING_CSV_URL}&_=${Date.now()}`
    : WRITING_CSV_URL;

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`Writing sheet HTTP ${res.status}`);
  }

  const text = await res.text();
  if (text.includes("<!DOCTYPE html>") || text.includes("accounts.google.com")) {
    throw new Error("Writing sheet CSV response was not valid data");
  }

  const rows = parseCsvRows(text);
  if (rows.length < 2) return [];

  const headers = rows[0].map((h) => h.trim().toLowerCase());
  const missing = REQUIRED_HEADERS.filter((h) => !headers.includes(h));
  if (missing.length > 0) {
    throw new Error(`Writing sheet missing columns: ${missing.join(", ")}`);
  }
  if (!headers.includes("date") && !headers.includes("published")) {
    throw new Error("Writing sheet missing columns: date");
  }

  return sortByDateDesc(
    rows
      .slice(1)
      .map((cells) => rowToPost(headers, cells))
      .filter((p): p is WritingPost => p !== null),
  );
}
