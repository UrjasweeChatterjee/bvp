import TopBar from "../components/TopBar";
import TricolorStrip from "../components/TricolorStrip";
import BrandingHeader from "../components/BrandingHeader";
import Navbar from "../components/Navbar";
import AnnouncementMarquee from "../components/AnnouncementMarquee";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import QuickLinks from "../components/QuickLinks";
import NewsNoticesTabs from "../components/NewsNoticesTabs";
import LeadershipSection from "../components/LeadershipSection";
import EliteMembersSection from "../components/EliteMembersSection";
import VideoSection from "../components/VideoSection";
import EventsCarousel from "../components/EventsCarousel";
import ImportantLinks from "../components/ImportantLinks";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import { galleryImages, heroSlides } from "../data/mockData";

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

        <section id="about" className="py-12 sm:py-16 bg-white">
          <Container>
            <Carousel slides={heroSlides} />
          </Container>
        </section>

        <QuickLinks />
        <NewsNoticesTabs />
        <LeadershipSection />
        <EliteMembersSection />
        <VideoSection />
        <EventsCarousel />

        <section id="gallery" className="py-16 sm:py-20 bg-white border-t border-ink-100">
          <Container>
            <SectionHeading
              eyebrow="Photo Gallery"
              title="Glimpses from the field"
              description="A visual record of camps, drives, workshops and citizen engagements."
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {galleryImages.map((src, i) => (
                <a
                  key={src}
                  href="#"
                  className="group relative aspect-square overflow-hidden rounded-lg ring-1 ring-ink-100 bg-ink-100"
                  aria-label={`Open photo ${i + 1}`}
                >
                  <img
                    src={src}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="absolute inset-0 bg-ink-900/0 group-hover:bg-ink-900/20 transition-colors" />
                </a>
              ))}
            </div>
            <div className="mt-6 text-center">
              <a
                href="#"
                className="inline-flex items-center gap-1.5 rounded-md bg-ink-50 ring-1 ring-ink-100 px-4 py-2 text-sm font-semibold text-ink-800 hover:bg-brand-50 hover:ring-brand-300 hover:text-brand-700 transition-colors"
              >
                View full gallery
              </a>
            </div>
          </Container>
        </section>

        <ImportantLinks />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
