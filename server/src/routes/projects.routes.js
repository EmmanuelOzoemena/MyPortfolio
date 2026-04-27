import express from "express";
import {
  getProjects,
  createProject,
} from "../controllers/projects.controller.js";

const router = express.Router();

router.get("/", getProjects);
router.post("/", createProject); // Later you can protect this with Auth

export default router;
