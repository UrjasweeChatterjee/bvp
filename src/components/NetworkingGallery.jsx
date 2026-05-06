import Container from "./Container";
import SectionHeading from "./SectionHeading";
import { galleryImages } from "../data/mockData";

const captions = [
  "Monthly Meeting",
  "Networking Event",
  "Business Discussion",
  "Group Session",
  "Member Gathering",
  "Presentation",
];

export default function NetworkingGallery() {
  return (
    <section id="gallery" className="py-16 sm:py-20 bg-white border-t border-ink-100">
      <Container>
        <SectionHeading
          eyebrow="Networking Gallery"
          title="Glimpses from our chapters"
          description="A visual record of monthly meetings, presentations and the relationships our members have built."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4">
          {galleryImages.slice(0, 6).map((src, i) => (
            <a
              key={src}
              href="#"
              className="group relative aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-ink-100 bg-ink-100"
              aria-label={`Open photo: ${captions[i] ?? "networking"}`}
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/0 to-transparent" />
              <span className="absolute bottom-0 inset-x-0 p-3">
                <span className="text-white text-xs font-bold uppercase tracking-wider drop-shadow">
                  {captions[i] ?? `Photo ${i + 1}`}
                </span>
              </span>
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
  );
}
