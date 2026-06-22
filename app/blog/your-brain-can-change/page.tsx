import Link from "next/link";
import Image from "next/image";

const article = {
  category: "Neuroplasticity · Neuroscience · Parenting",
  title: "Your Brain Can Change",
  subtitle:
    "The science of neuroplasticity for parents",
  author: "M. Eliza Rowen",
  tag: "Breaking Generational Trauma",
  readTime: "13 min read",
  date: "2026-06-13",
};

const references = [
  "Davidson, R. J., & McEwen, B. S. (2012). Social influences on neuroplasticity. Nature Neuroscience, 15(5), 689–695.",
  "Doidge, N. (2007). The brain that changes itself. Viking.",
  "Hebb, D. O. (1949). The organization of behavior. Wiley.",
  "Kim, P., et al. (2010). The plasticity of human maternal brain. Behavioral Neuroscience, 124(5), 695–700.",
  "Kolb, B., & Gibb, R. (2011). Brain plasticity and behaviour in the developing brain. Journal of the Canadian Academy of Child and Adolescent Psychiatry, 20(4), 265–276.",
  "Neff, K. D. (2011). Self-compassion. William Morrow.",
  "Siegel, D. J. (2012). The developing mind (2nd ed.). Guilford Press.",
  "van der Kolk, B. (2014). The body keeps the score. Viking.",
];

export default function NeuroplasticityArticle() {
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
              src="/blog/breaking-generational-trauma/neuroplasticy-for-parents.jpg"
              alt="Brain neuroplasticity concept"
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
              Many parents carry a quiet fear. What if I&apos;m too damaged? What if my childhood affected me more than I realize? What if these patterns are simply who I am?
            </p>
            <p>
              If you&apos;ve ever wondered whether it&apos;s possible to truly change the emotional habits, reactions, and relationship patterns you&apos;ve carried for years, modern neuroscience offers an encouraging answer: yes, your brain can change. In fact, your brain is changing right now.
            </p>
            <p>
              The scientific term for this ability is neuroplasticity, and it is one of the most important discoveries in psychology and neuroscience over the past several decades.
            </p>
          </div>

          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Section 1</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                The Old Myth: People Can&apos;t Change
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                For much of the twentieth century, scientists believed the adult brain was relatively fixed. The assumption was simple: childhood shapes the brain, the brain becomes hardwired, and adults are largely stuck with the patterns they developed early in life.
              </p>
              <p>
                Today, we know that assumption was wrong. Research has repeatedly demonstrated that the brain remains capable of change throughout life. New neural connections can form. Old pathways can weaken. Emotional responses can be updated. Relationship patterns can be reshaped.
              </p>
              <p>
                The brain is not a stone sculpture. It is a living, adaptable system.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Section 2</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                What Is Neuroplasticity?
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                Neuroplasticity refers to the brain&apos;s ability to reorganize itself in response to experience. Every thought, emotion, behavior, and interaction activates networks of neurons inside the brain. The more frequently a pathway is used, the stronger it becomes.
              </p>
            </div>
          </div>

          <div className="my-8 border-l-3 border-[#9B7A4D] pl-6 py-2">
            <blockquote className="font-serif italic text-xl text-[#3A3530] leading-relaxed">
              &ldquo;Neurons that fire together, wire together.&rdquo;
            </blockquote>
            <cite className="text-xs font-semibold tracking-[0.06em] uppercase text-[#9B7A4D] not-italic mt-2 block">
              Donald Hebb, 1949
            </cite>
          </div>

          <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed">
            <p>
              In practical terms, this means: every time you repeat a behavior, you strengthen the neural pathway that supports it. Every time you practice a new response, you begin building a different pathway. This process happens continuously throughout life. Your brain is always learning. The question is simply what it&apos;s learning.
            </p>
          </div>

          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Section 3</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                Why Old Parenting Patterns Feel Automatic
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                If you grew up in an environment filled with criticism, emotional neglect, unpredictability, or chronic stress, your nervous system adapted. Those adaptations helped you survive.
              </p>
              <p>
                Over time, these responses became deeply wired. The brain prefers efficiency. Once a pathway becomes familiar, the brain automatically chooses it because it requires less energy. This is why many parents find themselves reacting before they even realize what&apos;s happening.
              </p>
            </div>
          </div>

          <div className="my-8 bg-[#F3EDE0] rounded-md p-6 md:p-8">
            <p className="font-serif italic text-lg md:text-xl text-[#3A3530] leading-relaxed">
              &ldquo;The encouraging news is that defaults are not destiny.&rdquo;
            </p>
          </div>

          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Section 4</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                The Parenting Brain Is Especially Plastic
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                One of the most fascinating discoveries in neuroscience is that becoming a parent actually increases the brain&apos;s capacity for change. Researchers have found measurable changes in brain regions responsible for empathy, emotional awareness, social connection, threat detection, and caregiving behavior.
              </p>
              <p>
                In many ways, parenthood creates a unique opportunity for growth. The very challenges that expose old wounds also create opportunities to heal them. Every difficult parenting moment becomes an invitation to build new neural pathways.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Section 5</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                Why Awareness Alone Isn&apos;t Enough
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                Many parents have experienced this frustration: they understand their patterns. They know where those patterns came from. Yet they continue repeating them.
              </p>
              <p>
                Understanding a pattern is cognitive. Changing a pattern is neurological. You may fully understand why you become reactive when your child ignores you. But when the trigger appears, the old pathway still activates automatically.
              </p>
              <p>
                Awareness opens the door. Practice creates the transformation.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Section 6</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                Why Self-Compassion Accelerates Change
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                Many parents approach healing with self-criticism. They believe being hard on themselves will motivate growth. Neuroscience suggests the opposite.
              </p>
              <p>
                Harsh self-judgment activates the threat response. When the brain perceives threat, learning becomes more difficult. The nervous system shifts into protection mode. Self-compassion creates a different environment—it reduces stress, increases emotional safety, and keeps the brain open to learning and adaptation.
              </p>
            </div>
          </div>

          <div className="my-10 p-6 md:p-8 border border-[#D8C8A8] rounded-lg bg-[#F8F2E6]">
            <p className="font-serif italic text-lg md:text-xl text-[#3A3530] leading-relaxed">
              &ldquo;Small actions, repeated consistently, literally reshape the brain.&rdquo;
            </p>
          </div>

          <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed">
            <p>
              When you develop greater emotional regulation, your children experience a more regulated environment. When you practice healthier relationship patterns, your children learn healthier relationship patterns. When you build new pathways, you model change itself.
            </p>
            <p className="font-serif italic text-[#5A5347]">
              Every time you choose awareness over autopilot, regulation over reactivity, and connection over fear, your brain changes. And as your brain changes, so does your family.
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
