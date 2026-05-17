import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaRobot, FaChartLine, FaBookOpen, FaArrowRight, FaStar } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden gradient-bg">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-600/20 rounded-full text-accent-300 text-sm font-medium mb-6">
              <FaStar className="text-yellow-400" />
              Trusted by 15,000+ students
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Master{" "}
              <span className="gradient-text">AI & Machine Learning</span>
              <br />
              From Zero to Hero
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              Your all-in-one platform to learn Artificial Intelligence, Data Science, and Web Development.
              Hands-on courses, interactive quizzes, and skill tracking.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/courses" className="btn-primary flex items-center gap-2">
                Get Started <FaArrowRight />
              </Link>
              <Link to="/roadmaps" className="btn-outline border-white/30 text-white hover:bg-white/10">
                View Roadmaps
              </Link>
            </div>

            <div className="flex gap-8 mt-12">
              <div>
                <p className="text-3xl font-bold text-white">15K+</p>
                <p className="text-sm text-gray-400">Students</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">9+</p>
                <p className="text-sm text-gray-400">Courses</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">95%</p>
                <p className="text-sm text-gray-400">Success Rate</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="card bg-white/10 backdrop-blur border-white/20 p-6 rounded-xl">
                <FaRobot className="text-3xl text-accent-400 mb-3" />
                <h3 className="text-white font-semibold">AI Courses</h3>
                <p className="text-gray-400 text-sm">Learn cutting-edge AI</p>
              </div>
              <div className="card bg-white/10 backdrop-blur border-white/20 p-6 rounded-xl">
                <FaChartLine className="text-3xl text-accent-400 mb-3" />
                <h3 className="text-white font-semibold">Track Progress</h3>
                <p className="text-gray-400 text-sm">Monitor your growth</p>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="card bg-white/10 backdrop-blur border-white/20 p-6 rounded-xl">
                <FaBookOpen className="text-3xl text-accent-400 mb-3" />
                <h3 className="text-white font-semibold">Interactive Quiz</h3>
                <p className="text-gray-400 text-sm">Test your knowledge</p>
              </div>
              <div className="card bg-white/10 backdrop-blur border-white/20 p-6 rounded-xl">
                <FaChartLine className="text-3xl text-accent-400 mb-3" />
                <h3 className="text-white font-semibold">Certificates</h3>
                <p className="text-gray-400 text-sm">Earn recognition</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
