import svgPaths from "../imports/svg-64vbrgc1uv";

interface NavbarLoggedInProps {
  username: string;
  activePage: "home" | "explore" | "ranking" | "export";
  onNavigate: (page: "home" | "explore" | "ranking" | "export") => void;
}

export function NavbarLoggedIn({ username, activePage, onNavigate }: NavbarLoggedInProps) {
  return (
    <div className="fixed h-[100px] left-0 top-0 w-full z-50" data-name="nav bar loggedin">
      <div aria-hidden="true" className="absolute border-[#666666] border-[0px_0px_1px] border-solid bottom-[-1px] left-0 pointer-events-none right-0 top-0" />
      <div className="absolute bg-[rgba(0,0,0,0.9)] inset-0" />
      
      {/* Navigation items */}
      <div className="absolute flex items-center gap-12 left-[200px] top-1/2 -translate-y-1/2">
        <button
          onClick={() => onNavigate("home")}
          className="relative font-['Poppins:Bold',sans-serif] text-[18px] text-nowrap"
        >
          <span className={activePage === "home" ? "text-white" : "text-[#cccccc]"}>HOME</span>
          {activePage === "home" && (
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-[7px] h-[27px] bg-[#9d9d23]" />
          )}
        </button>
        
        <button
          onClick={() => onNavigate("explore")}
          className="font-['Poppins:Bold',sans-serif] text-[18px] text-nowrap"
        >
          <span className={activePage === "explore" ? "text-white" : "text-[#cccccc]"}>EXPLORE</span>
        </button>
        
        <button
          onClick={() => onNavigate("ranking")}
          className="font-['Poppins:Bold',sans-serif] text-[18px] text-nowrap"
        >
          <span className={activePage === "ranking" ? "text-white" : "text-[#cccccc]"}>RANKING</span>
        </button>
        
        <button
          onClick={() => onNavigate("export")}
          className="font-['Poppins:Bold',sans-serif] text-[18px] text-nowrap"
        >
          <span className={activePage === "export" ? "text-white" : "text-[#cccccc]"}>EXPORT</span>
        </button>
      </div>

      {/* User profile */}
      <div className="absolute right-[70px] top-1/2 -translate-y-1/2 flex items-center gap-3">
        <span className="font-['Poppins:Bold',sans-serif] text-[18px] text-[#dddddd]">
          {username}
        </span>
        <div className="w-[36px] h-[36px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
            <g>
              <circle cx="18" cy="18" fill="#9D9D23" r="18" />
              <g>
                <path d={svgPaths.p1a77ce00} fill="#111111" />
                <path d={svgPaths.p279d3c00} fill="#111111" />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
