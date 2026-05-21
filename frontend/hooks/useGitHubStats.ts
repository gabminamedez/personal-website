"use client";

import {
  fetchGitHubStats,
  fetchProjectsShippedRest,
  type GitHubStats,
} from "@/lib/github";
import { useEffect, useState } from "react";

type Status = "loading" | "ready" | "error";

export function useGitHubStats(login: string) {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    let cancelled = false;
    const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN?.trim();

    async function load() {
      setStatus("loading");
      try {
        const data = await fetchGitHubStats(login, token);
        if (!cancelled) {
          setStats(data);
          setStatus("ready");
        }
      } catch {
        try {
          const projectsShipped = await fetchProjectsShippedRest(login);
          if (!cancelled) {
            setStats({ projectsShipped, totalCommits: null });
            setStatus("ready");
          }
        } catch {
          if (!cancelled) setStatus("error");
        }
      }
    }

    void load();
    return () => {
      cancelled = true;
    };
  }, [login]);

  return {
    projectsShipped: stats?.projectsShipped,
    totalCommits: stats?.totalCommits,
    ready: status === "ready",
    loading: status === "loading",
    error: status === "error",
  };
}
