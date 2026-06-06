import Link from "next/link";
import Image from "next/image";

const article = {
  category: "Developmental Psychology · Emotional Regulation",
  title: "Why the Most Loving Parents Explode the Hardest",
  subtitle:
    "The neuroscience of parental anger, the shame spiral that makes it worse, and the one thing that actually heals it",
  author: "M. Eliza Rowen",
  tag: "Parenting & Mental Health",
  readTime: "15 min read",
  date: "2026-06-06",
};

const references = [
  "Berkowitz, L. (1993). Aggression: Its causes, consequences, and control. McGraw-Hill.",
  "Brown, B. (2006). Shame resilience theory: A grounded theory study on women and shame. Families in Society, 87(1), 43–52.",
  "Dumas, J. E. (2005). Mindfulness-based parent training: Strategies to lessen the grip of automaticity in families with disruptive children. Journal of Clinical Child and Adolescent Psychology, 34(4), 779–791.",
  "Goleman, D. (1995). Emotional intelligence: Why it can matter more than IQ. Bantam Books.",
  "LeDoux, J. (1996). The emotional brain: The mysterious underpinnings of emotional life. Simon & Schuster.",
  "McEwen, B. S., & Stellar, E. (1993). Stress and the individual: Mechanisms leading to disease. Archives of Internal Medicine, 153(18), 2093–2101.",
  "Neff, K. D. (2011). Self-compassion: The proven power of being kind to yourself. William Morrow.",
  "Neff, K. D., & Faso, D. J. (2015). Self-compassion and well-being in parents of children with autism. Mindfulness, 6(4), 938–947.",
  "Porges, S. W. (2011). The polyvagal theory: Neurophysiological foundations of emotions, attachment, communication, and self-regulation. W. W. Norton.",
  "Siegel, D. J., & Bryson, T. P. (2014). No-drama discipline. Bantam Books.",
  "Siegel, D. J., & Hartzell, M. (2003). Parenting from the inside out. Jeremy P. Tarcher/Penguin.",
  "Tronick, E. (2007). The neurobehavioral and social-emotional development of infants and children. W. W. Norton.",
  "van der Kolk, B. (2014). The body keeps the score. Viking.",
];

