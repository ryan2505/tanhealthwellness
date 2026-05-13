import type { Metadata } from "next";
import { inter, playfair } from "@/lib/fonts";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Tan Health & Wellness | World-Class Pain Management & Rehabilitation",
    template: "%s | Tan Health & Wellness",
  },
  description:
    "Expert pain management, medication therapy, and wellness services in Estero, FL. Led by Dr. Jovanie Serge Keusseu Tankeu, MD — Fellowship-trained in Pain Management, serving 400+ patients near Fort Myers.",
  keywords: [
    "pain management Estero FL",
    "pain management Fort Myers",
    "Dr. Jovanie Tankeu",
    "Tan Health Wellness",
    "chronic pain Fort Myers FL",
    "acute pain treatment",
    "workers compensation doctor Fort Myers",
    "car accident doctor Fort Myers",
    "slip and fall doctor Florida",
    "medication therapy",
    "pain management fellowship",
    "Estero pain clinic",
    "Fort Myers pain clinic",
  ],
  authors: [{ name: "Tan Health & Wellness" }],
  creator: "Tan Health & Wellness",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tanhealthwellness.com",
    siteName: "Tan Health & Wellness",
    title: "Tan Health & Wellness | World-Class Pain Management & Rehabilitation",
    description:
      "Expert pain management, spine care, neurology, and rehabilitation services. Led by Dr. Tankeu.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Tan Health & Wellness" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tan Health & Wellness | World-Class Medical Care",
    description: "Expert pain management, spine care, neurology, and rehabilitation.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://tanhealthwellness.com"),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://tanhealthwellness.com/#clinic",
      name: "Tan Health & Wellness",
      url: "https://tanhealthwellness.com",
      telephone: "+17572920515",
      email: "tanhealthmed@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "22904 Lyden Drive, Suite 102",
        addressLocality: "Estero",
        addressRegion: "FL",
        postalCode: "33928",
        addressCountry: "US",
      },
      openingHours: ["Mo 14:00-17:00", "Th 14:00-17:00", "Sa 13:00-16:00"],
      medicalSpecialty: "Pain Management",
      availableService: [
        { "@type": "MedicalTherapy", name: "Pain Management" },
        { "@type": "MedicalTherapy", name: "Medication Therapy Assistance" },
        { "@type": "MedicalTherapy", name: "Wellness Therapy" },
        { "@type": "MedicalTherapy", name: "Workers Compensation Care" },
        { "@type": "MedicalTherapy", name: "Car Accident Injury Treatment" },
      ],
    },
    {
      "@type": "Physician",
      "@id": "https://tanhealthwellness.com/#physician",
      name: "Dr. Jovanie Serge Keusseu Tankeu",
      jobTitle: "Medical Director & Pain Management Specialist",
      worksFor: { "@id": "https://tanhealthwellness.com/#clinic" },
      hasCredential: [
        { "@type": "EducationalOccupationalCredential", credentialCategory: "Medical Doctorate (MD)" },
        { "@type": "EducationalOccupationalCredential", credentialCategory: "Fellowship in Pain Management" },
      ],
      telephone: "+17572920515",
      email: "tanhealthmed@gmail.com",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
