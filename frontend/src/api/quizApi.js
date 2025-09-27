import axios from "axios";

const API_URL = "http://localhost:5000/api/quiz";

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
