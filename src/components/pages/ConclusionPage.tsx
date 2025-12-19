import imgchicken from '../../assets/chicken.png'
import { Navbar } from "../Navbar";

interface ConclusionPageProps {
  username: string;
  score: number;
  accuracy: number;
  onReturnToCourse: () => void;
}

export function ConclusionPage({ username, score, accuracy, onReturnToCourse }: ConclusionPageProps) {
  return (
    <div className="page-conclusion-root">

      <div className="page-conclusion-container">
        {/* Chicken mascot */}
        <div className="page-conclusion-mascot-wrapper">
          <img
            src={imgchicken}
            alt="Chicken mascot"
            className="page-conclusion-mascot-image"
          />
        </div>

        {/* Title */}
        <h1 className="page-conclusion-title">
          Lesson Complete!
        </h1>

        {/* Stats */}
        <div className="page-conclusion-stats-row">
          {/* Score */}
          <div className="page-conclusion-stat-card">
            <p className="page-conclusion-stat-label">
              Score
            </p>
            <p className="page-conclusion-stat-value">
              {score}
            </p>
          </div>

          {/* Accuracy */}
          <div className="page-conclusion-stat-card">
            <p className="page-conclusion-stat-label">
              Total Accuracy
            </p>
            <p className="page-conclusion-stat-value">
              {accuracy}%
            </p>
          </div>
        </div>

        {/* Return button */}
        <button
          onClick={onReturnToCourse}
          className="page-conclusion-button"
        >
          Return to Course
        </button>
      </div>
    </div>
  );
}
