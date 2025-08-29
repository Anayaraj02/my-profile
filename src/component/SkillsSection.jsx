"use client";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiSvelte,
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiGraphql,
  SiPostman,
  SiFigma,
  SiExpress,
} from "react-icons/si";

const skillsData = {
  languages: [
    {
      name: "JavaScript",
      level: 90,
      icon: <FaJsSquare className="text-yellow-400" />,
    },
    { name: "HTML5", level: 95, icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", level: 90, icon: <FaCss3Alt className="text-blue-500" /> },
    // { name: "Node.js", level: 90, icon: <SiNodedotjs className="text-green-500" /> },
    {
      name: "MongoDB",
      level: 75,
      icon: <SiMongodb className="text-green-600" />,
    },
  ],
  frameworks: [
    {
      name: "React.js",
      level: 90,
      icon: <FaReact className="text-blue-400" />,
    },
    { name: "Next.js", level: 85, icon: <SiNextdotjs /> },
    {
      name: "Svelte.js",
      level: 80,
      icon: <SiSvelte className="text-orange-400" />,
    },
    {
      name: "Tailwind CSS",
      level: 95,
      icon: <SiTailwindcss className="text-cyan-400" />,
    },
    { name: "DaisyUI", level: 85 },
    { name: "ApexCharts", level: 75 },
    {
      name: "GraphQL",
      level: 75,
      icon: <SiGraphql className="text-pink-500" />,
    },
    { name: "Day.js", level: 80 },
    {
      name: "Express.js",
      level: 85,
      icon: <SiExpress className="text-gray-400" />,
    },
  ],
  tools: [
    {
      name: "GitHub",
      level: 85,
      icon: <FaGitAlt className="text-orange-600" />,
    },
    { name: "VS Code", level: 90 },
    { name: "Jira", level: 80 },
    { name: "Figma", level: 75, icon: <SiFigma className="text-pink-400" /> },
    { name: "Webpack", level: 70 },
    { name: "NPM", level: 85 },
    {
      name: "Postman",
      level: 80,
      icon: <SiPostman className="text-orange-400" />,
    },
  ],
  softSkills: [
    "Team Collaboration",
    "Time Management",
    "Public Speaking",
    "Agile Methodologies",
  ],
};

function SkillsSection() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gray-900 text-white"
    >
      {/* Animated Bars */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600"
      >
        My Skills
      </motion.h2>
      <div className=" flex flex-col gap-[3rem]">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 max-w-5xl mx-auto text-center ">
          {[
            { icon: <FaReact />, name: "React" },
            { icon: <SiNextdotjs />, name: "Next.js" },
            { icon: <SiSvelte />, name: "Svelte" },
            { icon: <FaJsSquare />, name: "JavaScript" },
            { icon: <FaHtml5 />, name: "HTML5" },
            { icon: <FaCss3Alt />, name: "CSS3" },
            { icon: <SiTailwindcss />, name: "Tailwind" },
            // { icon: <SiNodeDotJs />, name: "Node.js" },
            { icon: <SiMongodb />, name: "MongoDB" },
            { icon: <SiGraphql />, name: "GraphQL" },
            { icon: <SiPostman />, name: "Postman" },
            { icon: <SiFigma />, name: "Figma" },
          ].map((skill, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center gap-2 text-gray-300 hover:text-yellow-400 transition"
              whileHover={{ scale: 1.2 }}
            >
              <div className="text-4xl">{skill.icon}</div>
              <p className="text-sm">{skill.name}</p>
            </motion.div>
          ))}
        </div>
        <div className="grid lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {["languages", "frameworks", "tools"].map((category) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-semibold mb-6 capitalize">
                {category === "languages"
                  ? "Languages"
                  : category === "frameworks"
                  ? "Frameworks & Libraries"
                  : "Tools & Platforms"}
              </h3>

              <div className="space-y-4">
                {skillsData[category].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center gap-2 mb-1">
                      {skill.icon && (
                        <span className="text-2xl">{skill.icon}</span>
                      )}
                      <span className="font-medium">{skill.name}</span>
                      <span className="ml-auto text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-4 rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Soft Skills */}
      <div className="mt-12 max-w-6xl w-full">
        <h3 className="text-2xl font-semibold mb-6">Soft Skills</h3>
        <div className="flex flex-wrap gap-4">
          {skillsData.softSkills.map((skill) => (
            <span
              key={skill}
              className="bg-purple-700 px-4 py-2 rounded-full text-white font-medium hover:scale-105 transition-transform duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
