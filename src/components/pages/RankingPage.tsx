import { Trophy } from 'lucide-react';
import { Navbar } from "../Navbar";
import { GridBackground } from "../GridBackground";

interface RankingEntry {
  rank: number;
  username: string;
  score: number;
}

const rankingData: RankingEntry[] = [
  { rank: 1, username: 'Una', score: 114514 },
  { rank: 2, username: 'TadokoroKouji', score: 1919 },
  { rank: 3, username: 'Username', score: 810 },
  { rank: 4, username: 'GitPushNightmare', score: 514 },
  { rank: 5, username: 'GitDestoryer', score: 114 },
  { rank: 6, username: 'DockerFanz', score: 100 },
  { rank: 7, username: 'GitMergeBoom', score: 87 },
  { rank: 8, username: 'XmasEveCoding', score: 69 },
  { rank: 8, username: 'NoOne', score: 69 },
  { rank: 10, username: 'SomeOne', score: 42 },
  { rank: 11, username: 'RickAstley', score: 0 },
];

interface RankingPageProps {
  username: string;
  onNavigate: (page: "home" | "explore" | "ranking" | "export" | "profile") => void;
}

export function RankingPage({ username, onNavigate }: RankingPageProps) {
  const getRankColor = (rank: number) => {
    if (rank === 1) return 'page-ranking-rank--gold';
    if (rank === 2) return 'page-ranking-rank--silver';
    if (rank === 3) return 'page-ranking-rank--bronze';
    return 'page-ranking-rank--default';
  };

  const isCurrentUser = (username: string) => username === 'Username';

  return (
    <div className="page-ranking-root relative">
      <GridBackground />

      <Navbar username={username} activePage="ranking" onNavigate={onNavigate} />

      <div className="page-ranking-container">
        {/* Header */}
        <div className="page-ranking-header">
          <h1 className="page-ranking-title">
            Welcome to <Trophy className="inline w-10 h-10 text-yellow-500" /> Leaderboard!
          </h1>
          <p className="page-ranking-subtitle">
            See how you stack up against other developers.
          </p>
        </div>

        {/* Table Header */}
        <div className="page-ranking-table-header">
          <div className="page-ranking-grid">
            <div className="page-ranking-col-rank">
              <p className="page-ranking-label-rank">Rank</p>
            </div>
            <div className="page-ranking-col-user">
              <p className="page-ranking-label-user">User</p>
            </div>
            <div className="page-ranking-col-score">
              <p className="page-ranking-label-score">Score</p>
            </div>
          </div>
        </div>

        {/* Rankings */}
        {rankingData.map((entry, index) => (
          <div
            key={`${entry.rank}-${entry.username}-${index}`}
            className={`page-ranking-row ${
              isCurrentUser(entry.username) ? 'page-ranking-row--current' : 'page-ranking-row--default'
            }`}
          >
            <div className="page-ranking-grid">
              <div className="page-ranking-col-rank">
                <p className={`page-ranking-rank ${getRankColor(entry.rank)}`}>
                  {entry.rank}
                </p>
              </div>
              <div className="page-ranking-col-user">
                <p className="page-ranking-text-user">
                  {entry.username}
                </p>
              </div>
              <div className="page-ranking-col-score">
                <p className="page-ranking-text-score">
                  {entry.score.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
