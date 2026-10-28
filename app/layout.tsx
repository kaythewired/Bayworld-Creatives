import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bayworldcreatives.com"),
  title: {
    default: "Bayworld Creatives | Crafting Dreams. Amplifying Brands.",
    template: "%s | Bayworld Creatives",
  },
  description:
    "Lagos creative agency for branding, graphic design, printing, websites, social media and digital marketing.",
  applicationName: "Bayworld Creatives",
  keywords: [
    "creative agency Lagos",
    "branding agency Nigeria",
    "graphic design Lagos",
    "printing services Lagos",
    "website design Nigeria",
    "digital marketing Lagos",
    "Bayworld Creatives",
  ],
  authors: [{ name: "Bayworld Creatives", url: "https://www.bayworldcreatives.com" }],
  creator: "Bayworld Creatives",
  publisher: "Bayworld Creatives",
  category: "Creative agency",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "9KdL-irQc0iQovl2EGl7jEcmPLnlkywYBYhMiQnh53U",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Bayworld Creatives | Crafting Dreams. Amplifying Brands.",
    description: "Creative branding, quality printing and digital solutions for businesses ready to stand out.",
    type: "website",
    url: "/",
    siteName: "Bayworld Creatives",
    locale: "en_NG",
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
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0b4a16",
  colorScheme: "light dark",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Bayworld Creatives",
  alternateName: "Bayworld",
  url: "https://www.bayworldcreatives.com",
  logo: "https://www.bayworldcreatives.com/bayworld-transparent-favicon.png",
  image: "https://www.bayworldcreatives.com/og-bayworld-2026.png",
  description: "Lagos creative agency for branding, design, print production, websites and digital marketing.",
  areaServed: {
    "@type": "Country",
    name: "Nigeria",
  },
  telephone: "+2349064428166",
  email: "info@bayworldcreatives.com",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+2349064428166",
      email: "info@bayworldcreatives.com",
      contactType: "customer service",
      areaServed: "NG",
      availableLanguage: "en",
    },
    {
      "@type": "ContactPoint",
      telephone: "+2349066794843",
      contactType: "customer service",
      areaServed: "NG",
      availableLanguage: "en",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Creative services",
    itemListElement: [
      "Branding & Graphic Design",
      "Printing & Production",
      "Website Design & Development",
      "Social Media Management",
      "Digital Marketing & SEO",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        {children}
      </body>
    </html>
  );
}
