import { useState } from "react";
import { useNavigate } from "react-router-dom";

const quickStartTopics = [
  { value: "JavaScript", label: "🖥️ JavaScript" },
  { value: "History", label: "📚 History" },
  { value: "Science", label: "🔬 Science" },
  { value: "Geography", label: "� Geography" },
  { value: "Movies", label: "🎬 Movies" },
  { value: "Sports", label: "⚽ Sports" }
];

const Home = () => {
  const navigate = useNavigate();
  const [customTopic, setCustomTopic] = useState("");

  const handleTopicChange = (e) => {
    setCustomTopic(e.target.value);
  };

  const handleStartQuiz = () => {
    const topic = customTopic.trim();
    if (topic) {
      navigate(`/quiz/${encodeURIComponent(topic)}`);
    }
  };

  const handleTopicButtonClick = (topic) => {
    navigate(`/quiz/${topic}`);
  };

  return (
    <div className="container">
      <div className="quiz-container">
        <div className="card text-center">
          <h1>🧠 AI Quiz Master</h1>
          <p className="home-description">
            Test your knowledge with AI-generated questions on your favorite topics!
          </p>
          
          {/* Custom Topic Input */}
          <div className="custom-topic-container">
            <h3>Create Your Own Quiz:</h3>
            <textarea 
              className="topic-textarea" 
              value={customTopic}
              onChange={handleTopicChange}
              placeholder="Enter any topic you want to be quizzed on... (e.g., Mathematics, Football, World War II etc.)"
              rows={3}
            />
            
            <button 
              className={`btn ${customTopic.trim() ? 'btn-primary' : 'btn-outline'} ${customTopic.trim() ? 'start-button-enabled' : 'start-button-disabled'}`}
              onClick={handleStartQuiz}
              disabled={!customTopic.trim()}
            >
              🚀 Start Custom Quiz
            </button>
          </div>

          <div className="divider">
            — OR —
          </div>

          {/* Quick Topic Buttons */}
          <div>
            <h3>Quick Start:</h3>
            <div className="topic-buttons">
              {quickStartTopics.map((topic, idx) => (
                <button 
                  key={idx} 
                  className="topic-btn"
                  onClick={() => handleTopicButtonClick(topic.value)}
                >
                  {topic.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
