import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contact Accelerate AI - Schedule Your Free Technology Consultation",
  description: "Get started with AI consulting, performance-based automation, or web development. Schedule a confidential consultation to explore how technology can transform your business.",
  keywords: [
    "AI consultation",
    "schedule AI consulting",
    "contact AI automation company",
    "business automation consultation",
    "AI strategy consultation",
    "web development consultation",
    "free technology assessment",
    "AI implementation consultation",
    "business process automation",
    "technology partnership"
  ],
  openGraph: {
    title: "Contact Accelerate AI - Schedule Your Free Technology Consultation",
    description: "Get started with AI consulting, performance-based automation, or web development. Schedule a confidential consultation to explore how technology can transform your business.",
    url: "https://www.accelerateai.ai/contact",
    type: "website",
    images: [
      {
        url: "https://www.accelerateai.ai/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Accelerate AI - Schedule Your Technology Consultation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Accelerate AI - Schedule Your Free Technology Consultation",
    description: "Get started with AI consulting, performance-based automation, or web development. Schedule a confidential consultation to explore how technology can transform your business.",
    images: ["https://www.accelerateai.ai/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.accelerateai.ai/contact",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}