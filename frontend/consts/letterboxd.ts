/** Letterboxd username from https://letterboxd.com/{username}/ */
export const LETTERBOXD_USERNAME =
  process.env.NEXT_PUBLIC_LETTERBOXD_USERNAME?.trim() ?? "";

export const LETTERBOXD_RSS_BASE = "https://letterboxd.com" as const;
