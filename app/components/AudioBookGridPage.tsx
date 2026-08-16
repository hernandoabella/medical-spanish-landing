import Image from "next/image";
import { FaHeadphones, FaClock, FaUser, FaMicrophone, FaCalendar } from "react-icons/fa";

type RetailerLink = {
  name: string;
  url: string;
  logo?: string;
};

type AudioBook = {
  title: string;
  description: string;
  accent: string;
  image: string;
  audioSrc: string;
  duration: string;
  narrator: string;
  author: string;
  publishedDate: string;
  retailers: RetailerLink[];
};

type AudioBookGridPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  audiobook: AudioBook;
};

export default function AudioBookGridPage({
  eyebrow,
  title,
  description,
  audiobook,
}: AudioBookGridPageProps) {
  return (
    <section className="bg-[linear-gradient(180deg,var(--surface-cream)_0%,#ffffff_34%,var(--surface-mist)_100%)]">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand-teal)]">
              {eyebrow}
            </p>
          ) : null}
          {title ? (
            <h1 className="text-4xl font-bold tracking-tight text-[var(--brand-navy)] md:text-5xl">
              {title}
            </h1>
          ) : null}
          {description ? (
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
              {description}
            </p>
          ) : null}
        </div>

        <div className="mt-12">
          <article
            className="overflow-hidden rounded-[28px] border border-[var(--border-soft)] bg-white shadow-[0_24px_60px_rgba(21,48,71,0.08)]"
          >
            <div
              className="relative aspect-[1774/887] w-full overflow-hidden"
              style={{
                background: `radial-gradient(circle at top, ${audiobook.accent}20 0%, #ffffff 68%)`,
              }}
            >
              <Image
                src={audiobook.image}
                alt={audiobook.title}
                fill
                sizes="(min-width: 768px) 1152px, 100vw"
                className="absolute inset-0 h-full w-full object-cover"
                priority
              />
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-10">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
                  <FaHeadphones className="h-8 w-8 text-[var(--brand-teal)]" />
                </div>
              </div>
            </div>

            <div className="border-t border-slate-100 p-8">
              <div className="mb-6 flex items-start justify-between gap-4">
                <h2 className="text-2xl font-bold text-[var(--brand-navy)]">
                  {audiobook.title}
                </h2>
                <span className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-teal)]/10 px-4 py-2 text-xs font-semibold text-[var(--brand-teal)]">
                  <FaClock className="h-3 w-3" />
                  {audiobook.duration}
                </span>
              </div>

              <div className="mb-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[var(--text-muted)]">
                <div className="flex items-center gap-2">
                  <FaUser className="h-3.5 w-3.5 text-[var(--brand-teal)]" />
                  <span>By {audiobook.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMicrophone className="h-3.5 w-3.5 text-[var(--brand-teal)]" />
                  <span>Narrated by {audiobook.narrator}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendar className="h-3.5 w-3.5 text-[var(--brand-teal)]" />
                  <span>Published: {audiobook.publishedDate}</span>
                </div>
              </div>

              <p className="mb-8 text-sm leading-6 text-[var(--text-muted)]">
                {audiobook.description}
              </p>

              {/* Audio Player */}
              <div className="mb-8 rounded-[20px] border border-slate-200 bg-slate-50 p-6">
                <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-[var(--brand-teal)]">
                  <span>Sample Chapter</span>
                </div>
                <audio
                  controls
                  className="w-full"
                  src={audiobook.audioSrc}
                  preload="none"
                >
                  Your browser does not support the audio player.
                </audio>
              </div>

              {/* Retailer Links */}
              <div className="border-t border-slate-100 pt-6">
                <p className="mb-4 text-sm font-semibold text-[var(--brand-navy)]">
                  Available at these retailers:
                </p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {audiobook.retailers.map((retailer) => (
                    <a
                      key={retailer.name}
                      href={retailer.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 rounded-lg border border-slate-200 px-5 py-3.5 text-sm font-medium text-slate-700 transition-all duration-200 hover:border-[#0B8288] hover:bg-[#0B8288]/5"
                    >
                      {retailer.logo ? (
                        <Image
                          src={retailer.logo}
                          alt={`${retailer.name} logo`}
                          width={36}
                          height={36}
                          className="object-contain grayscale group-hover:grayscale-0 transition-all duration-200"
                        />
                      ) : (
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-sm font-bold text-slate-600 group-hover:bg-slate-200">
                          {retailer.name.charAt(0)}
                        </span>
                      )}
                      <span className="group-hover:text-[#0B8288] transition-colors">
                        {retailer.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
