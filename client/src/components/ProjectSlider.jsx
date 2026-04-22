import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const ProjectSlider = () => {
  // We only show the "Big Projects" in the slider
  const bigProjects = projects.filter(p => p.isBig);

  return (
    <section id="projects" className="py-24 bg-white dark:bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-4xl font-black dark:text-white">FEATURED</h2>
          <p className="text-gray-500 font-mono tracking-widest uppercase text-xs mt-2">Selected Works</p>
        </div>
        <Link to="/projects" className="group flex items-center gap-2 text-blue-600 font-bold">
          View All <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

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
            <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            
            <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
              <span className="text-blue-500 font-mono text-xs font-bold uppercase">{project.category}</span>
              <h3 className="text-3xl font-black text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm max-w-md mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {project.description}
              </p>
              <div className="flex gap-2">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] px-2 py-1 bg-white/10 backdrop-blur-md rounded text-white border border-white/10 uppercase font-bold">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectSlider;