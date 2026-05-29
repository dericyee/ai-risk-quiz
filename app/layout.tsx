import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Public canonical home for this tool. Override with NEXT_PUBLIC_SITE_URL
// in Vercel if you host it somewhere else.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://sigmaschool.co/ai-risk";

const TITLE = "Is Your Job Safe From AI? Free 2026 AI Job Risk Test";
const DESCRIPTION =
  "Take the free 2-minute AI Job Risk Test. Find out how much AI will change your job in 2026, discover your AI worker type, and get a 30-day plan to stay ahead. Built by Sigmaschool.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Sigmaschool",
  },
  description: DESCRIPTION,
  applicationName: "AI Job Risk Test",
  keywords: [
    "AI job risk",
    "will AI take my job",
    "is my job safe from AI",
    "AI job risk test",
    "AI career quiz",
    "AI and jobs 2026",
    "future of work",
    "AI skills",
    "jobs AI will replace",
    "reskill for AI",
    "AI-native developer",
    "Sigmaschool",
  ],
  authors: [{ name: "Sigmaschool", url: "https://sigmaschool.co" }],
  creator: "Sigmaschool",
  publisher: "Sigmaschool",
  alternates: {
    canonical: SITE_URL,
  },
  icons: { icon: "/brand/favicon.png", apple: "/brand/favicon.png" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Sigmaschool",
    locale: "en_US",
    images: [
      {
        url: "/brand/sigma-logo.png",
        width: 1884,
        height: 266,
        alt: "Sigmaschool — AI Job Risk Test",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/brand/sigma-logo.png"],
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
  category: "education",
};

export const viewport: Viewport = {
  themeColor: "#1a1f5e",
};

// Structured data so Google can show this as a quiz / web app in results.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "AI Job Risk Test",
  url: SITE_URL,
  applicationCategory: "EducationalApplication",
  operatingSystem: "Any (web browser)",
  description: DESCRIPTION,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  publisher: {
    "@type": "Organization",
    name: "Sigmaschool",
    url: "https://sigmaschool.co",
    logo: `${SITE_URL.replace(/\/ai-risk\/?$/, "")}/brand/sigma-logo.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
