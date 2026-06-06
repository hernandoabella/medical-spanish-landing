import Link from "next/link";
import Image from "next/image";

const article = {
  category: "Behavioral Neuroscience · Parent-Child Dynamics",
  title: "What Yelling Actually Does",
  subtitle:
    "For three seconds, it feels like relief. Then comes everything else — what the brain does, what the child hears, and why the strategy that feels like control is the clearest proof you've lost it",
  author: "M. Eliza Rowen",
  tag: "Child & Family Psychology",
  readTime: "13 min read",
  date: "2026-06-08",
};

const hijackSteps = [
  {
    label: "Trigger",
    text: "The child's behavior — defiance, a particular tone, one more demand — registers as threat. Not physical danger. Emotional threat: feeling disrespected, overwhelmed, or invisible.",
  },
  {
    label: "Detection — 12ms",
    text: "The amygdala detects the threat and fires before conscious awareness registers anything. LeDoux (1996) established that the amygdala can respond in as little as 12 milliseconds — far faster than the cortex can intervene.",
  },
  {
    label: "Alarm cascade",
    text: "Stress hormones flood the body. Heart rate accelerates. Muscles tense. Blood flow is rerouted away from the prefrontal cortex — responsible for reasoning, empathy, and impulse control (Arnsten, 2009).",
  },
  {
    label: "Automatic reaction",
    text: "The explosion occurs. Words arrive louder, sharper, meaner than intended. The parent experiences it as something that happened to them rather than by them — because neurologically, that is accurate.",
  },
  {
    label: "Aftermath",
    text: "The prefrontal cortex comes back online. The parent sees clearly what happened. The guilt — immediate, heavy, familiar — floods in. Stress hormones peak and begin to decline within 20–30 minutes if the cycle is not restarted through rumination (Sapolsky, 2004).",
  },
];

const intendedVsEncoded = [
  { intended: '"Listen when I speak."', encoded: '"My behavior makes the person who loves me dangerous."' },
  { intended: '"There are consequences for bad choices."', encoded: '"Love is conditional on my behavior."' },
  { intended: '"Respect authority."', encoded: '"Power belongs to whoever is loudest."' },
  { intended: '"Your needs matter."', encoded: '"My feelings and needs cause problems for others."' },
];

const references = [
  "Arnsten, A. F. T. (2009). Stress signalling pathways that impair prefrontal cortex structure and function. Nature Reviews Neuroscience, 10(6), 410–422.",
  "Baumrind, D. (1991). The influence of parenting style on adolescent competence and substance use. Journal of Early Adolescence, 11(1), 56–95.",
  "Bowlby, J. (1988). A secure base: Parent-child attachment and healthy human development. Basic Books.",
  "Cosmides, L., & Tooby, J. (2000). Evolutionary psychology and the emotions. Handbook of Emotions (2nd ed.). Guilford Press.",
  "Cummings, E. M., & Davies, P. T. (2002). Effects of marital conflict on children. Journal of Child Psychology and Psychiatry, 43(1), 31–63.",
  "Gershoff, E. T. (2002). Corporal punishment by parents and associated child behaviors. Psychological Bulletin, 128(4), 539–579.",
  "Goleman, D. (1995). Emotional intelligence: Why it can matter more than IQ. Bantam Books.",
  "Gross, J. J., & Levenson, R. W. (1997). Hiding feelings: The acute effects of inhibiting negative and positive emotion. Journal of Abnormal Psychology, 106(1), 95–103.",
  "Lazarus, R. S., & Folkman, S. (1984). Stress, appraisal, and coping. Springer.",
  "LeDoux, J. (1996). The emotional brain: The mysterious underpinnings of emotional life. Simon & Schuster.",
  "Rankin, C. H., et al. (2009). Habituation revisited. Neurobiology of Learning and Memory, 92(2), 135–138.",
  "Sapolsky, R. M. (2004). Why zebras don't get ulcers (3rd ed.). Henry Holt.",
  "Siegel, D. J. (1999). The developing mind. Guilford Press.",
  "Tottenham, N., et al. (2010). Prolonged institutional rearing and amygdala volume. Developmental Science, 13(1), 46–61.",
];

