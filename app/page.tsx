import Author from "./components/Author";
import BonusSection from "./components/BonusSection";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Nwesletter from "./components/Nwesletter";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <BonusSection />
      <Hero2 />
      <Nwesletter />
      <Author />
      <Testimonials />
      <Faq />
      <Footer />
    </main>
  );
}