export default function ParentalAngerArticle() {
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
              src="/blog/parenting/loving-parents-explode.jpg"
              alt="Parent sitting alone in car reflecting after emotional moment"
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
              There is a parent right now sitting in a parked car in the driveway, hands still shaking, replaying every syllable of what just happened inside the house. They promised themselves this morning it would be different. It wasn&apos;t. And the thing that broke them? Spilled milk. Or a missing shoe. Or a child who simply said &quot;no&quot; one too many times.
            </p>
            <p>
              If that image feels familiar, consider this: the intensity of your anger after an ordinary parenting moment may be less a sign of your character and more a signal from your nervous system. Understanding the difference between those two things — between identity and physiology — is where meaningful change begins.
            </p>
          </div>

          {/* Section 1 */}
          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Section 1</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                Anger Is Not the Problem. Confusion About Anger Is.
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                Contemporary parenting culture has created an insidious myth: good parents don&apos;t feel anger. The corollary, swallowed quietly by millions of parents, is that a surge of fury toward a child constitutes failure — moral, emotional, parental. This belief is not only factually wrong; it is neurobiologically counterproductive.
              </p>
              <p>
                Anger is a biological signal, not a character defect. As Siegel and Bryson (2014) describe, it functions as the nervous system&apos;s check-engine light — activating when the brain perceives threat, overload, injustice, or loss of control. The emotion itself carries no moral weight. What carries weight is what we do with it.
              </p>
            </div>
          </div>

          {/* Pull Quote */}
          <div className="my-10 border-l-3 border-[#9B7A4D] pl-6 py-2">
            <blockquote className="font-serif italic text-xl text-[#3A3530] leading-relaxed">
              &quot;Anger is an internal emotional experience. Aggression is a behavior that causes emotional or physical harm.&quot;
            </blockquote>
            <cite className="text-xs font-semibold tracking-[0.06em] uppercase text-[#9B7A4D] not-italic mt-2 block">
              Berkowitz, 1993
            </cite>
          </div>

          <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed">
            <p>
              This distinction — between emotion and behavior — is the single most important reframe in modern anger research, yet it remains largely absent from parenting advice. We can feel rage and still choose a regulated response. The problem arises not from anger itself, but from the speed at which it hijacks the nervous system before a thoughtful choice can be made.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Section 2</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                The Body Acts Before the Mind Decides
              </h2>
              <p className="text-sm text-[#8A8070] italic mt-1">The amygdala, not willpower, is running the show</p>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                Research on the amygdala and stress response (LeDoux, 1996; Goleman, 1995) offers a clarifying explanation for explosive moments that feel involuntary — because, in a very real sense, they are. Before a parent consciously registers &quot;I am angry,&quot; a cascade of physiological events has already begun: the jaw clenches, the heart rate accelerates, breathing shallows, and blood is rerouted away from the prefrontal cortex toward the amygdala, which is responsible only for survival.
              </p>
              <p>
                At this point, the brain is no longer asking what the best parenting response might be. It is asking one question: <em className="italic">How do I make this overwhelming feeling stop?</em> Yelling answers that question instantly. It releases pressure like a valve. This is why it feels briefly relieving even as the guilt that follows makes everything worse in the long run.
              </p>
            </div>
          </div>

          {/* Sequence Diagram */}
          <div className="my-8 bg-[#F8F4EC] border border-[#E5E0D4] rounded-lg p-6 md:p-8">
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#9B7A4D] mb-6">
              Physiological sequence of a parental explosion
            </p>
            <div className="space-y-0">
              {[
                "Amygdala detects perceived threat",
                "Stress hormones flood the body",
                "Prefrontal cortex loses priority blood flow",
                "Logical reasoning and empathy diminish",
                "Automatic survival response fires — explosion occurs",
                "Frontal lobe comes back online",
                "Guilt and self-analysis begin",
              ].map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#9B7A4D] mt-1.5" />
                    {i < 6 && <div className="w-px flex-1 bg-[#D8D0C0] min-h-[24px]" />}
                  </div>
                  <p className="text-sm text-[#3A3530] pb-4 last:pb-0 leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed">
            <p>
              Porges (2011) describes this through the lens of polyvagal theory: our nervous system is continuously scanning the environment for signs of safety or danger, processing millions of bits of information per second. When it decides the threshold has been crossed — even by an emotionally perceived threat like feeling disrespected or chronically unrecognized — it mobilizes. Parents have no more chosen this response than they chose their heartbeat.
            </p>
          </div>

          {/* Section 3 */}
          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Section 3</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                Why Caring Deeply Makes You More Vulnerable
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                One of the most counterintuitive findings in parental anger research is that explosive reactions are especially prevalent in parents who care the most. Research summarized by Dumas (2005) identifies a consistent profile: parents who carry constant responsibility, who chronically prioritize their children&apos;s needs above their own, who hold themselves to standards of calm and competence they would never apply to another person, and who were never taught healthy emotional regulation in their families of origin — these parents show the highest rates of reactivity.
              </p>
              <p>
                This is not a paradox. It is a stress physiology problem. The parent managing every detail, absorbing every worry, running on fragmented sleep and inadequate emotional rest, is operating with depleted physiological resources. And as McEwen and Stellar (1993) demonstrated, the response to any given stressor depends far less on the stressor itself than on the internal resources available at the moment of impact.
              </p>
            </div>
          </div>

          {/* Highlight Box */}
          <div className="my-8 bg-[#F3EDE0] rounded-md p-6 md:p-8">
            <p className="font-serif italic text-lg md:text-xl text-[#3A3530] leading-relaxed">
              &quot;The same behavior that barely registers on Wednesday can send you into orbit on Tuesday. What changed wasn&apos;t your child — it was your internal state.&quot;
            </p>
          </div>

          <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed">
            <p>
              This is why a professional can remain composed through hours of difficult client feedback, then lose control when a six-year-old refuses to put on shoes. The shoes are not the problem. The shoes are the last item placed on a scale that has been tipping all day.
            </p>
          </div>

          {/* Section 4 */}
          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Section 4</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                The Shame Spiral: How Self-Criticism Fuels the Fire
              </h2>
              <p className="text-sm text-[#8A8070] italic mt-1">Why the inner critic is not an asset</p>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                After an explosion, most parents do not give themselves a moment of understanding. They replay every word, apply the harshest possible interpretation, reach for identity-level conclusions (&quot;I&apos;m a terrible parent,&quot; &quot;I&apos;m turning into my mother&quot;), and sustain this internal attack sometimes for hours. This, they believe, is accountability. This will prevent it from happening again.
              </p>
              <p>
                The research says the opposite. Brown (2006) demonstrated that shame — as distinct from guilt, which is &quot;I did something bad,&quot; versus shame, which is &quot;I am bad&quot; — keeps the nervous system on high physiological alert. A dysregulated nervous system is precisely the condition that makes explosive reactions more likely, not less. The parent trying to shame themselves into calm is physiologically activating the very state they are trying to prevent. Self-criticism, far from being a moderating force, is a catalyst.
              </p>
            </div>
          </div>

          {/* Spiral Cards */}
          <div className="my-10 flex flex-col md:flex-row gap-0">
            {[
              { num: "01", text: "Explosion occurs under stress overload" },
              { num: "02", text: "Shame and harsh self-criticism follow" },
              { num: "03", text: "Nervous system stays elevated — next explosion comes faster" },
            ].map((item, i) => (
              <div 
                key={i}
                className={`flex-1 text-center p-6 border border-[#E5E0D4] bg-[#FDFAF5] relative
                  ${i === 0 ? "rounded-t-lg md:rounded-l-lg md:rounded-tr-none" : ""}
                  ${i === 2 ? "rounded-b-lg md:rounded-r-lg md:rounded-bl-none" : ""}
                  ${i !== 0 && i !== 2 ? "border-t-0 md:border-t md:border-l-0" : ""}
                `}
              >
                <span className="font-serif text-4xl font-semibold text-[#DDD3C0] block mb-3">
                  {item.num}
                </span>
                <p className="text-sm text-[#5A5347] leading-relaxed">{item.text}</p>
                {i < 2 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#9B7A4D] rounded-full text-white text-xs flex items-center justify-center">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed">
            <p>
              Neff (2011) offers the empirically supported alternative: self-compassion. Not as an excuse or an avoidance of accountability, but as a physiological de-escalation strategy. Treating oneself after a mistake with the same understanding one would offer a struggling friend activates a calmer neurobiological state — which is, in fact, the precondition for being able to respond differently next time.
            </p>
          </div>

          {/* Section 5 */}
          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Section 5</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                Repair: The Finding That Changes Everything
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                Perhaps the most reliably misunderstood finding in developmental psychology is what actually predicts a child&apos;s emotional health and relational security. The popular assumption is that it correlates with the absence of parental mistakes. The data say something different.
              </p>
              <p>
                Siegel and Hartzell (2003) showed that secure attachment — the developmental condition most robustly associated with emotional resilience, academic success, and healthy adult relationships — is not built through parental perfection. It is built through <strong className="font-semibold text-[#1C1A14]">repair</strong>. Parents who rupture the connection through anger or misattunement, and then return to reconnect, apologize, and restore safety, are not damaging their children. They are teaching them, through lived experience, some of the most valuable lessons available.
              </p>
            </div>
          </div>

          {/* Repair List */}
          <div className="my-8">
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#9B7A4D] mb-3">
              What children learn from effective repair
            </p>
            <div className="border border-[#E5E0D4] rounded-lg overflow-hidden">
              {[
                "That emotions can be felt without destroying relationships.",
                "That accountability is possible without collapse.",
                "That love does not disappear when someone loses control.",
                "That rupture and reconnection are both parts of real intimacy.",
                "That they can trust a parent who admits to being wrong.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 border-b border-[#E5E0D4] last:border-b-0 bg-[#FDFAF5]">
                  <div className="w-5 h-5 rounded-full bg-[#EAE4D8] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-1.5 border-l-2 border-b-2 border-[#9B7A4D] -translate-y-px rotate-[-45deg]" />
                  </div>
                  <span className="text-sm md:text-base text-[#2A2720] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed">
            <p>
              Tronick&apos;s (2007) research on mother-infant interaction showed that even very young infants are not harmed by brief moments of misattunement — they are shaped by them, when repair follows. The repair is not a correction of the rupture. It is, neurologically, the learning event itself.
            </p>
          </div>

          {/* Section 6 */}
          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Section 6</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                A Path Forward That Actually Works
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                The practical implications of this body of research converge on a model that looks quite different from conventional anger advice. &quot;Just breathe&quot; and &quot;count to ten&quot; are not useless, but they address the wrong layer of the problem. They assume the primary challenge is one of in-the-moment willpower. The research suggests the primary challenge is one of cumulative physiological load — and the solution is systemic, not momentary.
              </p>
              <p>
                Effective intervention happens at three distinct points: <em className="italic">before</em> the explosion (through somatic awareness — learning to read the body&apos;s early signals, hours before the breaking point); <em className="italic">during</em> the explosion (through physiological interruption strategies that work with, rather than against, the nervous system); and <em className="italic">after</em> the explosion (through compassionate accountability and structured repair).
              </p>
              <p>
                van der Kolk (2014) emphasizes that regulation begins in the body, not the mind. The parent who learns to notice that their jaw has been clenched for twenty minutes, or that their breathing has gone shallow since the school pickup, has already moved upstream. They are now working with the nervous system&apos;s early-warning system rather than colliding with the explosion after it has already occurred.
              </p>
            </div>
          </div>

          {/* Closing Quote Box */}
          <div className="my-10 p-6 md:p-8 border border-[#D8C8A8] rounded-lg bg-[#F8F2E6]">
            <p className="font-serif italic text-lg md:text-xl text-[#3A3530] leading-relaxed">
              &quot;You don&apos;t need to become a perfectly calm parent. You need to become a regulated one — one who understands their own nervous system, repairs when things go wrong, and keeps choosing awareness over shame.&quot;
            </p>
          </div>

          <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed">
            <p>
              The goal, reframed by the neuroscience, is not the elimination of anger. Anger is information. The goal is sufficient regulation to create space between the feeling and the behavior — enough space to choose what comes next rather than simply executing what the nervous system demands.
            </p>
            <p className="font-serif italic text-[#5A5347]">
              That space, even a fraction of a second wide, is where parenting lives.
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