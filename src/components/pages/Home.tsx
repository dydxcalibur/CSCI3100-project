import svgPaths from "../../imports/svg-uxrmo6scda";
import imgchicken from "../../assets/chicken.png";
import { Navbar } from "../Navbar";
import { GridBackground } from "../GridBackground";

interface CourseCardProps {
  icon: "docker" | "git";
  title: string;
  onClick?: () => void;
}

function CourseCard({ icon, title, onClick }: CourseCardProps) {
  return (
    <button
      onClick={onClick}
      className="h-[390px] w-[273px] opacity-75 hover:opacity-100 transition-opacity cursor-pointer bg-transparent border-none p-0"
      data-name={`${icon} card`}
    >
      <div className="relative h-full w-full">
        <div className="absolute bg-[#3f3f3f] inset-0 rounded-[12px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
        
        {/* Icon */}
        <div className={icon === "docker" ? "absolute inset-[18.38%_19.06%_49.89%_18.75%]" : "absolute inset-[15.32%_22.5%_45.51%_22.19%]"}>
          {icon === "docker" ? (
            <div className="absolute bottom-[-6.47%] left-[-2.36%] right-[-2.36%] top-0">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 178 132">
                <g filter="url(#filter0_d_13_555)">
                  <path d={svgPaths.p16e34180} fill="white" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="131.742" id="filter0_d_13_555" width="177.772" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_13_555" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_13_555" mode="normal" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>
          ) : (
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 151 153">
              <path d={svgPaths.p1a0c5980} fill="white" />
            </svg>
          )}
        </div>

        {/* Rainbow bar */}
        <div className="absolute bottom-[27.79%] left-0 right-0 top-[68.93%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 273 13">
            <path d="M0 0H273V12.8009H0V0Z" fill="url(#paint0_linear_rainbow)" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_rainbow" x1="0" x2="273" y1="6.40044" y2="6.40044">
                <stop stopColor="#FFF41D" />
                <stop offset="0.3" stopColor="#9DFF74" />
                <stop offset="0.6" stopColor="#53BAFF" />
                <stop offset="0.8" stopColor="#C038FF" />
                <stop offset="1" stopColor="#FF1DCA" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Bottom section */}
        <div className="absolute bg-[#101010] bottom-0 left-0 right-0 rounded-bl-[12px] rounded-br-[12px] top-[72.21%] flex items-center justify-center">
          <p className="text-white text-center font-['Poppins:Medium',sans-serif]">{title}</p>
        </div>
      </div>
    </button>
  );
}

interface HomeProps {
  onLogoClick: () => void;
  username?: string;
}

export function Home({ onLogoClick, username }: HomeProps) {
  const handleCourseClick = (courseName: string) => {
    console.log(`Clicked on ${courseName} course`);
    alert(`Starting ${courseName} course...`);
  };

  return (
    <div className="bg-[#111111] relative size-full overflow-auto" data-name="Home">
      <GridBackground />
      
      <div className="relative min-h-full">
        {/* Sidebar */}
        <div className="fixed bg-gradient-to-b from-[#948e17] to-[#2e2c07] h-full left-0 top-0 w-[480px] z-10">
          <div className="relative h-full">
            {/* Decorative image */}
            <div className="absolute h-[423px] left-[27px] opacity-30 top-[606px] w-[425px]">
              <img 
                alt="Decorative illustration" 
                className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
                src={imgchicken} 
              />
            </div>

            {/* Courses header */}
            <div className="absolute left-[37px] top-[137px]">
              <div className="relative">
                <div className="bg-gradient-to-b from-[#53baff] to-[#99327d] h-[30px] w-[10px] absolute left-0 top-0" />
                <div className="bg-[#c3bb1a] h-[30px] ml-[10px] w-[230px]" />
                <div className="bg-[#111111] h-[54px] ml-[19px] mt-[30px] w-[221px] flex items-center justify-center">
                  <p className="font-['Poppins:SemiBold',sans-serif] text-[24px] text-white">COURSES</p>
                </div>
                <div className="bg-[#101010] h-[20px] ml-[20px] -mt-[74px] w-[72px] flex items-center justify-center">
                  <p className="font-['Poppins:Medium',sans-serif] text-[12px] text-white">//YOUR +</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content area */}
        <div className="ml-[480px] pt-[100px] px-[60px] pb-[60px] relative z-20">
          {/* Course grid */}
          <div className="grid grid-cols-2 gap-x-[69px] gap-y-[75px] mt-[159px]">
            <CourseCard icon="docker" title="Docker Basics" onClick={() => handleCourseClick("Docker")} />
            <CourseCard icon="git" title="Git Fundamentals" onClick={() => handleCourseClick("Git")} />
            <CourseCard icon="docker" title="Advanced Docker" onClick={() => handleCourseClick("Docker Advanced")} />
            <CourseCard icon="git" title="Git Workflows" onClick={() => handleCourseClick("Git Advanced")} />
          </div>
        </div>

        <Navbar onLogoClick={onLogoClick} />
      </div>
    </div>
  );
}
