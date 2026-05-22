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
      <Marquee
        alt
        items={[
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
