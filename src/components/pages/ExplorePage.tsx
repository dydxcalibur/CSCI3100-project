import { Navbar } from "../Navbar";
import { GridBackground } from "../GridBackground";
import { Label } from "../Label";
import { CourseBlock } from "./CourseBlock";

interface ExplorePageProps {
  username: string;
  addedCourses: string[];
  activePage: "home" | "explore" | "ranking" | "export" | "profile";
  onNavigate: (page: "home" | "explore" | "ranking" | "export" | "profile") => void;
  onAddCourse: (courseId: string) => void;
  onContinueCourse: (courseId: string) => void;
}

export function ExplorePage({ username, addedCourses, activePage, onNavigate, onAddCourse, onContinueCourse }: ExplorePageProps) {
  const isDockerAdded = addedCourses.includes("docker");
  const isGitAdded = addedCourses.includes("git");

  return (
    <div className="page-explore-root" data-name="explore">
      <GridBackground />
      
      <div className="relative">
        <Navbar username={username} activePage={activePage} onNavigate={onNavigate} />
      </div>

        {/* Main content container */}
        <div className="page-explore-main">
          <div className="max-w-[800px] mx-auto">
            {/* Git course section */}
            <div className="mb-12">
              <div className="mb-8">
                <Label label="GIT+++" variant="COURSES" />
              </div>
              <CourseBlock
                type="git"
                isAdded={isGitAdded}
                onAddCourse={() => onAddCourse("git")}
              />
            </div>

            {/* Docker course section */}
            <div className="mb-12">
              <div className="mb-8">
                <Label label="DOCKER" variant="COURSES" />
              </div>
              <CourseBlock
                type="docker"
                isAdded={isDockerAdded}
                onContinueCourse={() => onContinueCourse("docker")}
              />
            </div>

            {/* Additional content for testing scrolling */}
            <div className="mb-12">
              <div className="mb-8">
                <Label label="SOON" variant="COURSES" />
              </div>
              <div className="bg-[#1c1c1c] border border-[#666666] rounded-[12px] p-8">
                <p className="font-['Poppins'] text-[20px] text-[#cccccc]">
                  More courses will be available soon. Stay tuned for additional programming languages and technologies!
                </p>
              </div>
            </div>

            <div className="mb-12">
              <div className="bg-[#1c1c1c] border border-[#666666] rounded-[12px] p-8">
                <h3 className="font-['Poppins'] text-[25px] text-white mb-4">
                  Advanced Topics
                </h3>
                <p className="font-['Poppins'] text-[18px] text-[#cccccc] mb-4">
                  Explore advanced programming concepts and best practices in our upcoming modules.
                </p>
                <p className="font-['Poppins'] text-[18px] text-[#cccccc]">
                  Topics include: Machine Learning, Cloud Computing, DevOps, and more.
                </p>
              </div>
            </div>
          </div>

          
        </div>
    </div>
  );
}