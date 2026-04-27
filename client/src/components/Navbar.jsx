import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [dark, setDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true;
  });

  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled
          ? "py-4 bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-md"
          : "py-8 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-black tracking-tighter dark:text-white flex items-center gap-1 z-[101]"
        >
          EMMANUEL <span className="text-blue-600">OZOEMENA</span>
        </Link>

        {/* Desktop: Capsule Menu */}
        <motion.div
          layout
          className={`hidden md:flex items-center gap-1 px-2 py-2 rounded-full border border-gray-200 dark:border-white/10 backdrop-blur-2xl transition-all shadow-xl ${
            scrolled
              ? "bg-white/80 dark:bg-black/80"
              : "bg-white/20 dark:bg-black/20"
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
        <div className="flex md:hidden items-center gap-4 z-[101]">
          <button
            onClick={() => setDark(!dark)}
            className="p-2 dark:text-white"
          >
            {dark ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="p-2 dark:text-white text-2xl"
          >
            {mobileMenu ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Side Drawer Overlay */}
      <AnimatePresence>
        {mobileMenu && (
          <>
            {/* Backdrop to dim site when menu is open */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenu(false)}
              className="fixed inset-0 bg-black/50 z-[90] backdrop-blur-sm md:hidden"
            />

            {/* Side Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[280px] bg-white dark:bg-black z-[100] p-10 flex flex-col gap-8 shadow-2xl md:hidden"
            >
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setMobileMenu(false)}
                  className="text-3xl dark:text-white"
                >
                  {/* <FiX /> */}
                </button>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenu(false)}
                  className="text-2xl font-bold dark:text-white hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
