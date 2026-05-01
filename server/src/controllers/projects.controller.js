import Project from "../models/projects.model.js";

export const getProjects = async (req, res) => {
  try {
    const { category, search } = req.query;
    let query = {};

    // Filter by Category
    if (category && category !== "All") {
      query.category = category;
    }

    // Search Logic (Case-insensitive)
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { tech: { $regex: search, $options: "i" } },
      ];
    }

    const projects = await Project.find(query).sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: "Error fetching projects", error });
  }
};

// export const createProject = async (req, res) => {
//   try {
//     const { title, category, description, tech, link, github, isBig } =
//       req.body;

//     if (!req.file) {
//       return res.status(400).json({ error: "Please upload a project picture" });
//     }

//     const newProject = new Project({
//       title,
//       category,
//       description,
//       tech:
//         typeof tech === "string" ? tech.split(",").map((t) => t.trim()) : tech,
//       link,
//       github,
//       isBig: isBig === "true" || isBig === true,
//       image: req.file.path,
//       cloudinaryId: req.file.filename,
//     });

//     await newProject.save();

//     res.status(201).json({
//       message: "Project created successfully!",
//       data: newProject,
//     });
//   } catch (error) {
//     console.error("Project Create Error:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };


export const createProject = async (req, res) => {
  try {
    // 1. Destructure with defaults
    const { title, category, description, tech, link, github, isBig } = req.body;

    // 2. Check if Multer actually caught the file
    if (!req.file) {
      console.error("Multer Error: No file found in req.file");
      return res.status(400).json({ error: "Please upload a project picture" });
    }

    // 3. Construct the object carefully
    const newProject = new Project({
      title,
      category,
      description,
      // Tech might come as a string "HTML, CSS", we need to split it
      tech: typeof tech === "string" ? tech.split(",").map(t => t.trim()) : tech,
      link,
      github,
      // FormData sends booleans as strings "false" or "true"
      isBig: String(isBig) === "true", 
      image: req.file.path,        // Cloudinary URL from Multer
      cloudinaryId: req.file.filename // Public ID for deletions
    });

    // 4. Save to MongoDB
    const savedProject = await newProject.save();
    
    res.status(201).json({
      message: "Project created successfully",
      data: savedProject
    });

  } catch (error) {
    // This logs to your Render dashboard so you can see the EXACT line that failed
    console.error("DETAILED BACKEND ERROR:", error); 
    res.status(500).json({ 
      error: "Internal Server Error", 
      details: error.message 
    });
  }
};