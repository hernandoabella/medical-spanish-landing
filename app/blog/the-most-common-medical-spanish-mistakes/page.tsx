import Link from "next/link";
import Image from "next/image";

const article = {
  category: "Medical Spanish · Language Learning · Clinical Communication",
  title: "The Most Common Medical Spanish Mistakes Healthcare Professionals Make",
  subtitle:
    "And how to avoid them",
  author: "PraxMed Publishing",
  tag: "Medical Spanish",
  readTime: "10 min read",
  date: "2026-06-21",
};

const references = [
  "Ortega, P., et al. (2020). Medical Spanish for the busy clinician. Academic Medicine, 95(3), 481–482.",
  "Diamond, L., & Jacobs, E. A. (2010). Let's not contribute to disparities. Journal of General Internal Medicine, 25(7), 639–640.",
  "Flores, G. (2005). The impact of medical interpreter services on the quality of health care. Journal of General Internal Medicine, 20(6), 536–541.",
];

export default function CommonMistakesArticle() {
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
              src="/blog/medical-spanish/the-most-common-medical-spanish-mistakes.jpg"
              alt="Common Medical Spanish mistakes"
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
              Learning Medical Spanish is one of the best investments a healthcare professional can make. However, many providers make common mistakes that can create confusion, misunderstandings, and even clinical risks.
            </p>
            <p>
              Fortunately, most of these errors are easy to correct once you recognize them.
            </p>
          </div>

          {[
            {
              title: "Assuming Direct Translation Always Works",
              content: "Medical terminology often looks similar in English and Spanish, like diabetes, hipertensión, and cardiología. However, not every word translates directly. Using literal translations can create confusion. Healthcare professionals should learn commonly used clinical phrases rather than relying entirely on word-for-word translation."
            },
            {
              title: "Speaking Too Quickly",
              content: "Many providers know enough Spanish to communicate basic information. The problem? They speak too quickly. Patients may understand the vocabulary but struggle with speed. Slowing down improves comprehension dramatically. Simple, clear communication is often more effective than advanced vocabulary."
            },
            {
              title: "Using Technical Language",
              content: "Patients generally do not understand complex medical terminology. This applies in both English and Spanish. Instead of highly technical terms, use plain language whenever possible. For example, instead of 'insuficiencia respiratoria aguda,' consider 'tiene problemas graves para respirar.'"
            },
            {
              title: "Ignoring Pronunciation",
              content: "Pronunciation matters. Mispronouncing words can create confusion. For example, 'año' means year while 'ano' means anus. A small pronunciation difference completely changes the meaning. Practicing pronunciation is just as important as learning vocabulary."
            },
            {
              title: "Forgetting Cultural Context",
              content: "Language and culture are interconnected. Many Spanish-speaking patients may use traditional remedies, involve family in medical decisions, or have different expectations regarding healthcare. Providers who understand cultural context communicate more effectively."
            },
            {
              title: "Not Confirming Understanding",
              content: "Many patients nod politely even when they do not fully understand instructions. Always verify comprehension. Ask: '¿Entiende las instrucciones?' (Do you understand the instructions?) and '¿Puede repetirlas con sus propias palabras?' (Can you repeat them in your own words?). This technique significantly reduces misunderstandings."
            },
            {
              title: "Relying Completely on Translation Apps",
              content: "Translation technology can be helpful, but medical communication is complex. Apps may miss context, misinterpret symptoms, or produce inaccurate translations. Technology should support communication, not replace clinical judgment."
            },
            {
              title: "Skipping Medical Spanish Training",
              content: "Many professionals attempt to learn Medical Spanish through general language courses. General Spanish and Medical Spanish are different. Clinical communication requires symptom vocabulary, examination phrases, emergency terminology, and treatment instructions. Focused Medical Spanish training produces faster and more practical results."
            },
          ].map((mistake, mi) => (
            <div key={mi} className="mt-8 first:mt-0">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C47A6B] flex items-center justify-center text-white text-sm font-semibold">
                  {mi + 1}
                </div>
                <div className="flex-1">
                  <h2 className="font-serif text-xl font-semibold text-[#1C1A14] mb-3">{mistake.title}</h2>
                  <p className="text-lg text-[#2A2720] leading-relaxed">{mistake.content}</p>
                </div>
              </div>
            </div>
          ))}

          <div className="my-10 p-6 md:p-8 border border-[#D8C8A8] rounded-lg bg-[#F8F2E6]">
            <p className="font-serif italic text-lg md:text-xl text-[#3A3530] leading-relaxed">
              &ldquo;Healthcare professionals do not need perfect Spanish. Patients generally appreciate sincere efforts to communicate. Every phrase learned improves care. Every conversation builds confidence.&rdquo;
            </p>
          </div>

          <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed">
            <p className="font-serif italic text-[#5A5347]">
              The goal is not perfection. The goal is better communication, stronger relationships, and safer patient care.
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
              This article draws from <span className="font-medium not-italic">&quot;Medical Spanish&quot;</span> by PraxMed Publishing.
            </p>
            <Link 
              href="https://www.amazon.com/-/es/Praxmed-Publishing-ebook/dp/B0G9VMBH6W"
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
