import Link from "next/link";
import Image from "next/image";

const article = {
  category: "Neuroplasticity · Habit Formation · Long-Term Change",
  title: "You Can Rewire Your Anger",
  subtitle:
    "Why willpower alone never works — and what the neuroscience of habit formation actually says about breaking the pattern for good",
  author: "M. Eliza Rowen",
  tag: "Behavioral Neuroscience",
  readTime: "13 min read",
  date: "2026-06-10",
};

const buildingSteps = [
  {
    n: "1",
    title: "Recognition practice — earlier and earlier",
    text: "The competing pathway cannot be accessed if the cue is not recognized until Stage 4 of escalation, when the prefrontal cortex is already offline. Recognition needs to be practiced until it becomes automatic at Stages 1 and 2 — the tight jaw, the shallow breath, the thoughts beginning to accelerate. This requires daily body-check practice in low-stakes moments, not just crisis attention during high-stakes ones.",
  },
  {
    n: "2",
    title: "A specific, physical incompatible response",
    text: 'The new pathway needs a concrete, embodied action — not a vague intention to "be calmer." Walking to the bathroom, pressing palms together, the physiological sigh, stepping outside. It must be physically incompatible with exploding, simple enough to remember under activation, and specific enough to practice deliberately. "Do this" outperforms "don\'t do that" in every habit formation study (Duhigg, 2012).',
  },
  {
    n: "3",
    title: "Repetition in low-stakes moments — this is the critical step",
    text: "Most parents practice the new response only when already highly activated — precisely when it is least accessible. The competing pathway must be rehearsed when calm or mildly irritated: the repeated question, the minor frustration, the spilled coffee. Marcus practiced his incompatible response every time someone cut him off in traffic — dozens of times over weeks. When his son spilled juice, his body executed the new pathway automatically.",
  },
  {
    n: "4",
    title: "Positive reinforcement of micro-successes",
    text: 'Research on habit formation shows that positive reinforcement strengthens new pathways more effectively than self-criticism strengthens old ones (Wood & Rünger, 2016). Noticing small wins — "I felt the rage and paused for five seconds before responding; that\'s different from last month" — is not self-indulgence. It is accurate feedback that activates the brain\'s learning system and reinforces the new pathway.',
  },
];

const foundationRows = [
  {
    label: "Sleep",
    text: "Even one poor night shrinks the window of tolerance and raises amygdala reactivity (Yoo et al., 2007)",
    color: "#185FA5",
    bg: "#E6F1FB",
  },
  {
    label: "Movement",
    text: "15–20 min daily discharges stress hormones and measurably increases regulation capacity (Ratey, 2008)",
    color: "#3B6D11",
    bg: "#EAF3DE",
  },
  {
    label: "Connection",
    text: "Nervous systems co-regulate through safe human contact; chronic isolation sustains chronic activation (Porges, 2011)",
    color: "#854F0B",
    bg: "#FAEEDA",
  },
];

const references = [
  "Doidge, N. (2007). The brain that changes itself. Viking.",
  "Duhigg, C. (2012). The power of habit: Why we do what we do in life and business. Random House.",
  "Gailliot, M. T., & Baumeister, R. F. (2007). The physiology of willpower. Personality and Social Psychology Review, 11(4), 303–327.",
  "Graybiel, A. M. (2008). Habits, rituals, and the evaluative brain. Annual Review of Neuroscience, 31, 359–387.",
  "Gross, J. J. (2015). Emotion regulation: Current status and future prospects. Psychological Inquiry, 26(1), 1–26.",
  "Hebb, D. O. (1949). The organization of behavior: A neuropsychological theory. Wiley.",
  "Porges, S. W. (2011). The polyvagal theory. W. W. Norton.",
  "Prochaska, J. O., & DiClemente, C. C. (1983). Stages and processes of self-change of smoking. Journal of Consulting and Clinical Psychology, 51(3), 390–395.",
  "Ratey, J. J., & Hagerman, E. (2008). Spark: The revolutionary new science of exercise and the brain. Little, Brown.",
  "Schwabe, L., & Wolf, O. T. (2009). Stress prompts habit behavior in humans. Journal of Neuroscience, 29(22), 7191–7198.",
  "Wood, W., & Rünger, D. (2016). Psychology of habit. Annual Review of Psychology, 67, 289–314.",
  "Yoo, S. S., et al. (2007). The human emotional brain without sleep. Current Biology, 17(20), R877–R878.",
];

