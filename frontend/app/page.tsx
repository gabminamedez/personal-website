import {
  About,
  Collaborate,
  Currents,
  Identity,
  Marquee,
  Navbar,
  PrimaryMarquee,
  Portfolio,
  Substack,
  UselessLists,
} from "@/components";

export default function Page() {
  return (
    <>
      <Navbar />
      <Identity />
      <PrimaryMarquee />
      <About />
      <Currents />
      <Portfolio />
      <Substack />
      <UselessLists />
      <Marquee
        alt
        items={[
          "FREELANCE",
          "COLLABORATIONS",
          "CREATIVE PROJECTS",
          "RANDOM EMAILS",
          "INTERESTING PROBLEMS",
          "INTERNET STRANGERS WELCOME",
        ]}
      />
      <Collaborate />
    </>
  );
}
