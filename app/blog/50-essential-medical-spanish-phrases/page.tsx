import Link from "next/link";
import Image from "next/image";

const article = {
  category: "Medical Spanish · Clinical Communication · Patient Care",
  title: "50 Essential Medical Spanish Phrases Every Nurse and Doctor Should Know",
  subtitle:
    "Core vocabulary for immediate clinical use with Spanish-speaking patients",
  author: "PraxMed Publishing",
  tag: "Medical Spanish",
  readTime: "14 min read",
  date: "2026-06-18",
};

const references = [
  "Ortega, P., et al. (2020). Medical Spanish for the busy clinician. Academic Medicine, 95(3), 481–482.",
  "Diamond, L., & Jacobs, E. A. (2010). Let's not contribute to disparities: The role of language proficiency in health care. Journal of General Internal Medicine, 25(7), 639–640.",
  "Burbano O'Leary, S. C., et al. (2003). The need for Spanish language education in medical schools. Academic Medicine, 78(10), 1002–1007.",
];

export default function MedicalSpanishPhrasesArticle() {
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
              src="/blog/medical-spanish/50-essential-medical-spanish-phrases.jpg"
              alt="Medical Spanish vocabulary for healthcare professionals"
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
              When treating Spanish-speaking patients, even a basic knowledge of Medical Spanish can dramatically improve communication, patient trust, and clinical efficiency.
            </p>
            <p>
              The good news? You don&apos;t need complete fluency to make a difference. Learning a core group of frequently used phrases can immediately improve your patient interactions.
            </p>
            <p>
              Here are 50 essential Medical Spanish phrases every healthcare professional should know.
            </p>
          </div>

          {[
            { title: "Patient Introduction", icon: "01", phrases: [
              { es: "¿Cómo se llama?", en: "What's your name?" },
              { es: "¿Cómo se siente?", en: "How are you feeling?" },
              { es: "¿Qué lo trae hoy por aquí?", en: "What brings you in today?" },
              { es: "¿Cuántos años tiene?", en: "How old are you?" },
              { es: "¿Habla inglés?", en: "Do you speak English?" },
            ]},
            { title: "Pain Assessment", icon: "02", phrases: [
              { es: "¿Dónde le duele?", en: "Where does it hurt?" },
              { es: "¿Cuánto le duele?", en: "How much does it hurt?" },
              { es: "En una escala del uno al diez, ¿cuánto le duele?", en: "On a scale of 1 to 10, how severe is the pain?" },
              { es: "¿Es un dolor constante?", en: "Is it constant pain?" },
              { es: "¿Cuándo comenzó el dolor?", en: "When did the pain start?" },
            ]},
            { title: "Medical History", icon: "03", phrases: [
              { es: "¿Tiene antecedentes médicos?", en: "Do you have medical history?" },
              { es: "¿Tiene diabetes?", en: "Do you have diabetes?" },
              { es: "¿Tiene hipertensión?", en: "Do you have high blood pressure?" },
              { es: "¿Ha tenido alguna cirugía?", en: "Have you had surgery?" },
              { es: "¿Tiene alguna condición crónica?", en: "Do you have any chronic conditions?" },
            ]},
            { title: "Allergies", icon: "04", phrases: [
              { es: "¿Es alérgico a algún medicamento?", en: "Are you allergic to any medications?" },
              { es: "¿Tiene alguna alergia?", en: "Do you have any allergies?" },
              { es: "¿Qué medicamento le causó la reacción?", en: "Which medication caused the reaction?" },
            ]},
            { title: "Respiratory Symptoms", icon: "05", phrases: [
              { es: "¿Tiene dificultad para respirar?", en: "Do you have difficulty breathing?" },
              { es: "¿Tiene tos?", en: "Do you have a cough?" },
              { es: "¿Tiene fiebre?", en: "Do you have a fever?" },
              { es: "Respire profundamente.", en: "Take a deep breath." },
              { es: "Inhale y exhale lentamente.", en: "Inhale and exhale slowly." },
            ]},
            { title: "Cardiovascular Symptoms", icon: "06", phrases: [
              { es: "¿Tiene dolor en el pecho?", en: "Do you have chest pain?" },
              { es: "¿Siente palpitaciones?", en: "Do you feel palpitations?" },
              { es: "Voy a tomarle la presión arterial.", en: "I am going to check your blood pressure." },
              { es: "Voy a tomarle el pulso.", en: "I am going to take your pulse." },
            ]},
            { title: "Physical Examination", icon: "07", phrases: [
              { es: "Voy a examinarlo.", en: "I am going to examine you." },
              { es: "Relájese.", en: "Relax." },
              { es: "Dígame si le duele.", en: "Tell me if it hurts." },
              { es: "Levante el brazo.", en: "Raise your arm." },
              { es: "Abra la boca.", en: "Open your mouth." },
              { es: "Respire normalmente.", en: "Breathe normally." },
            ]},
            { title: "Laboratory and Imaging", icon: "08", phrases: [
              { es: "Necesitamos análisis de sangre.", en: "We need blood tests." },
              { es: "Necesitamos una radiografía.", en: "We need an X-ray." },
              { es: "Necesitamos una tomografía.", en: "We need a CT scan." },
              { es: "Necesitamos una resonancia magnética.", en: "We need an MRI." },
            ]},
            { title: "Treatment Instructions", icon: "09", phrases: [
              { es: "Tome este medicamento.", en: "Take this medication." },
              { es: "Una tableta cada ocho horas.", en: "One tablet every eight hours." },
              { es: "Necesita descansar.", en: "You need to rest." },
              { es: "Beba más agua.", en: "Drink more water." },
              { es: "Regrese en una semana.", en: "Come back in one week." },
            ]},
            { title: "Emergency Situations", icon: "10", phrases: [
              { es: "Mantenga la calma.", en: "Stay calm." },
              { es: "Necesitamos actuar rápidamente.", en: "We need to act quickly." },
              { es: "Llame a un familiar.", en: "Call a family member." },
              { es: "Lo llevaremos a urgencias.", en: "We will take you to the emergency room." },
            ]},
            { title: "Closing the Visit", icon: "11", phrases: [
              { es: "¿Tiene alguna pregunta?", en: "Do you have any questions?" },
              { es: "¿Entiende las instrucciones?", en: "Do you understand the instructions?" },
              { es: "Gracias por venir.", en: "Thank you for coming." },
              { es: "Que tenga un buen día.", en: "Have a good day." },
            ]},
          ].map((category, ci) => (
            <div key={ci} className="mt-10 first:mt-0">
              <div className="mb-4">
                <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9B7A4D]">{category.icon}</span>
                <h2 className="font-serif text-xl md:text-2xl font-semibold text-[#1C1A14] mt-1">{category.title}</h2>
              </div>
              <div className="border border-[#E5E0D4] rounded-lg overflow-hidden">
                {category.phrases.map((phrase, pi) => (
                  <div key={pi} className="flex flex-col md:flex-row border-b border-[#E5E0D4] last:border-b-0">
                    <div className="flex-1 p-4 bg-[#F8F4EC]">
                      <p className="text-base font-medium text-[#1C1A14]">{phrase.es}</p>
                    </div>
                    <div className="flex-1 p-4 bg-[#FDFAF5]">
                      <p className="text-base text-[#5A5347] italic">{phrase.en}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-12 p-6 md:p-8 border border-[#D8C8A8] rounded-lg bg-[#F8F2E6]">
            <p className="font-serif italic text-lg md:text-xl text-[#3A3530] leading-relaxed">
              &ldquo;Mastering these 50 phrases will immediately improve communication with Spanish-speaking patients and provide a strong foundation for further Medical Spanish learning.&rdquo;
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
