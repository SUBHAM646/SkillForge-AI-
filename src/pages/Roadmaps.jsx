import { motion } from "framer-motion";
import RoadmapCard from "../components/RoadmapCard";
import roadmapData from "../data/roadmapData";

export default function Roadmaps() {
  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Learning <span className="gradient-text">Roadmaps</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Follow structured paths to master your chosen field
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {roadmapData.map((roadmap, i) => (
          <RoadmapCard key={roadmap.id} roadmap={roadmap} index={i} />
        ))}
      </div>
    </div>
  );
}
