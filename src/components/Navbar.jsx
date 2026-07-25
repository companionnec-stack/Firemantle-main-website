import logo from "../assets/images/firemantle-logo.png";
import { useState, useEffect } from "react";
import { FaFire } from "react-icons/fa";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLink = (section) =>
    `transition ${
      activeSection === section ? "text-yellow-400" : "hover:text-yellow-400"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-md text-white z-50">
      <div className="max-w-7xl mx-auto px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Firemantle Logo"
            className="w-14 h-14 object-contain"
          />

          <div>
            <h2 className="text-xl font-bold">Firemantle</h2>
            <p className="text-xs text-gray-300">Gospel Outreach Ministry</p>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8">
          <li>
            <a href="#home" className={navLink("home")}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" className={navLink("about")}>
              About
            </a>
          </li>

          <li>
            <a href="#vision" className={navLink("vision")}>
              Vision
            </a>
          </li>

          <li>
            <a href="#ministries" className={navLink("ministries")}>
              Ministries
            </a>
          </li>

          <li>
            <a href="#films" className={navLink("films")}>
              Firemantle Films
            </a>
          </li>

          <li>
            <a href="#gallery" className={navLink("gallery")}>
              Gallery
            </a>
          </li>

          <li>
            <a href="#contact" className={navLink("contact")}>
              Contact
            </a>
          </li>
        </ul>

        {/* Button */}
        <a
          href="#contact"
          className="bg-yellow-500 hover:bg-yellow-400 hover:scale-105 duration-300 px-8 py-4 rounded-full text-black font-bold shadow-xl inline-block"
        >
          Join Us
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
