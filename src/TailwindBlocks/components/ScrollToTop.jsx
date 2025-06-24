import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = ({ setActive, activeTab }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Show/hide button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setActive(activeTab); // Update active tab to "Home"
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-10 right-5 bg-TextColor text-BgColor p-3 rounded-full shadow-lg transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <FaArrowUp size={20} />
    </button>
  );
};

export default ScrollToTop;
