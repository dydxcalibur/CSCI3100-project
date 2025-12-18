import img from "../assets/condingoLogo.png";
import userIcon from "../assets/userIcon.svg";
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
    <header className="fixed top-0 left-0 right-0 h-[100px] bg-[#050505]/95 border-b border-[#333333] z-50 flex items-center justify-between px-6 md:px-12 lg:px-24">
      {/* background frame from original navbar */}
      <div className="absolute bg-[#101010] inset-0 opacity-90" data-name="nav bar">
        <div
          aria-hidden="true"
          className="absolute border-[#666666] border-[0px_0px_1px] border-solid bottom-[-1px] left-0 pointer-events-none right-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-0"
        />
      </div>


      {/* NAVIGATION ITEMS */}
      <nav className="flex items-center gap-8 md:gap-12 lg:gap-16 relative z-10 left-[200px]">
        {navItems.map((item) => {
          const isActive = activePage === item.id;
          return (
            <div key={item.id} className="relative flex items-center group">
              {isActive && (
                <div
                  className="absolute w-[4px] h-[24px] bg-[#9D9D23] rounded-full"
                  style={{ left: "-2px" }}
                />
              )}
              <button
                onClick={() => onNavigate && onNavigate(item.id)}
                className={`relative pl-4 font-['Poppins'] font-bold text-sm md:text-[16px] tracking-wide transition-all duration-200 ${
                  isActive ? "text-white scale-105" : "text-[#cccccc] hover:text-white"
                }`}
              >
                {item.label}
              </button>
            </div>
          );
        })}
      </nav>

      {/* PROFILE SECTION */}
      <button
        onClick={() => onNavigate && onNavigate("profile")}
        className="flex items-center gap-3 relative shrink-0 z-10 mr-5"
      >
        {activePage === "profile" && (
          <div className="absolute -left-3 w-[4px] h-[20px] bg-[#9D9D23] rounded-full" />
        )}
        <span
          className={`font-['Poppins'] font-bold text-sm md:text-[16px] transition-colors ${
            activePage === "profile" ? "text-[#9D9D23]" : "text-[#dddddd]"
          }`}
        >
          {username ? username : "username"}
        </span>
        <div
          className={`w-9 h-9 rounded-full flex items-center justify-center overflow-hidden border-2 ${
            activePage === "profile"
              ? "border-[#9D9D23] bg-[#333]"
              : "border-transparent bg-[#333]"
          }`}
        >
          <img
            src={userIcon}
            alt="User icon"
            className="w-full h-full object-contain p-1"
          />
        </div>
      </button>
    </header>
  );
}