import Link from "next/link";
import Image from "next/image";

const article = {
  category: "Medical Spanish · Clinical Interview · Diagnostic Skills",
  title: "How to Take a Patient History in Spanish",
  subtitle:
    "A step-by-step guide for healthcare professionals",
  author: "PraxMed Publishing",
  tag: "Medical Spanish",
  readTime: "12 min read",
  date: "2026-06-19",
};

const references = [
  "Bickley, L. S., & Szilagyi, P. G. (2017). Bates' guide to physical examination and history taking. Wolters Kluwer.",
  "Ortega, P., et al. (2020). Medical Spanish for the busy clinician. Academic Medicine, 95(3), 481–482.",
  "Flores, G. (2005). The impact of medical interpreter services on the quality of health care. Journal of General Internal Medicine, 20(6), 536–541.",
];

export default function PatientHistoryArticle() {
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
              src="/blog/medical-spanish/how-to-take-patient-history.jpg"
              alt="Taking patient history in Spanish"
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
              One of the most important skills in healthcare is obtaining a thorough patient history. A detailed history often provides more diagnostic information than laboratory tests or imaging studies.
            </p>
            <p>
              However, when language barriers exist, obtaining accurate information becomes significantly more difficult. For healthcare professionals working with Spanish-speaking patients, learning a structured Medical Spanish interview process can dramatically improve communication and diagnostic accuracy.
            </p>
          </div>

          {[
            {
              number: "Step 1", title: "Establish Rapport",
              content: "Begin with simple, welcoming questions.",
              examples: [
                { es: "¿Cómo se llama?", en: "What's your name?" },
                { es: "¿Cómo se siente hoy?", en: "How are you feeling today?" },
                { es: "¿Qué lo trae hoy por aquí?", en: "What brings you here today?" },
              ],
              note: "A calm introduction helps reduce patient anxiety and encourages openness."
            },
            {
              number: "Step 2", title: "Identify the Chief Complaint",
              content: "Determine the primary reason for the visit.",
              examples: [
                { es: "¿Cuál es el problema principal?", en: "What is the main problem?" },
                { es: "¿Qué le preocupa hoy?", en: "What concerns you today?" },
                { es: "¿Cuál es el motivo de la consulta?", en: "What is the reason for today's visit?" },
              ],
              note: "The chief complaint guides the remainder of the interview."
            },
            {
              number: "Step 3", title: "Explore the Current Illness",
              content: "Gather details regarding symptoms.",
              examples: [
                { es: "¿Cuándo comenzaron los síntomas?", en: "When did the symptoms start?" },
                { es: "¿Dónde siente el dolor?", en: "Where do you feel the pain?" },
                { es: "¿Es constante o intermitente?", en: "Is it constant or intermittent?" },
                { es: "¿Qué empeora los síntomas?", en: "What makes the symptoms worse?" },
                { es: "¿Qué los mejora?", en: "What makes them better?" },
              ],
              note: "This information helps build a differential diagnosis."
            },
            {
              number: "Step 4", title: "Assess Pain",
              content: "Pain assessment is essential.",
              examples: [
                { es: "¿Cuánto le duele? En una escala del uno al diez, ¿cuánto le duele?", en: "How much does it hurt? On a scale of 1 to 10?" },
                { es: "¿El dolor es agudo, punzante o ardoroso?", en: "Is the pain sharp, stabbing, or burning?" },
              ],
              note: "Pain quality, intensity, location, and duration provide critical diagnostic clues."
            },
            {
              number: "Step 5", title: "Review Medical History",
              content: "Past medical history often reveals important risk factors.",
              examples: [
                { es: "¿Tiene antecedentes médicos?", en: "Do you have medical history?" },
                { es: "¿Tiene diabetes?", en: "Do you have diabetes?" },
                { es: "¿Tiene hipertensión?", en: "Do you have high blood pressure?" },
                { es: "¿Ha tenido alguna cirugía?", en: "Have you had surgery?" },
                { es: "¿Ha estado hospitalizado anteriormente?", en: "Have you been hospitalized before?" },
              ],
            },
            {
              number: "Step 6", title: "Review Medications and Allergies",
              content: "Medication history is essential for safe care.",
              examples: [
                { es: "¿Qué medicamentos toma actualmente?", en: "What medications do you currently take?" },
                { es: "¿Es alérgico a algún medicamento?", en: "Are you allergic to any medications?" },
                { es: "¿Tiene alguna alergia?", en: "Do you have any allergies?" },
              ],
              note: "Failing to identify allergies can have serious consequences."
            },
            {
              number: "Step 7", title: "Conduct a System Review",
              content: "Depending on the chief complaint, review relevant systems.",
              examples: [
                { es: "¿Tiene dolor en el pecho? ¿Siente palpitaciones?", en: "Chest pain? Palpitations?" },
                { es: "¿Tiene dificultad para respirar? ¿Tiene tos?", en: "Difficulty breathing? Cough?" },
                { es: "¿Tiene náuseas o vómitos? ¿Ha tenido diarrea?", en: "Nausea or vomiting? Diarrhea?" },
                { es: "¿Ha tenido dolores de cabeza? ¿Ha sentido debilidad?", en: "Headaches? Weakness?" },
              ],
              note: "Cardiovascular, respiratory, digestive, and neurological systems should be reviewed as indicated."
            },
            {
              number: "Step 8", title: "Summarize Findings",
              content: "Before moving to examination or testing, summarize key information.",
              examples: [
                { es: "Entonces, el dolor comenzó hace tres días y empeora al caminar, ¿correcto?", en: "So the pain started three days ago and gets worse when walking, correct?" },
              ],
              note: "This confirms understanding and allows correction of misunderstandings."
            },
            {
              number: "Step 9", title: "Explain Next Steps",
              content: "Patients appreciate understanding what happens next.",
              examples: [
                { es: "Voy a examinarlo.", en: "I am going to examine you." },
                { es: "Necesitamos algunos análisis de sangre.", en: "We need some blood tests." },
                { es: "Necesitamos una radiografía.", en: "We need an X-ray." },
                { es: "Voy a explicarle los resultados.", en: "I will explain the results to you." },
              ],
              note: "Clear explanations reduce anxiety and improve cooperation."
            },
          ].map((step, si) => (
            <div key={si} className="mt-10 first:mt-0">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#9B7A4D] flex items-center justify-center text-white text-sm font-semibold">
                  {si + 1}
                </div>
                <div className="flex-1">
                  <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">{step.number}</span>
                  <h2 className="font-serif text-xl md:text-2xl font-semibold text-[#1C1A14] mt-1 mb-3">{step.title}</h2>
                  <p className="text-lg text-[#2A2720] leading-relaxed mb-4">{step.content}</p>
                  
                  <div className="border border-[#E5E0D4] rounded-lg overflow-hidden mb-4">
                    {step.examples.map((ex, ei) => (
                      <div key={ei} className="flex flex-col md:flex-row border-b border-[#E5E0D4] last:border-b-0">
                        <div className="flex-1 p-3 bg-[#F8F4EC]">
                          <p className="text-sm font-medium text-[#1C1A14]">{ex.es}</p>
                        </div>
                        <div className="flex-1 p-3 bg-[#FDFAF5]">
                          <p className="text-sm text-[#5A5347] italic">{ex.en}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {step.note && (
                    <p className="text-sm text-[#8A8070] italic">{step.note}</p>
                  )}
                </div>
              </div>
            </div>
          ))}

          <div className="mt-12 p-6 md:p-8 border border-[#D8C8A8] rounded-lg bg-[#F8F2E6]">
            <p className="font-serif italic text-lg md:text-xl text-[#3A3530] leading-relaxed">
              &ldquo;Patient histories form the foundation of clinical medicine. Every phrase learned increases your ability to deliver better care.&rdquo;
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
