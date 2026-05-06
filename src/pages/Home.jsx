import TopBar from "../components/TopBar";
import TricolorStrip from "../components/TricolorStrip";
import BrandingHeader from "../components/BrandingHeader";
import Navbar from "../components/Navbar";
import AnnouncementMarquee from "../components/AnnouncementMarquee";
import Hero from "../components/Hero";
import AboutBusinessNetwork from "../components/AboutBusinessNetwork";
import WhatWeDo from "../components/WhatWeDo";
import PlatformStats from "../components/PlatformStats";
import BenefitsSection from "../components/BenefitsSection";
import LeadershipSection from "../components/LeadershipSection";
import EliteMembersSection from "../components/EliteMembersSection";
import MembershipInclusions from "../components/MembershipInclusions";
import VideoSection from "../components/VideoSection";
import HowToJoin from "../components/HowToJoin";
import NetworkingGallery from "../components/NetworkingGallery";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="sticky top-0 z-40 shadow-sm">
        <TopBar />
        <BrandingHeader />
        <TricolorStrip />
        <Navbar />
      </header>

      <main id="main-content" className="flex-1">
        <Hero />
        <AnnouncementMarquee />
        <AboutBusinessNetwork />
        <WhatWeDo />
        <PlatformStats />
        <BenefitsSection />
        <LeadershipSection />
        <EliteMembersSection />
        <MembershipInclusions />
        {/* <VideoSection /> */}
        <HowToJoin />
        <NetworkingGallery />
        <ContactSection />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
