/**
 * This code was generated by Builder.io.
 */
import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import WhyChooseUs from "./WhyChooseUs";
import Benefits from "./Benefits";
import Process from "./Process";
import Services from "./Services";
import ContactForm from "./ContactForm";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Work from "./Work";
import ClientApproach from "./ClientApproach/ClientApproach";

const LandingPage = () => {
  return (
    <div className="max-w-full">
      <Header />
      <main style={{ backgroundColor: "rgba(21, 7, 12, 1)" }}>
        <Hero />
        <Work />
          <WhyChooseUs />
       <Benefits />
       <Process />
       <Services />
       <ClientApproach />
          <ContactForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
