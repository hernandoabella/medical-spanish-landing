import Author from "./components/Author";
import BreakingGenerationalTraumaSection from "./components/BreakingGenerationalTraumaSection";
import BookGridPage from "./components/BookGridPage";
import BonusSection from "./components/BonusSection";
import BooksDivider from "./components/BookDivider";
import Faq from "./components/Faq";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import Nwesletter from "./components/Nwesletter";
import RaisingEISection from "./components/Raisingeisection";
import Testimonials from "./components/Testimonials";

const featuredBooks = [
  {
    title: "Medical Spanish for Healthcare Professionals",
    image: "/book-mockupz-2.png",
    description:
      "A practical guide for healthcare professionals who want clearer, more confident communication with Spanish-speaking patients.",
    accent: "#0B8288",
    actions: [
      {
        label: "Buy on Amazon",
        url: "https://www.amazon.com/-/es/Praxmed-Publishing-ebook/dp/B0G9VMBH6W",
      },
    ],
  },
  {
    title: "Raising Emotionally Intelligent Children",
    image: "/raising.jpg",
    description:
      "Practical strategies for helping children build empathy, resilience, and confidence in everyday family life.",
    accent: "#1A7A8A",
    actions: [
      {
        label: "Buy on Amazon",
        url: "https://www.amazon.com/-/es/Praxmed-Publishing-ebook/dp/B0GKWC93RZ",
      },
    ],
  },
  {
    title: "Anxious Attachment Workbook For Parents",
    image: "/anxius.jpg",
    description:
      "A supportive workbook for parents who want calmer responses, more emotional safety, and stronger connection at home.",
    accent: "#514189",
    actions: [
      {
        label: "Buy on Amazon",
        url: "https://www.amazon.com/-/es/Praxmed-Publishing-ebook/dp/B0GQXCYHXZ",
      },
    ],
  },
  {
    title: "Anger Management for Explosive Parents",
    image: "/book-mockup2.jpg",
    description:
      "A practical guide for breaking yelling patterns, repairing trust, and responding with more calm and consistency.",
    accent: "#264C62",
    actions: [
      {
        label: "Buy on Amazon",
        url: "https://www.amazon.com/-/es/Praxmed-Publishing-ebook/dp/B0GGJ3GPDF",
      },
    ],
  },
  {
    title: "Manejo de la Ira Para Padres Explosivos",
    image: "/manejo-de-la-ira.jpg",
    description:
      "The Spanish-language edition for parents who want to regulate anger, stop yelling, and reconnect with their children.",
    accent: "#E8773A",
    actions: [
      {
        label: "Buy on Amazon",
        url: "https://www.amazon.com/-/es/Praxmed-Publishing-ebook/dp/B0GT6T8SWK",
      },
    ],
  },
  {
    title: "Breaking Generational Trauma for Parents",
    image: "/breaking-generational-trauma-for-parents.jpg",
    description:
      "A parent-focused guide for recognizing inherited patterns, building healthier responses, and creating a safer family dynamic.",
    accent: "#0B8288",
    actions: [
      {
        label: "Buy on Amazon",
        url: "https://www.amazon.com/-/es/gp/product/B0FNX6ZC6C",
      },
    ],
  },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <BookGridPage
        eyebrow="Featured Library"
        title="Explore the full book collection."
        description="See the complete catalog side by side right from the start, with previews and direct purchase links where available."
        books={featuredBooks}
      />
      <BonusSection />
      <Hero2 />
      <BooksDivider />
      <RaisingEISection />
      <BooksDivider />
      <Hero3 />
      <BreakingGenerationalTraumaSection />
      <Nwesletter />
      <Author />
      <Testimonials />
      <Faq />
    </main>
  );
}
