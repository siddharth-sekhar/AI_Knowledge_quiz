import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Feedback from "./pages/Feedback";

function App() {
  // Debug: Log environment variables in development
  if (import.meta.env.VITE_ENABLE_DEBUG === 'true') {
    console.log('App Environment:', {
      apiUrl: import.meta.env.VITE_API_BASE_URL,
      environment: import.meta.env.VITE_NODE_ENV,
      version: import.meta.env.VITE_APP_VERSION
    });
  }

  return (
    <ThemeProvider>
      <Router>
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz/:topic" element={<Quiz />} />
          <Route path="/feedback/:score/:topic" element={<Feedback />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
