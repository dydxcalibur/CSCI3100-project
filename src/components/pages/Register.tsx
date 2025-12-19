import { useState } from "react";
import svgPaths from "../../imports/svg-l6lxgqgatj";
import { Navbar } from "../Navbar";
import { GridBackground } from "../GridBackground";

interface RegisterProps {
  onRegister: (username: string, password: string) => void;
  onLogin: () => void;
  onLogoClick: () => void;
}

export function Register({ onRegister, onLogin, onLogoClick }: RegisterProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 8) {
      alert("Password must be at least 8 characters long");
      return;
    }
    onRegister(username, password);
  };

  return (
    <div className="page-auth-root" data-name="register">
      <GridBackground />
      <div className="page-auth-inner">
        <div className="page-auth-content">
          <div className="page-auth-form-wrapper">
            <div className="page-auth-form">
              <div className="page-auth-heading">
                <p>Sign up</p>
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
                  <div className="flex flex-col font-['Poppins',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#666666] text-[14px] text-nowrap font-normal">
                    <p className="leading-[normal] whitespace-pre">{`Use 8 or more characters with a mix of letters, numbers & symbols`}</p>
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
                      <p>Sign up</p>
                    </div>
                  </button>
                </div>
              </form>
            </div>
            <div className="content-stretch flex flex-col gap-[24px] items-center justify-end relative shrink-0">
              <div className="page-auth-link-row" data-name="Have an account login">
                <p className="page-auth-link-text">
                  <span className="text-white">Already have an account?</span>{" "}
                  <button
                    type="button"
                    onClick={onLogin}
                    className="page-auth-inline-link-button"
                  >
                    Log in
                  </button>
                </p>
              </div>
            </div>
          </div>
          <Navbar onLogoClick={onLogoClick} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}