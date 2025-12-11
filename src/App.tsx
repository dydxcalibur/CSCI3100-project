import { useState } from "react";
import { StartPage } from "./components/pages/StartPage";
import { Login } from "./components/pages/Login";
import { Register } from "./components/pages/Register";
import { HomePage } from "./components/pages/HomePage";
import { ExplorePage } from "./components/pages/ExplorePage";


type Page = "start" | "login" | "register"| "home" | "explore" | "ranking" | "export";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("start");
  const [currentUser, setCurrentUser] = useState<string>("");
  const [addedCourses, setAddedCourses] = useState<string[]>(["docker"]);
  const [streak, setStreak] = useState(114);
  const [score, setScore] = useState(810);

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

  const handleNavigate = (page: "home" | "explore" | "ranking" | "export") => {
    if (page === "ranking" || page === "export") {
      alert(`${page.toUpperCase()} page - Coming soon!`);
      return;
    }
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
          username={currentUser}
          courses={addedCourses.map(id => ({ id, name: id, label: id.toUpperCase() }))}
          streak={streak}
          score={score}
          onNavigate={handleNavigate}
          onExploreCourses={handleExploreCourses}
          onContinueCourse={handleContinueCourse}
        />
      )}
      {currentPage === "explore" && (
        <ExplorePage
          username={currentUser}
          addedCourses={addedCourses}
          onNavigate={handleNavigate}
          onAddCourse={handleAddCourse}
          onContinueCourse={handleContinueCourse}
        />
      )}
    </div>
  );
}
