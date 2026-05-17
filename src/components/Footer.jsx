import { Link } from "react-router-dom";
import { FaBrain, FaGithub, FaTwitter, FaLinkedin, FaHeart } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <FaBrain className="text-2xl text-accent-500" />
              <span className="text-xl font-bold text-white">SkillForge AI</span>
            </Link>
            <p className="text-sm text-gray-400">
              Empowering the next generation of AI innovators and developers with quality education.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/courses" className="block text-sm hover:text-accent-400 transition-colors">Courses</Link>
              <Link to="/roadmaps" className="block text-sm hover:text-accent-400 transition-colors">Roadmaps</Link>
              <Link to="/quiz" className="block text-sm hover:text-accent-400 transition-colors">Quiz</Link>
              <Link to="/certificates" className="block text-sm hover:text-accent-400 transition-colors">Certificates</Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm hover:text-accent-400 transition-colors">About Us</Link>
              <a href="#" className="block text-sm hover:text-accent-400 transition-colors">Blog</a>
              <a href="#" className="block text-sm hover:text-accent-400 transition-colors">Support</a>
              <a href="#" className="block text-sm hover:text-accent-400 transition-colors">Privacy Policy</a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex gap-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-accent-400 transition-colors"><FaGithub size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-accent-400 transition-colors"><FaTwitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-accent-400 transition-colors"><FaLinkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-accent-400 transition-colors"><HiMail size={20} /></a>
            </div>
            <p className="text-sm text-gray-400">
              Subscribe to our newsletter for updates.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400 flex items-center justify-center gap-1">
            Made with  by SkillForge AI Team &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
