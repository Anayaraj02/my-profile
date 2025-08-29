"use client";

import { useState, useEffect } from "react";
import SkillsSection from "@/component/SkillsSection";
import ContactSection from "@/component/ContactSection";
import ProjectsSection from "@/component/ProjectSection";
import FloatingSocials from "@/component/FloatingSocials";
import Timeline from "@/component/Timeline";
import About from "@/component/About";

export default function PortfolioPage() {
  const [darkMode, setDarkMode] = useState(false);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") setDarkMode(true);
  }, []);

  // Apply theme & save
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-sans text-gray-800 dark:text-gray-100 dark:bg-gray-900 transition-colors duration-500">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-md z-50 flex justify-between items-center px-8 py-4">
        {/* Left Side Navigation */}
        <div className="flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative font-semibold text-gray-700 dark:text-gray-200 hover:text-purple-600 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-purple-600 after:transition-all hover:after:w-full"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Right Side - Download + Dark Mode */}
        <div className="flex items-center gap-4">
          {/* Download Resume */}
          <a
            href="/Anaya-1.pdf" // Place your resume inside the "public" folder
            download
            className="px-4 py-2 text-sm font-semibold bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition"
          >
            Download Resume
          </a>

          {/* Dark Mode Toggle */}
          {/* <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button> */}
        </div>
      </nav>

      {/* Hero Section */}
      <About />

      {/* About / Timeline Section */}
      <Timeline />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Floating Social Icons */}
      <FloatingSocials />

      {/* Footer */}
      <footer className="py-6 text-center bg-white dark:bg-gray-800 mt-10">
        © 2025 Anaya Raj. Built with Next.js, Tailwind CSS & Framer Motion.
      </footer>
    </div>
  );
}
