// src/app/layout.js
import Footer from "@/components/footer";
import "../app/globals.css";
import Navbar from "../components/navbar";
import Header from "@/components/header";
import Social from "@/components/social";

export const metadata = {
  title: "Innovative Media Institute",
  description: "ITMI Clone Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <Navbar/>
        {children}
        <Footer/>
        <Social/>
      </body>
    </html>
  );
}
