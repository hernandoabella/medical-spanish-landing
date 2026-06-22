import Link from "next/link";
import Image from "next/image";

const article = {
  category: "Attachment Research · Emotional Recovery",
  title: "After the Explosion",
  subtitle:
    "The guilt arrives like clockwork. The shame spiral begins. And then — if you know how — comes the most important parenting moment of all",
  author: "M. Eliza Rowen",
  tag: "Family Psychology",
  readTime: "14 min read",
  date: "2026-06-09",
};

const repairSteps = [
  {
    n: "1",
    title: "Specific acknowledgment",
    text: '"I yelled at you and said things I shouldn\'t have said." Be concrete. Vagueness signals minimization.',
  },
  {
    n: "2",
    title: "Full responsibility — no qualifications",
    text: '"That was my behavior and my choice. You didn\'t make me yell. I was overwhelmed and I handled it badly." No "but." No "if you had just."',
  },
  {
    n: "3",
    title: "Name the impact",
    text: '"That probably scared you. It might have made you feel like you can\'t do anything right." Name what they likely felt, not what you felt.',
  },
  {
    n: "4",
    title: "Genuine apology",
    text: '"I\'m sorry. That wasn\'t okay." Simple. Direct. Without the addendum that begins with "but."',
  },
];

const shameSpiral = [
  { label: "01", text: "Explosion occurs under accumulated stress and depleted resources" },
  { label: "02", text: 'Shame floods in — identity-level judgment: "I am a terrible parent"' },
  { label: "03", text: "Nervous system activates — shame triggers the same threat response as external attack" },
  { label: "04", text: "Hypervigilance and anxiety increase — parent remains dysregulated for hours or days" },
  { label: "05", text: "Next explosion arrives sooner — depleted, activated nervous system has lower threshold" },
];

const references = [
  "Breines, J. G., & Chen, S. (2012). Self-compassion increases self-improvement motivation. Personality and Social Psychology Bulletin, 38(9), 1133–1143.",
  "Brown, B. (2006). Shame resilience theory: A grounded theory study on women and shame. Families in Society, 87(1), 43–52.",
  "Gilbert, P., & Procter, S. (2006). Compassionate mind training for people with high shame and self-criticism. Clinical Psychology & Psychotherapy, 13(6), 353–379.",
  "Siegel, D. J., & Hartzell, M. (2003). Parenting from the inside out. Jeremy P. Tarcher/Penguin.",
  "Tangney, J. P., Stuewig, J., & Mashek, D. J. (2007). Moral emotions and moral behavior. Annual Review of Psychology, 58, 345–372.",
  "Tronick, E. (2007). The neurobehavioral and social-emotional development of infants and children. W. W. Norton.",
];

