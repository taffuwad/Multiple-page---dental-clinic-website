import React from 'react';

export default function Footer({ onNavigate }) {
  const handleLinkClick = (e, href) => {
    if (onNavigate) {
      onNavigate(e, href);
    }
  };

  return (
    <footer className="relative bg-mist pt-20 md:pt-28 pb-6 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 pb-16 md:pb-20 border-b border-line">
          <div>
            <h4 className="text-[10px] tracking-ultra uppercase text-muted mb-5">
              Practice
            </h4>
            <ul className="flex flex-col gap-3 text-[14px]">
              <li>
                <a
                  href="/"
                  onClick={(e) => handleLinkClick(e, '/')}
                  className="hover:opacity-60 transition-opacity"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/#studio"
                  onClick={(e) => handleLinkClick(e, '/#studio')}
                  className="hover:opacity-60 transition-opacity"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/#trattamenti"
                  onClick={(e) => handleLinkClick(e, '/#trattamenti')}
                  className="hover:opacity-60 transition-opacity"
                >
                  Treatments
                </a>
              </li>
              <li>
                <a
                  href="/#news"
                  onClick={(e) => handleLinkClick(e, '/#news')}
                  className="hover:opacity-60 transition-opacity"
                >
                  Clinical Team
                </a>
              </li>
              <li>
                <a
                  href="/#contatti"
                  onClick={(e) => handleLinkClick(e, '/#contatti')}
                  className="hover:opacity-60 transition-opacity"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] tracking-ultra uppercase text-muted mb-5">
              Clinical Areas
            </h4>
            <ul className="flex flex-col gap-3 text-[14px]">
              <li>
                <a
                  href="/dental-implants.html"
                  onClick={(e) => handleLinkClick(e, '/dental-implants.html')}
                  className="hover:opacity-60 transition-opacity"
                >
                  Dental Implants
                </a>
              </li>
              <li>
                <a
                  href="/invisible-orthodontics.html"
                  onClick={(e) => handleLinkClick(e, '/invisible-orthodontics.html')}
                  className="hover:opacity-60 transition-opacity"
                >
                  Invisible Orthodontics
                </a>
              </li>
              <li>
                <a
                  href="/teeth-whitening.html"
                  onClick={(e) => handleLinkClick(e, '/teeth-whitening.html')}
                  className="hover:opacity-60 transition-opacity"
                >
                  Teeth Whitening
                </a>
              </li>
              <li>
                <a
                  href="/hygiene-prevention.html"
                  onClick={(e) => handleLinkClick(e, '/hygiene-prevention.html')}
                  className="hover:opacity-60 transition-opacity"
                >
                  Hygiene & Prevention
                </a>
              </li>
              <li>
                <a
                  href="/#trattamenti"
                  onClick={(e) => handleLinkClick(e, '/#trattamenti')}
                  className="hover:opacity-60 transition-opacity"
                >
                  All Treatments
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] tracking-ultra uppercase text-muted mb-5">
              Location
            </h4>
            <p className="text-[14px] leading-[1.8]">
              Austin, Texas<br />
              United States
            </p>
            <a
              href="/#contatti"
              onClick={(e) => handleLinkClick(e, '/#contatti')}
              className="inline-block mt-3 text-[13px] underline underline-offset-4 decoration-line hover:decoration-ink transition-colors"
            >
              Get in Touch
            </a>
          </div>

          <div>
            <h4 className="text-[10px] tracking-ultra uppercase text-muted mb-5">
              Legal
            </h4>
            <ul className="flex flex-col gap-3 text-[14px]">
              <li>
                <a href="#privacy" className="hover:opacity-60 transition-opacity">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#cookie" className="hover:opacity-60 transition-opacity">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 md:pt-16 overflow-hidden">
          <div className="watermark">Austin Artistic Dental</div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[11px] text-muted">
          <span>© 2026 Austin Artistic Dental — All rights reserved.</span>
          <span>Austin, Texas · Specialized Dentistry</span>
        </div>
      </div>
    </footer>
  );
}
