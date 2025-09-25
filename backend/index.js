import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import quizRoutes from "./routes/quizRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS middleware
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:5174"],
  credentials: true
}));

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/api/quiz", quizRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
