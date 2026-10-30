import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FaqAccordion from '../components/FaqAccordion.jsx';
import ContactSection from '../components/ContactSection.jsx';

gsap.registerPlugin(ScrollTrigger);

const HOMEPAGE_FAQS = [
  {
    q: "Are dental implants painful?",
    a: "Implant placement is performed under local anesthesia and is completely painless in most cases. Any minor discomfort or swelling in the days following can be easily managed with prescribed aftercare. Our clinical team schedules attentive follow-ups to support every stage of healing."
  },
  {
    q: "How long does clear aligner treatment take?",
    a: "Treatment duration depends on case complexity, but typically ranges between 6 and 18 months. During your first visit, we design a detailed treatment plan featuring a digital 3D preview of your final smile."
  },
  {
    q: "How often is professional dental cleaning recommended?",
    a: "We typically recommend a professional cleaning every 6 months, though intervals may vary based on periodontal condition, implants, orthodontic appliances, and personal lifestyle. We provide personalized guidance during your examination."
  },
  {
    q: "What happens during the first consultation?",
    a: "Your first visit is dedicated to comprehensive assessment and understanding your goals. It includes a thorough clinical exam, digital diagnostics as needed, and an in-depth review of treatment options with transparent, no-obligation pricing."
  }
];

export default function HomePage({ onNavigate, setHoverImg }) {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    // Hero title entrance
    const heroLines = document.querySelectorAll('[data-hero-line]');
    if (heroLines.length) {
      gsap.fromTo(
        heroLines,
        { yPercent: 115 },
        { yPercent: 0, duration: 1.3, stagger: 0.12, ease: 'power4.out', delay: 0.2 }
      );
    }

    // Heading reveals
    const revealLines = (selector) => {
      const els = document.querySelectorAll(selector);
      if (!els.length) return;
      const section = els[0].closest('section');
      if (!section) return;

      gsap.fromTo(
        els,
        { yPercent: 115 },
        {
          yPercent: 0,
          duration: 1.2,
          stagger: 0.09,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 78%',
            once: true,
          },
        }
      );
    };

    revealLines('[data-intro-line]');
    revealLines('[data-dir-line]');

    // Process lines animation
    document.querySelectorAll('.process-line').forEach((el) => {
      const baseOpacity = parseFloat(el.getAttribute('data-base-opacity') || '1');
      gsap.fromTo(
        el,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: baseOpacity,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Floating images
    document.querySelectorAll('.float-img').forEach((img, i) => {
      gsap.fromTo(
        img,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 0.85,
          duration: 1.2,
          delay: i * 0.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: img,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Team cards
    document.querySelectorAll('.team-card').forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const handleRowClick = (e, slug) => {
    if (onNavigate) {
      onNavigate(e, slug);
    }
  };

  return (
    <main id="main">
      {/* HERO */}
      <section
        id="home"
        className="relative w-full min-h-[85vh] md:min-h-screen overflow-hidden bg-ink"
      >
        <div className="absolute inset-0">
          <img
            src="/assets/others/heroBg.jpg"
            alt="Dentist treating a patient in a modern dental clinic"
            className="w-full h-full object-cover"
            data-critical="true"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/20 to-black/45"></div>
        </div>

        <div className="relative z-10 h-full min-h-[85vh] md:min-h-screen flex items-end px-6 md:px-10 lg:px-14 pb-14 md:pb-20">
          <h1 className="hero-title text-white font-medium tracking-tight2 leading-[0.88]">
            <span className="block overflow-hidden">
              <span className="reveal-inner block" data-hero-line>
                The Art
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="reveal-inner block" data-hero-line>
                of Your Smile
              </span>
            </span>
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section id="studio" className="relative bg-paper py-20 md:py-28 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-end">
            <div className="md:col-span-6 md:col-start-1">
              <div className="relative w-full max-w-[420px] mx-auto md:mx-0 aspect-[4/5] overflow-hidden rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=85"
                  alt="Dentist with patient in consultation"
                  className="w-full h-full object-cover"
                  data-critical="true"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="md:col-span-6 md:col-start-7">
              <h2 className="intro-title font-normal tracking-tight2 leading-[0.92] text-ink">
                <span className="block overflow-hidden">
                  <span className="reveal-inner block" data-intro-line>
                    Specialized
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span className="reveal-inner block text-[#B9BDC4]" data-intro-line>
                    dentistry.
                  </span>
                </span>
              </h2>

              <p className="mt-8 text-[15px] leading-[1.75] text-muted max-w-[340px] md:ml-auto">
                In Austin, Austin Artistic Dental is dedicated to oral health and patient well-being through a multidisciplinary approach, combining specialized clinical expertise, advanced technology, and personalized treatment plans with genuine care for every individual and their smile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TREATMENTS */}
      <section id="trattamenti" className="relative bg-paper pb-20 md:pb-28 lg:pb-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="flex items-center justify-between mb-10 md:mb-14">
            <span className="text-[11px] tracking-ultra uppercase text-muted">
              Treatments
            </span>
            <span className="text-[11px] tracking-ultra uppercase text-muted">
              06 Clinical Areas
            </span>
          </div>

          <div
            id="treatmentList"
            onMouseLeave={() => setHoverImg(null)}
          >
            <a
              href="dental-implants.html"
              onClick={(e) => handleRowClick(e, '/dental-implants.html')}
              className="treatment-row"
              data-img="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=85"
              onMouseEnter={() =>
                setHoverImg('https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=85')
              }
            >
              <span className="treatment-title">Dental Implants</span>
              <span className="treatment-arrow">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H8M17 7v9" />
                </svg>
              </span>
            </a>

            <a
              href="invisible-orthodontics.html"
              onClick={(e) => handleRowClick(e, '/invisible-orthodontics.html')}
              className="treatment-row"
              data-img="https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=800&q=85"
              onMouseEnter={() =>
                setHoverImg('https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=800&q=85')
              }
            >
              <span className="treatment-title">Invisible Orthodontics</span>
              <span className="treatment-arrow">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H8M17 7v9" />
                </svg>
              </span>
            </a>

            <a
              href="teeth-whitening.html"
              onClick={(e) => handleRowClick(e, '/teeth-whitening.html')}
              className="treatment-row"
              data-img="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=85"
              onMouseEnter={() =>
                setHoverImg('https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=85')
              }
            >
              <span className="treatment-title">Teeth Whitening</span>
              <span className="treatment-arrow">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H8M17 7v9" />
                </svg>
              </span>
            </a>

            <a
              href="restorative-dentistry.html"
              onClick={(e) => handleRowClick(e, '/restorative-dentistry.html')}
              className="treatment-row"
              data-img="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&q=85"
              onMouseEnter={() =>
                setHoverImg('https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&q=85')
              }
            >
              <span className="treatment-title">Restorative Dentistry</span>
              <span className="treatment-arrow">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H8M17 7v9" />
                </svg>
              </span>
            </a>

            <a
              href="periodontics.html"
              onClick={(e) => handleRowClick(e, '/periodontics.html')}
              className="treatment-row"
              data-img="https://www.pellafamilydentistry.com/resourcefiles/fullwidth-single-snippet-image/periodontics.jpg"
              onMouseEnter={() =>
                setHoverImg('https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=85')
              }
            >
              <span className="treatment-title">Periodontics</span>
              <span className="treatment-arrow">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H8M17 7v9" />
                </svg>
              </span>
            </a>

            <a
              href="hygiene-prevention.html"
              onClick={(e) => handleRowClick(e, '/hygiene-prevention.html')}
              className="treatment-row"
              data-img="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=85"
              onMouseEnter={() =>
                setHoverImg('https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=85')
              }
            >
              <span className="treatment-title">Hygiene & Prevention</span>
              <span className="treatment-arrow">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H8M17 7v9" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* CLINICAL DIRECTION */}
      <section id="news" className="relative bg-paper py-20 md:py-28 lg:py-32 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
            <div className="md:col-span-6 md:col-start-1 order-2 md:order-1">
              <h2 className="direction-title font-normal tracking-tight2 leading-[0.92] text-ink">
                <span className="block overflow-hidden">
                  <span className="reveal-inner block" data-dir-line>
                    Clinical
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span className="reveal-inner block" data-dir-line>
                    leadership at
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span className="reveal-inner block" data-dir-line>
                    Austin Artistic
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span className="reveal-inner block" data-dir-line>
                    Dental.
                  </span>
                </span>
              </h2>

              <p className="mt-8 text-[14px] leading-[1.75] text-muted max-w-[320px]">
                Clinical direction is led by Dr. Marco Angelucci, who coordinates our multidisciplinary team and sets uncompromising standards for diagnosis and care. Every treatment journey is meticulously planned using advanced digital technologies and an integrated clinical vision.
              </p>
            </div>

            <div className="md:col-span-6 md:col-start-7 order-1 md:order-2">
              <div className="relative w-full max-w-[420px] mx-auto md:mx-0 md:ml-auto aspect-[4/5] overflow-hidden rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=85"
                  alt="Clinical dental team at work"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS / VALUES */}
      <section className="relative bg-paper pb-20 md:pb-28 lg:pb-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="relative flex flex-col items-center text-center gap-24 md:gap-32 py-10 md:py-16">
            <img
              src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=300&q=80"
              alt=""
              className="float-img float-a"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=300&q=80"
              alt=""
              className="float-img float-b"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=300&q=80"
              alt=""
              className="float-img float-c"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=300&q=80"
              alt=""
              className="float-img float-d"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=300&q=80"
              alt=""
              className="float-img float-e"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1771442873035-474765b40ac6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
              alt=""
              className="float-img float-f"
              loading="lazy"
            />

            <p
              className="process-line text-[clamp(1.4rem,3.4vw,2.6rem)] font-normal tracking-tight2 leading-[1.15] text-ink max-w-[820px]"
              data-base-opacity="1"
            >
              Every journey begins with a thoughtful understanding of your clinical profile.
            </p>
            <p
              className="process-line text-[clamp(1.4rem,3.4vw,2.6rem)] font-normal tracking-tight2 leading-[1.15] text-ink max-w-[820px]"
              data-base-opacity="0.3"
            >
              Every journey begins with a thoughtful understanding of your clinical profile.
            </p>
            <p
              className="process-line text-[clamp(1.4rem,3.4vw,2.6rem)] font-normal tracking-tight2 leading-[1.15] text-ink max-w-[900px]"
              data-base-opacity="1"
            >
              Advanced digital technologies enable us to plan every treatment with supreme precision.
            </p>
            <p
              className="process-line text-[clamp(1.4rem,3.4vw,2.6rem)] font-normal tracking-tight2 leading-[1.15] text-ink max-w-[900px]"
              data-base-opacity="0.3"
            >
              Advanced digital technologies enable us to plan every treatment with supreme precision.
            </p>
            <p
              className="process-line text-[clamp(1.4rem,3.4vw,2.6rem)] font-normal tracking-tight2 leading-[1.15] text-ink max-w-[900px]"
              data-base-opacity="1"
            >
              Close interdisciplinary teamwork makes every stage of your care seamless and complete.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="relative bg-cream py-20 md:py-28 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="flex items-center justify-between mb-10 md:mb-14">
            <span className="text-[11px] tracking-ultra uppercase text-muted">
              Our Team
            </span>
            <span className="text-[11px] tracking-ultra uppercase text-muted">
              Specialists
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            <div className="team-card reveal-up">
              <div className="aspect-[3/4] overflow-hidden rounded-sm bg-soft">
                <img
                  src="/assets/peoples/doc1.jpg"
                  alt="Dr. Marco Angelucci"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-5">
                <h3 className="text-xl md:text-2xl font-medium tracking-tight">
                  Dr. Marco Angelucci
                </h3>
                <p className="text-sm text-muted mt-1">
                  Clinical Director · Implantology
                </p>
              </div>
            </div>

            <div className="team-card reveal-up">
              <div className="aspect-[3/4] overflow-hidden rounded-sm bg-soft">
                <img
                  src="/assets/peoples/doc2.jpg"
                  alt="Dr. Roberto Di Vita"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-5">
                <h3 className="text-xl md:text-2xl font-medium tracking-tight">
                  Dr. Roberto Di Vita
                </h3>
                <p className="text-sm text-muted mt-1">Invisible Orthodontics</p>
              </div>
            </div>

            <div className="team-card reveal-up">
              <div className="aspect-[3/4] overflow-hidden rounded-sm bg-soft">
                <img
                  src="/assets/peoples/doc4.jpg"
                  alt="Dr. Elena Sokolova"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-5">
                <h3 className="text-xl md:text-2xl font-medium tracking-tight">
                  Dr. Elena Sokolova
                </h3>
                <p className="text-sm text-muted mt-1">Periodontics · Dental Hygiene</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative bg-paper py-20 md:py-28 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
            <div className="md:col-span-4">
              <span className="text-[11px] tracking-ultra uppercase text-muted block mb-4">
                Frequently Asked Questions
              </span>
              <h2 className="text-4xl md:text-5xl font-normal tracking-tight2 leading-[0.95]">
                Everything you need to know.
              </h2>
            </div>

            <div className="md:col-span-8">
              <FaqAccordion items={HOMEPAGE_FAQS} idPrefix="home-faq" />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <ContactSection />
    </main>
  );
}
