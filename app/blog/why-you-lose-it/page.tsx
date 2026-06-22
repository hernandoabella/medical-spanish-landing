import Link from "next/link";
import Image from "next/image";

const article = {
  category: "Neuroscience · Polyvagal Theory · Emotional Regulation",
  title: "Why You Lose It",
  subtitle:
    "The neuroscience behind parenting triggers",
  author: "M. Eliza Rowen",
  tag: "Breaking Generational Trauma",
  readTime: "14 min read",
  date: "2026-06-12",
};

const references = [
  "Bowlby, J. (1988). A secure base. Basic Books.",
  "Damasio, A. (1994). Descartes' error: Emotion, reason, and the human brain. Putnam.",
  "LeDoux, J. (1996). The emotional brain. Simon & Schuster.",
  "Porges, S. W. (2011). The polyvagal theory. W. W. Norton.",
  "Schore, A. N. (2003). Affect regulation and the repair of the self. W. W. Norton.",
  "Siegel, D. J. (2012). The developing mind (2nd ed.). Guilford Press.",
  "Siegel, D. J., & Bryson, T. P. (2014). No-drama discipline. Bantam Books.",
  "van der Kolk, B. (2014). The body keeps the score. Viking.",
];

export default function WhyYouLoseItArticle() {
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
              src="/blog/breaking-generational-trauma/why-you-lose-it.jpg"
              alt="Parent experiencing emotional overwhelm"
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
              You promised yourself you wouldn&apos;t yell. You swore you would be patient. You read the parenting books, listened to the podcasts, and genuinely wanted to do things differently than your parents did.
            </p>
            <p>
              And yet, one afternoon, your child refuses to put on their shoes, argues for the tenth time, or melts down in the grocery store—and suddenly you&apos;re yelling, threatening, shutting down, or reacting in ways that leave you feeling ashamed afterward.
            </p>
            <p>
              If you&apos;ve ever asked yourself &ldquo;Why do I keep losing it?&rdquo;—the answer may have less to do with parenting skills and more to do with your nervous system.
            </p>
          </div>

          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Section 1</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                Your Brain Is Built for Survival, Not Parenting
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                The human nervous system evolved to keep us alive. Thousands of years ago, detecting danger quickly meant survival. As a result, your brain developed an incredibly efficient threat detection system.
              </p>
              <p>
                At the center of this system is a small structure called the amygdala. The amygdala constantly scans your environment looking for signs of danger. When it detects a threat, it activates the body&apos;s stress response before your thinking brain even understands what&apos;s happening.
              </p>
              <p>
                Heart rate increases. Breathing changes. Muscles tighten. Stress hormones flood the bloodstream. The body prepares for action. This process happens in milliseconds.
              </p>
              <p>
                The problem is that your nervous system cannot always distinguish between actual danger and emotional triggers. To your nervous system, a child screaming at you may activate some of the same pathways that once responded to genuine threats.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Section 2</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                Parenting Triggers Are Usually Not About the Present Moment
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                One of the most surprising discoveries in trauma research is that strong emotional reactions often have very little to do with what is happening right now.
              </p>
              <p>
                A parenting trigger occurs when a current situation activates unresolved emotional material from the past. The spilled milk is not really about the milk. The backtalk is not really about the backtalk. The tantrum is not really about the tantrum. Something deeper is being activated.
              </p>
            </div>
          </div>

          <div className="my-8 bg-[#F3EDE0] rounded-md p-6 md:p-8">
            <p className="font-serif italic text-lg md:text-xl text-[#3A3530] leading-relaxed">
              &ldquo;A parent who grew up feeling ignored may become intensely reactive when a child doesn&apos;t listen. A parent raised in a highly critical home may feel overwhelming shame when their child struggles academically. The present moment acts as a doorway to older emotional experiences.&rdquo;
            </p>
          </div>

          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Section 3</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                Understanding Polyvagal Theory
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                Neuroscientist Stephen Porges developed Polyvagal Theory, a framework that helps explain why people react so differently under stress. According to this theory, the nervous system operates in three primary states.
              </p>
            </div>
          </div>

          <div className="my-8 space-y-6">
            {[
              {
                title: "Ventral Vagal State: Connection and Safety",
                desc: "Your optimal parenting state. When your nervous system feels safe, you can think clearly, stay emotionally available, remain flexible, empathize with your child, and respond instead of react. Connection comes naturally.",
                color: "border-[#6B9E7A] bg-[#F0F7F2]"
              },
              {
                title: "Sympathetic State: Fight or Flight",
                desc: "When the nervous system detects danger, it mobilizes. This is where many parenting blowups occur. Signs include irritability, anger, yelling, anxiety, defensiveness, and controlling behavior. Your child often becomes perceived as the threat.",
                color: "border-[#C47A6B] bg-[#FDF2EE]"
              },
              {
                title: "Dorsal Vagal State: Shutdown and Disconnection",
                desc: "Some parents don't explode—they disappear emotionally. Signs include emotional numbness, withdrawal, exhaustion, feeling detached, and lack of emotional availability. Children often experience this emotional absence just as strongly as overt anger.",
                color: "border-[#7A8BA8] bg-[#EEF2F8]"
              },
            ].map((state, i) => (
              <div key={i} className={`border-l-4 ${state.color} rounded-r-lg p-5`}>
                <h3 className="font-serif text-lg font-semibold text-[#1C1A14] mb-2">{state.title}</h3>
                <p className="text-sm md:text-base text-[#2A2720] leading-relaxed">{state.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Section 4</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                The Window of Tolerance
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                Psychiatrist Dan Siegel introduced the concept of the Window of Tolerance—the zone where your nervous system functions best. Inside the window, you can think clearly, tolerate emotions, solve problems, and stay connected.
              </p>
              <p>
                Outside the window, parenting becomes significantly harder. Above the window, you enter hyperarousal: rage, panic, anxiety, reactivity. Below the window, you enter hypoarousal: numbness, disconnection, withdrawal, shutdown.
              </p>
              <p>
                Parents with trauma histories often have a narrower window of tolerance. This doesn&apos;t make them bad parents. It simply means their nervous systems become overwhelmed more easily. The good news is that the window can be expanded.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Section 5</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                How to Interrupt a Trigger Before It Takes Over
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                The goal isn&apos;t to eliminate triggers. Every parent gets triggered. The goal is to recognize activation earlier.
              </p>
            </div>
          </div>

          <div className="my-8 border border-[#E5E0D4] rounded-lg overflow-hidden bg-[#FDFAF5]">
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#9B7A4D] px-6 pt-4 pb-2">
              Warning signals in the body
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[#E5E0D4]">
              {[
                "Tight jaw",
                "Racing heart",
                "Clenched fists",
                "Tight chest",
                "Shallow breathing",
                "Heat in the face",
              ].map((item, i) => (
                <div key={i} className="bg-[#FDFAF5] p-4 text-sm text-[#2A2720] leading-relaxed">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed">
            <p>
              These sensations often appear before the reaction. Think of them as warning lights on the dashboard. When you notice them: Pause. Take three slow breaths. Relax your shoulders. Ground your feet. Lower your voice. Create even a few seconds of space before responding. Those few seconds can completely change the outcome of an interaction.
            </p>
          </div>

          <div className="my-10 p-6 md:p-8 border border-[#D8C8A8] rounded-lg bg-[#F8F2E6]">
            <p className="font-serif italic text-lg md:text-xl text-[#3A3530] leading-relaxed">
              &ldquo;The goal is not a nervous system that never becomes activated. The goal is a nervous system that returns to regulation more quickly.&rdquo;
            </p>
          </div>

          <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed">
            <p>
              Every time you pause instead of explode, every time you repair after a mistake, and every time you choose awareness over automatic reaction, you are teaching your child something powerful: strong emotions are safe, relationships can recover, and cycles can end.
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
