import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Senthil Royan | Lead Product Designer & AI Product Designer",
  description: "Senthil Royan is a Lead Product Designer with 17+ years of experience designing Enterprise Software, SaaS, Healthcare, FinTech, and AI-powered products. Available for remote opportunities.",
  keywords: ["Product Designer", "UX Designer", "UI Designer", "Lead Product Designer", "AI Product Design", "SaaS Design", "Healthcare UX", "FinTech Design", "Design Systems", "Bengaluru", "India", "Remote"],
  authors: [{ name: "Senthil Royan" }],
  creator: "Senthil Royan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://senthilroyan.vercel.app",
    siteName: "Senthil Royan Portfolio",
    title: "Senthil Royan | Lead Product Designer & AI Product Designer",
    description: "Lead Product Designer with 17+ years of experience. Designing Enterprise Software, SaaS, Healthcare, FinTech, and AI-powered products.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Senthil Royan | Lead Product Designer",
    description: "Lead Product Designer with 17+ years of experience in Enterprise Software, SaaS, Healthcare, and AI Products.",
    creator: "@senthilroyan",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
