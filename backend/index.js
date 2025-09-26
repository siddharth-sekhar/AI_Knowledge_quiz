import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import quizRoutes from "./routes/quizRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration for Render deployment
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:5174",
    "http://localhost:3000",
    process.env.FRONTEND_URL,
    /\.onrender\.com$/,
    /\.vercel\.app$/,
    /\.netlify\.app$/
  ].filter(Boolean),
  credentials: true
};

app.use(cors(corsOptions));

app.use(express.json());


app.use("/api/quiz", quizRoutes);

// Health check endpoint for Render
app.get("/", (req, res) => {
  res.json({ 
    message: "AI Quiz Generator API is running!",
    status: "healthy",
    timestamp: new Date().toISOString()
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({ 
    status: "OK", 
    message: "Backend is healthy",
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
