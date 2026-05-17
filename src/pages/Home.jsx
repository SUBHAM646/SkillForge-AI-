import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaQuoteLeft, FaStar } from "react-icons/fa";
import HeroSection from "../components/HeroSection";
import CourseCard from "../components/CourseCard";
import courses from "../data/courses";

const testimonials = [
  {
    name: "Biswajit P",
    role: "Computer Science Student",
    text: "SkillForge AI completely transformed my understanding of machine learning. The courses are well-structured and easy to follow.",
    avatar: "AM",
    rating: 5,
  },
  {
    name: "Mubashir MD",
    role: "Data Science Enthusiast",
    text: "The hands-on approach and interactive quizzes helped me grasp complex AI concepts quickly. Highly recommended!",
    avatar: "JK",
    rating: 5,
  },
  {
    name: "Anshuman K.",
    role: "Software Developer",
    text: "I love the roadmap feature! It gave me a clear path to becoming an AI engineer. The progress tracker keeps me motivated.",
    avatar: "PS",
    rating: 5,
  },
];

const stats = [
  { label: "Active Students", value: "15,000+", icon: "🎓" },
  { label: "Expert Courses", value: "9+", icon: "📚" },
  { label: "Quiz Questions", value: "100+", icon: "🧠" },
  { label: "Success Rate", value: "95%", icon: "📈" },
];

export default function Home() {
  const popularCourses = courses.slice(0, 4);

  return (
    <div>
      <HeroSection />

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center p-6 card-hover"
            >
              <span className="text-4xl block mb-2">{stat.icon}</span>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Popular AI Courses</h2>
          <p className="section-subtitle">Start your learning journey with our top-rated courses</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularCourses.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/courses" className="btn-outline inline-flex items-center gap-2">
            View All Courses <FaArrowRight />
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">What Our Students Say</h2>
            <p className="section-subtitle">Hear from learners who transformed their careers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="card-hover"
              >
                <FaQuoteLeft className="text-accent-400 text-xl mb-3" />
                <p className="text-gray-600 dark:text-gray-400 mb-4 italic">{t.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-500 to-primary-600 flex items-center justify-center text-white font-bold text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                  <div className="ml-auto flex text-yellow-500">
                    {[...Array(t.rating)].map((_, i) => <FaStar key={i} />)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="card gradient-bg text-white p-12 rounded-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your AI Journey?
          </h2>
          <p className="text-gray-300 mb-8 max-w-lg mx-auto">
            Join thousands of students already learning AI and Machine Learning on SkillForge.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/courses" className="px-8 py-3 bg-white text-accent-700 font-semibold rounded-lg hover:bg-gray-100 transition-all">
              Get Started Free
            </Link>
            <Link to="/about" className="px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all">
              Learn More
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
