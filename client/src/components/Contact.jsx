import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiCopy,
  FiCheck,
  FiArrowUpRight,
  FiLinkedin,
  FiTwitter,
  FiGithub,
} from "react-icons/fi";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "chukemmanuel8@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden bg-grid bg-[#0a0a0a]"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-sm font-mono text-blue-600 font-black tracking-[0.3em] uppercase mb-4">
            Available for Opportunities
          </h2>

          <h1 className="text-5xl md:text-8xl font-black text-white mb-12 tracking-tighter leading-none">
            LET’S BUILD THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">
              FUTURE TOGETHER.
            </span>
          </h1>

          {/* Interaction Hub */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {/* The Email Action - Locked to Dark Glass Style */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="group relative p-[1px] rounded-2xl bg-gradient-to-r from-white/10 to-white/5 shadow-2xl"
            >
              <div className="bg-[#0a0a0a] rounded-2xl px-8 py-6 flex items-center gap-6 border border-white/5">
                <div className="text-left">
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">
                    Direct Line
                  </p>
                  <p className="text-lg font-bold text-white">{email}</p>
                </div>

                <button
                  onClick={copyToClipboard}
                  className="p-4 bg-white/5 rounded-xl hover:bg-blue-600 hover:text-white transition-all relative"
                >
                  {copied ? (
                    <FiCheck className="text-green-500" />
                  ) : (
                    <FiCopy className="text-white" />
                  )}
                  {copied && (
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-xs font-bold bg-green-500 text-white px-2 py-1 rounded">
                      Copied!
                    </span>
                  )}
                </button>
              </div>
            </motion.div>

            {/* LinkedIn Shortcut */}
            <a
              href="https://linkedin.com/in/emmanuelozo"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-8 py-7 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20"
            >
              Start a Conversation <FiArrowUpRight />
            </a>
          </div>

          {/* Social Command Bar */}
          <div className="mt-20 flex justify-center gap-8">
            {[
              {
                icon: <FiLinkedin />,
                link: "https://linkedin.com/in/emmanuelozo",
              },
              {
                icon: <FiGithub />,
                link: "https://github.com/EmmanuelOzoemena",
              },
              { icon: <FiTwitter />, link: "https://x.com/emmanuel_oz1" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                target="_blank"
                whileHover={{ y: -5, color: "#2563eb" }}
                className="text-2xl text-gray-400 transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
