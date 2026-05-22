import { PORTFOLIO_CSV_URL } from "@/consts/portfolio";
import { parseSheetRows } from "@/lib/csv";

export type PortfolioProject = {
  title: string;
  type: string;
  stack: string;
  bio: string;
  img: string;
  url: string;
};

const EXPECTED_HEADERS = [
  "title",
  "type",
  "stack",
  "bio",
  "img",
  "url",
] as const;

function rowToProject(
  headers: string[],
  cells: string[],
): PortfolioProject | null {
  const map = new Map<string, string>();
  headers.forEach((header, idx) => {
    map.set(header.trim().toLowerCase(), (cells[idx] ?? "").trim());
  });

  const title = map.get("title") ?? "";
  if (!title) return null;

  return {
    title,
    type: map.get("type") ?? "",
    stack: map.get("stack") ?? "",
    bio: map.get("bio") ?? "",
    img: map.get("img") ?? "",
    url: map.get("url") ?? "",
  };
}

export async function fetchPortfolioProjects(options?: {
  cacheBust?: boolean;
}): Promise<PortfolioProject[]> {
  const url = options?.cacheBust
    ? `${PORTFOLIO_CSV_URL}&_=${Date.now()}`
    : PORTFOLIO_CSV_URL;

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error(`Portfolio sheet HTTP ${res.status}`);
  }

  const text = await res.text();
  return parseSheetRows(text, EXPECTED_HEADERS, rowToProject);
}
