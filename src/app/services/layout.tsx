import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "AI Services - Consulting, Implementation & Web Development | Accelerate AI",
  description: "Choose your path: AI consulting & strategy, performance-based automation implementation, or professional web development. Tailored solutions for business growth.",
  keywords: [
    "AI consulting services",
    "performance-based AI implementation",
    "business automation solutions",
    "AI strategy consulting",
    "custom automation development",
    "web development services",
    "AI opportunity assessment",
    "workflow automation",
    "business process optimization",
    "AI roadmap development",
    "inventory management automation",
    "HR automation solutions"
  ],
  openGraph: {
    title: "AI Services - Consulting, Implementation & Web Development | Accelerate AI",
    description: "Choose your path: AI consulting & strategy, performance-based automation implementation, or professional web development. Tailored solutions for business growth.",
    url: "https://www.accelerateai.ai/services",
    type: "website",
    images: [
      {
        url: "https://www.accelerateai.ai/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Accelerate AI Services - AI Consulting, Implementation & Web Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Services - Consulting, Implementation & Web Development | Accelerate AI",
    description: "Choose your path: AI consulting & strategy, performance-based automation implementation, or professional web development. Tailored solutions for business growth.",
    images: ["https://www.accelerateai.ai/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.accelerateai.ai/services",
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}