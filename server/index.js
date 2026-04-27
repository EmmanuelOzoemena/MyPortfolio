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
const allowedOrigins = [
  'http://localhost:5173', 
  // 'https://cchs-activity-tracker.vercel.app'
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl/Thunder Client)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Project API is active!");
});

// Routes
app.use("/api/projects", projectRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
