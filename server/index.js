import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/db";
import projectRoutes from "./src/routes/projects.routes";

dotenv.config();

// DB Connection
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/projects", projectRoutes);

