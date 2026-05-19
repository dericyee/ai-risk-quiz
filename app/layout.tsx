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

export const metadata: Metadata = {
  title: "Is Your Job Safe From AI? | Sigmaschool",
  description:
    "Take this 2-minute checklist to see how exposed your current work is to AI, and what skills can make you harder to replace.",
  icons: { icon: "/brand/favicon.png" },
  openGraph: {
    title: "Is Your Job Safe From AI?",
    description:
      "Find out how exposed your job is to AI disruption. A free 2-minute checklist by Sigmaschool.",
    siteName: "Sigmaschool",
    images: ["/brand/sigma-logo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#1a1f5e",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
