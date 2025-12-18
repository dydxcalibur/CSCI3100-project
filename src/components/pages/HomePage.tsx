import svgPaths from "../../imports/svg-64vbrgc1uv";
import imgChicken from "../../assets/chicken.png";
import { Navbar } from "../Navbar";
import { GridBackground } from "../GridBackground";
import { Label } from "../Label";
import { CourseBlock } from "./CourseBlock";

interface Course {
  id: string;
  name: string;
  // label: string laid here 
  progress?: number;
}

interface HomePageProps {
  username: string;
  courses: Course[];
  streak: number;
  score: number;
  activePage: "home" | "explore" | "ranking" | "export" | "profile";
  onNavigate: (page: "home" | "explore" | "ranking" | "export" | "profile") => void;
  onExploreCourses: () => void;
  onContinueCourse: (courseId: string) => void;
}

export function HomePage({ username, courses, streak, score, activePage, onNavigate, onExploreCourses, onContinueCourse }: HomePageProps) {
  return (
    <div className="page-home-root" data-name="Home">
      <GridBackground />
      
      <div className="relative">
        <Navbar username={username} activePage={activePage} onNavigate={onNavigate} />

        {/* Main content container */}
        <div className="page-home-main">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left section - Courses */}
            <div className="flex-1 max-w-[800px]">
              {/* Course label */}
              <div className="mb-8">
                <Label label="YOUR +" variant="COURSES" />
              </div>

              {/* Docker course */}
              <div className="mb-12">
                <CourseBlock
                  type="docker"
                  isAdded={true}
                  pageType="home"
                  onContinueCourse={() => onContinueCourse("docker")}
                />
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
