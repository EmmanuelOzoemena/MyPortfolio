import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Added useLocation for active states
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [dark, setDark] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? "py-4" : "py-8"}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-black tracking-tighter dark:text-white">
          S<span className="text-blue-600">C</span>
        </Link>

        {/* Desktop: Capsule Menu */}
        <motion.div 
          layout
          className={`hidden md:flex items-center gap-1 px-2 py-2 rounded-full border border-gray-200 dark:border-white/10 backdrop-blur-2xl transition-all shadow-xl ${
            scrolled ? "bg-white/80 dark:bg-black/80" : "bg-white/20 dark:bg-black/20"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative px-5 py-2 text-xs uppercase tracking-widest font-bold transition-all rounded-full ${
                location.pathname === link.path 
                  ? "text-white bg-blue-600 shadow-lg shadow-blue-500/30" 
                  : "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <button
            onClick={() => setDark(!dark)}
            className="ml-2 p-2.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black hover:rotate-12 transition-all"
          >
            {dark ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>
        </motion.div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <button onClick={() => setDark(!dark)} className="p-2 dark:text-white">
            {dark ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          <button onClick={() => setMobileMenu(!mobileMenu)} className="p-2 dark:text-white text-2xl">
            {mobileMenu ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 h-screen w-full bg-white dark:bg-black z-[90] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => setMobileMenu(false)}
                className="text-4xl font-black tracking-tighter dark:text-white hover:text-blue-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;