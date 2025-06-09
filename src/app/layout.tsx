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
  title: "Accelerate AI - AI Automation That Pays For Itself",
  description: "We partner with businesses to automate operations and optimize systems. You only pay from the savings we create together.",
  openGraph: {
    title: "Accelerate AI - AI Automation That Pays For Itself",
    description: "We partner with businesses to automate operations and optimize systems. You only pay from the savings we create together.",
    url: "https://www.accelerateai.ai",
    siteName: "Accelerate AI",
    images: [
      {
        url: "https://www.accelerateai.ai/og-image.jpg", // You'll need to create this image
        width: 1200,
        height: 630,
        alt: "Accelerate AI - AI Automation Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accelerate AI - AI Automation That Pays For Itself",
    description: "We partner with businesses to automate operations and optimize systems. You only pay from the savings we create together.",
    images: ["https://www.accelerateai.ai/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
