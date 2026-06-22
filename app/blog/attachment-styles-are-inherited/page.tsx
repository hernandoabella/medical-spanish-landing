import Link from "next/link";
import Image from "next/image";

const article = {
  category: "Attachment Theory · Developmental Psychology · Parenting",
  title: "Attachment Styles Are Inherited",
  subtitle:
    "How your childhood relationships shape your parenting",
  author: "M. Eliza Rowen",
  tag: "Breaking Generational Trauma",
  readTime: "13 min read",
  date: "2026-06-14",
};

const references = [
  "Ainsworth, M. D. S., et al. (1978). Patterns of attachment. Erlbaum.",
  "Bowlby, J. (1969). Attachment and loss: Vol. 1. Attachment. Basic Books.",
  "Bowlby, J. (1988). A secure base. Basic Books.",
  "Main, M., & Hesse, E. (1990). Parents' unresolved traumatic experiences are related to infant disorganized attachment status. In Attachment in the preschool years. University of Chicago Press.",
  "Main, M., Kaplan, N., & Cassidy, J. (1985). Security in infancy, childhood, and adulthood. Monographs of the Society for Research in Child Development, 50(1–2), 66–104.",
  "Siegel, D. J., & Hartzell, M. (2003). Parenting from the inside out. Tarcher/Penguin.",
  "Sroufe, L. A., et al. (2005). The development of the person. Guilford Press.",
  "van der Kolk, B. (2014). The body keeps the score. Viking.",
];

