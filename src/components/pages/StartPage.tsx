import imgCards1 from "../../assets/cards.png";
import { Navbar } from "../Navbar";
import { GridBackground } from "../GridBackground";

interface StartPageProps {
  onGetStarted: () => void;
  onLogin: () => void;
  onLogoClick: () => void;
}

export function StartPage({ onGetStarted, onLogin, onLogoClick }: StartPageProps) {
  return (
    <div className="page-start-root" data-name="start page">
      <GridBackground />
      <div className="page-start-inner">
        <div className="page-start-content">
          <div className="page-start-hero">
            <div className="page-start-hero-image-wrapper" data-name="cards 1">
              <img alt="Learning cards" className="page-start-hero-image" src={imgCards1} />
            </div>
            <div className="page-start-heading">
              <p className="mb-0">The fun and new way to</p>
              <p>learn dev skills!</p>
            </div>
          </div>
          <div className="page-start-actions">
            <button 
              onClick={onGetStarted}
              className="page-start-btn-primary" 
              data-name="start button"
            >
              <div className="page-start-btn-primary-label">
                <p>Get Started</p>
              </div>
            </button>
            <button
              onClick={onLogin}
              className="page-start-btn-secondary"
              data-name="login button"
            >
              <div className="page-start-btn-secondary-label">
                <p>I already have an account</p>
              </div>
            </button>
          </div>
        </div>
        <Navbar onLogoClick={onLogoClick} />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}