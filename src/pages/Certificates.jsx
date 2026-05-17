import { motion } from "framer-motion";
import CertificateCard from "../components/CertificateCard";
import certificates from "../data/certificates";
import { FaAward, FaLock } from "react-icons/fa";

export default function Certificates() {
  const completed = certificates.filter((c) => c.completed);
  const inProgress = certificates.filter((c) => !c.completed);

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Your <span className="gradient-text">Certificates</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Track your achievements and earned certifications
      </p>
      </motion.div>

      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <FaAward className="text-2xl text-yellow-500" />
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Earned Certificates ({completed.length})</h2>
        </div>
        {completed.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completed.map((cert, i) => (
              <CertificateCard key={cert.id} cert={cert} index={i} />
            ))}
          </div>
        ) : (
          <div className="card text-center py-12">
            <FaAward className="text-5xl text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400">No certificates earned yet. Complete a course to earn your first certificate!</p>
          </div>
        )}
      </div>

      <div>
        <div className="flex items-center gap-4 mb-4">
          <FaLock className="text-2xl text-gray-400" />
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">In Progress ({inProgress.length})</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {inProgress.map((cert, i) => (
            <CertificateCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
