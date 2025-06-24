import React, { useState } from "react";
import NavbarSection from "../components/NavbarSection";
import HeroSection from "../components/HeroSection";
import Content from "../components/Content";
import GallerySection from "../components/GallerySection";
import HoverSection from "../components/HoverSection";
import FeatureSection from "../components/FeatureSection";
import PricingSection from "../components/PricingSection";
import TeamSection from "../components/TeamSection";
import TestimonalSection from "../components/TestimonalSection";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";
import ScrollToTop from "../components/ScrollToTop";

function LandingPage({ change, theme }) {
  const [active, setActive] = useState("Home");
  return (
    <div>
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <NavbarSection
          change={change}
          theme={theme}
          setActive={setActive}
          active={active}
        />
      </div>

      {/* Content starts AFTER navbar */}
      <div className="pt-16">
        <HeroSection id="hero" />
        <Content />
        <GallerySection id="gallery" />
        <HoverSection />
        <FeatureSection />
        <PricingSection id="pricing"/>
        <TeamSection />
        <TestimonalSection />
        <FooterSection />
        <ContactSection id="contact" />
        <ScrollToTop setActive={setActive} activeTab={"Home"} />
      </div>
    </div>
  );
}

export default LandingPage;
