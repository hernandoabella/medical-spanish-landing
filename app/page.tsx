import AboutBook from "./components/AboutBook";
import AboutUs from "./components/AboutUs";
import AboutUsSection from "./components/AboutUs";
import Author from "./components/Author";
import BonusSection from "./components/BonusSection";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import WhatMakesItDifferent from "./components/WhatMakesItDifferent";
import WhatYouWillLearn from "./components/WhatYouWillLearn";

export default function Home() {
  return (
    <main>
      <BonusSection />
      <Hero />
      <AboutUs />
      <AboutBook />
      <WhatYouWillLearn />
      <WhatMakesItDifferent />
      <Author />
      <Testimonials />
      <Faq />
      <Footer />
    </main>
  );
}
