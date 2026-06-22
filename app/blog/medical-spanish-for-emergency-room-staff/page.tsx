import Link from "next/link";
import Image from "next/image";

const article = {
  category: "Medical Spanish · Emergency Medicine · Critical Care",
  title: "Medical Spanish for Emergency Room Staff",
  subtitle:
    "Critical phrases that save time",
  author: "PraxMed Publishing",
  tag: "Medical Spanish",
  readTime: "11 min read",
  date: "2026-06-20",
};

const references = [
  "Jacobs, E. A., et al. (2007). Overcoming language barriers in health care. Journal of General Internal Medicine, 22(Suppl 2), 297–298.",
  "Flores, G., et al. (2012). The relationship of language barriers to health care utilization and health outcomes. Pediatrics, 129(2), e347–e354.",
  "Burbano O'Leary, S. C., et al. (2003). The need for Spanish language education in medical schools. Academic Medicine, 78(10), 1002–1007.",
];

export default function EmergencySpanishArticle() {
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
              src="/blog/medical-spanish/emergency-room-staff.jpg"
              alt="Emergency room staff communicating in Spanish"
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
              Emergency departments are fast-paced environments where every second matters. When a Spanish-speaking patient arrives with chest pain, difficulty breathing, trauma, or altered mental status, communication becomes critical.
            </p>
            <p>
              The ability to quickly gather information can improve patient safety, accelerate treatment decisions, and reduce medical errors. While professional interpreters remain essential when available, healthcare providers who understand key Medical Spanish phrases can significantly improve emergency care.
            </p>
          </div>

          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Section 1</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                Initial Assessment Questions
              </h2>
              <p className="text-sm text-[#8A8070] italic mt-1">Begin with rapid triage questions</p>
            </div>
          </div>

          <div className="my-8 border border-[#E5E0D4] rounded-lg overflow-hidden">
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#9B7A4D] px-6 pt-4 pb-2">Chief Complaint</p>
            <div className="divide-y divide-[#E5E0D4]">
              {[
                { es: "¿Qué le pasó?", en: "What happened?" },
                { es: "¿Qué siente?", en: "What are you feeling?" },
                { es: "¿Cuál es el problema?", en: "What is the problem?" },
                { es: "¿Cuándo comenzaron los síntomas?", en: "When did the symptoms begin?" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col md:flex-row">
                  <div className="flex-1 p-3 bg-[#F8F4EC]">
                    <p className="text-sm font-medium text-[#1C1A14]">{item.es}</p>
                  </div>
                  <div className="flex-1 p-3 bg-[#FDFAF5]">
                    <p className="text-sm text-[#5A5347] italic">{item.en}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <div className="mb-6">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Section 2</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                Emergency Assessment by Category
              </h2>
            </div>
          </div>

          {[
            {
              title: "Assessing Pain",
              phrases: [
                { es: "¿Dónde le duele?", en: "Where does it hurt?" },
                { es: "¿Cuánto le duele? En una escala del uno al diez, ¿cuánto le duele?", en: "How much does it hurt? On a scale of 1 to 10?" },
                { es: "¿El dolor se mueve a otra parte del cuerpo?", en: "Does the pain radiate anywhere else?" },
              ],
              note: "Pain characteristics often provide valuable diagnostic clues."
            },
            {
              title: "Respiratory Emergencies",
              phrases: [
                { es: "¿Tiene dificultad para respirar?", en: "Do you have difficulty breathing?" },
                { es: "¿Le falta el aire?", en: "Are you short of breath?" },
                { es: "¿Tiene tos?", en: "Do you have a cough?" },
                { es: "¿Tiene dolor al respirar?", en: "Do you have pain when breathing?" },
              ],
            },
            {
              title: "Cardiac Emergencies",
              phrases: [
                { es: "¿Tiene dolor en el pecho?", en: "Do you have chest pain?" },
                { es: "¿Siente presión en el pecho?", en: "Do you feel pressure in your chest?" },
                { es: "¿Tiene palpitaciones?", en: "Do you have palpitations?" },
                { es: "¿El dolor va hacia el brazo o la mandíbula?", en: "Does the pain travel to your arm or jaw?" },
              ],
              note: "These questions can help identify potentially life-threatening conditions."
            },
            {
              title: "Neurological Emergencies",
              phrases: [
                { es: "¿Tiene dolor de cabeza?", en: "Do you have a headache?" },
                { es: "¿Ha perdido el conocimiento?", en: "Have you lost consciousness?" },
                { es: "¿Tiene debilidad en un brazo o una pierna?", en: "Do you have weakness in an arm or leg?" },
                { es: "¿Puede hablar normalmente?", en: "Can you speak normally?" },
              ],
              note: "Early recognition can dramatically improve outcomes."
            },
            {
              title: "Trauma Assessment",
              phrases: [
                { es: "¿Dónde está lesionado?", en: "Where are you injured?" },
                { es: "¿Perdió el conocimiento?", en: "Did you lose consciousness?" },
                { es: "¿Puede mover la pierna?", en: "Can you move your leg?" },
                { es: "¿Puede mover el brazo?", en: "Can you move your arm?" },
              ],
            },
          ].map((category, ci) => (
            <div key={ci} className="mt-8">
              <h3 className="font-serif text-lg font-semibold text-[#1C1A14] mb-3">{category.title}</h3>
              <div className="border border-[#E5E0D4] rounded-lg overflow-hidden mb-3">
                {category.phrases.map((phrase, pi) => (
                  <div key={pi} className="flex flex-col md:flex-row border-b border-[#E5E0D4] last:border-b-0">
                    <div className="flex-1 p-3 bg-[#F8F4EC]">
                      <p className="text-sm font-medium text-[#1C1A14]">{phrase.es}</p>
                    </div>
                    <div className="flex-1 p-3 bg-[#FDFAF5]">
                      <p className="text-sm text-[#5A5347] italic">{phrase.en}</p>
                    </div>
                  </div>
                ))}
              </div>
              {category.note && (
                <p className="text-sm text-[#8A8070] italic">{category.note}</p>
              )}
            </div>
          ))}

          <div className="mt-12">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">Section 3</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1C1A14] mt-2">
                Critical Commands
              </h2>
            </div>
          </div>

          <div className="my-6 border border-[#E5E0D4] rounded-lg overflow-hidden">
            <div className="divide-y divide-[#E5E0D4]">
              {[
                { es: "Respire profundamente.", en: "Take a deep breath." },
                { es: "No se mueva.", en: "Do not move." },
                { es: "Mantenga la calma.", en: "Stay calm." },
                { es: "Necesitamos ayudarle rápidamente.", en: "We need to help you quickly." },
                { es: "Vamos a hacer unos exámenes.", en: "We are going to run some tests." },
              ].map((item, i) => (
                <div key={i} className="flex flex-col md:flex-row">
                  <div className="flex-1 p-3 bg-[#F8F4EC]">
                    <p className="text-sm font-medium text-[#1C1A14]">{item.es}</p>
                  </div>
                  <div className="flex-1 p-3 bg-[#FDFAF5]">
                    <p className="text-sm text-[#5A5347] italic">{item.en}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="my-10 p-6 md:p-8 border border-[#D8C8A8] rounded-lg bg-[#F8F2E6]">
            <p className="font-serif italic text-lg md:text-xl text-[#3A3530] leading-relaxed">
              &ldquo;The ability to ask simple questions in Spanish can help healthcare providers gather critical information faster, improve patient trust, and deliver more effective care.&rdquo;
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
