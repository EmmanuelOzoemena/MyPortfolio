import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Initialize theme from localStorage or default to dark
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true;
  });

  const location = useLocation();
  const navigate = useNavigate();

  // Handle Theme Switching
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  const handleNavClick = (section) => {
    setMobileMenu(false);
    if (location.pathname !== "/") {
      navigate("/", { state: { target: section } });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled
          ? "py-4 bg-white/80 dark:bg-black/90 backdrop-blur-md border-b border-black/5 dark:border-white/5"
          : "py-8 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <RouterLink
          to="/"
          className="text-xl font-black tracking-tighter text-black dark:text-white flex items-center gap-1 z-[101]"
        >
          EMMANUEL <span className="text-blue-600">OZOEMENA</span>
        </RouterLink>

        {/* Desktop: Navigation + Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <motion.div
            className={`flex items-center gap-1 px-2 py-2 rounded-full border border-black/10 dark:border-white/10 backdrop-blur-2xl transition-all shadow-xl ${
              scrolled ? "bg-white/90 dark:bg-black/80" : "bg-white/10 dark:bg-white/5"
            }`}
          >
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                smooth={true}
                duration={800}
                offset={-80}
                spy={true}
                activeClass="bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                className="relative px-5 py-2 text-[10px] uppercase tracking-widest font-bold transition-all rounded-full text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white cursor-pointer"
                onClick={() => handleNavClick(link.to)}
              >
                {link.name}
              </ScrollLink>
            ))}
          </motion.div>

          {/* Dark Mode Toggle Button (Desktop) */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-3 rounded-full bg-white/10 dark:bg-white/5 border border-black/10 dark:border-white/10 text-black dark:text-white hover:border-blue-600 transition-colors"
          >
            {isDark ? <FiSun /> : <FiMoon />}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4 z-[101]">
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 text-black dark:text-white text-xl"
          >
            {isDark ? <FiSun /> : <FiMoon />}
          </button>
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="p-2 text-black dark:text-white text-2xl"
          >
            {mobileMenu ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenu && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenu(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed top-0 right-0 h-full w-[280px] bg-white dark:bg-[#0a0a0a] z-[100] p-10 flex flex-col gap-8 shadow-2xl border-l border-black/10 dark:border-white/10"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400">Menu</span>
                <button
                  onClick={() => setMobileMenu(false)}
                  className="text-3xl text-black dark:text-white"
                >
                  <FiX />
                </button>
              </div>
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={800}
                  offset={-80}
                  onClick={() => setMobileMenu(false)}
                  className="text-3xl font-black text-black dark:text-white hover:text-blue-600 transition-colors cursor-pointer uppercase tracking-tighter"
                >
                  {link.name}
                </ScrollLink>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;