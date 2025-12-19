import { useState } from "react";
import svgPaths from "../../imports/svg-9f374ycx7i";
import { Navbar } from "../Navbar";
import { GridBackground } from "../GridBackground";

interface LoginProps {
  onLogin: (username: string, password: string, rememberMe: boolean) => void;
  onSignUp: () => void;
  onForgotPassword: () => void;
  onLogoClick: () => void;
}

export function Login({ onLogin, onSignUp, onForgotPassword, onLogoClick }: LoginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(username, password, rememberMe);
  };

  return (
    <div className="page-auth-root" data-name="login">
      <GridBackground />
      <div className="page-auth-inner">
        <div className="page-auth-content">
          <div className="page-auth-form-wrapper">
            <div className="page-auth-form">
              <div className="page-auth-heading">
                <p>Log in</p>
              </div>
              <form onSubmit={handleSubmit} className="page-auth-form">
                <div className="page-auth-field-group" data-name="Email">
                  <div className="page-auth-label">
                    <p>User name</p>
                  </div>
                  <div className="page-auth-input-wrapper" data-name="Text field">
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="page-auth-input"
                      required
                    />
                    <div aria-hidden="true" className="page-auth-input-border-light" />
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <div className="page-auth-field-group" data-name="Text field">
                    <div className="page-auth-label">
                      <p>Password</p>
                      <div className="absolute contents right-[8.86px] top-0" data-name="Password hide / see">
                        <div className="absolute opacity-75 overflow-clip right-[57.86px] size-[24px] top-[3px]" data-name="icon">
                          <div className="absolute inset-[16.71%_12.08%_16.64%_12.14%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 16">
                              <g id="Group 1">
                                <path d={svgPaths.p23cd5700} fill="var(--fill-0, #FFF41D)" id="Vector" />
                                <path d={svgPaths.p25586b00} fill="var(--fill-0, #FFF41D)" id="Vector_2" />
                              </g>
                            </svg>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="page-auth-password-toggle"
                        >
                          {showPassword ? "Show" : "Hide"}
                        </button>
                      </div>
                    </div>
                    <div className="page-auth-input-wrapper" data-name="Text field">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="page-auth-input"
                        required
                      />
                      <div aria-hidden="true" className="page-auth-input-border-dark" />
                    </div>
                  </div>
                  <div className="page-auth-checkbox-row" data-name="Check box">
                    <label className="flex gap-[8px] items-center cursor-pointer">
                      <div className="page-auth-checkbox-box" data-name="Check box">
                        <input
                          type="checkbox"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                          className="page-auth-checkbox-input"
                        />
                        <div className="absolute inset-0" data-name="Vector">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                            <g id="Vector"></g>
                          </svg>
                        </div>
                        {rememberMe && (
                          <div className="absolute inset-0" data-name="Vector">
                            <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 244, 29, 1)" } as React.CSSProperties}>
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                                <path d={svgPaths.pae529f2} fill="var(--fill-0, #FFF41D)" id="Vector" />
                              </svg>
                            </div>
                          </div>
                        )}
                      </div>
                      <p className="page-auth-checkbox-label">Remember me</p>
                    </label>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                  <div className="page-auth-terms" data-name="link text">
                    <p className="page-auth-terms-text">
                      <span className="text-[#aaaaaa]">{`By continuing, you agree to the `}</span>
                      <span className="page-auth-terms-link">Terms of use</span> <span className="text-[#aaaaaa]">and</span> <span className="page-auth-terms-link">Privacy Policy.</span>
                    </p>
                  </div>
                  <button type="submit" className="page-auth-primary-button" data-name="Button">
                    <div className="page-auth-primary-label">
                      <p>Log in</p>
                    </div>
                  </button>
                </div>
              </form>
            </div>
            <div className="content-stretch flex flex-col gap-[24px] items-center justify-end relative shrink-0">
              <div className="page-auth-link-row" data-name="Have an account login">
                <button
                  type="button"
                  onClick={onForgotPassword}
                  className="page-auth-forgot-link-button"
                >
                  Forget your password
                </button>
              </div>
              <div className="page-auth-link-row" data-name="Have an account login">
                <p className="page-auth-link-text">
                  <span className="text-white">Don't have an account?</span>{" "}
                  <button
                    type="button"
                    onClick={onSignUp}
                    className="page-auth-inline-link-button"
                  >
                    Sign up
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Navbar onLogoClick={onLogoClick} />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}