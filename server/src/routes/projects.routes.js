import express from "express";
import {
  getProjects,
  createProject,
} from "../controllers/projects.controller.js";
import upload from "../config/cloudinary.js";

const router = express.Router();

router.get("/", getProjects);
router.post("/", upload.single("image"), createProject);

export default router;
