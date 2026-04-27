import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getProjects } from "../services/project.api";
import { FiSearch, FiExternalLink } from "react-icons/fi";

const ProjectGallery = () => {
  // 1. Properly define all necessary states
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const categories = ["All", "Full Stack", "Frontend", "Education", "Basic"];

  // 2. Fetch data correctly on component mount
  useEffect(() => {
    const fetchAllProjects = async () => {
      try {
        const response = await getProjects();
        // Axios stores the JSON body in 'data'
        if (response && response.data) {
          setProjects(response.data);
        }
      } catch (error) {
        console.error("Fetch Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllProjects();
  }, []);

  // 3. Re-enable the filtering logic based on the 'projects' state
  const filteredProjects = projects.filter((p) => {
    const matchesFilter = filter === "All" || p.category === filter;
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.tech.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="text-white font-mono animate-pulse tracking-widest uppercase text-sm">
          Initializing Engine...
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 min-h-screen bg-white dark:bg-[#050505]">
      <div className="container mx-auto px-6">
        {/* Header Area */}
        <div className="mb-16">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-black dark:text-white mb-4 italic uppercase tracking-tighter"
          >
            Archive<span className="text-blue-600">.</span>
          </motion.h1>
          <p className="text-gray-500 max-w-xl">
            A complete collection of my journey—from high-performance full-stack
            systems to the very first lines of HTML I ever wrote.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12">
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all border whitespace-nowrap ${
                  filter === cat
                    ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/20"
                    : "border-gray-200 dark:border-white/10 text-gray-500 hover:border-blue-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search tech or title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project._id || project.id} // Use MongoDB _id or local id
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-3xl overflow-hidden hover:shadow-2xl transition-all"
              >
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-blue-600 transition-colors"
                    >
                      <FiExternalLink />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold dark:text-white">
                      {project.title}
                    </h3>
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-tighter">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] px-2 py-1 bg-gray-200 dark:bg-white/10 dark:text-gray-300 rounded font-bold uppercase"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectGallery;
