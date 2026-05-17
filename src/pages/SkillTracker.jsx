import { motion } from "framer-motion";
import { FaPlus, FaCalendarCheck, FaFire } from "react-icons/fa";
import SkillProgress from "../components/SkillProgress";
import useLocalStorage from "../hooks/useLocalStorage";

const defaultSkills = [
  {
    title: "Machine Learning",
    icon: "🤖",
    progress: 65,
    streak: 12,
    weeklyGoal: 4,
    topics: [
      { name: "Linear Regression", completed: true },
      { name: "Classification Algorithms", completed: true },
      { name: "Decision Trees & Random Forest", completed: true },
      { name: "Neural Networks Basics", completed: false },
      { name: "Deep Learning", completed: false },
    ],
  },
  {
    title: "Python Programming",
    icon: "🐍",
    progress: 80,
    streak: 15,
    weeklyGoal: 5,
    topics: [
      { name: "Python Basics", completed: true },
      { name: "NumPy & Pandas", completed: true },
      { name: "Data Visualization", completed: true },
      { name: "File Handling & OOP", completed: true },
      { name: "Advanced Python", completed: false },
    ],
  },
  {
    title: "Data Science",
    icon: "📊",
    progress: 45,
    streak: 8,
    weeklyGoal: 3,
    topics: [
      { name: "Statistics Basics", completed: true },
      { name: "Data Wrangling", completed: true },
      { name: "Exploratory Data Analysis", completed: false },
      { name: "Feature Engineering", completed: false },
      { name: "Model Evaluation", completed: false },
    ],
  },
  {
    title: "Web Development",
    icon: "🌐",
    progress: 55,
    streak: 10,
    weeklyGoal: 3,
    topics: [
      { name: "HTML & CSS", completed: true },
      { name: "JavaScript Basics", completed: true },
      { name: "React Fundamentals", completed: true },
      { name: "State Management", completed: false },
      { name: "Full Stack Projects", completed: false },
    ],
  },
];

export default function SkillTracker() {
  const [skills, setSkills] = useLocalStorage("skillTracker", defaultSkills);
  const [newGoal, setNewGoal] = useLocalStorage("learningGoal", "");

  const totalProgress = Math.round(skills.reduce((acc, s) => acc + s.progress, 0) / skills.length);
  const totalStreak = skills.reduce((acc, s) => acc + s.streak, 0);

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Skill <span className="gradient-text">Tracker</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Monitor your learning progress and stay on track
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card text-center"
        >
          <p className="text-2xl font-bold text-accent-600">{totalProgress}%</p>
          <p className="text-sm text-gray-500">Overall Progress</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card text-center"
        >
          <p className="text-2xl font-bold text-orange-500">{totalStreak}</p>
          <p className="text-sm text-gray-500 flex items-center justify-center gap-1"><FaFire /> Total Streak</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card text-center"
        >
          <p className="text-2xl font-bold text-green-500">{skills.length}</p>
          <p className="text-sm text-gray-500">Skills Tracked</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card text-center"
        >
          <p className="text-2xl font-bold text-blue-500">
            {skills.reduce((acc, s) => acc + s.topics.filter(t => t.completed).length, 0)}
          </p>
          <p className="text-sm text-gray-500">Topics Completed</p>
        </motion.div>
      </div>

      <div className="mb-8">
        <div className="card flex items-center gap-4">
          <FaCalendarCheck className="text-accent-500 text-xl" />
          <input
            type="text"
            placeholder="Set your weekly learning goal..."
            value={newGoal}
            onChange={(e) => setNewGoal(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-gray-900 dark:text-white placeholder-gray-400"
          />
          <button className="flex items-center gap-2 px-4 py-2 bg-accent-600 text-white rounded-lg text-sm font-medium hover:bg-accent-700 transition-all">
            <FaPlus /> Save Goal
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((skill, i) => (
          <SkillProgress key={skill.title} skillData={skill} />
        ))}
      </div>
    </div>
  );
}
