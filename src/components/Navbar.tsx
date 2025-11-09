import img from "figma:asset/685e1c874d33b97ec46986ea2b9b2bf321a7a1d7.png";

interface NavbarProps {
  onLogoClick?: () => void;
}

export function Navbar({ onLogoClick }: NavbarProps) {
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