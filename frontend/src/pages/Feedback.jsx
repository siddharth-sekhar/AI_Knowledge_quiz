import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { generateFeedback } from "../api/quizApi";
import Loader from "../components/Loader";
import QuestionReview from "../components/QuestionReview";

const Feedback = () => {
  const { score, topic } = useParams();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get quiz data from navigation state
  const quizData = location.state;

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        setMessage("loading...");
        const data = await generateFeedback(Number(score), 5, topic || ""); // use topic from URL
        setMessage(data.message);
      } catch (err) {
        setMessage("Failed to generate feedback.");
      }
    };
    fetchFeedback();
  }, [score]);

  const scorePercentage = (Number(score) / 5) * 100;
  const getScoreEmoji = (percentage) => {
    if (percentage >= 90) return "🏆";
    if (percentage >= 80) return "🎉";
    if (percentage >= 70) return "👏";
    if (percentage >= 60) return "👍";
    return "💪";
  };

  const getScoreColor = (percentage) => {
    if (percentage >= 80) return "var(--secondary-color)";
    if (percentage >= 60) return "var(--accent-color)";
    return "var(--danger-color)";
  };

  return (
    <div className="container">
      <div className="quiz-container">
        <div className="card text-center">
          <div className="feedback-emoji">
            {getScoreEmoji(scorePercentage)}
          </div>
          
          <h1 className="feedback-title">Quiz Complete!</h1>
          
          {/* Topic Display */}
          {topic && (
            <p className="feedback-topic">
              📝 {decodeURIComponent(topic)} Quiz
            </p>
          )}
          
          {/* Score Display */}
          <div 
            className="feedback-score-card"
            style={{ 
              background: `linear-gradient(135deg, ${getScoreColor(scorePercentage)}20, ${getScoreColor(scorePercentage)}10)`,
              border: `2px solid ${getScoreColor(scorePercentage)}`
            }}
          >
            <h2 
              className="feedback-score-number"
              style={{ color: getScoreColor(scorePercentage) }}
            >
              {score}/5
            </h2>
            <p className="feedback-score-percentage">
              {scorePercentage}% Correct
            </p>
          </div>

          {/* Feedback Message */}
          <div className="feedback-message-card">
            {message === "loading..." ? (
              <Loader message="Generating feedback..." />
            ) : (
              <div>
                <h3 className="feedback-message-title">
                  💡 Feedback
                </h3>
                <p className="feedback-message-text">
                  "{message}"
                </p>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="feedback-actions">
            <button 
              className="btn btn-primary"
              onClick={() => navigate("/")}
            >
              🏠 Back to Home
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => navigate(`/quiz/${encodeURIComponent(topic || '')}`)}
            >
              🔄 Try Again
            </button>
          </div>
        </div>

        {/* Question Review */}
        {quizData && quizData.questions && quizData.userAnswers && (
          <div className="card">
            <QuestionReview 
              questions={quizData.questions} 
              userAnswers={quizData.userAnswers} 
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Feedback;
