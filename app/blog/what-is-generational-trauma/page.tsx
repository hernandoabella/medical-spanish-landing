import Link from "next/link";
import Image from "next/image";

const article = {
  category: "Generational Trauma · Neuroscience · Parenting",
  title: "What Is Generational Trauma?",
  subtitle:
    "Understanding the hidden patterns passed through families",
  author: "M. Eliza Rowen",
  tag: "Breaking Generational Trauma",
  readTime: "15 min read",
  date: "2026-06-11",
};

const references = [
  "Bowlby, J. (1969). Attachment and loss: Vol. 1. Attachment. Basic Books.",
  "Bremner, J. D. (2006). Traumatic stress: Effects on the brain. Dialogues in Clinical Neuroscience, 8(4), 445–461.",
  "Felitti, V. J., Anda, R. F., Nordenberg, D., et al. (1998). Relationship of childhood abuse and household dysfunction to many of the leading causes of death in adults. American Journal of Preventive Medicine, 14(4), 245–258.",
  "Main, M., & Hesse, E. (1990). Parents' unresolved traumatic experiences are related to infant disorganized attachment status. In M. T. Greenberg, D. Cicchetti, & E. M. Cummings (Eds.), Attachment in the preschool years (pp. 161–182). University of Chicago Press.",
  "Meaney, M. J. (2001). Maternal care, gene expression, and the transmission of individual differences in stress reactivity across generations. Annual Review of Neuroscience, 24, 1161–1192.",
  "Porges, S. W. (2011). The polyvagal theory. W. W. Norton.",
  "Siegel, D. J. (2012). The developing mind (2nd ed.). Guilford Press.",
  "van der Kolk, B. (2014). The body keeps the score. Viking.",
  "Yehuda, R., & Lehrner, A. (2018). Intergenerational transmission of trauma effects: Putative role of epigenetic mechanisms. World Psychiatry, 17(3), 243–257.",
];

