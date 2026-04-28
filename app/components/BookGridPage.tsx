import Image from "next/image";

type BookAction = {
  label: string;
  url: string;
};

type Book = {
  title: string;
  description: string;
  accent: string;
  image?: string;
  previewPdf?: string;
  actions: BookAction[];
};

type BookGridPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  books: Book[];
};

export default function BookGridPage({
  eyebrow,
  title,
  description,
  books,
}: BookGridPageProps) {
  return (
    <section className="bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_38%,#f5f9f8_100%)]">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#0B8288]">
              {eyebrow}
            </p>
          ) : null}
          {title ? (
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              {title}
            </h1>
          ) : null}
          {description ? (
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              {description}
            </p>
          ) : null}
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {books.map((book) => (
            <article
              key={book.title}
              className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_24px_60px_rgba(15,33,55,0.08)]"
            >
              <div
                className="flex min-h-[320px] items-center justify-center p-8"
                style={{
                  background: `radial-gradient(circle at top, ${book.accent}20 0%, #ffffff 68%)`,
                }}
              >
                {book.image ? (
                  <Image
                    src={book.image}
                    alt={book.title}
                    width={260}
                    height={360}
                    className="h-auto max-h-[280px] w-auto object-contain"
                  />
                ) : (
                  <div className="rounded-[24px] border border-dashed border-slate-300 bg-white/70 px-8 py-14 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                      PDF Preview
                    </p>
                    <p className="mt-4 text-2xl font-bold leading-tight text-slate-900">
                      {book.title}
                    </p>
                  </div>
                )}
              </div>
              <div className="border-t border-slate-100 p-6">
                <h2 className="text-xl font-semibold text-slate-900">
                  {book.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {book.description}
                </p>

                {book.previewPdf ? (
                  <div className="mt-5 overflow-hidden rounded-[20px] border border-slate-200 bg-slate-50">
                    <div className="border-b border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                      Preview
                    </div>
                    <iframe
                      src={`${book.previewPdf}#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH`}
                      title={`Preview of ${book.title}`}
                      className="h-64 w-full bg-white"
                    />
                  </div>
                ) : null}

                <div className="mt-5 flex flex-wrap gap-3">
                  {book.actions.map((action) => (
                    <a
                      key={`${book.title}-${action.label}`}
                      href={action.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-full bg-[#0F2137] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0B8288]"
                    >
                      {action.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
