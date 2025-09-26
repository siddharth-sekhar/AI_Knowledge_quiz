import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import quizRoutes from "./routes/quizRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration for Railway deployment
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174", 
  "http://localhost:3000",
  process.env.FRONTEND_URL,
  /\.railway\.app$/,
  /\.vercel\.app$/,
  /\.netlify\.app$/
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    
    const isAllowed = allowedOrigins.some(allowedOrigin => {
      if (typeof allowedOrigin === 'string') {
        return origin === allowedOrigin;
      }
      if (allowedOrigin instanceof RegExp) {
        return allowedOrigin.test(origin);
      }
      return false;
    });
    
    callback(null, isAllowed);
  },
  credentials: true
}));

app.use(express.json());


// Routes
app.use("/api/quiz", quizRoutes);

// Health check endpoint for Railway
app.get("/health", (req, res) => {
  res.status(200).json({ 
    status: "OK", 
    message: "AI Quiz Generator Backend is running",
    timestamp: new Date().toISOString()
  });
});

// Root endpoint
app.get("/", (req, res) => {
  res.json({ message: "AI Quiz Generator API - Backend is running!" });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
