import "../app/globals.css";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Social from "@/components/social";
import ContactPopup from "@/components/contactpopup";
import Analytics from "@/components/Analytics";
import SchemaData from "@/components/SchemaData";

export const metadata = {
  title: "Innovative Media Institute | Journalism & Media Training in India",
  description:
    "Innovative Media Institute (IMI Bharat) is a premier journalism and media training institute in India offering diploma and certification courses in mass communication, journalism, and digital media.",
  keywords:
    "IMI Bharat, Innovative Media Institute, journalism institute, media training, mass communication courses, journalism college, digital media training, media institute in India",
  authors: [{ name: "Innovative Media Institute", url: "https://imibharat.com" }],
  metadataBase: new URL("https://imibharat.com"),
  alternates: {
    canonical: "https://imibharat.com",
  },
  robots: "index, follow",
  verification: {
    google: "ADD_YOUR_GOOGLE_VERIFICATION_CODE_HERE",
  },
  openGraph: {
    title: "Innovative Media Institute | Journalism & Media Training",
    description:
      "Join Innovative Media Institute (IMI Bharat) — India's leading institute for journalism, mass communication and digital media education.",
    url: "https://imibharat.com",
    siteName: "Innovative Media Institute",
    images: [
      {
        url: "https://enewsbharat.com/wp-content/uploads/2025/08/imi.png",
        width: 1200,
        height: 630,
        alt: "Innovative Media Institute Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Innovative Media Institute | Journalism & Media Training",
    description:
      "Learn journalism, mass communication, and digital media at Innovative Media Institute (IMI Bharat).",
    images: ["https://enewsbharat.com/wp-content/uploads/2025/08/imi.png"],
  },
  icons: {
    icon: "/favicon.ico.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ContactPopup />
        <Header />
        <Navbar />
        {children}
        <Footer />
        <Social />
        <Analytics />
        <SchemaData />
      </body>
    </html>
  );
}
