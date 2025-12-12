import React, { useState } from "react";
import Header from "./components/Header";
import Services from "./components/Services";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Clients from "./components/Clients";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import FAQ from "./components/FAQ";
import FooterForm from "./components/FooterForm";
import ContactModal from "./components/ContactModal";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Header onOpenModal={() => setModalOpen(true)} />

      <main>
        <Services />
        <Features />
        <Pricing />
        <Clients />
        <Testimonials />
        <Team />
        <FAQ />
      </main>

      <FooterForm onOpenModal={() => setModalOpen(true)} />

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
