import { useState } from "react";
import { StartPage } from "./components/pages/StartPage";
import { Login } from "./components/pages/Login";
import { Register } from "./components/pages/Register";

type Page = "start" | "login" | "register";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("start");

  const handleGetStarted = () => {
    setCurrentPage("register");
  };

  const handleLogin = (username: string, password: string, rememberMe: boolean) => {
    console.log("Login:", { username, password, rememberMe });
    // Add your login logic here
    alert(`Welcome back, ${username}!`);
  };

  const handleRegister = (username: string, password: string) => {
    console.log("Register:", { username, password });
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
    </div>
  );
}
