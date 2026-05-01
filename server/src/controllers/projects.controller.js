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

export const createProject = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Please upload a project picture" });
    }

    const { title, category, description, tech, link, github, isBig } =
      req.body;

    // 3. Create the new project and manually add the Cloudinary URL
    const newProject = new Project({
      title,
      category,
      description,
      // If tech comes as a string (from FormData), convert it to an array
      tech:
        typeof tech === "string" ? tech.split(",").map((s) => s.trim()) : tech,
      link,
      github,
      isBig: isBig === "true" || isBig === true,
      image: req.file.path,
      cloudinaryId: req.file.filename,
    });

    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    console.error("Error creating project:", error);
    res
      .status(400)
      .json({ message: "Error creating project", error: error.message });
  }
};
