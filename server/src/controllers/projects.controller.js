import Project from "../models/projects.model";

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
    const newProject = new Project(req.body);

    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(400).json({ message: "Error creating project", error });
  }
};
