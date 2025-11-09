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
    <div className="bg-[#111111] relative size-full" data-name="register">
      <GridBackground />
      <div className="relative size-full flex items-center justify-center">
        <div className="content-stretch flex flex-col gap-[48px] items-start mt-[100px]">
          <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0">
            <div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0">
              <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#aaaaaa] text-[32px] text-center text-nowrap">
                <p className="leading-[normal] whitespace-pre">Sign up</p>
              </div>
              <form onSubmit={handleSubmit} className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[580px]" data-name="Email">
                  <div className="h-[27px] relative shrink-0 w-full">
                    <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#999999] text-[16px] text-nowrap top-0 whitespace-pre">User name</p>
                  </div>
                  <div className="h-[56px] relative rounded-[12px] shrink-0 w-full" data-name="Text field">
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="h-[56px] w-full bg-transparent rounded-[12px] px-4 text-white outline-none"
                      required
                    />
                    <div aria-hidden="true" className="absolute border border-[rgba(102,102,102,0.35)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[580px]" data-name="Text field">
                    <div className="h-[27px] relative shrink-0 w-full">
                      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#999999] text-[16px] text-nowrap top-0 whitespace-pre">Password</p>
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
                          className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] not-italic opacity-75 right-[8.86px] text-[#fff41d] text-[18px] text-nowrap text-right top-0 whitespace-pre hover:opacity-100 transition-opacity bg-transparent border-none cursor-pointer"
                        >
                          {showPassword ? "Show" : "Hide"}
                        </button>
                      </div>
                    </div>
                    <div className="h-[56px] relative rounded-[12px] shrink-0 w-full" data-name="Text field">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="h-[56px] w-full bg-transparent rounded-[12px] px-4 text-white outline-none"
                        required
                      />
                      <div aria-hidden="true" className="absolute border border-[rgba(153,153,153,0.35)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                    </div>
                  </div>
                  <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#666666] text-[14px] text-nowrap">
                    <p className="leading-[normal] whitespace-pre">{`Use 8 or more characters with a mix of letters, numbers & symbols`}</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                  <div className="box-border content-stretch flex gap-[10px] items-start px-0 py-[8px] relative shrink-0 w-[505px]" data-name="link text">
                    <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#666666] text-[0px] text-[16px] text-nowrap whitespace-pre">
                      <span className="text-[#aaaaaa]">{`By continuing, you agree to the `}</span>
                      <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid text-[#bbbbbb] underline">Terms of use</span> <span className="text-[#aaaaaa]">and</span> <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid text-[#bbbbbb] underline">Privacy Policy.</span>
                    </p>
                  </div>
                  <button type="submit" className="bg-[#fff41d] h-[64px] opacity-75 overflow-clip relative rounded-[12px] shrink-0 w-[580px] hover:opacity-100 transition-opacity cursor-pointer border-none" data-name="Button">
                    <div className="absolute content-stretch flex gap-[8px] items-center justify-center left-1/2 top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%]">
                      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111111] text-[22px] text-center text-nowrap">
                        <p className="leading-[normal] whitespace-pre">Sign up</p>
                      </div>
                    </div>
                  </button>
                </div>
              </form>
            </div>
            <div className="content-stretch flex flex-col gap-[24px] items-center justify-end relative shrink-0">
              <div className="box-border content-stretch flex gap-[10px] items-start p-[2px] relative shrink-0" data-name="Have an account login">
                <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic opacity-75 relative shrink-0 text-[#666666] text-[0px] text-[16px] text-nowrap whitespace-pre">
                  <span className="text-white">Already have an account?</span>{" "}
                  <button
                    type="button"
                    onClick={onLogin}
                    className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Poppins:Medium',sans-serif] text-[#fff41d] underline hover:text-[#fff41d]/80 transition-colors bg-transparent border-none cursor-pointer"
                  >
                    Log in
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Navbar onLogoClick={onLogoClick} />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}