import { motion } from "framer-motion";
import { FaTrophy, FaCrown, FaMedal, FaStar } from "react-icons/fa";
import LeaderboardTable from "../components/LeaderboardTable";
import leaderboardData from "../data/leaderboardData";

export default function Leaderboard() {
  const topThree = leaderboardData.slice(0, 3);

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-center"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
          <span className="gradient-text">Leaderboard</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Top performing students this month
        </p>
      </motion.div>

      <div className="flex justify-center items-end gap-4 mb-12">
        {topThree.map((student, i) => {
          const heights = ["h-32", "h-40", "h-28"];
          const icons = [FaCrown, FaMedal, FaMedal];
          const Icon = icons[i];
          const iconColors = ["text-yellow-500", "text-gray-400", "text-orange-500"];
          return (
            <motion.div
              key={student.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex flex-col items-center"
            >
              <Icon className={`text-2xl ${iconColors[i]} mb-2`} />
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-500 to-primary-600 flex items-center justify-center text-white font-bold text-lg mb-2 shadow-lg">
                {student.avatar}
              </div>
              <p className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{student.name}</p>
              <div
                className={`w-20 ${heights[i]} rounded-t-xl flex items-center justify-center text-white font-bold ${
                  i === 0 ? "bg-yellow-500" : i === 1 ? "bg-gray-400" : "bg-orange-500"
                }`}
              >
                <div className="text-center">
                  <p className="text-lg font-bold">{student.points.toLocaleString()}</p>
                  <p className="text-xs opacity-80">pts</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <LeaderboardTable data={leaderboardData} />
    </div>
  );
}
