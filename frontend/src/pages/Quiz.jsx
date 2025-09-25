import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { generateQuiz, generateFeedback } from "../api/quizApi";
import QuestionCard from "../components/QuestionCard";
import Loader from "../components/Loader";

const Quiz = () => {
  const { topic } = useParams();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        setLoading(true);
        const data = await generateQuiz(topic);
        setQuestions(data.questions);
      } catch (err) {
        alert("Failed to fetch quiz. Try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchQuiz();
  }, [topic]);

  const handleNext = () => {
    if (selectedAnswer === questions[currentIndex].correctAnswerIndex) {
      setScore((prev) => prev + 1);
    }
    setSelectedAnswer(null);
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      const finalScore = score + (selectedAnswer === questions[currentIndex].correctAnswerIndex ? 1 : 0);
      navigate(`/feedback/${finalScore}/${encodeURIComponent(topic)}`);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  if (loading) return <Loader />;

  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="container">
      <div className="quiz-container">
        {/* Header */}
        <div className="card text-center quiz-header">
          <h2>📝 {topic} Quiz</h2>
          
          {/* Progress Indicator */}
          <div className="progress-indicator">
            <span className="progress-counter">
              Question {currentIndex + 1} of {questions.length}
            </span>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span className="progress-percentage">
              {Math.round(progress)}%
            </span>
          </div>
        </div>

        {/* Question Card */}
        <QuestionCard
          questionObj={questions[currentIndex]}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
        />

        {/* Navigation Buttons */}
        <div className="nav-buttons">
          <button 
            className={`btn btn-outline ${currentIndex === 0 ? 'nav-button-disabled' : ''}`}
            onClick={handlePrev} 
            disabled={currentIndex === 0}
          >
            ← Previous
          </button>
          
          <button 
            className={`btn ${selectedAnswer !== null ? 'btn-primary' : 'btn-outline'} ${selectedAnswer === null ? 'nav-button-answer-disabled' : ''}`}
            onClick={handleNext} 
            disabled={selectedAnswer === null}
          >
            {currentIndex + 1 === questions.length ? 'Finish Quiz 🏁' : 'Next →'}
          </button>
        </div>

        {/* Back to Home */}
        <div className="text-center quiz-back-home">
          <button 
            className="btn btn-outline quiz-back-home-btn"
            onClick={() => navigate('/')}
          >
            🏠 Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
