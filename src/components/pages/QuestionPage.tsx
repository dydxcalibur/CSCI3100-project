import { useState } from 'react';
import { X } from 'lucide-react';
import { Navbar } from "../Navbar";
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface QuestionPageProps {
  courseName: string;
  questions: Question[];
  onComplete: (score: number, accuracy: number) => void;
  onQuit: () => void;
}

export function QuestionPage({ courseName, questions, onComplete, onQuit }: QuestionPageProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleCheckAnswer = () => {
    if (selectedAnswer === null) {
      alert('Please select an answer!');
      return;
    }

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1);
    }
    setAnsweredQuestions(prev => prev + 1);

    // Move to next question or complete
    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedAnswer(null);
      }, 500);
    } else {
      // Calculate final results
      const finalCorrect = isCorrect ? correctAnswers + 1 : correctAnswers;
      const score = finalCorrect * 10; // 10 points per correct answer
      const accuracy = Math.round((finalCorrect / questions.length) * 100);
      
      setTimeout(() => {
        onComplete(score, accuracy);
      }, 500);
    }
  };

  return (
    <div className="page-question-root">
      {/* Decorative chicken image */}
      <div className="page-question-bg-wrapper">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1550911495-055414e8fc90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwbWFzY290JTIwaWxsdXN0cmF0aW9ufGVufDF8fHx8MTc2NTQ0MDYzM3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt=""
          className="page-question-bg-image"
        />
      </div>

      <div className="page-question-layout">
        {/* Left panel - Yellow */}
        <div className="page-question-left">
          {/* Gradient border */}
          <div className="page-question-left-gradient" />

          {/* Quit button */}
          <button
            onClick={onQuit}
            className="page-question-quit-button"
          >
            <X className="w-6 h-6" />
            Quit lesson
          </button>

          {/* Course title */}
          <h1 className="page-question-title">
            {courseName}
          </h1>

          {/* Progress bar */}
          <div className="page-question-progress">
            <div
              className="page-question-progress-bar"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Question number */}
          <p className="page-question-number">
            Question {currentQuestionIndex + 1}/{questions.length}
          </p>

          {/* Question content */}
          <h2 className="page-question-text">
            {currentQuestion.question}
          </h2>

          {/* Check Answer button */}
          <button
            onClick={handleCheckAnswer}
            className="page-question-check-button"
          >
            Check Answer
          </button>
        </div>

        {/* Right panel - Dark */}
        <div className="page-question-right">
          <div className="page-question-options-wrapper space-y-4">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => setSelectedAnswer(index)}
                className={`page-question-option-button ${
                  selectedAnswer === index
                    ? 'page-question-option-button--selected'
                    : 'page-question-option-button--default'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
