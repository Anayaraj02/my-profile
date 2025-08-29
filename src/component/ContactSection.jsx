"use client";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Let’s Connect
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-pink-500 text-2xl" />
              <p className="text-lg">anayaraj735@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="text-green-400 text-2xl" />
              <p className="text-lg">+91 70048 56553</p>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-blue-400 text-2xl" />
              <p className="text-lg">Ahmedabad, India</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 mt-6">
              <a
                href="https://github.com/Anayaraj02"
                target="_blank"
                className="hover:text-pink-400 text-2xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/anaya-raj-bb058b264"
                target="_blank"
                className="hover:text-blue-400 text-2xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://leetcode.com/u/AnayaRaj/"
                target="_blank"
                className="hover:text-sky-400 text-2xl"
              >
                <SiLeetcode />
              </a>
            </div>
          </motion.div>

          {/* Right Side - Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Open to Opportunities 🚀
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I’m always excited to collaborate on new projects and
              opportunities. Whether it’s frontend, backend, or full-stack work
              — feel free to reach out!
            </p>
            <a
              href="mailto:anayaraj@example.com?subject=Hello%20Anaya&body=I%20saw%20your%20portfolio%20and..."
              className="mt-6 text-pink-400 font-semibold hover:underline"
            >
              📧 anayaraj@example.com
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
