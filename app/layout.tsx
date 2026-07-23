import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host?.includes("localhost") ? "http" : "https");
  const baseUrl = host ? `${protocol}://${host}` : "https://northstar-ai.example";

  return {
    title: "Northstar AI | Practical AI Strategy for Growing Businesses",
    description:
      "Find your highest-ROI AI opportunity in a complimentary 30-minute strategy session and receive a personalised AI Opportunity Map.",
    openGraph: {
      title: "Find your highest-ROI AI use case in 30 minutes",
      description:
        "Book a complimentary strategy call and receive your personalised one-page AI Opportunity Map.",
      type: "website",
      images: [
        {
          url: `${baseUrl}/og.png`,
          width: 1792,
          height: 896,
          alt: "Northstar AI — Find your highest-ROI AI use case in 30 minutes",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Find your highest-ROI AI use case in 30 minutes",
      description:
        "A complimentary strategy session and personalised AI Opportunity Map for your business.",
      images: [`${baseUrl}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.variable}>{children}</body>
    </html>
  );
}
