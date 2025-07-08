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
  description: "Transform your business with AI automation and optimization. Performance-based pricing means you only pay from the measurable savings we create. Get started today.",
  keywords: [
    "AI automation",
    "business automation", 
    "artificial intelligence consulting",
    "process optimization",
    "performance-based AI",
    "AI implementation",
    "business efficiency",
    "automation consulting",
    "AI strategy",
    "workflow automation"
  ],
  authors: [{ name: "Accelerate AI Team" }],
  creator: "Accelerate AI",
  publisher: "Accelerate AI",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.accelerateai.ai",
    siteName: "Accelerate AI",
    title: "Accelerate AI - AI Automation That Pays For Itself",
    description: "Transform your business with AI automation and optimization. Performance-based pricing means you only pay from the measurable savings we create.",
    images: [
      {
        url: "https://www.accelerateai.ai/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Accelerate AI - Transform Your Business with AI Automation",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@accelerateai",
    creator: "@accelerateai", 
    title: "Accelerate AI - AI Automation That Pays For Itself",
    description: "Transform your business with AI automation and optimization. Performance-based pricing means you only pay from the measurable savings we create.",
    images: ["https://www.accelerateai.ai/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.accelerateai.ai",
  },
  category: "Technology",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  other: {
    "theme-color": "#000000",
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