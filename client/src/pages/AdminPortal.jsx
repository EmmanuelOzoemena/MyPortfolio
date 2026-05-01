import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiPlus,
  FiArrowLeft,
  FiCheck,
  FiAlertCircle,
  FiUploadCloud,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { createProject } from "../services/project.api";

const AdminPortal = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [tech, setTech] = useState("");
  const [image, setImage] = useState(null);
  const [link, setLink] = useState("");
  const [github, setGithub] = useState("");
  const [isBig, setIsBig] = useState(false);
  const [status, setStatus] = useState({ type: "", msg: "" });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", msg: "Uploading to production..." });

    try {
      const projectData = {
        title,
        category,
        description,
        tech,
        image,
        link,
        github,
        isBig,
      };

      const response = await createProject(projectData);

      if (response?.status === 201) {
        setStatus({ type: "success", msg: "Project Successfully Launched!" });
        // Reset Form
        setTitle("");
        setCategory("");
        setDescription("");
        setTech("");
        setImage(null);
        setLink("");
        setGithub("");
        setIsBig(false);
      }
    } catch (error) {
      console.error("Upload Error:", error);
      setStatus({
        type: "error",
        msg: error.response?.data?.error || "Upload Failed",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 md:p-12 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-500 mb-10 transition-colors font-medium"
        >
          <FiArrowLeft /> Return to Portfolio
        </Link>

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-5xl font-black tracking-tighter">
              PROJECT <span className="text-blue-600">COMMAND</span>
            </h1>
            <p className="text-gray-500 font-mono text-xs uppercase mt-2 tracking-[0.2em]">
              Deploy new works to the technical engine
            </p>
          </div>

          <AnimatePresence>
            {status.msg && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className={`px-6 py-3 rounded-2xl text-sm font-bold flex items-center gap-3 border shadow-2xl ${
                  status.type === "success"
                    ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                    : "bg-red-500/10 text-red-400 border-red-500/20"
                }`}
              >
                {status.type === "success" ? <FiCheck /> : <FiAlertCircle />}
                {status.msg}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* The Form Container */}
        <form
          onSubmit={handleFormSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 bg-white/5 p-10 rounded-[2.5rem] border border-white/10 shadow-2xl backdrop-blur-sm"
        >
          {/* Title */}
          <div className="flex flex-col gap-3">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">
              Project Name
            </label>
            <input
              required
              className="bg-black/50 border border-white/10 p-5 rounded-2xl focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all placeholder:text-gray-700"
              type="text"
              placeholder="e.g. LastPrice Platform"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Category */}
          <div className="flex flex-col gap-3">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">
              Category
            </label>
            <input
              required
              className="bg-black/50 border border-white/10 p-5 rounded-2xl focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all placeholder:text-gray-700"
              type="text"
              placeholder="e.g. Full Stack MERN"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">
              Project Overview
            </label>
            <textarea
              required
              rows="4"
              className="bg-black/50 border border-white/10 p-5 rounded-2xl focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all placeholder:text-gray-700 resize-none"
              placeholder="Describe the core functionality and technical challenges..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Tech Stack */}
          <div className="flex flex-col gap-3">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">
              Technologies (Comma Separated)
            </label>
            <input
              required
              className="bg-black/50 border border-white/10 p-5 rounded-2xl focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all placeholder:text-gray-700"
              type="text"
              placeholder="React, Tailwind, Node.js"
              value={tech}
              onChange={(e) => setTech(e.target.value)}
            />
          </div>

          {/* Asset URL */}
          <div className="flex flex-col gap-3">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">
              Thumbnail Upload
            </label>
            <div className="relative group">
              <input
                required
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              <div className="bg-black/50 border-2 border-dashed border-white/10 p-5 rounded-2xl flex items-center justify-center gap-3 group-hover:border-blue-600/50 transition-colors">
                <FiUploadCloud
                  className={image ? "text-emerald-400" : "text-gray-500"}
                />
                <span className="text-sm text-gray-400 truncate">
                  {image ? image.name : "Choose project image..."}
                </span>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-col gap-3">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">
              Live URL
            </label>
            <input
              className="bg-black/50 border border-white/10 p-5 rounded-2xl focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all placeholder:text-gray-700"
              type="text"
              placeholder="Optional"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">
              Source Code (GitHub)
            </label>
            <input
              className="bg-black/50 border border-white/10 p-5 rounded-2xl focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all placeholder:text-gray-700"
              type="text"
              placeholder="Optional"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
            />
          </div>

          {/* Visibility Check */}
          <div className="md:col-span-2 flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/5 my-4">
            <input
              type="checkbox"
              className="w-6 h-6 rounded accent-blue-600 cursor-pointer"
              id="isBig"
              checked={isBig}
              onChange={(e) => setIsBig(e.target.value)}
            />
            <label
              htmlFor="isBig"
              className="font-bold text-sm cursor-pointer select-none uppercase tracking-widest"
            >
              Prioritize as "Featured Work" in Slider
            </label>
          </div>

          {/* Submit Action */}
          <button
            type="submit"
            className="md:col-span-2 py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black uppercase tracking-[0.3em] flex items-center justify-center gap-4 transition-all shadow-xl shadow-blue-500/20 active:scale-95"
          >
            <FiPlus size={22} strokeWidth={3} /> Launch to Production
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminPortal;