export default function AttachmentStylesArticle() {
  return (
    <>
      <div className="min-h-screen bg-[#FDFAF5]">
        <div className="sticky top-16 z-40 bg-[#FDFAF5]/95 backdrop-blur-sm border-b border-[#E5E0D4]">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-sm text-[#5A5347] hover:text-[#9B7A4D] transition-colors group"
            >
              <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to all articles
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/blog/breaking-generational-trauma/attachment-styles-are-inherited.jpg"
              alt="Parent and child connection - attachment styles"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1C1A14]/80 to-[#1C1A14]/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FDFAF5] via-transparent to-transparent" />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 pt-32 pb-24 md:pt-40 md:pb-32">
            <div className="mb-6">
              <span className="inline-block text-xs font-semibold tracking-[0.12em] uppercase text-[#9B7A4D] bg-white/10 backdrop-blur px-3 py-1 rounded-full">
                {article.category}
              </span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight mb-6">
              {article.title}
            </h1>
            
            <p className="font-serif italic text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-2xl">
              {article.subtitle}
            </p>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
              <span className="font-medium text-white">By {article.author}</span>
              <span className="w-1 h-1 rounded-full bg-white/50" />
              <span>{article.tag}</span>
              <span className="w-1 h-1 rounded-full bg-white/50" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>

        <main className="max-w-3xl mx-auto px-4 py-8 md:py-12">
          <div className="space-y-6 text-lg text-[#2A2720] leading-relaxed">
            <p>
              Have you ever wondered why some parenting situations affect you so deeply? Why your child&apos;s neediness feels overwhelming, why their independence feels like rejection, why conflict leaves you anxious for hours, or why emotional closeness sometimes feels uncomfortable?
            </p>
            <p>
              The answer may lie in your attachment style. Attachment theory is one of the most influential frameworks in developmental psychology, and decades of research suggest that attachment patterns are often passed from one generation to the next.
            </p>
            <p>
              The encouraging news? They can also be changed.
            </p>
          </div>

          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Section 1</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                What Is Attachment?
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                Attachment refers to the emotional bond that develops between a child and their primary caregivers. This bond becomes the foundation for how children understand safety, trust, love, emotional expression, and relationships.
              </p>
              <p>
                Attachment is not determined by whether parents love their children. It is shaped by how consistently children experience emotional availability, responsiveness, and connection. Over time, children develop internal expectations about relationships that psychologists call internal working models. These models often continue influencing relationships throughout adulthood.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Section 2</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                The Four Attachment Styles
              </h2>
            </div>
          </div>

          <div className="my-8 space-y-6">
            {[
              {
                title: "Secure Attachment",
                items: [
                  "My feelings matter",
                  "People can be trusted",
                  "Relationships are safe",
                  "I am worthy of love",
                ],
                desc: "As adults, securely attached individuals tend to be emotionally available, resilient, and comfortable with both intimacy and independence.",
                color: "border-[#6B9E7A] bg-[#F0F7F2]"
              },
              {
                title: "Anxious Attachment",
                items: [
                  "Love is unpredictable",
                  "I must work hard to maintain connection",
                  "Rejection could happen at any moment",
                ],
                desc: "As adults, they may become overly sensitive to signs of distance or conflict.",
                color: "border-[#C47A6B] bg-[#FDF2EE]"
              },
              {
                title: "Avoidant Attachment",
                items: [
                  "My needs are a burden",
                  "Vulnerability is risky",
                  "I must rely on myself",
                ],
                desc: "As adults, they may struggle with emotional intimacy and prefer independence over connection.",
                color: "border-[#7A8BA8] bg-[#EEF2F8]"
              },
              {
                title: "Disorganized Attachment",
                items: [],
                desc: "When caregivers are simultaneously a source of comfort and fear, children may develop disorganized attachment. This often creates confusion around relationships, emotional regulation, and trust.",
                color: "border-[#9B7A7A] bg-[#F8F0F0]"
              },
            ].map((style, i) => (
              <div key={i} className={`border-l-4 ${style.color} rounded-r-lg p-5`}>
                <h3 className="font-serif text-lg font-semibold text-[#1C1A14] mb-2">{style.title}</h3>
                {style.items.length > 0 && (
                  <ul className="space-y-1 mb-3">
                    {style.items.map((item, j) => (
                      <li key={j} className="text-sm text-[#2A2720] flex items-start gap-2">
                        <span className="text-[#9B7A4D] mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                <p className="text-sm md:text-base text-[#2A2720] leading-relaxed">{style.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Section 3</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                How Attachment Patterns Are Passed Down
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                One of the most remarkable findings in attachment research is that parents often pass their attachment patterns to their children. Not because they intend to. Because unresolved experiences shape behavior.
              </p>
              <p>
                A parent with anxious attachment may become overly involved or protective. A parent with avoidant attachment may unintentionally withdraw emotionally. A parent with unresolved trauma may struggle to provide consistent emotional safety. Children adapt to the environment they experience. Those adaptations become their attachment style.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Section 4</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                The Concept of Earned Security
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                The most hopeful finding in attachment science is something called earned secure attachment. Researchers discovered that adults can develop secure attachment even if they did not experience it in childhood.
              </p>
              <p>
                This happens through therapy, healthy relationships, self-awareness, emotional regulation work, and consistent corrective experiences. In other words, your childhood influences your attachment style, but it does not permanently determine it.
              </p>
            </div>
          </div>

          <div className="my-8 bg-[#F3EDE0] rounded-md p-6 md:p-8">
            <p className="font-serif italic text-lg md:text-xl text-[#3A3530] leading-relaxed">
              &ldquo;Your childhood influences your attachment style, but it does not permanently determine it.&rdquo;
            </p>
          </div>

          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Section 5</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                The Goal Is Not Perfection
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                Secure attachment does not mean perfect parenting. Research consistently shows that children benefit most from caregivers who repair mistakes, remain emotionally available, and return to connection after conflict.
              </p>
              <p className="font-serif italic text-[#5A5347]">
                The goal is not flawless attunement. The goal is reliable repair.
              </p>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-[#E5E0D4]">
            <h3 className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D] mb-6">References</h3>
            <div className="space-y-2">
              {references.map((ref, i) => (
                <p key={i} className="text-sm text-[#6A6055] leading-relaxed border-l-2 border-[#E5E0D4] pl-4">
                  {ref}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[#E5E0D4]">
            <p className="text-sm text-[#8A8070] italic mb-3">
              This article draws from <span className="font-medium not-italic">&quot;Breaking Generational Trauma&quot;</span> by M. Eliza Rowen.
            </p>
            <Link 
              href="https://www.amazon.com/-/es/Praxmed-Publishing-ebook/dp/B0FNX6ZC6C"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#0B8288] hover:text-[#096d72] transition-colors group"
            >
              <span>Available on Amazon</span>
              <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
