import React, { useState } from "react";
import { StepCake } from "../../svgs/StepCake";
function NavbarSection({ change, theme, setActive, active }) {
  const links = ["Home", "Products", "Contact", "Log out"];
  /**
   * Function to navigate to that particular section on click of that link
   * @param {*} section
   */
  const handleNavClick = (section) => {
    let targetId = "";
    if (section === "Home") targetId = "hero";
    if (section === "Products") targetId = "gallery";
    if (section === "Contact") targetId = "contact";
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    setActive(section);
  };
  return (
    <section>
      <header className="body-font bg-BgColor">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <StepCake />
            <p className="ml-3 text-xl text-TextColor">Cake Store</p>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center relative space-x-6">
            {links.map((link) => (
              <div key={link} className="relative">
                <a
                  className={`px-2 py-1 cursor-pointer text-TextColor ${
                    active === link ? "font-semibold" : ""
                  }`}
                  onClick={() => handleNavClick(link)}
                >
                  {link}
                </a>
                {/* Bottom slider */}
                {active === link && (
                  <div className="absolute bottom-[-3px] left-1/2 transform -translate-x-1/2 w-full h-[4px] bg-blue-600 transition-all duration-300 rounded-full"></div>
                )}
              </div>
            ))}
          </nav>
          <div className="flex justify-center md:justify-end mt-4 md:mt-0 md:ml-5">
            <label className="relative inline-flex items-center cursor-pointer ">
              <input
                type="checkbox"
                className="sr-only peer"
                onChange={change}
                checked={theme === "dark"}
              />
              <div className="w-14 h-7 bg-gray-200 rounded-full peer-checked:bg-blue-600 peer-checked:after:translate-x-7 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all"></div>
              <span className="ml-3 text-sm font-medium text-TextColor">
                {theme === "dark" ? "Dark Mode" : "Light Mode"}
              </span>
            </label>
          </div>
        </div>
      </header>
    </section>
  );
}

export default NavbarSection;
