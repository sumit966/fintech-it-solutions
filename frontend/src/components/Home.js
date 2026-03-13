import Hero from "../sections/Hero";
import WhatWeDo from "../sections/WhatWeDo";
import WhoWeAre from "../sections/WhoWeAre";
import CareersPreview from "../sections/CareersPreview";
import ContactSection from "../sections/ContactSection";

export default function Home() {
  return (
    <main className="pt-16">
      <section id="hero"><Hero /></section>
      <section id="whatwedo"><WhatWeDo /></section>
      <section id="whoweare"><WhoWeAre /></section>
      <section><CareersPreview /></section>
      <section id="contact"><ContactSection /></section>
    </main>
  );
}
