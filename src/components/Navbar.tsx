import img from "../assets/condingoLogo.png";
import svgPaths from "../imports/svg-64vbrgc1uv";

type NavPage = "home" | "explore" | "ranking" | "export" | "profile";

interface NavbarProps {
  onLogoClick?: () => void;
  username?: string;
  activePage?: NavPage;
  onNavigate?: (page: NavPage) => void;
}

export function Navbar({ onLogoClick, username, activePage, onNavigate }: NavbarProps) {
  const isLoggedIn = Boolean(onNavigate);

  if (!isLoggedIn) {
    return (
      <div className="absolute h-[100px] left-0 top-0 w-full z-50" data-name="nav bar guest">
        <div className="absolute bg-[#101010] inset-0 opacity-90" data-name="nav bar">
          <div aria-hidden="true" className="absolute border-[#666666] border-[0px_0px_1px] border-solid bottom-[-1px] left-0 pointer-events-none right-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-0" />
        </div>
        <div 
          className="absolute w-[207px] h-[70px] left-[200px] top-[15px] cursor-pointer" 
          data-name="logo button 1"
          onClick={onLogoClick}
        >
          <img alt="Condingo Logo" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
      </div>
    );
  }

  const navItems = [
    { id: "home" as const, label: "HOME" },
    { id: "explore" as const, label: "EXPLORE" },
    { id: "ranking" as const, label: "RANKING" },
    { id: "export" as const, label: "EXPORT" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 h-[100px] bg-[rgba(0,0,0,0.9)] border-b border-[#666666] z-50">
      <div className="absolute left-[199px] top-1/2 -translate-y-1/2 flex items-center gap-12">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate && onNavigate(item.id)}
            className={`font-['Poppins'] font-bold text-[18px] text-nowrap transition-colors ${
              activePage === item.id ? "text-white" : "text-[#cccccc] hover:text-white"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div
        className="absolute top-1/2 -translate-y-1/2 w-[7px] h-[27px] bg-[#9D9D23] transition-all duration-300"
        style={{
          left:
            activePage === "home"
              ? "185px"
              : activePage === "explore"
              ? "326px"
              : activePage === "ranking"
              ? "506px"
              : activePage === "export"
              ? "677px"
              : "1212px",
        }}
      />

      <button
        onClick={() => onNavigate && onNavigate("profile")}
        className="absolute right-[68px] top-1/2 -translate-y-1/2 flex items-center gap-3 hover:opacity-80 transition-opacity"
      >
        <span
          className={`font-['Poppins'] font-bold text-[18px] ${
            activePage === "profile" ? "text-[#9d9d23]" : "text-[#dddddd]"
          }`}
        >
          {username}
        </span>
        <div className="w-9 h-9 rounded-full bg-[#9D9D23] flex items-center justify-center">
          <svg className="w-full h-full" fill="none" viewBox="0 0 36 36">
            <circle cx="18" cy="18" fill="#9D9D23" r="18" />
            <g>
              <path d={svgPaths.p1a77ce00} fill="#111111" />
              <path d={svgPaths.p279d3c00} fill="#111111" />
            </g>
          </svg>
        </div>
      </button>
    </div>
  );
}