export default function RewireAngerPage() {
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
              src="/blog/parenting/rewire-your-anger.jpg"
              alt="Parent practicing mindfulness and emotional regulation"
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
              Three months into actively practicing new responses, Sarah navigated her daughter&apos;s public meltdown without yelling. She felt the familiar heat rise, the tightness in her chest. She paused, took three breaths, and spoke calmly. The bigger realization came that evening: <em className="italic">I didn&apos;t even think about it. My body just knew what to do.</em>
            </p>
            <p>
              That moment — when the new response stops being a deliberate effort and begins to be an automatic one — is what the neuroscience of long-term behavior change is actually pointing toward. Not perfection. Not the elimination of anger. But a fundamental shift in which neural pathway fires first: the old explosive one, or the new regulated one. Understanding how that shift happens — and why every previous attempt based on willpower alone was neurologically doomed — changes everything about how a parent approaches the long game.
            </p>
          </div>

          {/* Part One */}
          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Part One</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                Why Willpower Was Never Going to Work
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                Every parent who has struggled with explosive anger has tried willpower. The morning resolution: today will be different. The silent vow made in the car after another explosion. The promise repeated so many times it has become a kind of private liturgy. And yet the evening arrives, the trigger appears, and the same pattern fires.
              </p>
              <p>
                This is not a failure of character or commitment. It is a failure to understand what is actually being fought. Willpower is a prefrontal cortex function — it requires the deliberate, conscious application of reasoning and impulse control. But explosive anger, after years of repetition, does not live in the prefrontal cortex. It lives in the basal ganglia, the brain&apos;s habit system. It has become, through thousands of repetitions, an automatic pattern that fires before the prefrontal cortex has any opportunity to intervene (Graybiel, 2008).
              </p>
              <p>
                Hebb&apos;s (1949) foundational principle — that neurons that fire together, wire together — explains the mechanism precisely. Every time a parent has responded to a specific stress cue with explosive anger, that neural pathway has been strengthened. After hundreds or thousands of repetitions across years or decades, the pathway has become a superhighway: fast, deep, and nearly frictionless.
              </p>
            </div>
          </div>

          {/* Habit Loop */}
          <div className="my-8 grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5E0D4] border border-[#E5E0D4] rounded-lg overflow-hidden">
            <div className="bg-[#FDFAF5] p-5">
              <span className="text-xs font-semibold tracking-[0.12em] uppercase text-[#9B7A4D] block mb-2">Cue</span>
              <h3 className="font-serif text-base font-semibold text-[#1C1A14] mb-1">The trigger</h3>
              <p className="text-sm text-[#5A5347] leading-relaxed">Child&apos;s behavior + depleted internal state</p>
            </div>
            <div className="bg-[#FDFAF5] p-5">
              <span className="text-xs font-semibold tracking-[0.12em] uppercase text-[#9B7A4D] block mb-2">Routine</span>
              <h3 className="font-serif text-base font-semibold text-[#1C1A14] mb-1">The automatic response</h3>
              <p className="text-sm text-[#5A5347] leading-relaxed">Explosive pattern fires — practiced thousands of times</p>
            </div>
            <div className="bg-[#FDFAF5] p-5">
              <span className="text-xs font-semibold tracking-[0.12em] uppercase text-[#9B7A4D] block mb-2">Reward</span>
              <h3 className="font-serif text-base font-semibold text-[#1C1A14] mb-1">The brief relief</h3>
              <p className="text-sm text-[#5A5347] leading-relaxed">Pressure releases; control temporarily restored — pathway reinforced</p>
            </div>
          </div>

          <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed">
            <p>
              Duhigg (2012) documented this cue-routine-reward loop as the architecture of all habitual behavior. The reward — the brief physiological relief of pressure release, the momentary restoration of a sense of control — is what reinforces the loop every single time it completes. The parent does not enjoy yelling. But the nervous system records the release that follows it as a form of reward, and the pathway strengthens accordingly. Willpower, operating after the cue has already fired and the routine is already in motion, is asking the brain to override a deeply grooved automatic process with a deliberate one. It cannot reliably do this.
            </p>
          </div>

          {/* Part Two */}
          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Part Two</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                The Good News: Neuroplasticity Is Real
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                The same mechanism that built the explosive pathway can build a different one. Neuroplasticity — the brain&apos;s capacity to form new neural connections throughout life — is not a metaphor or a motivational concept. It is a documented biological reality (Doidge, 2007). The parent at forty has the same capacity to build new neural pathways as the parent at twenty-five. The pathways take time to establish, and they require repetition rather than intention. But they form.
              </p>
              <p>
                The practical implication is both demanding and genuinely hopeful. The old explosive pathway cannot be deleted — that is not how the brain works. But it can be outcompeted. A new pathway, built through consistent deliberate practice over months, can become fast enough, strong enough, and automatic enough to fire before the old one does. The goal is not eliminating the old route. It is making the new one the default.
              </p>
            </div>
          </div>

          {/* Pull Quote */}
          <div className="my-10 border-l-3 border-[#9B7A4D] pl-6 py-2">
            <blockquote className="font-serif italic text-xl text-[#3A3530] leading-relaxed">
              &quot;You&apos;ve been practicing explosive anger for years — sometimes decades. You built a neural superhighway. Building the new pathway won&apos;t take as long, but it will take more than a few weeks. That&apos;s not failure. That&apos;s just how brains work.&quot;
            </blockquote>
            <cite className="text-xs font-semibold tracking-[0.06em] uppercase text-[#9B7A4D] not-italic mt-2 block">
              Rowen, drawing on Doidge (2007) and Graybiel (2008)
            </cite>
          </div>

          {/* Highlight Box */}
          <div className="my-8 bg-[#F3EDE0] rounded-md p-6 md:p-8">
            <p className="font-serif italic text-lg md:text-xl text-[#3A3530] leading-relaxed">
              &quot;I kept expecting to be &apos;fixed&apos; after a few weeks of trying. My therapist explained I&apos;d been practicing this response for forty years. I&apos;d built a massive pathway. Building a competing one would take time — not forty years, but more than a few weeks. That reframe was weirdly relieving. I wasn&apos;t failing. I was just at the beginning of actual rewiring.&quot;
            </p>
            <cite className="block mt-3 text-xs font-semibold tracking-[0.08em] uppercase text-[#9B7A4D] not-italic">
              Daniel, father of three
            </cite>
          </div>

          {/* Part Three */}
          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Part Three</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                Building the Competing Pathway
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                The research on habit formation and neural pathway development converges on a four-component model for building a competing automatic response. Each component has a specific function in the rewiring process, and each is necessary. The framework is not complicated. Executing it consistently, over time, is.
              </p>
            </div>
          </div>

          {/* Building Steps */}
          <div className="my-8 border border-[#E5E0D4] rounded-lg overflow-hidden">
            {buildingSteps.map((step, i) => (
              <div key={i} className={`flex gap-4 p-5 bg-[#FDFAF5] ${i < buildingSteps.length - 1 ? 'border-b border-[#E5E0D4]' : ''}`}>
                <div className="w-8 h-8 rounded-full bg-[#EAE4D8] flex items-center justify-center flex-shrink-0">
                  <span className="font-serif text-sm font-semibold text-[#9B7A4D]">{step.n}</span>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-[0.01em] text-[#1C1A14] mb-1">{step.title}</p>
                  <p className="text-sm text-[#5A5347] leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Part Four */}
          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Part Four</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                The Stress Reversion Problem — and What It Actually Means
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                Progress in rewiring anger patterns is not linear. Parents who have practiced consistently for months will encounter weeks — after an illness, a financial shock, a relationship rupture, a period of sustained sleep deprivation — when the old explosive pathway reasserts itself as if the new one never existed. This is the moment that most commonly leads to the conclusion that nothing has changed, that the work was wasted, that the pattern is unbreakable.
              </p>
              <p>
                This conclusion is neurologically inaccurate. Schwabe and Wolf (2009) documented the stress reversion phenomenon: under high stress or when regulatory resources are significantly depleted, the brain reliably defaults to the most deeply established automatic patterns, even ones that have been substantially replaced in normal conditions. This is not regression. It is the brain&apos;s emergency resource-conservation strategy.
              </p>
            </div>
          </div>

          {/* Pathway Compare */}
          <div className="my-8 grid grid-cols-1 md:grid-cols-3 bg-[#E5E0D4] border border-[#E5E0D4] rounded-lg overflow-hidden">
            <div className="bg-[#FDFAF5] p-5">
              <span className="text-xs font-semibold tracking-[0.12em] uppercase text-[#A32D2D] block mb-3">Old pathway</span>
              <ul className="space-y-2">
                <li className="text-sm text-[#3A3530] pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-[#C8BEAE]">Decades of repetition</li>
                <li className="text-sm text-[#3A3530] pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-[#C8BEAE]">Fires under any stress level</li>
                <li className="text-sm text-[#3A3530] pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-[#C8BEAE]">Deep, fast, automatic</li>
                <li className="text-sm text-[#3A3530] pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-[#C8BEAE]">Requires no resources</li>
              </ul>
            </div>
            <div className="bg-[#F3EDE0] flex items-center justify-center p-3 md:p-0">
              <div className="w-8 h-8 rounded-full bg-[#9B7A4D] flex items-center justify-center text-white text-sm">→</div>
            </div>
            <div className="bg-[#FDFAF5] p-5">
              <span className="text-xs font-semibold tracking-[0.12em] uppercase text-[#3B6D11] block mb-3">New pathway</span>
              <ul className="space-y-2">
                <li className="text-sm text-[#3A3530] pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-[#C8BEAE]">Months of deliberate practice</li>
                <li className="text-sm text-[#3A3530] pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-[#C8BEAE]">Accessible under moderate stress</li>
                <li className="text-sm text-[#3A3530] pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-[#C8BEAE]">Growing stronger over time</li>
                <li className="text-sm text-[#3A3530] pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-[#C8BEAE]">Requires some resources initially</li>
              </ul>
            </div>
          </div>

          {/* Progress Callout */}
          <div className="my-8 border-l-4 border-[#3B6D11] bg-[#EAF3DE] rounded-r-md p-5">
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#3B6D11] mb-2">What progress actually looks like</p>
            <p className="text-sm text-[#2A2720] leading-relaxed">
              Rachel, a mother of two tracking her patterns over six months, described it precisely: &quot;I used to think any explosion meant I was back to square one. But I was recovering faster. Exploding once or twice a month instead of once or twice a day. Repairing that same evening instead of avoiding my kids for days. Returning to my new patterns the next morning instead of spiraling for a week. The reversions were becoming outliers, not the norm. That&apos;s progress, even when it doesn&apos;t feel like it.&quot;
            </p>
          </div>

          {/* Part Five */}
          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Part Five</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                The Foundation Beneath the Techniques
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                There is a limit to what any set of in-the-moment techniques can accomplish if the physiological foundation beneath them is chronically compromised. Gross (2015) documented that emotional regulation capacity is not fixed — it can be developed through practice. But that development requires conditions that support it. A nervous system operating on four hours of sleep, skipped meals, social isolation, and no physical movement does not have the neurobiological resources to consistently access newly built pathways, however diligently they have been practiced.
              </p>
              <p>
                Maria&apos;s therapist framed it directly after months of technique-based work that wasn&apos;t holding: &quot;You can&apos;t regulate your way out of chronic depletion. We need to address the life circumstances making regulation impossible.&quot; The techniques were sound. The foundation was quicksand. Sleep, nutrition, movement, and meaningful adult connection are not lifestyle aspirations — they are the biological conditions under which the prefrontal cortex can function.
              </p>
            </div>
          </div>

          {/* Foundation Rows */}
          <div className="my-8 border border-[#E5E0D4] rounded-lg overflow-hidden">
            {foundationRows.map((row, i) => (
              <div key={i} className={`flex flex-wrap items-start gap-3 p-4 bg-[#FDFAF5] ${i < foundationRows.length - 1 ? 'border-b border-[#E5E0D4]' : ''}`}>
                <span 
                  className="text-xs font-semibold tracking-[0.08em] uppercase px-2 py-1 rounded flex-shrink-0"
                  style={{ background: row.bg, color: row.color }}
                >
                  {row.label}
                </span>
                <p className="text-sm text-[#3A3530] leading-relaxed flex-1">{row.text}</p>
              </div>
            ))}
          </div>

          {/* Part Six */}
          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Part Six</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                Measuring What Actually Indicates Progress
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                The standard against which most parents measure their progress — never losing control, always staying calm, achieving some permanent state of parental serenity — is not only unachievable but not what the research on healthy emotional regulation even describes as the goal. Regulation is not the elimination of intense emotion. It is the development of sufficient capacity to hold intense emotion without immediately discharging it onto a child.
              </p>
              <p>
                Jennifer, tracking her own patterns across six months with a simple daily log, found what she could not feel in the day-to-day: explosions had moved from near-daily to once or twice a week. Repair was happening the same evening rather than after days of avoidance. Dysregulation was resolving in thirty to sixty minutes rather than lasting hours. None of these shifts felt dramatic inside them. Together, they represented substantial and meaningful change.
              </p>
              <p>
                Prochaska and DiClemente&apos;s (1983) transtheoretical model of behavior change established that sustainable change happens through repeated practice with inevitable lapses — not through perfect execution. The lapses are not interruptions of the process. They are, in a technical sense, part of it: moments that stress-test the new pathway, reveal remaining vulnerabilities, and — when met with recommitment rather than collapse — ultimately strengthen the new route.
              </p>
            </div>
          </div>

          {/* Closing Quote Box */}
          <div className="my-10 p-6 md:p-8 border border-[#D8C8A8] rounded-lg bg-[#F8F2E6]">
            <p className="font-serif italic text-lg md:text-xl text-[#3A3530] leading-relaxed">
              &quot;You are not becoming a parent who never feels angry. You are becoming a parent who feels intensely angry and still has somewhere to put it besides your child. That gap — between the feeling and the action — is everything. And it grows.&quot;
            </p>
            <cite className="block mt-3 text-xs font-semibold tracking-[0.08em] uppercase text-[#9B7A4D] not-italic">
              Rowen, M.E., Anger Management for Explosive Parents (2025)
            </cite>
          </div>

          <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed">
            <p>
              The parent being built through this work is not a calmer version of their former self. They are a more spacious one — with a larger container for difficult emotion, a more reliable early-warning system, a practiced repertoire of incompatible responses, and a relationship with their own mistakes that is governed by accountability rather than shame. That inheritance — the template of what a person does when they are at their worst and choose differently — may be the most durable thing a parent passes on.
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