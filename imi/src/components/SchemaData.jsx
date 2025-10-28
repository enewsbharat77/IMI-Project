"use client";

import Script from "next/script";

export default function SchemaData() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Innovative Media Institute",
    alternateName: "IMI Bharat",
    url: "https://imibharat.com",
    logo: "https://enewsbharat.com/wp-content/uploads/2025/08/imi.png",
    sameAs: [
      "https://www.facebook.com/",
      "https://www.instagram.com/",
      "https://twitter.com/",
      "https://www.linkedin.com/",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Your Institute Address",
      addressLocality: "City Name",
      addressRegion: "State Name",
      postalCode: "PINCODE",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-XXXXXXXXXX",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: "English",
    },
  };

  return (
    <Script id="schema-data" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(schemaData)}
    </Script>
  );
}
