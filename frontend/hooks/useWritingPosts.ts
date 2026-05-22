"use client";

import { useEffect, useState } from "react";
import { fetchWritingPosts, type WritingPost } from "@/lib/writing";

type Status = "loading" | "ready" | "error";

let cachedPosts: WritingPost[] | null = null;
let inflight: Promise<WritingPost[]> | null = null;

function loadWritingPosts(): Promise<WritingPost[]> {
  if (cachedPosts) return Promise.resolve(cachedPosts);
  if (!inflight) {
    inflight = fetchWritingPosts({ cacheBust: true })
      .then((data) => {
        cachedPosts = data;
        return data;
      })
      .finally(() => {
        inflight = null;
      });
  }
  return inflight;
}

export function useWritingPosts() {
  const [posts, setPosts] = useState<WritingPost[]>([]);
  const [status, setStatus] = useState<Status>("loading");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    loadWritingPosts()
      .then((data) => {
        if (cancelled) return;
        setPosts(data);
        setStatus("ready");
        setError(null);
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        setPosts([]);
        setStatus("error");
        setError(
          err instanceof Error ? err.message : "Failed to load writing posts",
        );
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { posts, postCount: posts.length, status, error };
}
