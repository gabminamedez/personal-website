import { SUBSTACK_HOST } from "@/consts/substack";
import { fetchSubstackPostCount } from "@/lib/substack";

/** Build-time Substack archive count (server-only — not for client import). */
export async function loadSubstackPostCount(): Promise<number> {
  try {
    return await fetchSubstackPostCount(SUBSTACK_HOST);
  } catch {
    return 0;
  }
}
