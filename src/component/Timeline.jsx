"use client";
import { motion } from "framer-motion";
const timeline = [
  {
    type: "Experience",
    title: "Frontend Developer at MediaNV, Ahmedabad",
    role: "Software Developer | Frontend Developer",
    date: "March 2024 – Present",
    desc: "Contributing to a fast-paced product-based company by developing scalable and modular applications. Worked extensively on Micro Frontend architecture using SvelteJS, integrating multiple modules seamlessly into a unified platform. Built responsive, high-performance dashboards and portfolio websites with Next.js, React, and TailwindCSS. Collaborated closely with cross-functional teams to deliver polished UI/UX and maintain code quality in a production environment.",
  },
  {
    type: "Internship",
    title: "Android Developer Intern",
    date: "March 2023 – June 2023",
    desc: "Contributed to the development and maintenance of Android applications in a collaborative, team-driven environment. Designed and implemented responsive UI layouts with XML and Material Design guidelines, while integrating APIs for real-time data handling. Assisted in building new features, fixing bugs, and optimizing app performance using Java and modern Android frameworks. Gained hands-on experience in Agile development practices, version control (Git), and delivering production-ready mobile solutions.",
  },
  {
    type: "Education",
    title: "Bachelor’s in Information Technology",
    date: "2019 – 2023 (9.21CGPA)",
    desc: "Gained a strong foundation in computer science, web development, and software engineering principles. From 3rd semester onwards, actively worked on multiple academic and personal projects, including building web applications, CRUD systems, and portfolio websites. Explored modern frameworks such as React, Next.js, and SvelteJS, while developing skills in databases, APIs, and full-stack problem-solving. Consistently focused on practical implementation alongside theoretical learning, which helped bridge the gap between academics and real-world software development.",
  },
];
function Timeline() {
  return (
    <div>
      {/* About / Timeline Section */}
      <section
        id="about"
        className="min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-gray-50 dark:bg-gray-900"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6"
        >
          About Me
        </motion.h2>

        <div className="relative max-w-4xl w-full before:absolute before:left-1/2 before:top-0 before:w-1 before:h-full before:bg-gray-300 dark:before:bg-gray-600">
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`mb-8 w-full flex flex-col md:flex-row items-center ${idx % 2 === 0 ? "md:justify-start" : "md:justify-end"
                } relative`}
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-1/2">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  {item.date}
                </span>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  {item.role}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  {item.desc}
                </p>
              </div>
              <div
                className="hidden md:block absolute top-6 left-1/2 transform -translate-x-1/2 
             w-6 h-6 bg-purple-600 rounded-full border-4 border-white 
             dark:border-gray-900"
              ></div>

            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Timeline;
