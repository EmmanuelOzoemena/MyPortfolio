import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-grid">
      {/* Decorative Floating Circle */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute -top-20 -right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-blue-600 font-mono font-bold mb-4 tracking-[0.3em] uppercase"
          >
            Full-Stack Software Engineer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-black tracking-tight leading-none mb-6"
          >
            Building the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400">
              Future in Code.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-lg mb-8 leading-relaxed"
          >
            I architect scalable web applications powering ideas from concept to
            scale. Currently transitioning from frontend mastery to full-stack
            depth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/projects"
              className="px-10 py-4 bg-blue-600 text-white rounded-full font-bold hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 transition-all text-center"
            >
              View Work
            </Link>

            <Link
              to="/contact"
              className="px-10 py-4 border-2 border-gray-900 dark:border-white dark:text-white text-gray-900 rounded-full font-bold hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all text-center"
            >
              Let's Talk
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Floating Glass Cards */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="hidden lg:block absolute right-[10%] bottom-[20%] p-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl rotate-3"
      >
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-mono opacity-70">Server: Online</span>
          </div>
          <div className="space-y-1">
            <div className="h-1 w-32 bg-gray-200/20 rounded-full overflow-hidden">
              <motion.div
                animate={{ width: "85%" }}
                transition={{ duration: 2, delay: 1 }}
                className="h-full bg-blue-500"
              />
            </div>
            <span className="text-[10px] uppercase opacity-50 font-bold">
              Node.js Proficiency
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
