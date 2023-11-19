import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/heroSection";
import About from "../components/aboutSeciton";
import PurposeSection from "../components/purposeSection";
import ServiceSection from "../components/serviceSection";
import NameTagSections from "../components/nametagSection";
import ReseacrhSection from "../components/researchSection";
import FormSection from "../components/formSection";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <PurposeSection />
        <ServiceSection />
        <NameTagSections />
        <ReseacrhSection />
        <FormSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
