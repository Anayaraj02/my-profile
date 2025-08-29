"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Typing effect
function TypingText({ text="", className="" }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;
      if (index === text.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, [text]);

  return <p className={className}>{displayedText}</p>;
}

function About() {
  const description = [
    "Front-End Developer with 1.5 years of experience in building responsive and modular web applications using React.js, Svelte.js, and Next.js.",
    "Skilled in implementing Micro Frontend architectures, optimizing UI performance, and integrating GraphQL APIs.",
    "Demonstrated ability to deliver scalable solutions in Agile environments, with hands-on experience in SaaS and healthcare domains.",
  ];

  const highlighted = [
    "Micro Frontend architectures",
    "GraphQL APIs",
    "scalable solutions",
    "Agile environments",
    "SaaS",
    "healthcare domains",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden"
      >
        <div className="absolute inset-0 animate-gradient-bg z-0"></div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 animate-gradient-x"
        >
          Hi, I'm Anaya
        </motion.h1>  

        <TypingText
          text="Frontend Developer | 2 Years Experience"
          className="relative z-10 text-2xl mb-6 text-white dark:text-gray-200"
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.3 } },
          }}
          className="flex flex-col gap-2 relative z-10 max-w-xl"
        >
          {description.map((text, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.3 }}
              className="text-white dark:text-gray-200"
            >
              {text.split(new RegExp(`(${highlighted.join("|")})`, "g")).map((part, i) =>
                highlighted.includes(part) ? <strong key={i}>{part}</strong> : part
              )}
            </motion.p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex gap-4 mt-6 relative z-10 flex-wrap justify-center"
        >
          <a
            href="#projects"
            className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transform transition-all duration-300 hover:bg-gradient-to-r hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 hover:text-white"
          >
            My Work
          </a>
          <a
            href="#contact"
            className="border border-white px-6 py-3 rounded-full font-semibold hover:scale-105 transform transition-all duration-300 hover:bg-white hover:text-purple-600"
          >
          About Me
          </a>
        </motion.div>
      </section>
    </div>
  );
}

export default About;
