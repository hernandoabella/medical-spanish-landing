import AboutBook from "./components/AboutBook";
import AboutUsSection from "./components/AboutUs";
import Author from "./components/Author";
import BonusSection from "./components/BonusSection";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import WhatMakesItDifferent from "./components/WhatMakesItDifferent";
import WhatYouWillLearn from "./components/WhatYouWillLearn";
import WhoItsFor from "./components/WhoItsFor";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutBook />
      <WhatYouWillLearn />
      <BonusSection />
      <AboutUsSection />
      <WhatMakesItDifferent />
      <Author />
      <WhoItsFor />
      <Testimonials />
      <Faq />
      <Footer />
    </main>
  );
}
