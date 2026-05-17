import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaClock, FaSignal, FaUsers, FaStar } from "react-icons/fa";

export default function CourseCard({ course, index }) {
  const difficultyColor = {
    Beginner: "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300",
    Intermediate: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300",
    Advanced: "bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="card-hover group"
    >
      <div className={`h-40 rounded-lg mb-4 bg-gradient-to-br ${course.color} p-0.5`}>
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover rounded-lg"
          loading="lazy"
        />
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold px-2 py-1 rounded-full bg-accent-100 text-accent-700 dark:bg-accent-900/50 dark:text-accent-300">
            {course.category}
          </span>
          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${difficultyColor[course.difficulty]}`}>
            {course.difficulty}
          </span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-accent-600 transition-colors">
          {course.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
          {course.description}
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <span className="flex items-center gap-1"><FaClock /> {course.duration}</span>
          <span className="flex items-center gap-1"><FaSignal /> {course.lessons} lessons</span>
        </div>
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            <div className="flex items-center text-yellow-500">
              <FaStar /> <span className="ml-1 text-sm font-medium">{course.rating}</span>
            </div>
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <FaUsers /> {course.students.toLocaleString()}
            </span>
          </div>
          <Link
            to={`/courses/${course.id}`}
            className="text-sm font-semibold text-accent-600 hover:text-accent-700 transition-colors"
          >
            Enroll Now →
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
