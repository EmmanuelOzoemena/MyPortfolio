import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { getProjects } from "../services/project.api";

const techColors = {
  React: "#61DAFB",
  "Node.js": "#339933",
  MongoDB: "#47A248",
  "Tailwind CSS": "#06B6D4",
  JavaScript: "#F7DF1E",
  "Next.js": "#FFFFFF",
  Express: "#A8A8A8",
  PostgreSQL: "#4169E1",
  Prisma: "#5A67D8",
  SASS: "#CC6699",
  HTML5: "#E34F26",
};

const ProjectSlider = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await getProjects();

        if (res?.data) {
          setProjects(res.data);
        }
      } catch (error) {
        console.error("Fetch Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // Duplicate the array for the infinite loop effect
  const duplicatedProjects = [...projects, ...projects];

  return (
    <section
      id="projects"
      className="py-24 bg-white dark:bg-[#050505] overflow-hidden"
    >
      <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-4xl font-black dark:text-white uppercase tracking-tighter">
            Projects
          </h2>
          <p className="text-gray-500 font-mono tracking-widest uppercase text-xs mt-2">
            Showcase
          </p>
        </div>
        <Link
          to="/projects"
          className="group flex items-center gap-2 text-blue-600 font-bold"
        >
          View All{" "}
          <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {loading ? (
        <div className="flex gap-8 px-6 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="min-w-[350px] md:min-w-[500px] h-[450px] rounded-3xl bg-gray-200 dark:bg-white/5 animate-pulse"
            />
          ))}
        </div>
      ) : projects.length === 0 ? (
        <div className="flex justify-center items-center h-[200px] border-2 border-dashed border-gray-200 dark:border-white/10 rounded-3xl mx-6">
          <p className="text-gray-500 font-mono text-sm">
            No projects found in the database.
          </p>
        </div>
      ) : (
        <div className="flex relative">
          <motion.div
            className="flex gap-8 px-4"
            // Ensure the width calculation is based on the new projects length
            animate={{ x: [0, `-${100 * projects.length}%`] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: projects.length * 50, // Adjusted speed for better UX
                ease: "linear",
              },
            }}
          >
            {duplicatedProjects.map((project, index) => (
              <motion.div
                key={`${project._id || project.id}-${index}`}
                className="min-w-[350px] md:min-w-[500px] lg:min-w-[calc(33.33vw-2rem)] h-[450px] rounded-3xl overflow-hidden relative group border border-white/5"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10" />

                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/500x450?text=Image+Not+Found";
                  }}
                />

                <div className="absolute bottom-0 left-0 p-8 z-20 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-blue-500 font-mono text-xs font-bold uppercase tracking-widest">
                    {project.category}
                  </span>
                  <h3 className="text-3xl font-black text-white mb-3">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.tech?.map((t, techIdx) => (
                      <span
                        key={techIdx}
                        style={{
                          color: techColors[t] || "#fff",
                          borderColor: `${techColors[t] || "#ffffff"}33`,
                        }}
                        className="text-[10px] px-2 py-1 bg-black/50 backdrop-blur-md rounded-md border uppercase font-black tracking-tighter"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default ProjectSlider;
