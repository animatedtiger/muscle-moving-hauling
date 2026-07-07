import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muscle Moving & Hauling — Fast Local Movers in Bluffton & Charleston, SC",
  description:
    "Local moves, junk removal, packing, commercial moves, storage, and heavy labor across the Lowcountry — Bluffton, Hilton Head, and Charleston, SC. Free estimates, transparent hourly pricing, no problem attitude. Call (843) 505-4839.",
  keywords: [
    "movers Bluffton SC",
    "moving company Charleston SC",
    "junk removal Bluffton",
    "local movers Lowcountry",
    "packing services Hilton Head",
    "commercial movers Charleston",
    "Muscle Moving and Hauling",
  ],
  openGraph: {
    title: "Muscle Moving & Hauling — Moving? No Problem.",
    description:
      "Fast, no-nonsense movers serving 50 miles around Bluffton and Charleston, SC. Free estimates — call (843) 505-4839.",
    type: "website",
    siteName: "Muscle Moving & Hauling",
  },
};

export const viewport: Viewport = {
  themeColor: "#171a1c",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  // Pinch-zoom intentionally left enabled (no user-scalable=no) for accessibility.
};

// schema.org MovingCompany — locality only (no street address exists yet),
// dual-hub GeoCircle service area, the six confirmed services, no invented
// stats. Pattern adapted from Swanson-Cleaning's JSON-LD block.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: "Muscle Moving & Hauling",
  description:
    "Fast, no-nonsense moving and hauling company serving the Lowcountry and Charleston corridor. Local moves, packing, junk removal, commercial moves, storage, and general labor with transparent hourly pricing and free estimates.",
  telephone: "+1-843-505-4839",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bluffton",
    addressRegion: "SC",
    addressCountry: "US",
  },
  areaServed: [
    {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 32.2371,
        longitude: -80.8604,
        name: "Bluffton, SC",
      },
      geoRadius: "80467",
    },
    {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 32.7765,
        longitude: -79.9311,
        name: "Charleston, SC",
      },
      geoRadius: "80467",
    },
    "Bluffton, SC",
    "Hilton Head Island, SC",
    "Okatie, SC",
    "Hardeeville, SC",
    "Savannah, GA",
    "Charleston, SC",
    "Mount Pleasant, SC",
    "Summerville, SC",
    "North Charleston, SC",
  ],
  priceRange: "$$",
  serviceType: [
    "Local Moving",
    "Packing and Unpacking",
    "Junk Removal",
    "Commercial Moving",
    "Storage",
    "General Labor",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Barlow:ital,wght@0,400;0,500;0,600;0,700;1,600&family=Barlow+Condensed:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      {/* suppressHydrationWarning: browser extensions (e.g. unit converters)
          inject attributes into <body> before React hydrates, which would
          otherwise log a false-positive mismatch. Applies to this element's
          attributes only — child mismatches still warn. */}
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-asphalt text-white"
      >
        {children}
      </body>
    </html>
  );
}
