"use client";

import Script from "next/script";

export default function Analytics() {
  return (
    <>
      {/* ✅ Google Analytics script */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ZWML9091ZK');
        `}
      </Script>
    </>
  );
}
