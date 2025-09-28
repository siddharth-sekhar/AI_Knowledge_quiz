import React from "react";

const QuestionReview = ({ questions, userAnswers }) => {
  if (!questions || !userAnswers || questions.length === 0) {
    return null;
  }

  return (
    <div className="question-review-container">
      <h3 className="review-title">📋 Question Review</h3>
      <div className="review-questions">
        {questions.map((question, index) => {
          const userAnswerIndex = userAnswers[index];
          const correctAnswerIndex = question.correctAnswerIndex;
          const isCorrect = userAnswerIndex === correctAnswerIndex;

          return (
            <div key={index} className="review-question-card">
              <div className="review-question-header">
                <span className="question-number">Question {index + 1}</span>
                <span className={`answer-status ${isCorrect ? 'correct' : 'incorrect'}`}>
                  {isCorrect ? '✅' : '❌'}
                </span>
              </div>
              
              <div className="review-question-text">
                {question.question}
              </div>
              
              <div className="review-options">
                {question.options.map((option, optionIndex) => {
                  let optionClass = "review-option";
                  
                  // Mark correct answer
                  if (optionIndex === correctAnswerIndex) {
                    optionClass += " correct-answer";
                  }
                  
                  // Mark user's selected answer (if wrong)
                  if (optionIndex === userAnswerIndex && !isCorrect) {
                    optionClass += " user-wrong-answer";
                  }
                  
                  return (
                    <div key={optionIndex} className={optionClass}>
                      <span className="option-label">
                        {String.fromCharCode(65 + optionIndex)})
                      </span>
                      <span className="option-text">{option}</span>
                      <span className="option-indicator">
                        {optionIndex === correctAnswerIndex && '✅'}
                        {optionIndex === userAnswerIndex && !isCorrect && '❌'}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionReview;