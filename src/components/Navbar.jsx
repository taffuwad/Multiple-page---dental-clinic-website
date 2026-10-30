import React, { useState, useEffect } from 'react';

export default function Navbar({ onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  const handleLinkClick = (e, href) => {
    setMenuOpen(false);
    if (onNavigate) {
      onNavigate(e, href);
    }
  };

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference pointer-events-none">
        <div className="flex items-center justify-between px-6 md:px-10 lg:px-14 pt-6 md:pt-8 pointer-events-auto">
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, '/')}
            className="site-logo flex items-center"
            aria-label="Austin Artistic Dental"
          >
            <img
              src="/assets/others/logo.svg"
              alt="Austin Artistic Dental"
              className="site-logo-img"
            />
          </a>

          <div className="button-con flex items-center">
            <a
              href="https://app.smilevirtual.com/dr-jarett-hulse"
              target="_blank"
              rel="noopener noreferrer"
              className="appointment-link"
              aria-label="Call the clinic to make an appointment"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                fill="#222"
                className="appointment-icon"
                aria-hidden="true"
              >
                {/* Main Calendar Body */}
                <rect x="8" y="28" width="84" height="64" rx="4" ry="4" fill="#5d5c66" />
                {/* Top Tabs (Rings) */}
                <rect x="17" y="15" width="10" height="16" rx="4" ry="4" fill="#5d5c66" />
                <rect x="73" y="15" width="10" height="16" rx="4" ry="4" fill="#5d5c66" />
                {/* Calendar Grid (White Squares) */}
                <rect x="14" y="36" width="14" height="13" rx="2" ry="2" fill="#ffffff" />
                <rect x="32" y="36" width="14" height="13" rx="2" ry="2" fill="#ffffff" />
                <rect x="52" y="36" width="14" height="13" rx="2" ry="2" fill="#ffffff" />
                <rect x="72" y="36" width="14" height="13" rx="2" ry="2" fill="#ffffff" />
                <rect x="52" y="54" width="14" height="13" rx="2" ry="2" fill="#ffffff" />
                <rect x="72" y="54" width="14" height="13" rx="2" ry="2" fill="#ffffff" />
                <rect x="52" y="72" width="14" height="13" rx="2" ry="2" fill="#ffffff" />
                <rect x="72" y="72" width="14" height="13" rx="2" ry="2" fill="#ffffff" />
                {/* Clock Face */}
                <circle cx="29" cy="67" r="19" fill="#5d5c66" stroke="#ffffff" strokeWidth="4.5" />
                {/* Clock Hands */}
                <path
                  d="M 29 67 L 29 54 M 29 67 L 19 71"
                  stroke="#ffffff"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
              <span className="appointment-label">Make an appointment</span>
            </a>

            <button
              id="burger"
              className={`burger relative z-50 flex flex-col items-end justify-center w-10 h-10 cursor-pointer bg-transparent border-0 ${
                menuOpen ? 'is-open' : ''
              }`}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="menuOverlay"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="burger-line"></span>
              <span className="burger-line"></span>
              <span className="burger-line"></span>
            </button>
          </div>
        </div>
      </header>

      {/* MENU OVERLAY */}
      <div
        id="menuOverlay"
        className={`menu-overlay fixed inset-0 z-[60] bg-ink text-paper flex flex-col ${
          menuOpen ? 'is-open' : ''
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-10 lg:px-14 pt-6 md:pt-8">
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, '/')}
            className="flex items-center"
            aria-label="Austin Artistic Dental"
          >
            <img
              src="/assets/others/logo.svg"
              alt="Austin Artistic Dental"
              className="h-8 md:h-9 w-auto object-contain"
            />
          </a>
          <button
            id="closeMenu"
            className="w-10 h-10 flex items-center justify-center text-paper hover:opacity-75 transition-opacity cursor-pointer bg-transparent border-0"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="flex-1 flex flex-col justify-center px-6 md:px-14 lg:px-20 gap-1">
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, '/')}
            className="menu-link text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight2"
          >
            Home
          </a>
          <a
            href="/#studio"
            onClick={(e) => handleLinkClick(e, '/#studio')}
            className="menu-link text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight2"
          >
            About
          </a>
          <a
            href="/#trattamenti"
            onClick={(e) => handleLinkClick(e, '/#trattamenti')}
            className="menu-link text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight2"
          >
            Treatments
          </a>
          <a
            href="/#news"
            onClick={(e) => handleLinkClick(e, '/#news')}
            className="menu-link text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight2"
          >
            Clinical Team
          </a>
          <a
            href="/#contatti"
            onClick={(e) => handleLinkClick(e, '/#contatti')}
            className="menu-link text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight2"
          >
            Contact
          </a>
        </div>

        <div className="px-6 md:px-14 lg:px-20 pb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 text-sm text-white/60">
          <div>
            <p>Austin, Texas</p>
            <p>+1 (234) 567-890</p>
          </div>
          <div className="sm:text-right">
            <p>Mon – Sat · By appointment</p>
            <p>contact@austinartisticdental.com</p>
          </div>
        </div>
      </div>
    </>
  );
}
