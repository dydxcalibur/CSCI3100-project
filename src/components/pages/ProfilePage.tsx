import { User, Flame, Star } from 'lucide-react';
import { Navbar } from "../Navbar";
import { GridBackground } from "../GridBackground";
import { Label } from "../Label";

interface ProfilePageProps {
  username: string;
  score: number;
  streak: number;
  activePage: "home" | "explore" | "ranking" | "export" | "profile";
  onNavigate: (page: "home" | "explore" | "ranking" | "export" | "profile") => void;
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  unlocked: boolean;
}

const achievements: Achievement[] = [
  {
    id: 'first-step',
    title: 'First Step🌱',
    description: 'Complete your first lesson',
    unlocked: true,
  },
  {
    id: 'perfectionist',
    title: 'Perfectionist🎯',
    description: 'Get 100% in a lesson',
    unlocked: true,
  },
  {
    id: 'yaju-senpai',
    title: 'Yaju Senpai',
    description: 'Reach a 810 day streak',
    unlocked: false,
  },
  {
    id: 'whale-lover',
    title: 'Whale Lover',
    description: 'Complete all the Docker courses',
    unlocked: false,
  },
];

export function ProfilePage({ username, score, streak, activePage, onNavigate }: ProfilePageProps) {
  return (
    <div className="page-profile-root relative">
      <GridBackground />

      <Navbar username={username} activePage={activePage} onNavigate={onNavigate} />

      <div className="page-profile-container">
        {/* User Card */}
        <div className="page-profile-user-card">
          <div className="page-profile-avatar">
            <User className="w-10 h-10 text-[#111111]" />
          </div>
          <h2 className="font-['Poppins'] text-[30px] text-white">{username || "username"}</h2>
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', gap: '20px', width: '100%' }}>
          <div className="bg-[#1c1c1c] border border-[#666666] rounded-[12px] p-5 pl-6" style={{ flex: 1 }}>
            <p className="font-['Poppins'] text-[20px] text-[#cccccc] mb-2">
              Total Score
            </p>
            <p className="font-['Poppins'] text-[25px] text-white flex items-center gap-1">
              <Star className="w-5 h-5 text-[#c3bb1a]" />
              {score}
            </p>
          </div>
          <div className="bg-[#1c1c1c] border border-[#666666] rounded-[12px] p-5 pl-6" style={{ flex: 1 }}>
            <p className="font-['Poppins'] text-[20px] text-[#cccccc] mb-2">
              Total Accuracy
            </p>
            <p className="font-['Poppins'] text-[25px] text-white">100%</p>
          </div>
          <div className="bg-[#1c1c1c] border border-[#666666] rounded-[12px] p-5 pl-6" style={{ flex: 1 }}>
            <p className="font-['Poppins'] text-[20px] text-[#cccccc] mb-2">
              Streak
            </p>
            <p className="font-['Poppins'] text-[25px] text-white flex items-center gap-1">
              <Flame className="w-5 h-5 text-orange-500" />
              {streak}
            </p>
          </div>
        </div>

        {/* Progress Section */}
        <div className="mb-10">
          <Label label="//+++" variant="PROGRESS" />
        </div>


        <div className="page-profile-progress-card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-['Poppins'] text-[25px] text-white">
              Introduction to Docker
            </h3>
            <span className="font-['Poppins'] text-[25px] text-[#c3bb1a]">
              0%
            </span>
          </div>
          <div className="page-profile-progress-bar" />
        </div>
        

        {/* Achievement Section */}
        <div className="mb-8">
            <Label label="//+++" variant="ACHIEVEMENT" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`page-profile-achievement-card ${
                !achievement.unlocked ? 'page-profile-achievement-card--locked' : ''
              }`}
            >
              <h4 className="font-['Poppins'] text-[25px] text-white mb-2">
                {achievement.title}
              </h4>
              <p className="font-['Poppins'] text-[15px] text-white">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
