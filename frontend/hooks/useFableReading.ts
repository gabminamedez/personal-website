"use client";

import { FABLE_USERNAME } from "@/consts/fable";
import type { FableReadingDisplay } from "@/lib/fable";
import { useCallback, useEffect, useState } from "react";

export type FableReadingPhase = "idle" | "loading" | "ready" | "empty" | "error";

const POLL_MS = 5 * 60_000;

export function useFableReading() {
  const [phase, setPhase] = useState<FableReadingPhase>(
    FABLE_USERNAME ? "loading" : "idle",
  );
  const [display, setDisplay] = useState<FableReadingDisplay | null>(null);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    if (!FABLE_USERNAME) {
      setPhase("idle");
      setDisplay(null);
      setError(null);
      return;
    }

    try {
      const res = await fetch("/api/fable/reading", { cache: "no-store" });
      const body = (await res.json()) as {
        data?: FableReadingDisplay | null;
        error?: string;
      };
      if (!res.ok) {
        throw new Error(body.error ?? `Fable HTTP ${res.status}`);
      }
      const data = body.data ?? null;
      setDisplay(data);
      setPhase(data ? "ready" : "empty");
      setError(null);
    } catch (err: unknown) {
      setDisplay(null);
      setPhase("error");
      setError(err instanceof Error ? err.message : "Failed to load Fable");
    }
  }, []);

  useEffect(() => {
    load();
    if (!FABLE_USERNAME) return;
    const id = window.setInterval(load, POLL_MS);
    return () => window.clearInterval(id);
  }, [load]);

  return {
    username: FABLE_USERNAME,
    phase,
    display,
    error,
    reload: load,
  };
}
