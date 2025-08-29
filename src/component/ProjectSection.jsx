"use client";
import { motion } from "framer-motion";

// Project Data
const projects = [
  {
    id: 1,
    title: "Realtime Chat App (Frontend)",
    desc: "A realtime chat frontend built with React, featuring authentication, protected routes, and live messaging powered by Socket.IO.",
    tech: ["React", "Tailwind CSS", "Socket.IO"],
    demo: "https://github.com/Anayaraj02/realtime-chat-frontend",
    code: "https://github.com/Anayaraj02/realtime-chat-frontend",
    img: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Realtime Chat Backend",
    desc: "Backend service for realtime chat app, developed with Node.js and Express. Includes JWT authentication, MongoDB storage, and Socket.IO integration for live communication.",
    tech: ["Node.js", "Express", "MongoDB", "Socket.IO"],
    demo: "https://github.com/Anayaraj02/realtime-chat-backend",
    code: "https://github.com/Anayaraj02/realtime-chat-backend",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Todo List",
    desc: "A polished Todo List app with full CRUD functionality, edit/cancel logic, persistent localStorage, and a modern Tailwind-styled UI.",
    tech: ["React", "Tailwind CSS"],
    demo: "https://github.com/Anayaraj02/Todo_List",
    code: "https://github.com/Anayaraj02/Todo_List",
    img: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Jewellery Shop App",
    desc: "An Android-based e-commerce application for a jewellery store, featuring product listing, cart management, and order tracking with a clean UI design.",
    tech: ["Java", "Android Studio", "Firebase"],
    demo: "https://github.com/Anayaraj1/jewellery-shop-",
    code: "https://github.com/Anayaraj1/jewellery-shop-",
    img: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Chatting Application (Android)",
    desc: "A mobile chat application built with Java and Android Studio, supporting user authentication, real-time messaging, and responsive UI layouts.",
    tech: ["Java", "Android Studio", "Firebase"],
    demo: "https://github.com/Anayaraj1/Chatting_Application",
    code: "https://github.com/Anayaraj1/Chatting_Application",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
  },
{
  id: 6,
  title: "Razorpay Testing (Android)",
  desc: "An Android application for simulating and testing Razorpay payment flows using sandbox (Test Mode). Integrated payment initiation, webhook handling, and response validation, enabling seamless end-to-end testing of gateway workflows.",
  tech: ["Java", "Android Studio", "Razorpay SDK", "Sandbox Testing"],
  demo: "https://github.com/Anayaraj1/Razerpay_Testing",
  code: "https://github.com/Anayaraj1/Razerpay_Testing",
  img: "https://images.unsplash.com/photo-1601597111158-5a16521b5b78?auto=format&fit=crop&w=800&q=80", 
}

];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12 text-center"
      >
        🚀 My Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10 w-full max-w-7xl">
        {projects.map((p) => (
          <motion.div
            key={p.id}
            whileHover={{ scale: 1.05 }}
            className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all"
          >
            {/* Project Image */}
            <div className="h-52 w-full overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">{p.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{p.desc}</p>
              <div className="flex gap-2 text-sm flex-wrap mb-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 rounded-lg bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {p.demo === p.code ? (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg shadow-md transition"
                  >
                    View Project
                  </a>
                ) : (
                  <>
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg shadow-md transition"
                    >
                      Demo
                    </a>
                    <a
                      href={p.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-2 rounded-lg shadow-md transition dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
                    >
                      Code
                    </a>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
