"use client";

import {
  About,
  Collab,
  Currents,
  Hero,
  Marquee,
  Nav,
  Portfolio,
  Substack,
  UselessLists,
} from "@/components/sections";

export default function Page() {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee
        items={[
          "DEVELOPER",
          "DESIGNER",
          "WRITER",
          "EXPEDITIONIST",
          "BASED IN MANILA · PH",
          "AVAILABLE FOR FREELANCE",
          "COLLAB CURIOUS",
          "BUILDING IN PUBLIC",
        ]}
      />
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
      <Collab />
    </>
  );
}
