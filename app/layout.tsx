import type { Metadata } from "next";
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
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Bayworld Creatives" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bayworld Creatives | Crafting Dreams. Amplifying Brands.",
    description: "Creative branding, quality printing and digital solutions for businesses ready to stand out.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
