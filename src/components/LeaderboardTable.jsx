import { motion } from "framer-motion";
import { FaTrophy, FaCrown, FaMedal } from "react-icons/fa";

export default function LeaderboardTable({ data }) {
  const getRankIcon = (rank) => {
    if (rank === 1) return <FaCrown className="text-yellow-500" />;
    if (rank === 2) return <FaMedal className="text-gray-400" />;
    if (rank === 3) return <FaMedal className="text-orange-500" />;
    return <span className="text-sm font-bold text-gray-400">#{rank}</span>;
  };

  const getRowStyle = (rank) => {
    if (rank === 1) return "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800";
    if (rank === 2) return "bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700";
    if (rank === 3) return "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800";
    return "border-gray-100 dark:border-gray-700";
  };

  return (
    <div className="space-y-3">
      {data.map((student, index) => (
        <motion.div
          key={student.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className={`flex items-center gap-4 p-4 rounded-xl border-2 ${getRowStyle(student.rank)} transition-all hover:shadow-md`}
        >
          <div className="w-10 text-center">
            {getRankIcon(student.rank)}
          </div>

          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-500 to-primary-600 flex items-center justify-center text-white font-bold text-sm">
            {student.avatar}
          </div>

          <div className="flex-1 min-w-0">
            <p className="font-semibold text-gray-900 dark:text-white truncate">{student.name}</p>
            <p className="text-xs text-gray-500">{student.quizzes} quizzes completed</p>
          </div>

          <div className="text-right">
            <p className="text-lg font-bold text-accent-600">{student.points.toLocaleString()}</p>
            <p className="text-xs text-gray-400">points</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
