import Link from "next/link";
import Image from "next/image";

const article = {
  category: "Clinical Psychology · Stress Physiology",
  title: "It's Not About the Juice",
  subtitle:
    "Why the behavior in front of you is almost never the real trigger of parental anger — and what's actually happening beneath the surface",
  author: "M. Eliza Rowen",
  tag: "Emotional Regulation",
  readTime: "12 min read",
  date: "2026-06-07",
};

const references = [
  "Baumeister, R. F., Bratslavsky, E., Muraven, M., & Tice, D. M. (1998). Ego depletion: Is the active self a limited resource? Journal of Personality and Social Psychology, 74(5), 1252–1265.",
  "Dix, T. (1991). The affective organization of parenting: Adaptive and maladaptive processes. Psychological Bulletin, 110(1), 3–25.",
  "Gailliot, M. T., & Baumeister, R. F. (2007). The physiology of willpower: Linking blood glucose to self-control. Personality and Social Psychology Review, 11(4), 303–327.",
  "Lazarus, R. S., & Folkman, S. (1984). Stress, appraisal, and coping. Springer.",
  "McEwen, B. S. (1998). Stress, adaptation, and disease: Allostasis and allostatic load. Annals of the New York Academy of Sciences, 840(1), 33–44.",
  "McEwen, B. S., & Stellar, E. (1993). Stress and the individual: Mechanisms leading to disease. Archives of Internal Medicine, 153(18), 2093–2101.",
  "Schacter, D. L. (1992). Understanding implicit memory: A cognitive neuroscience approach. American Psychologist, 47(4), 559–569.",
  "Siegel, D. J., & Hartzell, M. (2003). Parenting from the inside out. Jeremy P. Tarcher/Penguin.",
  "Yoo, S. S., Gujar, N., Hu, P., Jolesz, F. A., & Walker, M. P. (2007). The human emotional brain without sleep — a prefrontal amygdala disconnect. Current Biology, 17(20), R877–R878.",
];

const allostericLoad = [
  "Sleep deprivation",
  "Sensory overload",
  "Unmet physical needs",
  "Relationship tension",
  "Work or financial stress",
  "Hormonal fluctuations",
  "Social isolation",
];

