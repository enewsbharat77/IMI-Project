import Image from "next/image";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import TopBanner from "@/components/top-head-banner";
import WelcomeSection from "@/components/welcome";
import TestimonialSection from "@/components/testimonial";
import TopRecruiters from "@/components/Recruiters";
import GetYourCareerStarted from "@/components/carearsstarted";
import Footer from "@/components/footer";
import VideoTestimonials from "@/components/videotesti";
export default function Home() {
  return ( 
    <>
    <TopBanner/>
    <WelcomeSection/>
    <TestimonialSection/>
    <TopRecruiters/>
    <VideoTestimonials/>
    <GetYourCareerStarted/>
    </>
  );
}
