import { motion } from "framer-motion";
import { 
  FiLayout, FiServer, FiCode, FiSmartphone 
} from "react-icons/fi";
import { 
  SiHtml5, SiJavascript, SiReact, SiTailwindcss, 
  SiSass, SiNextdotjs, SiNodedotjs, SiExpress, 
  SiMongodb, SiPostgresql, SiPrisma, SiGithub
} from "react-icons/si";

const services = [
  {
    title: "Frontend Architecture",
    desc: "Building silky, high-performance SPAs with React and Next.js, focused on accessibility and UX.",
    icon: <FiLayout className="text-blue-500" size={24} />,
  },
  {
    title: "Backend Systems",
    desc: "Architecting scalable REST APIs and database structures using MERN and PostgreSQL.",
    icon: <FiServer className="text-emerald-500" size={24} />,
  },
  {
    title: "Full-Stack Integration",
    desc: "Seamlessly bridging the gap between client-side interfaces and server-side logic.",
    icon: <FiCode className="text-purple-500" size={24} />,
  },
  {
    title: "Technical Training",
    desc: "Breaking down complex engineering concepts into digestible, actionable learning paths.",
    icon: <FiSmartphone className="text-orange-500" size={24} />,
  },
];

const stack = [
  { name: "HTML5", icon: <SiHtml5 />, color: "hover:text-[#E34F26]" },
  // { name: "CSS3", icon: <SiCss3 />, color: "hover:text-[#1572B6]" },
  { name: "JavaScript", icon: <SiJavascript />, color: "hover:text-[#F7DF1E]" },
  { name: "React", icon: <SiReact />, color: "hover:text-[#61DAFB]" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "hover:text-[#06B6D4]" },
  { name: "SASS", icon: <SiSass />, color: "hover:text-[#CC6699]" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "hover:text-white" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "hover:text-[#339933]" },
  { name: "Express", icon: <SiExpress />, color: "hover:text-gray-400" },
  { name: "MongoDB", icon: <SiMongodb />, color: "hover:text-[#47A248]" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "hover:text-[#4169E1]" },
  { name: "Prisma", icon: <SiPrisma />, color: "hover:text-[#2D3748]" },
  { name: "GitHub", icon: <SiGithub />, color: "hover:text-white" },
  // { name: "AWS", icon: <SiAmazonwebservices />, color: "hover:text-[#FF9900]" },
];

const AboutMe = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white dark:bg-[#080808]">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Top Section */}
        <div className="max-w-3xl mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black dark:text-white mb-6 tracking-tighter"
          >
            I SCALE <br /> <span className="text-blue-600">IDEAS</span> INTO CODE.
          </motion.h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            I’m a Full-Stack Engineer based in Lagos, dedicated to the "building in public" philosophy. 
            I engineer digital experiences that are fast, accessible, and technically sound.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Services */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-blue-500/50 transition-all shadow-xl"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold dark:text-white mb-3">{service.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Tech Stack "Bento Box" */}
          <div className="p-8 rounded-3xl bg-black text-white flex flex-col justify-between overflow-hidden relative min-h-[400px]">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-8">Technical Engine</h3>
              <div className="grid grid-cols-4 gap-6">
                {stack.map((tech, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className={`text-3xl text-gray-500 flex flex-col items-center gap-2 cursor-pointer transition-colors ${tech.color}`}
                    title={tech.name}
                  >
                    {tech.icon}
                    <span className="text-[10px] font-mono opacity-0 hover:opacity-100 transition-opacity">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="absolute -bottom-10 -right-10 text-[6rem] font-black opacity-10 italic select-none">
              STACK
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;