export default function JuiceArticlePage() {
  return (
    <>
      
      <div className="min-h-screen bg-[#FDFAF5]">
        
        {/* Back to Blog Bar */}
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

        {/* Hero Section with Image */}
        <div className="relative">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/blog/parenting/its-not-about-the-juice.jpg"
              alt="Spilled orange juice on kitchen floor - a common parenting trigger"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay para mejorar legibilidad del texto */}
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

        {/* Article Content */}
        <main className="max-w-3xl mx-auto px-4 py-8 md:py-12">
          
          {/* Opening */}
          <div className="space-y-6 text-lg text-[#2A2720] leading-relaxed">
            <p>
              On Tuesday, the spilled orange juice leads to an explosion. On Thursday, the same child spills the same juice — and you hand them a towel and help them clean it up. Same child. Same mess. Completely different parent.
            </p>
            <p>
              This puzzle, disorienting to most parents who live it, is actually one of the most important entry points into understanding parental anger. If the trigger were truly the juice, the response would be consistent. It isn&apos;t. Which means the juice was never the trigger at all.
            </p>
          </div>

          {/* Part 1 */}
          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Part 1</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                The Illusion of Linear Causation
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                Most parents explain their anger through a simple sequence: child did something → parent got angry → therefore, child caused the anger. This framework feels intuitively correct. It is, according to the research, fundamentally incomplete — and that incompleteness is precisely what keeps so many parents stuck.
              </p>
              <p>
                Research on stress reactivity demonstrates that a person&apos;s response to any given stressor depends far less on the stressor itself than on their current physiological and psychological resources at the moment of impact (McEwen & Stellar, 1993). The child&apos;s behavior is the catalyst, not the cause. The cause is the accumulated load that was already there, already volatile, waiting for something to ignite it.
              </p>
            </div>
          </div>

          {/* Tuesday vs Wednesday Comparison */}
          <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E5E0D4] border border-[#E5E0D4] rounded-lg overflow-hidden">
            <div className="bg-[#FDFAF5] p-5 md:p-6">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D] block mb-4">Tuesday</span>
              <ul className="space-y-2 mb-4">
                <li className="text-sm text-[#5A5347] pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-[#C8BEAE]">Seven hours of sleep</li>
                <li className="text-sm text-[#5A5347] pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-[#C8BEAE]">Real breakfast</li>
                <li className="text-sm text-[#5A5347] pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-[#C8BEAE]">Twenty quiet minutes in the morning</li>
                <li className="text-sm text-[#5A5347] pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-[#C8BEAE]">Child refuses to put toys away</li>
              </ul>
              <div className="bg-[#EAF3DE] text-[#3B6D11] text-sm font-medium p-3 rounded-md">
                Response: mild annoyance, calm redirect. Done.
              </div>
            </div>
            
            <div className="bg-[#FDFAF5] p-5 md:p-6">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D] block mb-4">Wednesday</span>
              <ul className="space-y-2 mb-4">
                <li className="text-sm text-[#5A5347] pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-[#C8BEAE]">Four hours of broken sleep</li>
                <li className="text-sm text-[#5A5347] pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-[#C8BEAE]">Skipped breakfast</li>
                <li className="text-sm text-[#5A5347] pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-[#C8BEAE]">Tense morning at work</li>
                <li className="text-sm text-[#5A5347] pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-[#C8BEAE]">Child refuses to put away the same toys</li>
              </ul>
              <div className="bg-[#FCEBEB] text-[#A32D2D] text-sm font-medium p-3 rounded-md">
                Response: full explosion — volume, intensity, words that surprise even you.
              </div>
            </div>
          </div>

          <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed">
            <p>
              As Lazarus and Folkman (1984) demonstrated, emotional responses are shaped far more by internal state than by external events. This is not a moral failing. It is cognitive appraisal theory — the mechanism by which the brain evaluates whether a demand exceeds available resources. When resources are low, ordinary challenges are coded as threats.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="my-10 border-l-3 border-[#9B7A4D] pl-6 py-2">
            <blockquote className="font-serif italic text-xl text-[#3A3530] leading-relaxed">
              &quot;Your child&apos;s behavior is the match. The fuel was already there — built up through hours, sometimes days, of accumulated pressure.&quot;
            </blockquote>
            <cite className="text-xs font-semibold tracking-[0.06em] uppercase text-[#9B7A4D] not-italic mt-2 block">
              Rowen, M.E., Anger Management for Explosive Parents
            </cite>
          </div>

          {/* Part 2 */}
          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Part 2</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                What&apos;s Actually Filling the Glass
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                Researchers use the term <em className="italic">allostatic load</em> to describe the cumulative physiological cost of chronic stress (McEwen, 1998). Imagine the nervous system as a glass, filling slowly throughout each day — and each day that began before today. Every stressor adds a measure of liquid. When the glass reaches capacity, a single additional drop causes overflow.
              </p>
            </div>
          </div>

          {/* Load Grid */}
          <div className="my-6">
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#9B7A4D] mb-3">
              Common contributors to accumulated load in parents
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#E5E0D4] border border-[#E5E0D4] rounded-lg overflow-hidden">
              {allostericLoad.map((item, i) => (
                <div key={i} className="bg-[#FDFAF5] p-3 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#9B7A4D]" />
                  <span className="text-sm text-[#3A3530]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed">
            <p>
              High allostatic load measurably compromises the brain&apos;s capacity to regulate emotion, access empathy, and respond flexibly (McEwen, 1998). This is not a personal weakness. It is biology operating exactly as designed when demands chronically exceed available resources.
            </p>
            <p>
              Sleep deprivation, for instance, does not simply produce tiredness. Yoo et al. (2007) showed that even a single night of poor sleep simultaneously impairs prefrontal cortex function — the region responsible for pausing before reacting — and increases amygdala reactivity, the region responsible for threat detection. The exhausted parent is neurologically primed to explode. Hunger produces analogous effects: Gailliot and Baumeister (2007) demonstrated that low blood glucose genuinely reduces self-control capacity and increases aggressive responses.
            </p>
          </div>

          {/* Highlight Box */}
          <div className="my-8 bg-[#F3EDE0] rounded-md p-6 md:p-8">
            <p className="font-serif italic text-lg md:text-xl text-[#3A3530] leading-relaxed">
              At work, the nervous system maintains vigilant regulation because social and professional survival demands it. At home, it expects safety and rest. When stress arrives in the supposedly safe space, the system reacts more intensely because it was not braced for another challenge.
            </p>
          </div>

          <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed">
            <p>
              Parents regularly remain composed through difficult professional confrontations — a critical client, an unreasonable colleague — only to lose control when their seven-year-old talks back at dinner. This is not hypocrisy. The relationship with a child feels secure enough to survive the dysregulation (Dix, 1991).
            </p>
          </div>

          {/* Part 3 */}
          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Part 3</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                When the Past Walks Into the Present
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                There is a layer of parental anger that goes deeper than allostatic load, deeper than sleep debt or missed meals. It is the layer that most parents sense but rarely name: the feeling that a child&apos;s particular behavior provokes a response that seems disproportionate, almost primal — as if the intensity is coming from somewhere else entirely. It is.
              </p>
              <p>
                The brain stores emotional experience in two distinct systems. Explicit memory holds the conscious, narratable recollections. Implicit memory, as Schacter (1992) documented, holds something altogether different: unconscious patterns, bodily sensations, and emotional responses that fire without awareness — sometimes without any conscious memory attached at all.
              </p>
            </div>
          </div>

          {/* Memory Compare */}
          <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E5E0D4] border border-[#E5E0D4] rounded-lg overflow-hidden">
            <div className="bg-[#FDFAF5] p-5 md:p-6">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#185FA5] block mb-2">Explicit memory</span>
              <h3 className="font-serif text-base font-semibold text-[#1C1A14] mb-2">Conscious &amp; narratable</h3>
              <p className="text-sm text-[#5A5347] leading-relaxed">Accessible on demand. The birthday party at age ten. The first day at a new school. You can tell the story.</p>
            </div>
            <div className="bg-[#FDFAF5] p-5 md:p-6">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#993556] block mb-2">Implicit memory</span>
              <h3 className="font-serif text-base font-semibold text-[#1C1A14] mb-2">Unconscious &amp; bodily</h3>
              <p className="text-sm text-[#5A5347] leading-relaxed">Fires without awareness. No story required — only sensation and response. Lives in the nervous system itself.</p>
            </div>
          </div>

          <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed">
            <p>
              When a child&apos;s behavior resonates — even subtly — with the emotional texture of a past wound, the implicit memory activates. The parent does not choose this. They experience it. The rage that arrives when a child cries may not be about that child&apos;s tears at all — it may be the adult body&apos;s re-encounter with the unspoken childhood message that emotional expression was unacceptable, that need was dangerous, that being &quot;too much&quot; had consequences.
            </p>
          </div>

          {/* Small Pull Quote */}
          <div className="my-8 border-l-3 border-[#9B7A4D] pl-6">
            <blockquote className="font-serif italic text-lg text-[#3A3530] leading-relaxed">
              &quot;The urgency to stop the crying isn&apos;t about her daughter — it&apos;s about an old wound that has never fully healed.&quot;
            </blockquote>
            <cite className="text-xs font-semibold tracking-[0.06em] uppercase text-[#9B7A4D] not-italic mt-2 block">
              Rowen, M.E., clinical observation
            </cite>
          </div>

          <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed">
            <p>
              Siegel and Hartzell (2003) describe it as &quot;ghosts in the nursery&quot;: the way unresolved experiences from a parent&apos;s own childhood enter the room uninvited and shape responses to their children in the present. The parent is not simply reacting to the child. They are reacting to a confluence of now and then, present and past, child in front of them and child they once were.
            </p>
          </div>

          {/* Part 4 */}
          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Part 4</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                From Powerless to Agentive
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                Understanding that the real trigger is internal rather than external is not a way of avoiding responsibility. It is precisely the opposite. The parent who believes their child&apos;s behavior is the cause of their anger is, in the most fundamental sense, trapped — perpetually waiting for the child to change so they can feel calmer. The parent who understands that their anger is governed by their own internal state gains something enormously valuable: the possibility of acting on that state directly.
              </p>
              <p>
                The research of Baumeister et al. (1998) on ego depletion adds one more clarifying lens. Self-regulation draws on a finite cognitive resource, one that is depleted by use. The parent who has spent a full day managing professional demands, mediating sibling conflict, and holding the household together arrives at the evening with genuinely diminished capacity — not lesser character.
              </p>
            </div>
          </div>

          {/* Reframe Box */}
          <div className="my-10 border border-[#D8C8A8] rounded-lg bg-[#F8F2E6] p-6 md:p-8">
            <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D] block mb-4">
              The reframe that changes everything
            </span>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-xs font-semibold tracking-[0.08em] uppercase bg-[#FCEBEB] text-[#A32D2D] px-2 py-0.5 rounded">Before</span>
                <span className="font-serif italic text-[#3A3530]">&quot;Why am I like this?&quot;</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xs font-semibold tracking-[0.08em] uppercase bg-[#EAF3DE] text-[#3B6D11] px-2 py-0.5 rounded">After</span>
                <span className="font-serif italic text-[#3A3530]">&quot;What does my body actually need right now?&quot;</span>
              </div>
              <p className="text-sm text-[#5A5347] leading-relaxed pt-2">
                The answer is often strikingly simple: a pause, a breath, water, a change of posture, five minutes outside. Not moral improvement. Physiological replenishment.
              </p>
            </div>
          </div>

          {/* Closing Quote */}
          <div className="my-10 p-6 md:p-8 border border-[#D8C8A8] rounded-lg bg-[#F8F2E6]">
            <p className="font-serif italic text-lg md:text-xl text-[#3A3530] leading-relaxed">
              The juice on Tuesday and the juice on Thursday are the same event. The difference between those two moments lived in the parent, not the child — in sleep hours, in resource levels, in the weight of everything carried and unprocessed. Recognizing this does not excuse the explosion on Tuesday. It explains it. And explanation, as every practitioner in this field knows, is the indispensable first step toward change.
            </p>
          </div>

          {/* References */}
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

          {/* Footer Note with Book Link */}
          <div className="mt-12 pt-8 border-t border-[#E5E0D4]">
            <p className="text-sm text-[#8A8070] italic mb-3">
              This article draws from <span className="font-medium not-italic">&quot;Anger Management for Explosive Parents&quot;</span> by M. Eliza Rowen.
            </p>
            <Link 
              href="https://www.amazon.com/-/es/Anger-Management-Explosive-Parents-Understand/dp/B0GGNQCT17"
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