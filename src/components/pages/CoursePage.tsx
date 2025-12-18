import { ArrowLeft } from 'lucide-react';
import imgChicken from "../../assets/chicken.png";
import { Navbar } from "../Navbar";

interface Course {
  id: string;
  name: string;
  category: string;
  isTaken: boolean;
}

interface CoursePageProps {
  username: string;
  course: Course;
  activePage: "home" | "explore" | "ranking" | "export" | "profile";
  onBack: () => void;
  onStartLesson: () => void;
  score: number;
  accuracy: number;
  onNavigate: (page: "home" | "explore" | "ranking" | "export" | "profile") => void;
}

export function CoursePage({ username, course, activePage, onBack, onStartLesson, score, accuracy, onNavigate }: CoursePageProps) {
  const getCourseDescription = (category: string) => {
    const descriptions: Record<string, string> = {
      git: 'Learn the basics of version control, committing, and branching.',
      docker: 'Master containerization and deployment with Docker.',
      react: 'Build modern web applications with React.',
      python: 'Learn programming fundamentals with Python.',
    };
    return descriptions[category] || 'Start your learning journey today!';
  };

  return (
    <div className="page-course-root">
      <div className="relative">
        <Navbar username={username} activePage={activePage} onNavigate={onNavigate} />
      </div>

      <div className="page-course-layout">
        {/* Left panel - Yellow */}
        <div className="page-course-left">
          {/* Gradient border */}
          <div className="page-course-left-gradient" />

          {/* Back button */}
          <button
            onClick={onBack}
            className="page-course-back-button"
          >
            <ArrowLeft className="w-6 h-6" />
            Back
          </button>

          {/* Course title */}
          <h1 className="page-course-title">
            {course.name}
          </h1>

          {/* Description */}
          <p className="page-course-description">
            {getCourseDescription(course.category)}
          </p>

          {/* Start button */}
          <button
            onClick={onStartLesson}
            className="page-course-start-button"
          >
            Start New lesson
          </button>
        </div>

        {/* Right panel - Dark */}
        <div className="page-course-right">
          <div className="page-course-right-inner space-y-6">
            {/* Score block */}
            <div className="page-course-stat-card">
              <span className="font-['Poppins'] text-[40px] text-white opacity-50">
                Score
              </span>
              <span className="font-['Poppins'] text-[40px] text-[#fff41d]">
                {score}⭐️
              </span>
            </div>

            {/* Accuracy block */}
            <div className="page-course-stat-card">
              <span className="font-['Poppins'] text-[40px] text-white opacity-50">
                Accuracy
              </span>
              <span className="font-['Poppins'] text-[40px] text-[#fff41d]">
                {accuracy}%️
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
