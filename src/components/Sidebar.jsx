import { Link, useLocation } from "react-router-dom";
import { FaBrain, FaHome, FaBook, FaMapSigns, FaChartLine, FaQuestionCircle, FaTrophy, FaCertificate, FaInfoCircle } from "react-icons/fa";

const sidebarLinks = [
  { name: "Home", path: "/", icon: FaHome },
  { name: "Courses", path: "/courses", icon: FaBook },
  { name: "Roadmaps", path: "/roadmaps", icon: FaMapSigns },
  { name: "Skill Tracker", path: "/skill-tracker", icon: FaChartLine },
  { name: "Quiz", path: "/quiz", icon: FaQuestionCircle },
  { name: "Leaderboard", path: "/leaderboard", icon: FaTrophy },
  { name: "Certificates", path: "/certificates", icon: FaCertificate },
  { name: "About", path: "/about", icon: FaInfoCircle },
];

export default function Sidebar({ isOpen, onClose }) {
  const location = useLocation();

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={onClose} />
      )}
      <aside
        className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-300 z-30 overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:h-auto`}
      >
        <div className="p-4">
          <div className="flex items-center gap-2 mb-6 px-3">
            <FaBrain className="text-xl text-accent-500" />
            <span className="font-bold gradient-text">SkillForge AI</span>
          </div>

          <nav className="space-y-1">
            {sidebarLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={onClose}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "bg-accent-600 text-white shadow-lg"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  <Icon className="text-lg" />
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
