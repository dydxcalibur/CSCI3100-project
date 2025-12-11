import svgPaths from "../imports/svg-64vbrgc1uv";

interface NavbarLoggedInProps {
  username: string;
  activePage: "home" | "explore" | "ranking" | "export" | "profile";
  onNavigate: (page: "home" | "explore" | "ranking" | "export" | "profile") => void;
}

export function NavbarLoggedIn({ username, activePage, onNavigate }: NavbarLoggedInProps) {
  const navItems = [
    { id: 'home' as const, label: 'HOME' },
    { id: 'explore' as const, label: 'EXPLORE' },
    { id: 'ranking' as const, label: 'RANKING' },
    { id: 'export' as const, label: 'EXPORT' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 h-[100px] bg-[rgba(0,0,0,0.9)] border-b border-[#666666] z-50">
      {/* Nav items */}
      <div className="absolute left-[199px] top-1/2 -translate-y-1/2 flex items-center gap-12">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`font-['Poppins'] font-bold text-[18px] text-nowrap transition-colors ${
              activePage === item.id ? 'text-white' : 'text-[#cccccc] hover:text-white'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Active indicator */}
      <div
        className="absolute top-1/2 -translate-y-1/2 w-[7px] h-[27px] bg-[#9D9D23] transition-all duration-300"
        style={{
          left: activePage === 'home' 
            ? '185px' 
            : activePage === 'explore' 
            ? '326px'
            : activePage === 'ranking'
            ? '506px'
            : activePage === 'export'
            ? '677px'
            : '1212px' // Profile - highlight username
        }}
      />

      {/* User profile - clickable */}
      <button
        onClick={() => onNavigate('profile')}
        className="absolute right-[68px] top-1/2 -translate-y-1/2 flex items-center gap-3 hover:opacity-80 transition-opacity"
      >
        <span className={`font-['Poppins'] font-bold text-[18px] ${
          activePage === 'profile' ? 'text-[#9d9d23]' : 'text-[#dddddd]'
        }`}>
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