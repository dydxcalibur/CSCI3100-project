import imgchicken from "../../assets/chicken.png";
import { Navbar } from "../Navbar";
import { GridBackground } from "../GridBackground";
import { Label } from "../Label";
import { CourseCard } from "./CourseCard";
import { GitCourseBlock, DockerCourseBlock } from "./CourseBlock";

interface ExplorePageProps {
  username: string;
  addedCourses: string[];
  onNavigate: (page: "home" | "explore" | "ranking" | "export" | "profile") => void;
  onAddCourse: (courseId: string) => void;
  onContinueCourse: (courseId: string) => void;
}

export function ExplorePage({ username, addedCourses, onNavigate, onAddCourse, onContinueCourse }: ExplorePageProps) {
  const isDockerAdded = addedCourses.includes("docker");
  const isGitAdded = addedCourses.includes("git");

  return (
    <div className="page-explore-root" data-name="explore">
      <GridBackground />
      
      <div className="relative">
        <Navbar username={username} activePage="explore" onNavigate={onNavigate} />
      </div>

        {/* Main content container */}
        <div className="page-explore-main">
          <div className="max-w-[800px]">
            {/* Git course section */}
            <div className="mb-12">
              <div className="mb-8">
                <Label label="GIT+++" variant="COURSES" />
              </div>
              <GitCourseBlock onAddCourse={() => onAddCourse("git")} />
            </div>

            {/* Docker course section */}
            <div className="mb-12">
              <div className="mb-8">
                <Label label="DOCKER" variant="COURSES" />
              </div>
              <DockerCourseBlock onContinue={() => onContinueCourse("docker")} />
            </div>
          </div>

          {/* Decorative image */}
          <div className="fixed bottom-0 right-[50px] h-[423px] w-[425px] opacity-30 pointer-events-none">
            <img 
              alt="Decorative illustration" 
              className="w-full h-full object-cover" 
              src={imgchicken} 
            />
          </div>
        </div>
    </div>
  );
}