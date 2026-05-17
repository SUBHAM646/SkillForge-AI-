import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaBrain } from "react-icons/fa";
import { SiTailwindcss, SiFramer, SiVite } from "react-icons/si";

const techStack = [
  { name: "React JS", icon: FaReact, color: "text-cyan-400" },
  { name: "Vite", icon: SiVite, color: "text-purple-400" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
  { name: "Framer Motion", icon: SiFramer, color: "text-pink-400" },
  { name: "React Icons", icon: FaReact, color: "text-red-400" },
  { name: "Python", icon: FaPython, color: "text-yellow-400" },
];

const concepts = [
  "Functional Components",
  "useState & useEffect",
  "useReducer",
  "useContext",
  "Custom Hooks",
  "Props & Conditional Rendering",
  "Dynamic Rendering with map()",
  "Form Handling",
  "React Router DOM",
  "LocalStorage Integration",
  "Responsive Design",
];

export default function About() {
  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <FaBrain className="text-5xl text-accent-500 mx-auto mb-4" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
          About <span className="gradient-text">SkillForge AI</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A modern AI learning platform built with React, demonstrating core frontend development concepts
          and best practices.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="card"
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Project Overview</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            SkillForge AI is a frontend-only, multi-page learning platform designed for beginners interested in
            Artificial Intelligence, Machine Learning, and Web Development. All data is managed locally using
            static arrays, React state management, and LocalStorage.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            The platform features course browsing, learning roadmaps, skill tracking, interactive quizzes,
            leaderboards, and certificate management — all without any backend or API calls.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="card"
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Technologies Used</h2>
          <div className="grid grid-cols-2 gap-3">
            {techStack.map((tech) => {
              const Icon = tech.icon;
              return (
                <div key={tech.name} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <Icon className={`text-xl ${tech.color}`} />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="card mb-8"
      >
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">React Concepts Implemented</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {concepts.map((concept) => (
            <div
              key={concept}
              className="flex items-center gap-2 px-4 py-2 bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-300 rounded-lg text-sm font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-accent-500" />
              {concept}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="card text-center"
      >
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Developer</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Built with passion for learning and teaching AI concepts to students worldwide.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
          SkillForge AI v1.0 — Student Project
        </p>
      </motion.div>
    </div>
  );
}
