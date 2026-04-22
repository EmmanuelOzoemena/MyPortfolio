import { motion } from "framer-motion";

const experiences = [
  {
    company: "Dominican College",
    role: "Technical Instructor",
    period: "Aug 2025 – Present",
    desc: "Mentored 30+ developers in React & JS. Curated full-stack curriculums and led code reviews.",
  },
  {
    company: "TechyJaunt",
    role: "Backend Developer Intern",
    period: "Nov 2025 – Jan 2026",
    desc: "Built RESTful APIs with Node/Express. Integrated Flutterwave and Nodemailer services.",
  },
  {
    company: "Finclusion Technologies",
    role: "Junior Frontend Developer",
    period: "Jun 2024 – Mar 2025",
    desc: "Architected API integration strategies, reducing latency by 40%. Led frontend performance optimizations.",
  },
];

const techStack = [
  "React.js", "Next.js", "Node.js", "Express", "MongoDB", "TypeScript", "Tailwind CSS", "Framer Motion"
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-grid">
      {/* Background Name Reveal (Surprise) */}
      <div className="absolute top-10 left-10 text-[10rem] font-black opacity-[0.02] dark:opacity-[0.03] select-none pointer-events-none uppercase">
        Ozoemena
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side: Brief Experience */}
          <div>
            <h2 className="text-4xl font-black mb-12 dark:text-white">JOURNEY</h2>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={index} 
                  className="relative pl-8 border-l border-blue-600/30"
                >
                  <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-[6.5px] top-1" />
                  <span className="text-xs font-mono text-blue-500 font-bold uppercase">{exp.period}</span>
                  <h3 className="text-xl font-bold dark:text-white">{exp.role}</h3>
                  <p className="text-gray-500 dark:text-gray-400 font-medium mb-2">{exp.company}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-500 max-w-md">{exp.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Tech Stack & Bio */}
          <div className="flex flex-col justify-center">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-3xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 dark:text-white">Stack Mastery</h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <motion.span 
                    whileHover={{ y: -5, color: "#2563eb" }}
                    key={tech} 
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-xl text-sm font-bold transition-colors cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              
              <p className="mt-10 text-gray-600 dark:text-gray-400 leading-relaxed italic">
                "Bridging the gap between user interface and server-side logic..."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;