const QuestionCard = ({ questionObj, selectedAnswer, setSelectedAnswer }) => {
  const optionLabels = ['A', 'B', 'C', 'D'];
  
  return (
    <div className="question-card">
      <div className="question-label-container">
        <span className="question-label">
          Question
        </span>
      </div>
      
      <h3>{questionObj.question}</h3>
      
      <div className="options">
        {questionObj.options.map((opt, idx) => (
          <button
            key={idx}
            className={`option-btn ${selectedAnswer === idx ? "selected" : ""}`}
            onClick={() => setSelectedAnswer(idx)}
          >
            <span className={`option-label ${selectedAnswer === idx ? 'option-label-selected' : 'option-label-unselected'}`}>
              {optionLabels[idx]}.
            </span>
            {opt}
          </button>
        ))}
      </div>
      
      {selectedAnswer !== null && (
        <div className="answer-confirmation">
          ✓ Answer selected: Option {optionLabels[selectedAnswer]}
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
