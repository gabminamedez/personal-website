"use client";

import { LETTERBOXD_USERNAME } from "@/consts/letterboxd";
import {
  fetchLetterboxdLastFilm,
  type LetterboxdDisplay,
} from "@/lib/letterboxd";
import { useCallback, useEffect, useState } from "react";

export type LetterboxdPhase = "idle" | "loading" | "ready" | "empty" | "error";

const POLL_MS = 5 * 60_000;

export function useLetterboxdLastFilm() {
  const [phase, setPhase] = useState<LetterboxdPhase>(
    LETTERBOXD_USERNAME ? "loading" : "idle",
  );
  const [display, setDisplay] = useState<LetterboxdDisplay | null>(null);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    if (!LETTERBOXD_USERNAME) {
      setPhase("idle");
      setDisplay(null);
      setError(null);
      return;
    }

    try {
      const data = await fetchLetterboxdLastFilm(LETTERBOXD_USERNAME);
      setDisplay(data);
      setPhase(data ? "ready" : "empty");
      setError(null);
    } catch (err: unknown) {
      setDisplay(null);
      setPhase("error");
      setError(
        err instanceof Error ? err.message : "Failed to load Letterboxd",
      );
    }
  }, []);

  useEffect(() => {
    load();
    if (!LETTERBOXD_USERNAME) return;
    const id = window.setInterval(load, POLL_MS);
    return () => window.clearInterval(id);
  }, [load]);

  return { username: LETTERBOXD_USERNAME, phase, display, error };
}
