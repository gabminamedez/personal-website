"use client";

import { useEffect, useState } from "react";
import {
  fetchPortfolioProjects,
  type PortfolioProject,
} from "@/lib/portfolio";

type Status = "loading" | "ready" | "error";

export function usePortfolioProjects() {
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [status, setStatus] = useState<Status>("loading");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetchPortfolioProjects({ cacheBust: true })
      .then((data) => {
        if (cancelled) return;
        setProjects(data);
        setStatus("ready");
        setError(null);
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        setProjects([]);
        setStatus("error");
        setError(err instanceof Error ? err.message : "Failed to load portfolio");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { projects, status, error };
}
