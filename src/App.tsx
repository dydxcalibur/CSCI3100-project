import { useState } from "react";
import { StartPage } from "./components/pages/StartPage";
import { Login } from "./components/pages/Login";
import { Register } from "./components/pages/Register";
import { HomePage } from "./components/pages/HomePage";
import { ExplorePage } from "./components/pages/ExplorePage";
import { RankingPage } from './components/pages/RankingPage';
import { ExportPage } from './components/pages/ExportPage';
import { ProfilePage } from './components/pages/ProfilePage';
import { CoursePage } from './components/pages/CoursePage';
import { QuestionPage } from './components/pages/QuestionPage';
import { ConclusionPage } from './components/pages/ConclusionPage';

type Page = "start" | "login" | "register"| "home" | "explore" | "ranking" | "export" | "profile" | "course" | "question" | "conclusion";

type NavPage = "home" | "explore" | "ranking" | "export" | "profile";

type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("start");
  const [currentUser, setCurrentUser] = useState<string>("");
  const [addedCourses, setAddedCourses] = useState<string[]>(["docker"]);
  const [streak, setStreak] = useState(114); // TODO: Implement streak updates logic
  const [score, setScore] = useState(810);
  const [lastLessonScore, setLastLessonScore] = useState(0);
  const [lastLessonAccuracy, setLastLessonAccuracy] = useState(0);

  const dockerCourse = {
    id: "docker",
    name: "Introduction to Docker",
    category: "docker",
    isTaken: true,
  };

  const dockerQuestions: Question[] = [
    {
      id: 1,
      question: "What is Docker primarily used for?",
      options: [
        "Containerizing and running applications",
        "Editing source code in the browser",
        "Designing user interfaces",
        "Hosting static websites only",
      ],
      correctAnswer: 0,
    },
    {
      id: 2,
      question: "Which command builds a Docker image from a Dockerfile?",
      options: [
        "docker run",
        "docker build",
        "docker start",
        "docker compose",
      ],
      correctAnswer: 1,
    },
    {
      id: 3,
      question: "Where does a running container come from?",
      options: [
        "A Docker image",
        "A Git repository",
        "A Docker volume",
        "A Docker network",
      ],
      correctAnswer: 0,
    },
  ];

  const handleGetStarted = () => {
    setCurrentPage("register");
  };

  const handleLogin = (username: string, password: string, rememberMe: boolean) => {
    console.log("Login:", { username, password, rememberMe });
    setCurrentUser(username);
    // Add your login logic here
    alert(`Welcome back, ${username}!`);
  };

  const handleRegister = (username: string, password: string) => {
    console.log("Register:", { username, password });
    setCurrentUser(username);
    // Add your registration logic here
    alert(`Account created for ${username}!`);
    setCurrentPage("login");
  };

  const handleForgotPassword = () => {
    alert("Password reset link would be sent to your email");
    // Add forgot password logic here
  };

  const navigateToLogin = () => {
    setCurrentPage("login");
  };

  const navigateToRegister = () => {
    setCurrentPage("register");
  };

  const navigateToStart = () => {
    setCurrentPage("start");
  };

  const handleNavigate = (page: NavPage) => {
    setCurrentPage(page);
  };

  const handleAddCourse = (courseId: string) => {
    if (!addedCourses.includes(courseId)) {
      setAddedCourses([...addedCourses, courseId]);
      setScore(score + 50);
      alert(`${courseId.toUpperCase()} course added successfully!`);
    }
  };

  const handleContinueCourse = (courseId: string) => {
    alert(`Continuing ${courseId.toUpperCase()} course...`);
    // Add course continuation logic here
  };

  const handleExploreCourses = () => {
    setCurrentPage("explore");
  };

  return (
    <div className="w-screen h-screen overflow-hidden">
      {/* Debug navigation panel for quickly jumping between pages */}
      <div className="debug-panel">
        {(
          [
            "start",
            "login",
            "register",
            "home",
            "explore",
            "ranking",
            "export",
            "profile",
            "course",
            "question",
            "conclusion",
          ] as Page[]
        ).map((page) => (
          <button
            key={page}
            type="button"
            className="debug-panel-button"
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
      </div>

      {currentPage === "start" && (
        <StartPage
          onGetStarted={handleGetStarted}
          onLogin={navigateToLogin}
          onLogoClick={navigateToStart}
        />
      )}
      {currentPage === "login" && (
        <Login
          onLogin={handleLogin}
          onSignUp={navigateToRegister}
          onForgotPassword={handleForgotPassword}
          onLogoClick={navigateToStart}
        />
      )}
      {currentPage === "register" && (
        <Register
          onRegister={handleRegister}
          onLogin={navigateToLogin}
          onLogoClick={navigateToStart}
        />
      )}
      {currentPage === "home" && (
        <HomePage
          username={currentUser || "Guest"}
          courses={addedCourses.map(id => ({ id, name: id, label: id.toUpperCase() }))}
          streak={streak}
          score={score}
          activePage="home"
          onNavigate={handleNavigate}
          onExploreCourses={handleExploreCourses}
          onContinueCourse={handleContinueCourse}
        />
      )}
      {currentPage === "explore" && (
        <ExplorePage
          username={currentUser || "Guest"}
          addedCourses={addedCourses}
          activePage="explore"
          onNavigate={handleNavigate}
          onAddCourse={handleAddCourse}
          onContinueCourse={handleContinueCourse}
        />
      )}
      {currentPage === "ranking" && (
        <RankingPage
          username={currentUser || "Guest"}
          activePage="ranking"
          onNavigate={handleNavigate}
        />
      )}
      {currentPage === "export" && (
        <ExportPage
          username={currentUser || "Guest"}
          activePage="export"
          courses={addedCourses.map((id) => ({
            id,
            name: id.toUpperCase(),
            category: id,
            isTaken: true,
          }))}
          onNavigate={handleNavigate}
        />
      )}
      {currentPage === "profile" && (
        <ProfilePage
          username={currentUser || "Guest"}
          activePage="profile"
          score={score}
          streak={streak}
          onNavigate={handleNavigate}
        />
      )}
      {currentPage === "course" && (
        <CoursePage
          username={currentUser || "Guest"}
          activePage="explore"
          course={dockerCourse}
          onBack={() => setCurrentPage("home")}
          onStartLesson={() => setCurrentPage("question")}
          score={lastLessonScore}
          accuracy={lastLessonAccuracy}
          onNavigate={handleNavigate}
        />
      )}
      {currentPage === "question" && (
        <QuestionPage
          username={currentUser || "Guest"}
          courseName={dockerCourse.name}
          questions={dockerQuestions}
          activePage="explore"
          onNavigate={handleNavigate}
          onComplete={(lessonScore, lessonAccuracy) => {
            setLastLessonScore(lessonScore);
            setLastLessonAccuracy(lessonAccuracy);
            setScore((prev) => prev + lessonScore);
            setCurrentPage("conclusion");
          }}
          onQuit={() => setCurrentPage("course")}
        />
      )}
      {currentPage === "conclusion" && (
        <ConclusionPage
          username={currentUser || "Guest"}
          score={lastLessonScore}
          accuracy={lastLessonAccuracy}
          onReturnToCourse={() => setCurrentPage("course")}
          activePage="explore"
          onNavigate={handleNavigate}
        />
      )}
    </div>
  );
}
