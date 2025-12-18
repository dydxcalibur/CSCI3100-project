import svgPaths from "../../imports/svg-64vbrgc1uv";
import imgChicken from "../../assets/chicken.png";
import { Navbar } from "../Navbar";
import { GridBackground } from "../GridBackground";

interface Course {
  id: string;
  name: string;
  label: string;
  progress?: number;
}

interface HomePageProps {
  username: string;
  courses: Course[];
  streak: number;
  score: number;
  onNavigate: (page: "home" | "explore" | "ranking" | "export" | "profile") => void;
  onExploreCourses: () => void;
  onContinueCourse: (courseId: string) => void;
}

function CourseLabel({ label }: { label: string }) {
  return (
    <div className="home-course-label-root" data-name="label">
      <div className="home-course-label-inner">
        <div className="home-course-label-yellow" />
        <div className="home-course-label-black" />
        <div className="home-course-label-title-wrapper">
          <p>COURSES</p>
        </div>
        <div className="home-course-label-dark-strip" />
        <div className="home-course-label-subtitle-wrapper">
          <p> //{label}</p>
        </div>
        <div className="home-course-label-gradient-bar" />
      </div>
    </div>
  );
}

function DockerCourseBlock({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="home-docker-root" data-name="docker course block">
      <div className="home-docker-card-bg" />
      
      {/* Color bar */}
      <div className="home-docker-color-bar">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 93 250">
          <g>
            <rect fill="#C3BB1A" height="249" stroke="#A7A7A7" width="79" x="0.5" y="0.5" />
            <path d={svgPaths.p74e0f00} fill="url(#paint0_linear_docker)" stroke="#A7A7A7" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_docker" x1="111.687" x2="111.687" y1="0" y2="250">
              <stop stopColor="#FFF41D" />
              <stop offset="0.3" stopColor="#9DFF74" />
              <stop offset="0.6" stopColor="#53BAFF" />
              <stop offset="0.8" stopColor="#C038FF" />
              <stop offset="1" stopColor="#FF1DCA" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Vertical DOCKER text */}
      <div className="home-docker-vertical-text-wrapper">
        <div className="home-docker-vertical-text-inner">
          <div className="home-docker-vertical-text">
            <p>DOCKER//</p>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="home-docker-title-wrapper">
        <p>Introduction to Docker</p>
      </div>

      {/* Docker icon */}
      <div className="home-docker-icon-wrapper">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 46">
          <g filter="url(#filter0_d_docker_icon)">
            <path d={svgPaths.p24f00f00} fill="white" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="46" id="filter0_d_docker_icon" width="60" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_docker_icon" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_docker_icon" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>

      {/* Continue button */}
      <div className="absolute left-[122px] top-[212px]">
        <button 
          onClick={onContinue}
          className="page-home-docker-continue-button"
        >
          <span className="page-home-docker-continue-label">Continue</span>
        </button>
      </div>
    </div>
  );
}

export function HomePage({ username, courses, streak, score, onNavigate, onExploreCourses, onContinueCourse }: HomePageProps) {
  return (
    <div className="page-home-root" data-name="Home">
      <GridBackground />
      
      <div className="relative">
        <Navbar username={username} activePage="home" onNavigate={onNavigate} />

        {/* Main content container */}
        <div className="page-home-main">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left section - Courses */}
            <div className="flex-1 max-w-[800px]">
              {/* Course label */}
              <div className="mb-8">
                <CourseLabel label="YOUR +" />
              </div>

              {/* Docker course */}
              <div className="mb-12">
                <DockerCourseBlock onContinue={() => onContinueCourse("docker")} />
              </div>

              {/* Divider */}
              <div className="h-[1px] bg-white w-full max-w-[718px] mb-8" />

              {/* Explore section */}
              <div className="flex items-center justify-between max-w-[718px]">
                <p className="font-['Poppins:Bold',sans-serif] opacity-75 text-[25px] text-white">
                  Want to learn something new?
                </p>
                <button
                  onClick={onExploreCourses}
                  className="page-home-explore-button"
                >
                  <span className="page-home-explore-button-label">Explore➕</span>
                </button>
              </div>
            </div>

            {/* Right section - User stats */}
            <div className="w-full lg:w-[460px] space-y-6">
              {/* Welcome block */}
              <div className="page-home-welcome-card">
                <p className="font-['Poppins:Bold',sans-serif] text-[50px] text-white mb-4">
                  Welcome back!
                </p>
                <p className="font-['Poppins:Bold',sans-serif] text-[#fff41d] text-[45px] mb-4">
                  {username}
                </p>
                <p className="font-['Poppins:Bold',sans-serif] text-[30px] text-white">
                  Good to see you today!
                </p>
              </div>

              {/* Streak block */}
              <div className="page-home-stat-card">
                <span className="font-['Poppins:Bold',sans-serif] opacity-50 text-[40px] text-white">
                  Streak
                </span>
                <span className="font-['Poppins:Bold',sans-serif] text-[#fff41d] text-[40px]">
                  {streak}🔥️
                </span>
              </div>

              {/* Score block */}
              <div className="page-home-stat-card">
                <span className="font-['Poppins:Bold',sans-serif] opacity-50 text-[40px] text-white">
                  Score
                </span>
                <span className="font-['Poppins:Bold',sans-serif] text-[#fff41d] text-[40px]">
                  {score}⭐️
                </span>
              </div>

              {/* Decorative image */}
              <div className="h-[206px] w-[207px] opacity-30 ml-auto mt-8">
                <img 
                  alt="Decorative illustration" 
                  className="w-full h-full object-cover pointer-events-none" 
                  src={imgChicken} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
