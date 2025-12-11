import svgPaths from "../../imports/svg-lxxp1ju7g4";
import svgPathsExplore from "../../imports/svg-t9zmhkmv77";

interface CourseCardProps {
  id: string;
  name: string;
  category: string;
  isTaken: boolean;
  onAction: (courseId: string) => void;
  onSelect?: (courseId: string) => void;
  mode: 'home' | 'explore';
}

export function CourseCard({ id, name, category, isTaken, onAction, onSelect, mode }: CourseCardProps) {
  const categoryColors = {
    docker: { bg: '#C3BB1A', text: 'DOCKER//' },
    git: { bg: '#C3BB1A', text: 'GIT//' },
    react: { bg: '#C3BB1A', text: 'REACT//' },
    python: { bg: '#C3BB1A', text: 'PYTHON//' },
  };

  const categoryColor = categoryColors[category as keyof typeof categoryColors] || categoryColors.docker;

  const renderIcon = () => {
    if (category === 'docker') {
      return (
        <div className="w-[60px] h-[38px]">
          <svg className="w-full h-full" fill="none" viewBox="0 0 60 46">
            <g filter="url(#filter0_d_docker)">
              <path d={svgPaths.p24f00f00} fill="white" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="46" id="filter0_d_docker" width="60" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_docker" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_docker" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      );
    } else if (category === 'git') {
      return (
        <div className="w-[50px] h-[51px]">
          <svg className="w-full h-full" fill="none" viewBox="0 0 50 51">
            <path d={svgPathsExplore.p1bb737f0} fill="white" />
          </svg>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="course-card-root">
      {/* Colored side bar */}
      <div className="course-card-sidebar">
        <svg className="course-card-gradient-bar" fill="none" preserveAspectRatio="none" viewBox="0 0 13 250">
          <path d="M13 0V250H0V0H13Z" fill="url(#paint0_linear_gradient)" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_gradient" x1="6.5" x2="6.5" y1="0" y2="250">
              <stop stopColor="#FFF41D" />
              <stop offset="0.3" stopColor="#9DFF74" />
              <stop offset="0.6" stopColor="#53BAFF" />
              <stop offset="0.8" stopColor="#C038FF" />
              <stop offset="1" stopColor="#FF1DCA" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Category text (rotated) */}
      <div className="course-card-category-text">
        <span>
          {categoryColor.text}
        </span>
      </div>

      {/* Course icon */}
      <div className="course-card-icon-wrapper">
        {renderIcon()}
      </div>

      {/* Course name */}
      <div className="course-card-title">
        <h3>
          {name}
        </h3>
      </div>

      {/* Added badge (only on explore page for taken courses) */}
      {mode === 'explore' && isTaken && (
        <div className="course-card-added-badge">
          <span className="course-card-added-badge-text">
            Added ✅
          </span>
        </div>
      )}

      {/* Action button */}
      <div className="course-card-button-wrapper">
        <button
          onClick={() => {
            // If it's a taken course or "Continue" mode, navigate to course page
            if (mode === 'home' || isTaken) {
              onSelect?.(id);
            } else {
              // Otherwise, toggle the course (add/remove)
              onAction(id);
            }
          }}
          className={`course-card-button ${
            mode === 'home' || isTaken
              ? 'course-card-button--continue'
              : 'course-card-button--add'
          }`}
        >
          {mode === 'home' || (mode === 'explore' && isTaken) ? 'Continue' : 'Add course'}
        </button>
      </div>
    </div>
  );
}