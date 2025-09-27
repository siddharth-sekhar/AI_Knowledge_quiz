import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import quizRoutes from "./routes/quizRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(',') || ["http://localhost:5173", "http://localhost:5174"],
  credentials: true
}));

app.use(express.json());

// Health check endpoints
app.get("/", (req, res) => {
  res.json({ 
    message: "AI Knowledge Quiz Backend", 
    version: process.env.API_VERSION || "v1",
    environment: process.env.NODE_ENV || "development"
  });
});

app.get("/health", (req, res) => {
  res.json({ 
    status: "healthy", 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

app.use("/api/quiz", quizRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
