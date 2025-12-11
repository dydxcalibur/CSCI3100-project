import svgPaths from "../../imports/svg-sy28fs8t6t";
import img53202511062053544 from "../../assets/chicken.png";
import { NavbarLoggedIn } from "../NavbarLoggedIn";
import { GridBackground } from "../GridBackground";

interface ExplorePageProps {
  username: string;
  addedCourses: string[];
  onNavigate: (page: "home" | "explore" | "ranking" | "export") => void;
  onAddCourse: (courseId: string) => void;
  onContinueCourse: (courseId: string) => void;
}

function CourseLabel({ label }: { label: string }) {
  return (
    <div className="h-[84px] w-[240px] shadow-[4px_4px_10px_0px_rgba(102,102,102,0.25)]" data-name="label">
      <div className="relative h-full w-full">
        <div className="absolute bg-[#c3bb1a] bottom-[64.29%] left-[4.17%] right-0 top-0" />
        <div className="absolute bg-[#111111] bottom-0 left-[7.92%] right-0 top-[35.71%]" />
        <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] inset-[46.43%_38.33%_10.71%_15%] justify-center leading-[0] not-italic text-[24px] text-center text-nowrap text-white">
          <p className="leading-[normal] whitespace-pre">COURSES</p>
        </div>
        <div className="absolute bg-[#101010] inset-[11.9%_62.08%_64.29%_7.92%]" />
        <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] inset-[14.29%_64.17%_64.29%_10.42%] justify-center leading-[0] not-italic text-[12px] text-center text-nowrap text-white">
          <p className="leading-[normal] whitespace-pre"> //{label}</p>
        </div>
        <div className="absolute bg-gradient-to-b bottom-[64.29%] from-[#53baff] left-0 right-[95.83%] to-[#99327d] top-0" />
      </div>
    </div>
  );
}

function GitCourseBlock({ onAddCourse }: { onAddCourse: () => void }) {
  return (
    <div className="relative" data-name="Git course block">
      <div className="bg-[#1c1c1c] border border-[#666666] border-solid h-[250px] w-[400px]" />
      
      {/* Color bar */}
      <div className="absolute h-[250px] left-0 top-0 w-[93px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 93 250">
          <g>
            <rect fill="#C3BB1A" height="250" width="80" />
            <path d="M93 0L93 250H80L80 0L93 0Z" fill="url(#paint0_linear_git)" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_git" x1="111.687" x2="111.687" y1="0" y2="250">
              <stop stopColor="#FFF41D" />
              <stop offset="0.3" stopColor="#9DFF74" />
              <stop offset="0.6" stopColor="#53BAFF" />
              <stop offset="0.8" stopColor="#C038FF" />
              <stop offset="1" stopColor="#FF1DCA" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Vertical GIT text */}
      <div className="absolute flex h-[128px] items-center justify-center left-[49.5px] top-[186px] w-[75px]">
        <div className="rotate-[270deg]">
          <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic opacity-50 text-[50px] text-center text-nowrap text-white">
            <p className="leading-[normal] whitespace-pre">GIT//</p>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="absolute flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] left-[199.5px] not-italic text-[20px] text-center text-nowrap text-white top-[100px]">
        <p className="leading-[normal] whitespace-pre">Introduction to Git</p>
      </div>

      {/* Git icon */}
      <div className="absolute left-[168px] top-[145px] w-[50px] h-[51px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 51">
          <path d={svgPaths.p1bb737f0} fill="white" />
        </svg>
      </div>

      {/* Add course button */}
      <div className="absolute left-[122px] top-[169px]">
        <button
          onClick={onAddCourse}
          className="bg-[#c3bb1a] hover:bg-[#d3cb2a] transition-colors h-[45px] rounded-[12px] w-[246px] flex items-center justify-center"
        >
          <span className="font-['Poppins:Bold',sans-serif] text-[#111111] text-[20px]">Add course</span>
        </button>
      </div>
    </div>
  );
}

function DockerCourseBlock({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="relative" data-name="docker course block">
      <div className="bg-[#1c1c1c] border border-[#666666] border-solid h-[250px] w-[400px]" />
      
      {/* Color bar */}
      <div className="absolute h-[250px] left-0 top-0 w-[93px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 93 250">
          <g>
            <rect fill="#C3BB1A" height="249" stroke="#A7A7A7" width="79" x="0.5" y="0.5" />
            <path d={svgPaths.p74e0f00} fill="url(#paint0_linear_docker_explore)" stroke="#A7A7A7" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_docker_explore" x1="111.687" x2="111.687" y1="0" y2="250">
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
      <div className="absolute flex h-[254px] items-center justify-center left-[49.5px] top-[127px] w-[75px]">
        <div className="rotate-[270deg]">
          <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic opacity-50 text-[50px] text-center text-nowrap text-white">
            <p className="leading-[normal] whitespace-pre">DOCKER//</p>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="absolute flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] left-[221.5px] not-italic text-[20px] text-center text-nowrap text-white top-[102px]">
        <p className="leading-[normal] whitespace-pre">Introduction to Docker</p>
      </div>

      {/* Docker icon */}
      <div className="absolute left-[168px] top-[145px] w-[50px] h-[38px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 46">
          <g filter="url(#filter0_d_docker_icon_explore)">
            <path d={svgPaths.p24f00f00} fill="white" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="46" id="filter0_d_docker_icon_explore" width="60" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_docker_icon_explore" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_docker_icon_explore" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>

      {/* Added badge */}
      <div className="absolute left-[296px] top-[18px]">
        <div className="bg-[#0f4209] h-[25px] rounded-[12px] px-3 flex items-center justify-center">
          <span className="font-['Poppins:Bold',sans-serif] text-[#7ee385] text-[13px]">Added ✅</span>
        </div>
      </div>

      {/* Continue button */}
      <div className="absolute left-[122px] top-[169px]">
        <button
          onClick={onContinue}
          className="bg-[#666666] hover:bg-[#777777] transition-colors h-[45px] rounded-[12px] w-[246px] flex items-center justify-center"
        >
          <span className="font-['Poppins:Bold',sans-serif] text-white text-[20px]">Continue</span>
        </button>
      </div>
    </div>
  );
}

export function ExplorePage({ username, addedCourses, onNavigate, onAddCourse, onContinueCourse }: ExplorePageProps) {
  const isDockerAdded = addedCourses.includes("docker");
  const isGitAdded = addedCourses.includes("git");

  return (
    <div className="bg-[#121212] relative min-h-screen w-full overflow-auto" data-name="explore">
      <GridBackground />
      
      <div className="relative">
        <NavbarLoggedIn username={username} activePage="explore" onNavigate={onNavigate} />

        {/* Main content container */}
        <div className="pt-[100px] px-[40px] md:px-[68px] pb-[60px]">
          <div className="max-w-[800px]">
            {/* Git course section */}
            <div className="mb-12">
              <div className="mb-8">
                <CourseLabel label="GIT+++" />
              </div>
              <GitCourseBlock onAddCourse={() => onAddCourse("git")} />
            </div>

            {/* Docker course section */}
            <div className="mb-12">
              <div className="mb-8">
                <CourseLabel label="DOCKER" />
              </div>
              <DockerCourseBlock onContinue={() => onContinueCourse("docker")} />
            </div>
          </div>

          {/* Decorative image */}
          <div className="fixed bottom-0 right-[50px] h-[423px] w-[425px] opacity-30 pointer-events-none">
            <img 
              alt="Decorative illustration" 
              className="w-full h-full object-cover" 
              src={img53202511062053544} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}