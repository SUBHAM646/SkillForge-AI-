import { motion } from "framer-motion";
import { FaDownload, FaLock, FaCheckCircle, FaClock } from "react-icons/fa";

export default function CertificateCard({ cert, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`card-hover ${!cert.completed && "opacity-75"}`}
    >
      <div className={`h-32 rounded-lg mb-4 bg-gradient-to-br ${cert.color} p-0.5`}>
        <div className="w-full h-full rounded-lg overflow-hidden relative">
          <img src={cert.image} alt={cert.title} className="w-full h-full object-cover" loading="lazy" />
          {!cert.completed && (
            <div className="absolute inset-0 bg-gray-900/60 flex items-center justify-center">
              <FaLock className="text-white text-2xl" />
            </div>
          )}
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-gray-900 dark:text-white">{cert.title}</h3>
          {cert.completed ? (
            <FaCheckCircle className="text-green-500" />
          ) : (
            <span className="text-xs text-gray-400">{cert.progress}%</span>
          )}
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400">{cert.description}</p>

        {cert.completed ? (
          <div className="flex items-center justify-between pt-2">
            <div className="text-sm text-gray-500">
              <p>Completed: {cert.date}</p>
              <p>Grade: <span className="font-semibold text-green-600">{cert.grade}</span></p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-accent-600 text-white rounded-lg text-sm font-medium hover:bg-accent-700 transition-all">
              <FaDownload /> Download
            </button>
          </div>
        ) : (
          <div>
            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full mb-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${cert.progress}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="h-full bg-gradient-to-r from-accent-500 to-primary-600 rounded-full"
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500 flex items-center gap-1">
                <FaClock /> {cert.hours}h total
              </span>
              <span className="text-accent-600 font-medium">{cert.progress}% complete</span>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
