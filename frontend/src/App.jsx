import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Feedback from "./pages/Feedback";

function App() {
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
