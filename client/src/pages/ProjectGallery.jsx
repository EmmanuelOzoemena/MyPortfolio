import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getProjects } from "../services/project.api";
import {
  FiSearch,
  FiExternalLink,
  FiGithub,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const ProjectGallery = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 9;

  const categories = ["All", "Basic", "Full Stack", "Frontend", "Backend"];

  useEffect(() => {
    const fetchAllProjects = async () => {
      try {
        const response = await getProjects();
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

  // Reset to page 1 whenever filters or search change
  useEffect(() => {
    setCurrentPage(1);
  }, [filter, search]);

  // Search & Filter Logic
  const filteredProjects = projects.filter((p) => {
    const categoryMatch = filter === "All" || p.category === filter;
    const searchTerm = search.toLowerCase();
    const titleMatch = p.title.toLowerCase().includes(searchTerm);
    const techMatch = p.tech.some((t) => t.toLowerCase().includes(searchTerm));

    return categoryMatch && (titleMatch || techMatch);
  });

  // Pagination Logic
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject,
  );
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
    <div className="pt-32 pb-20 min-h-screen bg-[#050505]">
      <div className="container mx-auto px-6">
        {/* Header Area */}
        <div className="mb-16">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-4 italic uppercase tracking-tighter"
          >
            Archive<span className="text-blue-600">.</span>
          </motion.h1>
          <p className="text-gray-400 max-w-xl">
            A complete collection of my journey from high-performance full-stack
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
                    : "border-white/10 text-gray-500 hover:border-blue-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search tech (e.g. React, Node)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder:text-gray-600"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {currentProjects.map((project) => (
              <motion.div
                key={project._id || project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all"
              >
                {/* Image Container */}
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 bg-white text-black rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                      >
                        <FiGithub size={20} />
                      </a>
                    )}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 bg-white text-black rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {project.title}
                    </h3>
                    <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest bg-blue-500/10 px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-sm text-gray-400 mb-6 line-clamp-2 h-10">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] px-2 py-1 bg-white/5 text-gray-300 border border-white/5 rounded font-mono uppercase"
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

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-16">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-3 rounded-xl border border-white/10 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/5 transition-colors"
            >
              <FiChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => paginate(i + 1)}
                  className={`w-12 h-12 rounded-xl border font-bold transition-all ${
                    currentPage === i + 1
                      ? "bg-blue-600 border-blue-600 text-white"
                      : "border-white/10 text-gray-500 hover:border-white/30"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-3 rounded-xl border border-white/10 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/5 transition-colors"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-500 font-mono">
              No projects found matching your search.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProjectGallery;
