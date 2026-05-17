import { motion } from "framer-motion";
import { FaCheckCircle, FaLock, FaClock } from "react-icons/fa";

export default function RoadmapCard({ roadmap, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.15 }}
      className="card-hover"
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="text-4xl">{roadmap.icon}</span>
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{roadmap.title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{roadmap.description}</p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
        <div className="space-y-6">
          {roadmap.steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 + i * 0.1 }}
              className="relative pl-12"
            >
              <div
                className={`absolute left-2.5 w-3 h-3 rounded-full border-2 ${
                  step.completed
                    ? "bg-green-500 border-green-500"
                    : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                }`}
              />
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white">{step.title}</h4>
                    {step.completed ? (
                      <FaCheckCircle className="text-green-500" />
                    ) : (
                      <FaLock className="text-gray-400 text-xs" />
                    )}
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{step.subtitle}</p>
                </div>
                <span className="text-xs text-gray-400 flex items-center gap-1 whitespace-nowrap ml-2">
                  <FaClock /> {step.duration}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
