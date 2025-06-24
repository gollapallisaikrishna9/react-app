import React, { useState } from "react";
import GallerySection from "../components/GallerySection";
import ContactSection from "../components/ContactSection";
import LoginComponent from "../components/LoginComponent";
import ScrollToTop from "../components/ScrollToTop";
import LoginNavbarSection from "../components/LoginNavbarSection";
import AboutSection from "../components/AboutSection";
import PricingSection from "../components/PricingSection";
function LoginPage() {
  const [active, setActive] = useState("Sign in");
  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <LoginNavbarSection active={active} setActive={setActive} />
      </div>
      <div>
        <LoginComponent id="login" />
        <GallerySection id="gallery" />
        <PricingSection id="pricing"/>
        <AboutSection id="about"/>
        <ContactSection id="contact" />
        <ScrollToTop setActive={setActive} activeTab={"Sign in"} />
      </div>
    </div>
  );
}

export default LoginPage;
