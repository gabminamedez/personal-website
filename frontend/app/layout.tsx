import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gabriel Minamedez — Software Engineer / Writer / Human",
  description:
    "Developer and designer creating things on the internet. Based in Manila, Philippines.",
  openGraph: {
    title: "Gabriel Minamedez — Software Engineer / Writer / Human",
    description:
      "Developer and designer creating things on the internet. Based in Manila, Philippines.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden bg-cream text-brand-blue antialiased">
        {children}
      </body>
    </html>
  );
}
