/** Fable profile slug from your profile URL, e.g. https://fable.co/your-slug-here */
export const FABLE_USERNAME =
  process.env.NEXT_PUBLIC_FABLE_USERNAME?.trim() ?? "";

export const FABLE_API_BASE = "https://api.fable.co/api" as const;
