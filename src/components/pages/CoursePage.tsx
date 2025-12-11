import { ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface Course {
  id: string;
  name: string;
  category: string;
  isTaken: boolean;
}

interface CoursePageProps {
  course: Course;
  onBack: () => void;
  onStartLesson: () => void;
  score: number;
  accuracy: number;
}

export function CoursePage({ course, onBack, onStartLesson, score, accuracy }: CoursePageProps) {
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
      {/* Decorative chicken image */}
      <div className="fixed bottom-10 right-10 w-80 h-80 opacity-30 pointer-events-none">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1550911495-055414e8fc90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwbWFzY290JTIwaWxsdXN0cmF0aW9ufGVufDF8fHx8MTc2NTQ0MDYzM3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt=""
          className="w-full h-full object-cover"
        />
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
