import Link from "next/link";
import Image from "next/image";

const article = {
  category: "Medical Spanish · Patient Safety · Health Outcomes",
  title: "How Medical Spanish Improves Patient Safety and Health Outcomes",
  subtitle:
    "The critical role of language in quality healthcare delivery",
  author: "PraxMed Publishing",
  tag: "Medical Spanish",
  readTime: "11 min read",
  date: "2026-06-22",
};

const references = [
  "Flores, G. (2005). The impact of medical interpreter services on the quality of health care. Journal of General Internal Medicine, 20(6), 536–541.",
  "Flores, G., et al. (2012). The relationship of language barriers to health care utilization and health outcomes. Pediatrics, 129(2), e347–e354.",
  "Jacobs, E. A., et al. (2007). Overcoming language barriers in health care. Journal of General Internal Medicine, 22(Suppl 2), 297–298.",
  "Betancourt, J. R., et al. (2003). Defining cultural competence. Journal of General Internal Medicine, 18(4), 293–298.",
  "Diamond, L., et al. (2009). Getting by: Underuse of interpreters by resident physicians. Journal of General Internal Medicine, 24(2), 256–262.",
  "Timmins, C. L. (2002). The impact of language barriers on the health care of Latinos in the United States. Journal of the National Medical Association, 94(6), 463–471.",
];

export default function PatientSafetyArticle() {
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
              src="/blog/medical-spanish/patient-safety-and-health-outcomes.jpg"
              alt="Medical Spanish improving patient safety"
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
              Patient safety depends on communication. Every day, healthcare providers gather information, explain diagnoses, prescribe treatments, and educate patients about their care. When language barriers exist, each of these steps becomes more difficult.
            </p>
            <p>
              For Spanish-speaking patients, communication challenges can directly affect health outcomes. This is why Medical Spanish has become such an important skill in modern healthcare.
            </p>
          </div>

          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Section 1</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                The Link Between Communication and Safety
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                Communication influences nearly every aspect of healthcare. Providers rely on patients to accurately describe symptoms, pain levels, medication use, allergies, and medical history. Patients rely on providers to explain diagnoses, treatment plans, risks, medication instructions, and follow-up care.
              </p>
              <p>
                When communication fails, safety risks increase.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Section 2</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                Reducing Medication Errors
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                Medication mistakes are one of the most common preventable healthcare problems. Patients may misunderstand dosages, timing, side effects, and drug interactions. For example, a patient who misunderstands &ldquo;take twice daily&rdquo; may accidentally take a medication four times per day.
              </p>
              <p>
                Medical Spanish helps providers clearly explain instructions and verify understanding.
              </p>
            </div>
          </div>

          <div className="my-8 bg-[#F3EDE0] rounded-md p-6 md:p-8">
            <p className="font-serif italic text-lg md:text-xl text-[#3A3530] leading-relaxed">
              &ldquo;Better information leads to better clinical decisions.&rdquo;
            </p>
          </div>

          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Section 3</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                Improving Diagnostic Accuracy
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                Accurate diagnosis begins with accurate information. A patient who struggles to describe symptoms may unintentionally provide incomplete information. Healthcare providers who understand Medical Spanish can gather more precise details regarding pain location, symptom duration, severity, triggers, and associated symptoms.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Section 4</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                Increasing Treatment Adherence
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                Patients are more likely to follow treatment recommendations when they understand them. When instructions are communicated clearly, medication adherence improves, follow-up compliance increases, preventive care participation rises, and hospital readmissions may decrease.
              </p>
              <p>
                Understanding creates confidence. Confidence promotes action.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Section 5</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                Building Patient Trust
              </h2>
            </div>
            <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed mt-6">
              <p>
                Trust influences healthcare outcomes more than many people realize. Patients who trust their providers are more likely to share sensitive information, report symptoms honestly, ask questions, and follow recommendations. Speaking even basic Medical Spanish demonstrates respect and commitment.
              </p>
            </div>
          </div>

          <div className="my-8 border border-[#E5E0D4] rounded-lg overflow-hidden bg-[#FDFAF5]">
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#9B7A4D] px-6 pt-4 pb-2">
              Benefits beyond the patient
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[#E5E0D4]">
              {[
                "Improved patient satisfaction",
                "Better quality metrics",
                "Reduced communication errors",
                "Enhanced community trust",
                "Greater provider confidence",
                "Expanded career opportunities",
              ].map((item, i) => (
                <div key={i} className="bg-[#FDFAF5] p-4 text-sm text-[#2A2720] leading-relaxed">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5 text-lg text-[#2A2720] leading-relaxed">
            <p>
              As patient populations become increasingly diverse, multilingual communication skills will continue growing in importance. Medical Spanish is no longer a niche skill. It is becoming a core competency for healthcare professionals committed to delivering safe, effective, and compassionate care.
            </p>
          </div>

          <div className="my-10 p-6 md:p-8 border border-[#D8C8A8] rounded-lg bg-[#F8F2E6]">
            <p className="font-serif italic text-lg md:text-xl text-[#3A3530] leading-relaxed">
              &ldquo;Every phrase learned improves communication. Every conversation strengthens trust. And every improvement in communication creates an opportunity for better patient outcomes. Because in healthcare, words can make a difference. Sometimes, they can save lives.&rdquo;
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
