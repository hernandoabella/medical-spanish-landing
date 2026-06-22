import Link from "next/link";
import Image from "next/image";

const article = {
  category: "Discipline · Child Development · Parenting",
  title: "Discipline Without Punishment",
  subtitle:
    "What research says about raising responsible children",
  author: "M. Eliza Rowen",
  tag: "Breaking Generational Trauma",
  readTime: "12 min read",
  date: "2026-06-16",
};

const references = [
  "Dreikurs, R., & Soltz, V. (1964). Children: The challenge. Duell, Sloan and Pearce.",
  "Ginott, H. G. (1965). Between parent and child. Macmillan.",
  "Kohn, A. (2006). Unconditional parenting. Atria Books.",
  "Porges, S. W. (2011). The polyvagal theory. W. W. Norton.",
  "Siegel, D. J., & Bryson, T. P. (2014). No-drama discipline. Bantam Books.",
  "Siegel, D. J., & Bryson, T. P. (2016). The whole-brain child. Bantam Books.",
];

export default function DisciplineArticle() {
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
              src="/blog/breaking-generational-trauma/discipline-with-punishment.jpg"
              alt="Parent guiding child with gentle discipline"
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
              When many people hear the word discipline, they think of punishment. Consequences. Time-outs. Yelling. Threats. Removing privileges.
            </p>
            <p>
              Yet the word discipline originally comes from the Latin word <em className="italic">disciplina</em>, meaning instruction or teaching. True discipline is not about making children suffer for mistakes. It is about helping them learn.
            </p>
          </div>

          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Section 1</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                Discipline and Punishment Are Not the Same
              </h2>
            </div>
          </div>

          <div className="my-8 grid md:grid-cols-2 gap-4">
            <div className="border border-[#C47A6B] rounded-lg p-5 bg-[#FDF2EE]">
              <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#C47A6B] mb-3">Punishment</p>
              <p className="text-sm text-[#2A2720] mb-3">Focuses on control. Goal: immediate compliance.</p>
              <ul className="space-y-1">
                {["How do I stop this behavior?", "How do I make my child obey?"].map((q, i) => (
                  <li key={i} className="text-xs text-[#6A6055] flex items-start gap-2">
                    <span>•</span>
                    {q}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-[#6B9E7A] rounded-lg p-5 bg-[#F0F7F2]">
              <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#6B9E7A] mb-3">Discipline</p>
              <p className="text-sm text-[#2A2720] mb-3">Focuses on learning. Goal: growth.</p>
              <ul className="space-y-1">
                {["What skill is missing?", "What lesson needs to be taught?", "How can I guide future behavior?"].map((q, i) => (
                  <li key={i} className="text-xs text-[#6A6055] flex items-start gap-2">
                    <span>•</span>
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Section 2</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                What Research Shows About Punishment
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                Research consistently finds that punishment may stop behavior temporarily, but often fails to teach long-term self-regulation. Children may learn to avoid getting caught, to fear consequences, or to hide mistakes.
              </p>
              <p>
                What punishment often does not teach: emotional regulation, problem-solving, empathy, or responsibility. These skills require guidance, modeling, and connection.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Section 3</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                Why Behavior Is Communication
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                Children&apos;s behavior often reflects underlying needs or developmental limitations. A child who hits may lack emotional regulation skills. A child who lies may fear punishment. A child who refuses may be seeking autonomy. A child who melts down may be overwhelmed.
              </p>
              <p>
                Understanding behavior does not mean excusing it. It means responding effectively.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Section 4</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                The Three Pillars of Effective Discipline
              </h2>
            </div>
          </div>

          <div className="my-8 space-y-6">
            {[
              {
                title: "1. Connection Before Correction",
                desc: "Children learn best when they feel safe. Connection calms the nervous system. A regulated child is far more capable of learning than a frightened one.",
              },
              {
                title: "2. Clear Boundaries",
                desc: "Gentle parenting does not mean permissive parenting. Children need limits. Boundaries communicate safety, predictability, and structure. The key is delivering boundaries calmly and consistently.",
              },
              {
                title: "3. Teaching Skills",
                desc: "Every recurring behavior points toward a skill that needs development: emotional regulation, frustration tolerance, problem-solving, communication, or impulse control. Effective discipline teaches these skills rather than simply punishing mistakes.",
              },
            ].map((pillar, i) => (
              <div key={i} className="border-l-4 border-[#9B7A4D] rounded-r-lg p-5 bg-[#F8F4EC]">
                <h3 className="font-serif text-lg font-semibold text-[#1C1A14] mb-2">{pillar.title}</h3>
                <p className="text-sm md:text-base text-[#2A2720] leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Section 5</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                Natural and Logical Consequences
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                Consequences are most effective when they relate directly to behavior. A natural consequence: a toy left outside gets damaged by rain. A logical consequence: a child misuses markers and temporarily loses access to them.
              </p>
              <p>
                Both teach responsibility without humiliation.
              </p>
            </div>
          </div>

          <div className="my-8 bg-[#F3EDE0] rounded-md p-6 md:p-8">
            <p className="font-serif italic text-lg md:text-xl text-[#3A3530] leading-relaxed">
              &ldquo;One of the most important parenting skills is learning to regulate yourself before attempting to regulate your child.&rdquo;
            </p>
          </div>

          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Section 6</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                Raising Responsible Humans
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                The goal of discipline is not creating obedient children. The goal is raising capable adults—adults who can manage emotions, respect boundaries, solve problems, accept responsibility, and build healthy relationships.
              </p>
              <p>
                Those outcomes are rarely achieved through fear. They are built through guidance, connection, consistency, and teaching.
              </p>
              <p className="font-serif italic text-[#5A5347]">
                Discipline without punishment is not a softer approach. It is a more effective one.
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
