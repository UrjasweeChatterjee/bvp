import Container from "./Container";
import SectionHeading from "./SectionHeading";
import VideoCard from "./VideoCard";
import { videos } from "../data/mockData";

export default function VideoSection() {
  return (
    <section id="videos" className="py-16 sm:py-20 bg-white">
      <Container>
        <SectionHeading
          eyebrow="Watch & Learn"
          title="Stories of impact, in their own words"
          description="Short films and updates from the communities we serve."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v) => (
            <VideoCard key={v.id} {...v} />
          ))}
        </div>
      </Container>
    </section>
  );
}
