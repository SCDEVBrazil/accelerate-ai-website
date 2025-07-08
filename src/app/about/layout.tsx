import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "About Accelerate AI - Technology Solutions Built on Partnership",
  description: "Learn about Accelerate AI's mission to make modern technology accessible through strategic AI consulting, performance-based automation, and professional web development.",
  keywords: [
    "AI consulting company",
    "performance-based AI implementation", 
    "technology partnership",
    "AI automation strategy",
    "web development agency",
    "business automation consulting",
    "AI roadmap development",
    "custom technology solutions"
  ],
  openGraph: {
    title: "About Accelerate AI - Technology Solutions Built on Partnership",
    description: "Learn about Accelerate AI's mission to make modern technology accessible through strategic AI consulting, performance-based automation, and professional web development.",
    url: "https://www.accelerateai.ai/about",
    type: "website",
    images: [
      {
        url: "https://www.accelerateai.ai/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Accelerate AI - Technology Partnership Approach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Accelerate AI - Technology Solutions Built on Partnership",
    description: "Learn about Accelerate AI's mission to make modern technology accessible through strategic AI consulting, performance-based automation, and professional web development.",
    images: ["https://www.accelerateai.ai/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.accelerateai.ai/about",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}