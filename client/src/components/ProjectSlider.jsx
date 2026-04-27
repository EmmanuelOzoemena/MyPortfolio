import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { getProjects } from "../services/project.api"; // Import your API helper

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
<<<<<<< HEAD
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const response = await getProjects();
        if (response && response.data) {
          // Filter only the 'big' projects from the database
          const featured = response.data.filter((p) => p.isBig);
          setProjects(featured);
        }
      } catch (error) {
        console.error("Slider fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFeatured();
  }, []);

  // Create the loop effect by duplicating the fetched projects
  const duplicatedProjects = [...projects, ...projects];

  if (loading || projects.length === 0) return null; // Hide section while loading
=======
<<<<<<< HEAD
  // We only show the "Big Projects" in the slider
  const bigProjects = projects.filter((p) => p.isBig);
=======
  const bigProjects = projects.filter((p) => p.isBig);
  // Duplicate the list to create the infinite loop effect
  const duplicatedProjects = [...bigProjects, ...bigProjects];
>>>>>>> 1adf13ff438f0925205ab696fa7b70e81cc1cdd2
>>>>>>> cfbc9930fee09d1af2b804587acab34bd3e8247c

  return (
    <section
      id="projects"
      className="py-24 bg-white dark:bg-[#050505] overflow-hidden"
    >
      <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
<<<<<<< HEAD
          <h2 className="text-4xl font-black dark:text-white">FEATURED</h2>
=======
          <h2 className="text-4xl font-black dark:text-white uppercase tracking-tighter">
            Featured
          </h2>
>>>>>>> 1adf13ff438f0925205ab696fa7b70e81cc1cdd2
          <p className="text-gray-500 font-mono tracking-widest uppercase text-xs mt-2">
            Selected Works
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
      {/* The Draggable Slider */}
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -800 }}
        className="flex gap-8 px-6 cursor-grab active:cursor-grabbing"
      >
        {bigProjects.map((project) => (
          <motion.div
            key={project.id}
            className="min-w-[350px] md:min-w-[600px] h-[400px] rounded-3xl overflow-hidden relative group border border-white/10"
          >
            {/* Project Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />

            <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
              <span className="text-blue-500 font-mono text-xs font-bold uppercase">
                {project.category}
              </span>
              <h3 className="text-3xl font-black text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm max-w-md mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {project.description}
              </p>
              <div className="flex gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-2 py-1 bg-white/10 backdrop-blur-md rounded text-white border border-white/10 uppercase font-bold"
                  >
                    {t}
                  </span>
                ))}
=======
      {/* Infinite Scrolling Container */}
>>>>>>> cfbc9930fee09d1af2b804587acab34bd3e8247c
      <div className="flex relative">
        <motion.div
          className="flex gap-8 px-4"
          // We calculate the width based on the number of projects to keep it smooth
          animate={{ x: [0, -100 * projects.length + "%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: projects.length * 5, // Adjust speed based on item count
              ease: "linear",
            },
          }}
        >
          {duplicatedProjects.map((project, index) => (
            <motion.div
              key={`${project._id}-${index}`}
              className="min-w-[350px] md:min-w-[500px] lg:min-w-[calc(33.33vw-2rem)] h-[450px] rounded-3xl overflow-hidden relative group border border-white/5"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10" />
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />

              <div className="absolute bottom-0 left-0 p-8 z-20 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-blue-500 font-mono text-xs font-bold uppercase tracking-widest">
                  {project.category}
                </span>
                <h3 className="text-3xl font-black text-white mb-3">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        color: techColors[t] || "#fff",
                        borderColor: `${techColors[t]}33` || "#ffffff33",
                      }}
                      className="text-[10px] px-2 py-1 bg-black/50 backdrop-blur-md rounded-md border uppercase font-black tracking-tighter"
                    >
                      {t}
                    </span>
                  ))}
                </div>
>>>>>>> 1adf13ff438f0925205ab696fa7b70e81cc1cdd2
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSlider;
