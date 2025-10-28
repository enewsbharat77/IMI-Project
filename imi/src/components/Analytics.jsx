"use client";

import Script from "next/script";

export default function Analytics() {
  return (
    <>
      {/* ✅ Load Google Tag Manager / Analytics AFTER page becomes interactive */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-ZWML9091ZK"
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ZWML9091ZK', {
            'anonymize_ip': true,
            'transport_type': 'beacon'
          });
        `}
      </Script>
    </>
  );
}
