import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import FloatingHoverImage from './components/FloatingHoverImage.jsx';
import HomePage from './pages/HomePage.jsx';
import TreatmentDetailPage from './pages/TreatmentDetailPage.jsx';
import { TREATMENTS, getTreatmentBySlug } from './data/treatments.js';

export default function App() {
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname || '/');
  const [hoverImg, setHoverImg] = useState(null);
  const [mousePos, setMousePos] = useState({ x: -9999, y: -9999 });

  // Handle URL changes & popstate (Back/Forward)
  useEffect(() => {
    const handlePopState = () => {
      setHoverImg(null);
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Track mouse coordinates for floating preview
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    setHoverImg(null);
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.4,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [currentPath]);

  // Navigate helper
  const handleNavigate = (e, href) => {
    setHoverImg(null);
    if (!href) return;

    // External link
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return;
    }

    e?.preventDefault();

    // In-page hash scroll on current page
    if (href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    // Hash on homepage from a treatment page (e.g. /#trattamenti)
    if (href.startsWith('/#')) {
      const hash = href.replace('/', '');
      window.history.pushState(null, '', '/');
      setCurrentPath('/');
      setTimeout(() => {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      return;
    }

    // Treatment or home page route
    const cleanPath = href.startsWith('/') ? href : `/${href}`;
    window.history.pushState(null, '', cleanPath);
    setCurrentPath(cleanPath);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Check if current route is a treatment page
  const matchedTreatment = getTreatmentBySlug(currentPath);

  // Update document title and description dynamically for SEO
  useEffect(() => {
    if (matchedTreatment) {
      document.title = `${matchedTreatment.title} — Austin Artistic Dental`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          `${matchedTreatment.title} at Austin Artistic Dental. ${matchedTreatment.heroIntro}`
        );
      }
    } else {
      document.title = 'Austin Artistic Dental — Specialized Dentistry';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Austin Artistic Dental — Specialized dentistry, dental implants, clear aligners, and cosmetic oral care in Austin, Texas.'
        );
      }
    }
  }, [matchedTreatment]);

  return (
    <div className="bg-paper text-ink min-h-screen flex flex-col antialiased">
      <Navbar onNavigate={handleNavigate} />

      <div className="flex-1">
        {matchedTreatment ? (
          <TreatmentDetailPage
            treatment={matchedTreatment}
            onNavigate={handleNavigate}
          />
        ) : (
          <HomePage
            onNavigate={handleNavigate}
            setHoverImg={setHoverImg}
          />
        )}
      </div>

      <FloatingHoverImage activeImg={hoverImg} mousePos={mousePos} />
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