export default function GenerationalTraumaArticle() {
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
              src="/blog/breaking-generational-trauma/what-is-generational-trauma.jpg"
              alt="Generational trauma concept - family patterns across generations"
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
              Have you ever caught yourself reacting to your child in a way that felt strangely familiar?
            </p>
            <p>
              Maybe you heard your own parent&apos;s words coming out of your mouth. Maybe you found yourself yelling, shutting down emotionally, or responding with a level of frustration that felt larger than the situation deserved.
            </p>
            <p>
              Many parents experience these moments and wonder:
            </p>
          </div>

          <div className="my-8 p-6 md:p-8 border border-[#D8C8A8] rounded-lg bg-[#F8F2E6]">
            <p className="font-serif italic text-lg md:text-xl text-[#3A3530] leading-relaxed text-center">
              &ldquo;Why do I keep repeating patterns I promised myself I would never repeat?&rdquo;
            </p>
          </div>

          <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed">
            <p>
              The answer may lie in something psychologists call generational trauma.
            </p>
            <p>
              Far from being an excuse for harmful behavior, generational trauma is a well-documented phenomenon that helps explain how emotional wounds, stress responses, and relationship patterns can be passed from one generation to the next.
            </p>
            <p>
              Understanding how this process works is often the first step toward breaking the cycle.
            </p>
          </div>

          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Section 1</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                What Is Generational Trauma?
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                Generational trauma—also known as intergenerational or transgenerational trauma—refers to the transmission of the emotional, psychological, and physiological effects of trauma across generations.
              </p>
              <p>
                This doesn&apos;t mean children automatically inherit the exact experiences of their parents or grandparents. Instead, they may inherit the effects those experiences had on the nervous system, emotional regulation, attachment patterns, and family dynamics.
              </p>
              <p>
                A parent who grew up in a home marked by fear, criticism, emotional neglect, instability, or unresolved trauma may unknowingly pass aspects of those experiences to their children.
              </p>
              <p>
                The transmission often happens without conscious awareness. Most parents genuinely want something different for their children. Yet under stress, old patterns frequently emerge because they were learned long before conscious choices were possible.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Section 2</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                The Three Main Pathways of Transmission
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p className="font-semibold text-[#1C1A14]">1. Learned Behaviors and Modeled Responses</p>
              <p>
                Children learn how relationships work by observing the people around them. They learn how anger is expressed, how conflict is handled, whether emotions are welcomed or discouraged, how affection is shown, and what happens when someone makes a mistake.
              </p>
              <p>
                A child raised in a highly critical environment may grow into an adult who becomes self-critical and overly demanding of others. A child raised around emotional volatility may learn to expect conflict in close relationships.
              </p>
              <p>
                These behaviors often become automatic because they were learned during the most formative years of development. The challenge is that survival strategies developed in childhood don&apos;t automatically disappear in adulthood. They become default settings.
              </p>
            </div>
          </div>

          <div className="my-8 bg-[#F3EDE0] rounded-md p-6 md:p-8">
            <p className="font-serif italic text-lg md:text-xl text-[#3A3530] leading-relaxed">
              &ldquo;Survival strategies developed in childhood don&apos;t automatically disappear in adulthood. They become default settings.&rdquo;
            </p>
          </div>

          <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed">
            <p className="font-semibold text-[#1C1A14]">2. Attachment Patterns</p>
            <p>
              Attachment theory, developed by psychiatrist John Bowlby and later expanded by Mary Ainsworth, suggests that a child&apos;s early relationship with caregivers becomes the blueprint for future relationships.
            </p>
            <p>
              When caregivers are emotionally available, responsive, and consistent, children tend to develop secure attachment. When caregivers are emotionally unavailable, unpredictable, frightening, or inconsistent, children may develop insecure attachment patterns.
            </p>
            <p>
              These patterns generally fall into four categories: secure attachment, anxious attachment, avoidant attachment, and disorganized attachment.
            </p>
            <p>
              Research consistently shows that parents often pass their attachment style to their children—not because they intend to, but because unresolved emotional wounds influence how they respond to stress, conflict, intimacy, and emotional needs.
            </p>
            <p>
              The encouraging news is that attachment patterns are not permanent. Adults can develop what researchers call earned secure attachment, meaning new experiences and intentional healing can create healthier relational patterns.
            </p>
          </div>

          <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
            <p className="font-semibold text-[#1C1A14]">3. Epigenetic Changes</p>
            <p>
              Perhaps the most fascinating area of research involves epigenetics—how experiences influence the way genes are expressed without changing the underlying DNA itself.
            </p>
            <p>
              Think of your genes as a piano. The genes are the instrument, but life experiences determine which keys get played and how often.
            </p>
            <p>
              Research suggests that severe or prolonged stress can create biological changes that affect how the body responds to future stress. Some of these changes may be passed to future generations. Studies involving descendants of Holocaust survivors, for example, found altered stress hormone regulation that appeared linked to the trauma experienced by previous generations.
            </p>
            <p>
              Importantly, epigenetics is not destiny. Genes create possibilities, not fixed outcomes. Just as harmful experiences can influence gene expression, healing experiences can influence it as well.
            </p>
          </div>

          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Section 3</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                What Trauma Actually Is
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                Many people misunderstand trauma. Trauma is not simply something bad that happened. Psychologically speaking, trauma occurs when an experience overwhelms the nervous system&apos;s ability to process and integrate it.
              </p>
              <p>
                Two people can experience the same event and respond very differently depending on their age, available support systems, previous life experiences, emotional resources, and sense of safety during and after the event.
              </p>
              <p>
                Trauma often becomes stored in the body as an unresolved stress response. This is why parents may find themselves reacting intensely to situations that seem relatively small on the surface. The spilled milk, bedtime resistance, sibling arguments, or homework battles are rarely the true source of the reaction. They often activate older emotional wounds that were never fully processed.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Section 4</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                The ACE Study: Why Childhood Experiences Matter
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                One of the most influential research projects in this field is the Adverse Childhood Experiences (ACE) Study, which found a strong connection between childhood adversity and later physical and mental health outcomes.
              </p>
            </div>
          </div>

          <div className="my-8 border border-[#E5E0D4] rounded-lg overflow-hidden">
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#9B7A4D] px-6 pt-4 pb-2">
              ACE study risk factors
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[#E5E0D4]">
              {[
                "Emotional abuse",
                "Physical abuse",
                "Neglect",
                "Domestic violence",
                "Parental addiction",
                "Mental illness in the home",
              ].map((item, i) => (
                <div key={i} className="bg-[#FDFAF5] p-4 text-sm text-[#2A2720] leading-relaxed">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed">
            <p>
              The findings revealed something important: trauma tends to create the conditions that make future trauma more likely. Without awareness and intervention, painful patterns often repeat themselves.
            </p>
          </div>

          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Section 5</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                What Breaking the Cycle Really Means
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                Many parents imagine that breaking generational trauma means becoming a perfect parent. It doesn&apos;t. Perfection is not the goal. The goal is awareness.
              </p>
              <p>
                Breaking the cycle means learning to recognize inherited patterns before they automatically take over. It means noticing triggers. It means developing emotional regulation. It means repairing mistakes when they happen.
              </p>
              <p>
                Most importantly, it means creating a family environment where children experience safety, connection, and emotional responsiveness more consistently than previous generations did.
              </p>
              <p>
                No parent gets this right all the time. Research shows that secure attachment is not created through perfect attunement. It is created through consistent repair. Children thrive when they learn that relationships can survive mistakes, conflict, and difficult emotions.
              </p>
            </div>
          </div>

          <div className="my-10 p-6 md:p-8 border border-[#D8C8A8] rounded-lg bg-[#F8F2E6]">
            <p className="font-serif italic text-lg md:text-xl text-[#3A3530] leading-relaxed">
              &ldquo;The same research that explains why painful patterns repeat also shows that change is possible. Brains can change. Attachment patterns can change. Nervous systems can heal. Family stories can take a new direction.&rdquo;
            </p>
          </div>

          <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed">
            <p>
              Every time a parent chooses awareness instead of automatic reaction, regulation instead of reactivity, and repair instead of shame, a new legacy begins.
            </p>
            <p className="font-serif italic text-[#5A5347]">
              And often, that legacy starts with a single decision: the decision to understand what was inherited—and consciously choose what will be passed on.
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
