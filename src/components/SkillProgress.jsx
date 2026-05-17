import { motion } from "framer-motion";
import { FaTrophy, FaFire, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

export default function SkillProgress({ skillData }) {
  const { title, icon, progress, topics, weeklyGoal, streak } = skillData;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="card-hover"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-600 dark:text-gray-400">Progress</span>
          <span className="font-semibold text-accent-600">{progress}%</span>
        </div>
        <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-accent-500 to-primary-600 rounded-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3 text-center">
          <div className="flex items-center justify-center gap-1 text-yellow-500 mb-1">
            <FaFire />
          </div>
          <p className="text-lg font-bold text-gray-900 dark:text-white">{streak}</p>
          <p className="text-xs text-gray-500">Day Streak</p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3 text-center">
          <div className="flex items-center justify-center gap-1 text-green-500 mb-1">
            <FaCalendarAlt />
          </div>
          <p className="text-lg font-bold text-gray-900 dark:text-white">{weeklyGoal}/5</p>
          <p className="text-xs text-gray-500">Weekly Goal</p>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Topics</h4>
        <div className="space-y-2">
          {topics.map((topic, i) => (
            <div key={i} className="flex items-center gap-2 text-sm">
              {topic.completed ? (
                <FaCheckCircle className="text-green-500 shrink-0" />
              ) : (
                <div className="w-4 h-4 rounded-full border-2 border-gray-300 dark:border-gray-600 shrink-0" />
              )}
              <span className={topic.completed ? "text-gray-700 dark:text-gray-300" : "text-gray-400"}>
                {topic.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
