import { useState } from 'react';
import { Lock, Unlock, FileText, Download } from 'lucide-react';
import { Navbar } from "../Navbar";
import { GridBackground } from '../GridBackground';

interface Course {
  id: string;
  name: string;
  category: string;
  isTaken: boolean;
}

interface ExportPageProps {
  username: string;
  courses: Course[];
  activePage: "home" | "explore" | "ranking" | "export" | "profile";
  onNavigate: (page: "home" | "explore" | "ranking" | "export" | "profile") => void;
}

interface CertificateCardProps {
  courseName: string;
  subjectName: string;
  totalScore: number;
  accuracy: number;
}

function CertificateCard({ courseName, subjectName, totalScore, accuracy }: CertificateCardProps) {
  const handleDownload = () => {
    // In a real app, this would generate and download a PDF certificate
    alert(`Downloading certificate for ${courseName}...`);
  };

  return (
    <div className="page-export-certificate-card">
      {/* Yellow border */}
      <div className="page-export-certificate-bar" />
      
      {/* Main card */}
      <div className="page-export-certificate-main">
        <h3 className="font-['Poppins'] text-[30px] text-white mb-2">
          {courseName}
        </h3>
        <p className="font-['Poppins'] text-[20px] text-[#c3bb1a] mb-6">
          {subjectName}//
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-8 mb-6">
          <div className="page-export-stat-card">
            <p className="font-['Poppins'] text-[20px] text-[#cccccc] mb-2">
              Total Score
            </p>
            <p className="font-['Poppins'] text-[25px] text-white">
              {totalScore}
            </p>
          </div>
          <div className="bg-[#121212] rounded-[12px] p-5">
            <p className="font-['Poppins'] text-[20px] text-[#cccccc] mb-2">
              Accuracy
            </p>
            <p className="font-['Poppins'] text-[25px] text-white">
              {accuracy}%
            </p>
          </div>
        </div>

        {/* Download button */}
        <button
          onClick={handleDownload}
          className="page-export-download-button"
        >
          <Download className="w-5 h-5" />
          Download Certificate
        </button>
      </div>
    </div>
  );
}

export function ExportPage({ username, courses, activePage, onNavigate }: ExportPageProps) {
  const [licenseCode, setLicenseCode] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState('');

  const completedCourses = courses.filter(course => course.isTaken);

  const handleUnlock = () => {
    if (licenseCode.trim() === 'condingo-pro-2025') {
      setIsUnlocked(true);
      setError('');
    } else {
      setError('Invalid license code. Please try again.');
    }
  };

  // Unlocked state - show certificates
  if (isUnlocked) {
    return (
      <div className="page-export-root relative">
        <GridBackground />

        <Navbar username={username} activePage={activePage} onNavigate={onNavigate} />
        

        <div className="page-export-container">
          {/* Header */}
          <div className="page-export-header">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FileText className="w-10 h-10 text-[#c3bb1a]" />
              <h1 className="page-export-title">
                Export Certificates
              </h1>
            </div>
            <p className="page-export-subtitle">
              Download your course achievements and progress reports.
            </p>
          </div>

          {/* Certificates */}
          {completedCourses.length > 0 ? (
            completedCourses.map((course) => (
              <CertificateCard
                key={course.id}
                courseName={course.name}
                subjectName={course.category}
                totalScore={0}
                accuracy={0}
              />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="font-['Poppins'] text-[20px] text-[#cccccc]">
                No completed courses yet. Start learning to earn certificates!
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Locked state - show unlock form
  return (
    <div className="page-export-locked-root relative">
      <GridBackground />

      <Navbar username={username} activePage={activePage} onNavigate={onNavigate} />

      <div className="page-export-locked-container">
        {/* Header Bar */}
        <div className="page-export-locked-header-bar" />
        
        {/* Content */}
        <div className="page-export-locked-card">
          <div className="text-center mb-8">
            <div className="page-export-locked-avatar">
              <Lock className="w-12 h-12 text-[#c3bb1a]" />
            </div>
            <h2 className="font-['Poppins'] text-[35px] text-white mb-4">
              Unlock Pro Feature
            </h2>
            <p className="font-['Poppins'] text-[20px] text-[#cccccc]">
              Export digital certificate of your taken courses!
            </p>
          </div>

          {/* Input */}
          <div className="mb-6">
            <input
              type="text"
              value={licenseCode}
              onChange={(e) => {
                setLicenseCode(e.target.value);
                setError('');
              }}
              onKeyPress={(e) => e.key === 'Enter' && handleUnlock()}
              placeholder="Enter license code: (condingo-pro-2025)"
              className="page-export-locked-input focus:outline-none focus:border-[#c3bb1a] transition-colors"
            />
            {error && (
              <p className="page-export-locked-error">
                {error}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            onClick={handleUnlock}
            className="page-export-locked-button"
          >
            <Unlock className="w-5 h-5" />
            Unlock Export
          </button>
        </div>
      </div>
    </div>
  );
}
