import { useState,useEffect,useRef } from "react";
import GallerySection from "../components/GallerySection";
import ContactSection from "../components/ContactSection";
import LoginComponent from "../components/LoginComponent";
import ScrollToTop from "../components/ScrollToTop";
import LoginNavbarSection from "../components/LoginNavbarSection";
import AboutSection from "../components/AboutSection";
import PricingSection from "../components/PricingSection";
function LoginPage() {
  const [active, setActive] = useState("Sign in");
   const sections = useRef([
    { id: "pricing", name: "Shop" },
    { id: "about", name: "About us" },
    { id: "gallery", name: "Menu" },
    { id: "contact", name: "Contact" },
    { id: "login", name: "Sign in" },
  ]);
    useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = sections.current.find((s) => s.id === entry.target.id);
          if (section) {
            setActive(section.name);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.current.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.current.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);
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
