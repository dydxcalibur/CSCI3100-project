import svgPaths from "../../imports/svg-sy28fs8t6t";

interface CourseBlockProps {
  type: "git" | "docker";
  isAdded: boolean;
  onAddCourse?: () => void;
  onContinueCourse?: () => void;
  pageType?: "home" | "explore";
}

export function CourseBlock({ type, isAdded, onAddCourse, onContinueCourse, pageType = "explore" }: CourseBlockProps) {
  const isDocker = type === "docker";
  const isHomePage = pageType === "home";

  const title = isDocker ? "Introduction to Docker" : "Introduction to Git";

  const handleClick = () => {
    if (isHomePage) {
      // On the home page we always "continue" the course
      onContinueCourse?.();
    } else if (isDocker) {
      onContinueCourse?.();
    } else {
      onAddCourse?.();
    }
  };

  const shouldShowContinueStyle = isHomePage || isAdded;

  const buttonClassName = shouldShowContinueStyle
    ? "page-explore-course-button page-explore-course-button--continue"
    : "page-explore-course-button page-explore-course-button--add";

  const buttonLabel = shouldShowContinueStyle ? "Continue" : "Add course";

  return (
    <div className="relative" data-name={isDocker ? "docker course block" : "Git course block"}>
      <div className="bg-[#1c1c1c] border border-[#666666] border-solid h-[250px] w-[400px]" />

      {/* Color bar */}
      <div className="absolute h-[250px] left-0 top-0 w-[93px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 93 250">
          <g>
            <rect fill="#C3BB1A" height="249" stroke="#A7A7A7" width="79" x="0.5" y="0.5" />
            <path d={svgPaths.p74e0f00} fill="url(#paint0_linear_docker_explore)" stroke="#A7A7A7" />
          </g>
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_docker_explore"
              x1="111.687"
              x2="111.687"
              y1="0"
              y2="250"
            >
              <stop stopColor="#FFF41D" />
              <stop offset="0.3" stopColor="#9DFF74" />
              <stop offset="0.6" stopColor="#53BAFF" />
              <stop offset="0.8" stopColor="#C038FF" />
              <stop offset="1" stopColor="#FF1DCA" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Title */}
      <div className="absolute flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] left-[199.5px] not-italic text-[20px] text-center text-nowrap text-white top-[100px]">
        <p className="leading-[normal] whitespace-pre">{title}</p>
      </div>

      {/* Icon */}
      <div className="absolute left-[168px] top-[145px] w-[50px] h-[51px]">
        {isDocker ? (
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 46">
            <g filter="url(#filter0_d_docker_icon_explore)">
              <path d={svgPaths.p24f00f00} fill="white" />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="46"
                id="filter0_d_docker_icon_explore"
                width="60"
                x="0"
                y="0"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_docker_icon_explore" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_docker_icon_explore" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        ) : (
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 51">
            <path d={svgPaths.p1bb737f0} fill="white" />
          </svg>
        )}
      </div>

      {/* Added badge (only on explore page when already added) */}
      {!isHomePage && isAdded && (
        <div className="absolute right-[18px] top-[18px]">
          <div className="page-explore-added-badge">
            <span className="page-explore-added-badge-text">Added ✅</span>
          </div>
        </div>
      )}

      {/* Action button */}
      <div className="absolute left-[122px] top-[169px]">
        <button onClick={handleClick} className={buttonClassName}>
          <span className="page-explore-course-button-label">{buttonLabel}</span>
        </button>
      </div>
    </div>
  );
}