export default function AfterExplosionPage() {
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
              src="/blog/parenting/after-the-explosion.jpg"
              alt="Parent sitting alone reflecting after emotional moment with child"
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
              The house is quiet. Your child is in their room. You are standing in the kitchen — or sitting in your car, or staring at the ceiling — with that familiar, crushing weight in your chest. <em className="italic">I did it again. I swore I wouldn&apos;t. What is wrong with me?</em>
            </p>
            <p>
              What happens in the minutes and hours after a parental explosion is, according to the research, at least as consequential as the explosion itself — sometimes more so. The guilt, the shame, the self-recrimination, and what the parent chooses to do with all of it: these are not footnotes to the main event. They are, in many cases, the main event. Understanding why changes everything about how a parent recovers, repairs, and ultimately changes.
            </p>
          </div>

          {/* Part One */}
          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Part One</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                Guilt and Shame Are Not the Same Thing
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                Most parents use the words interchangeably in the aftermath of an explosion. They are not the same. The distinction — seemingly small — is one of the most consequential in the psychology of behavior change, and getting it wrong is precisely what keeps parents trapped in cycles they desperately want to break.
              </p>
            </div>
          </div>

          {/* Guilt vs Shame Table */}
          <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E5E0D4] border border-[#E5E0D4] rounded-lg overflow-hidden">
            <div className="bg-[#FDFAF5] p-6">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#185FA5] block mb-3">Guilt</span>
              <h3 className="font-serif text-base font-semibold text-[#1C1A14] mb-2">&quot;I did something bad.&quot;</h3>
              <p className="text-sm text-[#5A5347] leading-relaxed">The judgment is about the behavior. It is painful, but it is directional — it points toward acknowledgment, apology, and change. Research by Tangney et al. (2007) identifies guilt as adaptive: it motivates repair without destabilizing the self.</p>
            </div>
            <div className="bg-[#FDFAF5] p-6">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#A32D2D] block mb-3">Shame</span>
              <h3 className="font-serif text-base font-semibold text-[#1C1A14] mb-2">&quot;I am bad.&quot;</h3>
              <p className="text-sm text-[#5A5347] leading-relaxed">The judgment is about the identity. Brené Brown (2006) describes it as the intensely painful belief that one is fundamentally unworthy of love and belonging. It does not motivate change. It motivates hiding, defending, or self-attack.</p>
            </div>
            <div className="col-span-1 md:col-span-2 bg-[#F3EDE0] p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="font-serif italic text-sm text-[#3A3530]">When guilt is present: &quot;I made a mistake. I need to make this right.&quot; One opens a door.</div>
              <div className="font-serif italic text-sm text-[#3A3530]">When shame is present: &quot;I am the mistake. I am permanently broken.&quot; The other slams every door shut.</div>
            </div>
          </div>

          <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed">
            <p>
              The problem is that well-meaning parents almost always experience shame rather than guilt in the aftermath — and almost always mistake that shame for useful accountability. Elena, a mother of two, described spending hours after each explosion replaying every detail, narrating her own failures, imagining her children in therapy years from now talking about her. &quot;I thought I was holding myself accountable,&quot; she said. &quot;My therapist helped me see I was just traumatizing myself. And all that shame made me more anxious, more on edge, more likely to explode again the next day.&quot;
            </p>
          </div>

          {/* Part Two */}
          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Part Two</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                Why Shame Fuels the Next Explosion
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                The most counterintuitive finding in the research on parental anger is this: the intense self-criticism that follows an explosion does not prevent the next one. It makes it more likely.
              </p>
              <p>
                Gilbert and Procter (2006) demonstrated that self-criticism activates the same neurological threat response as external criticism. When a parent tells themselves they are terrible, damaging their children, fundamentally broken — their nervous system interprets that as an attack and responds accordingly: elevated cortisol, sustained arousal, hypervigilance. Tangney et al. (2007) confirmed that shame specifically increases emotional reactivity and decreases capacity for self-regulation.
              </p>
            </div>
          </div>

          {/* Shame Spiral */}
          <div className="my-8 bg-[#F8F4EC] border border-[#E5E0D4] rounded-lg p-6 md:p-8">
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#9B7A4D] mb-6">The shame-explosion cycle</p>
            <div className="space-y-0">
              {shameSpiral.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-7 h-7 rounded-full bg-[#EAE4D8] flex items-center justify-center">
                      <span className="text-xs font-semibold text-[#9B7A4D]">{step.label}</span>
                    </div>
                    {i < shameSpiral.length - 1 && <div className="w-px flex-1 bg-[#D8D0C0] min-h-[24px]" />}
                  </div>
                  <div className="pb-5 last:pb-0">
                    <p className="text-sm text-[#3A3530] leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed">
            <p>
              The cycle is self-reinforcing. And the engine driving it is not the original explosion — it is what the parent tells themselves about it afterward. Breines and Chen (2012) found that self-compassion — treating oneself with the same understanding one would extend to a struggling friend — leads to significantly more sustainable behavior change than harsh self-criticism, which characteristically backfires.
            </p>
          </div>

          {/* Highlight Box */}
          <div className="my-8 bg-[#F3EDE0] rounded-md p-6 md:p-8">
            <p className="font-serif italic text-lg md:text-xl text-[#3A3530] leading-relaxed">
              &quot;I thought hating myself would force me to change. But it just made me more stressed and reactive. When I started treating myself with compassion — &apos;Okay, you messed up, you&apos;re human, you&apos;re learning&apos; — everything shifted.&quot;
            </p>
            <cite className="block mt-3 text-xs font-semibold tracking-[0.08em] uppercase text-[#9B7A4D] not-italic">
              Clinical observation, Rowen (2025)
            </cite>
          </div>

          {/* Part Three */}
          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Part Three</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                The Intergenerational Echo
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                For many parents, the sharpest dimension of post-explosion shame is not simply having lost control — it is hearing an echo in their own voice. The particular phrase their father used. The expression they swore they would never wear. The sound they recognize from childhood, now coming from their own mouth.
              </p>
              <p>
                The psychological weight of this recognition is considerable. It activates shame at a level that goes beyond the individual incident — it becomes evidence, in the parent&apos;s internal narrative, that the cycle is unbreakable, that the damage is being passed forward, that awareness changes nothing.
              </p>
              <p>
                The research says otherwise. Siegel and Hartzell (2003) documented a consistent and hopeful finding: awareness interrupts transmission. The parent who recognizes the intergenerational pattern and actively works to address it is already doing something their own parents, in most cases, never did. The cycle is not broken through perfection. It is broken through the accumulation of different choices — imperfect, partial, inconsistent — made by someone who is paying attention.
              </p>
            </div>
          </div>

          {/* Blue Callout Box */}
          <div className="my-8 border-l-4 border-[#185FA5] bg-[#F0F5FB] rounded-r-md p-5">
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#185FA5] mb-2">What actually breaks the cycle</p>
            <p className="text-sm text-[#2A2720] leading-relaxed">
              Marcus grew up with a father who raged unpredictably and never acknowledged it afterward. When Marcus found himself yelling at his own son, his therapist asked how many times his son had seen him repair — apologize, take responsibility, come back. Marcus counted: dozens of times. His father never once did. &quot;Yes, I sometimes yell like my father did,&quot; Marcus said. &quot;But I do something he never did. I come back and make it right. That&apos;s breaking the cycle, even when it doesn&apos;t feel like it.&quot;
            </p>
          </div>

          {/* Part Four */}
          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Part Four</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                Responsibility Without Self-Punishment
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                After an explosion, parents tend toward one of two extremes. The first is minimization: it wasn&apos;t that bad, they needed to hear it, I was provoked. The second is self-flagellation: I am the worst parent alive, I am damaging them permanently, there is something wrong with me at a fundamental level. Neither is accountability. Both are avoidance strategies — one avoids the discomfort of acknowledging real impact; the other converts accountability into a performance of suffering that serves no one, least of all the child.
              </p>
            </div>
          </div>

          {/* Accountability vs Punishment */}
          <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E5E0D4] border border-[#E5E0D4] rounded-lg overflow-hidden">
            <div className="bg-[#FDFAF5] p-5">
              <span className="text-xs font-semibold tracking-[0.12em] uppercase text-[#A32D2D] block mb-4">Avoidance (both extremes)</span>
              <ul className="space-y-2">
                <li className="text-sm text-[#3A3530] pl-5 relative before:content-['✕'] before:absolute before:left-0 before:text-[#E24B4A] before:text-xs">It wasn&apos;t that bad</li>
                <li className="text-sm text-[#3A3530] pl-5 relative before:content-['✕'] before:absolute before:left-0 before:text-[#E24B4A] before:text-xs">They needed to hear it</li>
                <li className="text-sm text-[#3A3530] pl-5 relative before:content-['✕'] before:absolute before:left-0 before:text-[#E24B4A] before:text-xs">I was provoked — they made me</li>
                <li className="text-sm text-[#3A3530] pl-5 relative before:content-['✕'] before:absolute before:left-0 before:text-[#E24B4A] before:text-xs">I am permanently broken</li>
                <li className="text-sm text-[#3A3530] pl-5 relative before:content-['✕'] before:absolute before:left-0 before:text-[#E24B4A] before:text-xs">My children would be better off without me</li>
              </ul>
            </div>
            <div className="bg-[#FDFAF5] p-5">
              <span className="text-xs font-semibold tracking-[0.12em] uppercase text-[#3B6D11] block mb-4">Genuine accountability</span>
              <ul className="space-y-2">
                <li className="text-sm text-[#3A3530] pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-[#639922] before:text-xs">Acknowledges clearly what happened</li>
                <li className="text-sm text-[#3A3530] pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-[#639922] before:text-xs">Recognizes the impact on the child</li>
                <li className="text-sm text-[#3A3530] pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-[#639922] before:text-xs">Commits to specific change</li>
                <li className="text-sm text-[#3A3530] pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-[#639922] before:text-xs">Moves forward into action</li>
                <li className="text-sm text-[#3A3530] pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-[#639922] before:text-xs">Oriented toward the future, not self-suffering</li>
              </ul>
            </div>
          </div>

          <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed">
            <p>
              The diagnostic question, drawn from clinical practice, is this: <em className="italic">What would genuinely help this situation right now?</em> Hours of self-recrimination will not help it. Repairing with the child, understanding what triggered the explosion, building better support structures — these will. Responsibility is oriented toward the future. Self-punishment is oriented toward the self&apos;s suffering in the present, dressed up as accountability.
            </p>
          </div>

          {/* Part Five */}
          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Part Five</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                Why Repair Is More Important Than Perfection
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                Perhaps the most reliably surprising finding in this entire field — the one that offers the most relief to parents who hear it — is that children do not need perfect parents. They need parents who repair.
              </p>
              <p>
                Dr. Ed Tronick&apos;s foundational work on rupture and repair in the parent-infant relationship (Tronick, 2007) demonstrated that what produces secure attachment is not the absence of misattunement — it is the consistent pattern of reconnection afterward. Ruptures happen in every relationship. What the nervous system learns from is what follows. Siegel and Hartzell (2003) corroborated this: secure attachment develops when caregivers consistently repair misattunements, not when they avoid them entirely.
              </p>
              <p>
                This finding has a specific implication worth stating plainly: the parent who explodes and then repairs is, in a measurable developmental sense, doing something more valuable for their child than the parent who never explodes but also never shows what it looks like to make a mistake and take genuine responsibility for it. The repair is not just damage control. It is the learning event itself.
              </p>
            </div>
          </div>

          {/* Closing Quote Box */}
          <div className="my-10 p-6 md:p-8 border border-[#D8C8A8] rounded-lg bg-[#F8F2E6]">
            <p className="font-serif italic text-lg md:text-xl text-[#3A3530] leading-relaxed">
              &quot;Children don&apos;t need perfect parents. They need parents who can repair. What your child is building from these moments is their template for how relationships work — not whether they break, but whether they can be restored.&quot;
            </p>
            <cite className="block mt-3 text-xs font-semibold tracking-[0.08em] uppercase text-[#9B7A4D] not-italic">
              Rowen, drawing on Siegel & Hartzell (2003) and Tronick (2007)
            </cite>
          </div>

          {/* Part Six */}
          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Part Six</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                How to Repair — And What Repair Is Not
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                Repair is a specific act with specific components. It is not a conditional apology. It is not a minimization followed by a pivot to the child&apos;s behavior. It is not a demand for immediate forgiveness. It is not a performance of remorse designed to relieve the parent&apos;s guilt. Each of those substitutes is recognizable to children even when they cannot articulate it — and each teaches a different, unintended lesson.
              </p>
            </div>
          </div>

          {/* Repair Steps */}
          <div className="my-8 border border-[#E5E0D4] rounded-lg overflow-hidden">
            {repairSteps.map((step, i) => (
              <div key={i} className={`flex gap-4 p-5 bg-[#FDFAF5] ${i < repairSteps.length - 1 ? 'border-b border-[#E5E0D4]' : ''}`}>
                <div className="w-8 h-8 rounded-full bg-[#EAE4D8] flex items-center justify-center flex-shrink-0">
                  <span className="font-serif text-sm font-semibold text-[#9B7A4D]">{step.n}</span>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-[0.04em] text-[#1C1A14] mb-1">{step.title}</p>
                  <p className="text-sm text-[#5A5347] leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
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