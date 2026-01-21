import Author from "./components/Author";
import BonusSection from "./components/BonusSection";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import RetailerLogos from "./components/RetailerLogos";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <BonusSection />
      <Hero2 />
      <Author />
      <RetailerLogos />
      <Testimonials />
      <Faq />
      <Footer />
    </main>
  );
}
