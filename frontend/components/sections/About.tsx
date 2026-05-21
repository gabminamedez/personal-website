import { loadSubstackPostCount } from "@/utils/loadSubstackPostCount";
import { AboutSection } from "@/components/utils/AboutSection";

export async function About() {
  const postCount = await loadSubstackPostCount();
  return <AboutSection postCount={postCount} />;
}
