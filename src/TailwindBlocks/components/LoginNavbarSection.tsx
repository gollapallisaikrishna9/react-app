import { useState } from "react";

export default function LoginNavbarSection({ active, setActive }) {
  const links = ["Shop", "About us", "Menu", "Contact", "Sign in"];
  const handleNavClick = (section) => {
    let targetId = "";
    if (section === "Menu") targetId = "gallery";
    if (section === "Contact") targetId = "contact";
    if (section === "Sign in") targetId = "login";
    if(section === "About us") targetId = "about";
    if(section === "Shop") targetId="pricing"

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    setActive(section);
  };
  return (
    <div className="p-3 bg-white rounded-b-2xl bg-contain bg-center bg-[url('/src/assets/header-background.png')] ">
      <div className="flex flex-col md:flex-row items-center ">
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center relative space-x-6 ">
          {links.map((link) => (
            <div key={link} className="relative">
              <a
                className={`px-3 p-2 cursor-pointer transition-all duration-300 rounded-full ${
                  active === link
                    ? "bg-[#684312] text-white font-semibold"
                    : "text-black font-bold bg-white"
                }`}
                onClick={() => handleNavClick(link)}
              >
                {link}
              </a>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
