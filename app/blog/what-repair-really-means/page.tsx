import Link from "next/link";
import Image from "next/image";

const article = {
  category: "Repair · Attachment · Emotional Regulation",
  title: "What Repair Really Means",
  subtitle:
    "The parenting skill that matters more than perfection",
  author: "M. Eliza Rowen",
  tag: "Breaking Generational Trauma",
  readTime: "11 min read",
  date: "2026-06-15",
};

const references = [
  "Gottman, J. M., & Silver, N. (1999). The seven principles for making marriage work. Three Rivers Press.",
  "Main, M., & Hesse, E. (1990). Parents' unresolved traumatic experiences are related to infant disorganized attachment status. In Attachment in the preschool years. University of Chicago Press.",
  "Siegel, D. J., & Hartzell, M. (2003). Parenting from the inside out. Tarcher/Penguin.",
  "Tronick, E. (2007). The neurobehavioral and social-emotional development of infants and children. W. W. Norton.",
  "van der Kolk, B. (2014). The body keeps the score. Viking.",
];

export default function RepairArticle() {
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
              src="/blog/breaking-generational-trauma/what-repair-really-means.jpg"
              alt="Parent and child repairing connection"
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
              Many parents believe the goal is to never lose their patience. Never yell. Never make mistakes. Never hurt their child&apos;s feelings.
            </p>
            <p>
              But research suggests something surprising: children do not need perfect parents. They need parents who know how to repair.
            </p>
            <p>
              In fact, the ability to repair relationship ruptures may be one of the most important skills a parent can develop.
            </p>
          </div>

          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Section 1</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                What Is a Rupture?
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                A rupture occurs whenever connection between parent and child is disrupted. Examples include yelling, harsh criticism, emotional withdrawal, misunderstanding, dismissive responses, and losing patience.
              </p>
              <p>
                Ruptures happen in every family. No parent avoids them completely. The difference between healthy and unhealthy relationships is not the absence of rupture. It is the presence of repair.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Section 2</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                Why Repair Matters
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                Children learn about relationships through experience. Without repair, children may conclude that conflict is dangerous, mistakes destroy relationships, love disappears when problems occur, and emotional pain must be handled alone.
              </p>
              <p>
                Repair teaches the opposite lesson: relationships can recover, mistakes can be acknowledged, emotions can be discussed safely, and connection can return after conflict.
              </p>
            </div>
          </div>

          <div className="my-8 bg-[#F3EDE0] rounded-md p-6 md:p-8">
            <p className="font-serif italic text-lg md:text-xl text-[#3A3530] leading-relaxed">
              &ldquo;The difference between healthy and unhealthy relationships is not the absence of rupture. It is the presence of repair.&rdquo;
            </p>
          </div>

          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Section 3</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                What Repair Is Not
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                Many parents unintentionally confuse repair with other behaviors. Repair is not making excuses, blaming the child, pretending nothing happened, buying gifts after conflict, or forcing forgiveness.
              </p>
              <p>
                True repair requires accountability. It requires acknowledging the impact of your behavior.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Section 4</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                The Anatomy of a Genuine Repair
              </h2>
            </div>
          </div>

          <div className="my-8 space-y-6">
            {[
              {
                title: "1. Acknowledge What Happened",
                desc: "Be specific. 'I yelled when I was frustrated.' 'I spoke harshly.' 'I wasn't listening carefully.' Children need clarity.",
              },
              {
                title: "2. Take Responsibility",
                desc: "Avoid shifting blame. Instead of 'You made me angry,' try 'I felt angry, but I am responsible for how I responded.' This distinction is powerful.",
              },
              {
                title: "3. Validate the Child's Experience",
                desc: "Allow room for their feelings. 'That probably felt scary.' 'I imagine that hurt your feelings.' 'It makes sense that you're upset.' Validation helps restore emotional safety.",
              },
              {
                title: "4. Reconnect",
                desc: "The goal is rebuilding connection. This might involve a conversation, a hug, playing together, or spending focused time. Repair is not complete until connection is restored.",
              },
            ].map((step, i) => (
              <div key={i} className="border-l-4 border-[#9B7A4D] rounded-r-lg p-5 bg-[#F8F4EC]">
                <h3 className="font-serif text-lg font-semibold text-[#1C1A14] mb-2">{step.title}</h3>
                <p className="text-sm md:text-base text-[#2A2720] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Section 5</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                Why Repair Is Hard for Many Parents
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                For adults raised in homes where accountability was rare, repair can feel uncomfortable. Many parents grew up hearing &ldquo;Because I said so,&rdquo; &ldquo;Stop being sensitive,&rdquo; or &ldquo;You&apos;re overreacting.&rdquo; Apologies may have been viewed as weakness. Vulnerability may have felt unsafe.
              </p>
              <p>
                As a result, repair requires learning entirely new relational skills.
              </p>
            </div>
          </div>

          <div className="my-10 p-6 md:p-8 border border-[#D8C8A8] rounded-lg bg-[#F8F2E6]">
            <p className="font-serif italic text-lg md:text-xl text-[#3A3530] leading-relaxed">
              &ldquo;Children develop security when caregivers consistently return to connection after disruptions. Security is built through repair. Not perfection.&rdquo;
            </p>
          </div>

          <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed">
            <p>
              Every repair conversation teaches children something profound: people make mistakes, relationships experience conflict, but love remains. Connection returns. And difficult moments can become opportunities for growth.
            </p>
            <p className="font-serif italic text-[#5A5347]">
              That lesson has the power to change a family&apos;s emotional legacy for generations.
            </p>
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
