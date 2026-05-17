import { motion } from "framer-motion";
import QuizCard from "../components/QuizCard";
import useLocalStorage from "../hooks/useLocalStorage";
import { FaHistory, FaTrophy } from "react-icons/fa";

export default function Quiz() {
  const [savedScores] = useLocalStorage("quizScores", []);

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
          AI Knowledge <span className="gradient-text">Quiz</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Test your understanding of AI and Machine Learning concepts
        </p>
      </motion.div>

      {savedScores.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="card">
            <div className="flex items-center gap-2 mb-4">
              <FaHistory className="text-accent-500" />
              <h3 className="font-semibold text-gray-900 dark:text-white">Recent Scores</h3>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {savedScores.slice(0, 5).map((score, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg whitespace-nowrap">
                  <FaTrophy className={`${score.percentage >= 80 ? "text-yellow-500" : "text-gray-400"}`} />
                  <span className="text-sm font-medium">{score.score}/{score.total}</span>
                  <span className={`text-xs font-semibold ${score.percentage >= 70 ? "text-green-500" : "text-yellow-500"}`}>
                    {score.percentage}%
                  </span>
                  <span className="text-xs text-gray-400">{score.date}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      <QuizCard />
    </div>
  );
}