export default function YellingArticlePage() {
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
              src="/blog/parenting/what-yelling-actually-does.jpg"
              alt="Parent yelling at child with hands up, showing frustration and anger"
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
              Brandon describes it the same way every time: a tightening in the chest, a pressure that builds for minutes or hours, and then — when his daughter says the wrong thing at the wrong moment — a snap. The yelling erupts. &quot;It feels relieving for about three seconds,&quot; he says. &quot;Then the guilt is crushing.&quot;
            </p>
            <p>
              Those three seconds are the subject of this article. Not as moral judgment, but as neuroscience. What is actually happening in those three seconds — in the parent&apos;s brain, in the child&apos;s brain, and in the space between them — turns out to be one of the most illuminating entry points into why explosive parenting persists, why strategies so often fail, and what would actually need to change for the pattern to break.
            </p>
          </div>

          {/* Part One */}
          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Part One</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                The Discharge Mechanism
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                Yelling is not random. It is not, at its root, a failure of character or care. It is a physiological discharge event — the nervous system&apos;s fastest available method for releasing accumulated pressure. Understood in purely functional terms, it works. The pressure drops. The valve opens. For approximately three seconds, the body experiences relief.
              </p>
              <p>
                Research on emotional expression and suppression (Gross & Levenson, 1997) demonstrates that suppressed emotions create measurable physiological tension: elevated heart rate, increased cortisol, sustained muscle tension. The body is genuinely pressurized. Yelling depressurizes it fast — releasing built-up tension, reasserting a sense of dominance when the parent has felt powerless, signaling urgency through volume in a way that instantly demands attention (Cosmides & Tooby, 2000).
              </p>
              <p>
                This is why it feels, in the moment, like the only option. Because to the nervous system, in that state, it functionally is. The thinking brain — the prefrontal cortex, responsible for pausing, perspective-taking, and choosing a considered response — has already gone offline. What remains is a system in survival mode, using the tools survival mode provides.
              </p>
            </div>
          </div>

          {/* Pull Quote */}
          <div className="my-10 border-l-3 border-[#9B7A4D] pl-6 py-2">
            <blockquote className="font-serif italic text-xl text-[#3A3530] leading-relaxed">
              &quot;Yelling doesn&apos;t give you control. It proves you&apos;ve lost it. And somewhere beneath the relief, you already know that — which is exactly why the guilt arrives so fast.&quot;
            </blockquote>
          </div>

          {/* Part Two */}
          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Part Two</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                The Hijack Sequence
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                Psychologist Daniel Goleman coined the term &quot;amygdala hijack&quot; to describe the moment the emotional brain overrides the rational brain entirely (Goleman, 1995). It is not a metaphor. It is a measurable neurological event, and it unfolds in a specific sequence that explains why the explosion so frequently arrives before the parent has any conscious sense of being angry.
              </p>
            </div>
          </div>

          {/* Hijack Sequence Diagram */}
          <div className="my-8 bg-[#F8F4EC] border border-[#E5E0D4] rounded-lg p-6 md:p-8">
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#9B7A4D] mb-6">
              The amygdala hijack sequence
            </p>
            <div className="space-y-0">
              {hijackSteps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#9B7A4D] mt-1.5" />
                    {i < hijackSteps.length - 1 && <div className="w-px flex-1 bg-[#D8D0C0] min-h-[24px]" />}
                  </div>
                  <div className="pb-5 last:pb-0">
                    <p className="text-xs font-semibold tracking-[0.08em] uppercase text-[#9B7A4D] mb-1">
                      {step.label}
                    </p>
                    <p className="text-sm text-[#3A3530] leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed">
            <p>
              The sequence takes seconds. The impact is longer. And the most clinically significant detail — the one that explains why good parents with strong parenting values keep repeating the behavior they most want to stop — is this: knowledge lives in the prefrontal cortex. During the hijack, the prefrontal cortex is offline. The parent knows exactly what to do. They simply cannot access that knowledge in the moment it is needed.
            </p>
            <p>
              This is why &quot;just calm down&quot; and &quot;count to ten&quot; fail so reliably. They are cognitive strategies directed at a region that has, temporarily, left the building. Being told to reason during a hijack is, as one parent described it, &quot;like being asked to use a calculator that isn&apos;t there.&quot;
            </p>
          </div>

          {/* Part Three */}
          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Part Three</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                What the Child Hears
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                The parent believes they are communicating a message: stop doing that, listen to me, this is serious. This is not what the child receives. What the child&apos;s nervous system registers — through the same neurological architecture — is noise, threat, and danger.
              </p>
              <p>
                Research on children&apos;s emotional processing (Tottenham et al., 2010) confirms that when children perceive threat from a caregiver, their capacity to process verbal information decreases significantly while amygdala activity increases. The child is not ignoring the content of what is being said. Their brain has, in this moment, limited capacity to process it.
              </p>
            </div>
          </div>

          {/* Three Column Child */}
          <div className="my-8 grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5E0D4] border border-[#E5E0D4] rounded-lg overflow-hidden">
            <div className="bg-[#FDFAF5] p-5">
              <span className="text-xs font-semibold tracking-[0.12em] uppercase text-[#185FA5] block mb-3">What parent intends</span>
              <ul className="space-y-2">
                <li className="text-sm text-[#3A3530] pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-[#C8BEAE]">Stop this behavior</li>
                <li className="text-sm text-[#3A3530] pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-[#C8BEAE]">Understand why it&apos;s wrong</li>
                <li className="text-sm text-[#3A3530] pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-[#C8BEAE]">Listen to me</li>
                <li className="text-sm text-[#3A3530] pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-[#C8BEAE]">Respect the boundary</li>
              </ul>
            </div>
            <div className="bg-[#FDFAF5] p-5">
              <span className="text-xs font-semibold tracking-[0.12em] uppercase text-[#993556] block mb-3">What child registers</span>
              <ul className="space-y-2">
                <li className="text-sm text-[#3A3530] pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-[#C8BEAE]">Threat and fear</li>
                <li className="text-sm text-[#3A3530] pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-[#C8BEAE]">Danger from a caregiver</li>
                <li className="text-sm text-[#3A3530] pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-[#C8BEAE]">Need to comply or escape</li>
                <li className="text-sm text-[#3A3530] pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-[#C8BEAE]">Survival response activates</li>
              </ul>
            </div>
            <div className="bg-[#FDFAF5] p-5">
              <span className="text-xs font-semibold tracking-[0.12em] uppercase text-[#854F0B] block mb-3">What child learns</span>
              <ul className="space-y-2">
                <li className="text-sm text-[#3A3530] pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-[#C8BEAE]">Compliance stops the danger</li>
                <li className="text-sm text-[#3A3530] pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-[#C8BEAE]">Emotions cause chaos</li>
                <li className="text-sm text-[#3A3530] pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-[#C8BEAE]">My needs are problems</li>
                <li className="text-sm text-[#3A3530] pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-[#C8BEAE]">Adults resolve conflict with volume</li>
              </ul>
            </div>
          </div>

          <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed">
            <p>
              This is the functional paradox of yelling as a parenting tool: it achieves compliance in the short term through fear, but it does not teach. Gershoff (2002) documented that while fear-based discipline produces obedient behavior in the short term, it correlates consistently with lower self-esteem, higher anxiety, and diminished capacity for internal moral reasoning in the long term.
            </p>
            <p>
              There is a further dimension: the implicit lessons encoded through repetition. Bowlby&apos;s (1988) attachment theory established that children form internal working models of relationships — templates for what they can expect from others, what their own worth is — through accumulated interactions with caregivers. When those interactions are frequently characterized by explosive anger, the working model that takes shape carries specific beliefs, none of which the parent ever intended to teach.
            </p>
          </div>

          {/* Intended vs Encoded Table */}
          <div className="my-8 border border-[#E5E0D4] rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 bg-[#F3EDE0]">
              <span className="text-xs font-semibold tracking-[0.12em] uppercase text-[#9B7A4D] p-3 text-center border-b md:border-b-0 md:border-r border-[#E5E0D4]">Intended lesson</span>
              <span className="text-xs font-semibold tracking-[0.12em] uppercase text-[#9B7A4D] p-3 text-center">Encoded belief</span>
            </div>
            {intendedVsEncoded.map((row, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-2 border-t border-[#E5E0D4]">
                <div className="p-4 text-sm font-serif italic text-[#5A5347] border-b md:border-b-0 md:border-r border-[#E5E0D4]">
                  {row.intended}
                </div>
                <div className="p-4 text-sm font-serif italic text-[#A32D2D]">
                  {row.encoded}
                </div>
              </div>
            ))}
          </div>

          {/* Highlight Box */}
          <div className="my-8 bg-[#F3EDE0] rounded-md p-6 md:p-8">
            <p className="font-serif italic text-lg md:text-xl text-[#3A3530] leading-relaxed">
              &quot;I don&apos;t remember most of the specific incidents. But I remember the feeling — constant monitoring, watching for signs, trying to be invisible. I remember how small I felt. That feeling has shaped every relationship I&apos;ve had since.&quot;
            </p>
          </div>

          {/* Part Four */}
          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Part Four</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                The Window of Tolerance — and Why It Keeps Narrowing
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                Dan Siegel&apos;s concept of the &quot;window of tolerance&quot; (Siegel, 1999) offers one of the most practically useful frameworks in this field. Inside the window, the nervous system can handle stress: the parent can listen without defensiveness, set limits calmly, tolerate frustration, feel empathy. Outside the window, the parent is in survival mode — rigid, reactive, disconnected from both their own values and their child&apos;s experience.
              </p>
              <p>
                The window is not fixed. It widens and narrows daily based on sleep quality, nutritional state, accumulated stress, physical health, and social support. The parent who handles the same behavior gracefully on Tuesday and explosively on Wednesday is not a hypocrite. Their window was narrower on Wednesday. This is not a character observation. It is a physiological one.
              </p>
              <p>
                What makes this clinically significant is the role of habituation. Rankin et al. (2009) demonstrated that repeated exposure to the same stimulus reduces its impact over time. Children&apos;s nervous systems adapt to parental yelling. They require more intensity to produce the same compliance response. The parent finds themselves escalating — louder, more frequent, with diminishing returns. The window of the relationship narrows in both directions simultaneously.
              </p>
            </div>
          </div>

          {/* Pull Quote */}
          <div className="my-10 border-l-3 border-[#9B7A4D] pl-6 py-2">
            <blockquote className="font-serif italic text-xl text-[#3A3530] leading-relaxed">
              &quot;Real authority doesn&apos;t come from volume or intimidation. It comes from consistency, clarity, and connection. And those things cannot coexist with rage.&quot;
            </blockquote>
          </div>

          {/* Part Five */}
          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Part Five</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                The Trigger Is Not the Cause
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                &quot;They made me yell.&quot; This statement — sincerely held, genuinely felt — is one of the most consequential beliefs in the psychology of parental anger. Because if the child&apos;s behavior is the cause of the explosion, the parent is a passive recipient of the child&apos;s choices. They have no agency. They are waiting for the child to change so they can feel calmer.
              </p>
              <p>
                The distinction between trigger and cause is not semantic. A trigger is an external event that activates an internal response. The cause — the origin of the intensity, the loss of control, the particular wound that particular moment touches — is inside the parent. It is their stress level, their history, their unmet needs, their accumulated load, their own childhood experience of disrespect or powerlessness. The child&apos;s behavior is the match. The parent provides the fuel.
              </p>
              <p>
                Lazarus and Folkman&apos;s (1984) cognitive appraisal model makes this explicit: identical situations produce vastly different responses across individuals based entirely on internal appraisal — the unconscious assessment of threat level relative to available resources. Two parents face the same defiant child. One is rested, supported, and resourced. The other is depleted, isolated, and carrying the weight of everything unaddressed. The child&apos;s behavior is the same. The responses are not.
              </p>
              <p>
                Reclaiming the cause as internal is not an exercise in self-blame. It is, precisely, the opposite: an act of agency. The parent who accepts that their response belongs to them — not as a verdict on their character, but as an honest account of their nervous system — has something the parent who blames their child does not: the ability to act on what is actually within their control.
              </p>
            </div>
          </div>

          {/* Closing Quote Box */}
          <div className="my-10 p-6 md:p-8 border border-[#D8C8A8] rounded-lg bg-[#F8F2E6]">
            <p className="font-serif italic text-lg md:text-xl text-[#3A3530] leading-relaxed">
              The work is not controlling the child. It is understanding the self. Not eliminating anger — which is neither possible nor desirable — but developing sufficient awareness of the internal state to catch the hijack before it catches you. To notice the jaw clenched for twenty minutes. The shallow breath. The thoughts accelerating. That is where the three seconds of relief give way to something more durable: the moment before the snap, which belongs, entirely, to the parent — and which is, it turns out, the most important moment of all.
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