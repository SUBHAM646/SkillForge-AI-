import { motion } from "framer-motion";
import { FaBrain } from "react-icons/fa";

export default function Loader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="text-4xl text-accent-600"
      >
        <FaBrain />
      </motion.div>
    </div>
  );
}
