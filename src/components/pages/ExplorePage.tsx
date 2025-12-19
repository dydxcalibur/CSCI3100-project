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
          <div className="max-w-[800px]">
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
          </div>

          
        </div>
    </div>
  );
}