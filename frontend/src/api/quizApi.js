import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT || "/api/quiz";
const API_URL = `${API_BASE_URL}${API_ENDPOINT}`;

export const generateQuiz = async (topic) => {
  try {
    const res = await axios.post(`${API_URL}/generate`, { topic });
    return res.data;
  } catch (err) {
    console.error("Error generating quiz:", err);
    throw err;
  }
};

export const generateFeedback = async (score, total, topic) => {
  try {
    const res = await axios.post(`${API_URL}/feedback`, { score, total, topic });
    return res.data;
  } catch (err) {
    console.error("Error generating feedback:", err);
    throw err;
  }
};
