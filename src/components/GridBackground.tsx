import imgchicken from '../assets/chicken.png';

export function GridBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(255, 255, 255, 0.05)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      
      {/* Chicken mascot in bottom right corner */}
      <div className="absolute bottom-0 right-0 w-[207px] h-[206px] opacity-30 pointer-events-none">
        <img
          src={imgchicken}
          alt="Decorative chicken"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
