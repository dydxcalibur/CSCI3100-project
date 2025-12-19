import { useState } from 'react';
import { X } from 'lucide-react';
import { Navbar } from "../Navbar";
import { GridBackground } from "../GridBackground";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface QuestionPageProps {
  username: string;
  courseName: string;
  questions: Question[];
  onComplete: (score: number, accuracy: number) => void;
  onQuit: () => void;
  activePage: "home" | "explore" | "ranking" | "export" | "profile";
  onNavigate: (page: "home" | "explore" | "ranking" | "export" | "profile") => void;
}

export function QuestionPage({ username, courseName, questions, onComplete, onQuit, activePage, onNavigate }: QuestionPageProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [hasChecked, setHasChecked] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleCheckAnswer = () => {
    if (selectedAnswer === null) {
      alert('Please select an answer!');
      return;
    }

    // First click on "Check Answer" -> evaluate and show result, but stay on question
    if (!hasChecked) {
      const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
      if (isCorrect) {
        setCorrectAnswers((prev) => prev + 1);
      }
      setAnsweredQuestions((prev) => prev + 1);
      setHasChecked(true);
      return;
    }

    // Second click when already checked -> go to next question or finish
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setHasChecked(false);
    } else {
      const finalCorrect = correctAnswers;
      const score = finalCorrect * 10; // 10 points per correct answer
      const accuracy = Math.round((finalCorrect / questions.length) * 100);

      onComplete(score, accuracy);
    }
  };

  const getOptionClassName = (index: number) => {
    if (hasChecked && selectedAnswer === index) {
      // After checking, only highlight the selected option
      if (index === currentQuestion.correctAnswer) {
        return 'page-question-option-button page-question-option-button--correct';
      }
      return 'page-question-option-button page-question-option-button--incorrect';
    }

    return `page-question-option-button ${
      selectedAnswer === index
        ? 'page-question-option-button--selected'
        : 'page-question-option-button--default'
    }`;
  };

  return (
    <div className="page-question-root" data-name="question">
      <GridBackground />

      <div className="relative">
        <Navbar username={username} activePage={activePage} onNavigate={onNavigate} />
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
            {hasChecked ? 'Next' : 'Check Answer'}
          </button>
        </div>

        {/* Right panel - Dark */}
        <div className="page-question-right">
          <div className="page-question-options-wrapper space-y-4" style={{ display: 'flex', flexDirection: 'column', gap: '10px'}}>
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!hasChecked) {
                    setSelectedAnswer(index);
                  }
                }}
                disabled={hasChecked}
                className={getOptionClassName(index)}
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
