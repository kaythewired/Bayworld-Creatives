import type { Metadata } from "next";
import { PlayfulInteractions } from "./_components/PlayfulInteractions";
import { ScrollReveal } from "./_components/ScrollReveal";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bayworldcreatives.com"),
  title: {
    default: "Bayworld Creatives | Crafting Dreams. Amplifying Brands.",
    template: "%s | Bayworld Creatives",
  },
  description:
    "Lagos creative agency for branding, graphic design, printing, websites, social media and digital marketing.",
  openGraph: {
    title: "Bayworld Creatives | Crafting Dreams. Amplifying Brands.",
    description: "Creative branding, quality printing and digital solutions for businesses ready to stand out.",
    type: "website",
    images: [{ url: "/og-bayworld-2026.png", width: 1200, height: 630, alt: "Bayworld Creatives" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bayworld Creatives | Crafting Dreams. Amplifying Brands.",
    description: "Creative branding, quality printing and digital solutions for businesses ready to stand out.",
    images: ["/og-bayworld-2026.png"],
  },
  icons: {
    icon: [{ url: "/bayworld-transparent-favicon.png?v=4", type: "image/png", sizes: "512x512" }],
    shortcut: "/favicon.ico?v=4",
    apple: "/bayworld-transparent-favicon.png?v=4",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body><ScrollReveal /><PlayfulInteractions />{children}</body>
    </html>
  );
}
