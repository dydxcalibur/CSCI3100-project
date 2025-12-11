import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ConclusionPageProps {
  score: number;
  accuracy: number;
  onReturnToCourse: () => void;
}

export function ConclusionPage({ score, accuracy, onReturnToCourse }: ConclusionPageProps) {
  return (
    <div className="page-conclusion-root">
      {/* Decorative chicken images */}
      <div className="page-conclusion-bg-image-wrapper">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1550911495-055414e8fc90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwbWFzY290JTIwaWxsdXN0cmF0aW9ufGVufDF8fHx8MTc2NTQ0MDYzM3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt=""
          className="page-conclusion-bg-image"
        />
      </div>

      <div className="page-conclusion-container">
        {/* Chicken mascot */}
        <div className="page-conclusion-mascot-wrapper">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1550911495-055414e8fc90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwbWFzY290JTIwaWxsdXN0cmF0aW9ufGVufDF8fHx8MTc2NTQ0MDYzM3ww&ixlib=rb-4.1.0&q=80&w=1080"
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
