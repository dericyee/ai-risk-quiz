import type { Metadata } from "next";
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
  title: "Is Your Job Safe From AI? | Sigma School",
  description:
    "Take this 2-minute checklist to see how exposed your current work is to AI, and what skills can help you stay valuable. Made for Malaysians.",
  openGraph: {
    title: "Is Your Job Safe From AI?",
    description:
      "Find out how exposed your job is to AI disruption. Free 2-minute checklist for Malaysians.",
    siteName: "Sigma School",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
