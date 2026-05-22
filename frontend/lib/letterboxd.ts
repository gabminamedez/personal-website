import { LETTERBOXD_RSS_BASE } from "@/consts/letterboxd";

export type LetterboxdFilm = {
  title: string;
  year: string;
  ratingLine: string;
  ratingScore: number | null;
  watchedDate: string;
  rewatch: boolean;
  posterUrl: string;
  url: string;
};

export type LetterboxdDisplay = {
  film: LetterboxdFilm;
  profileUrl: string;
  filmsThisYear: number | null;
};

function rssUrl(username: string): string {
  return `${LETTERBOXD_RSS_BASE}/${encodeURIComponent(username)}/rss/`;
}

async function fetchRssXml(username: string): Promise<string> {
  const res = await fetch(rssUrl(username), { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`Letterboxd RSS HTTP ${res.status}`);
  }
  return res.text();
}

function decodeHtml(text: string): string {
  return text
    .replace(/&#039;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function tag(xml: string, name: string): string {
  const re = new RegExp(`<letterboxd:${name}>([^<]*)</letterboxd:${name}>`, "i");
  return decodeHtml(xml.match(re)?.[1]?.trim() ?? "");
}

function formatRating(score: number): string {
  if (!Number.isFinite(score) || score <= 0) return "";
  const full = Math.floor(score);
  const half = score - full >= 0.25 && score - full < 0.75;
  const stars = "★".repeat(full) + (half ? "½" : "");
  return stars ? `— ${stars}` : "";
}

export function formatLetterboxdDate(iso: string): string {
  const match = iso.trim().match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!match) return iso;
  return `${match[1]} · ${match[2]} · ${match[3]}`;
}

function parseFirstItem(xml: string): string | null {
  const match = xml.match(/<item>([\s\S]*?)<\/item>/i);
  return match?.[1] ?? null;
}

function parseFilmItem(itemXml: string, username: string): LetterboxdFilm | null {
  const title = tag(itemXml, "filmTitle");
  if (!title) return null;

  const year = tag(itemXml, "filmYear");
  const watchedDate = tag(itemXml, "watchedDate");
  const rewatch = tag(itemXml, "rewatch").toLowerCase() === "yes";
  const ratingRaw = tag(itemXml, "memberRating");
  const ratingScore = ratingRaw ? Number.parseFloat(ratingRaw) : null;
  const ratingLine = ratingScore ? formatRating(ratingScore) : "";

  const linkMatch = itemXml.match(/<link>([^<]*)<\/link>/i);
  const url =
    linkMatch?.[1]?.trim() ||
    `${LETTERBOXD_RSS_BASE}/${encodeURIComponent(username)}/`;

  const posterMatch = itemXml.match(
    /<description>[\s\S]*?<img[^>]+src="([^"]+)"/i,
  );
  const posterUrl = posterMatch?.[1] ?? "";

  return {
    title,
    year,
    ratingLine,
    ratingScore,
    watchedDate,
    rewatch,
    posterUrl,
    url,
  };
}

function countFilmsThisYear(xml: string): number {
  const year = String(new Date().getFullYear());
  const re = new RegExp(
    `<letterboxd:watchedDate>${year}-\\d{2}-\\d{2}</letterboxd:watchedDate>`,
    "gi",
  );
  return (xml.match(re) ?? []).length;
}

export async function fetchLetterboxdLastFilm(
  username: string,
): Promise<LetterboxdDisplay | null> {
  const xml = await fetchRssXml(username);
  const itemXml = parseFirstItem(xml);
  if (!itemXml) return null;

  const film = parseFilmItem(itemXml, username);
  if (!film) return null;

  const filmsThisYear = countFilmsThisYear(xml);

  return {
    film,
    profileUrl: `${LETTERBOXD_RSS_BASE}/${encodeURIComponent(username)}/`,
    filmsThisYear: filmsThisYear > 0 ? filmsThisYear : null,
  };
}
