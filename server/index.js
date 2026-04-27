import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import projectRoutes from "./src/routes/projects.routes.js";

dotenv.config();

const port = process.env.PORT || 5000;

// DB Connection
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Project API is active!");
});

// Routes
app.use("/api/projects", projectRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
