import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FaqAccordion from '../components/FaqAccordion.jsx';
import ContactSection from '../components/ContactSection.jsx';

gsap.registerPlugin(ScrollTrigger);

export default function TreatmentDetailPage({ treatment, onNavigate }) {
  useEffect(() => {
    // Scroll to top when treatment changes
    window.scrollTo({ top: 0, behavior: 'instant' });

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    // Hero elements entrance
    const heroTitle = document.querySelector('[data-treatment-hero-title]');
    const heroElements = document.querySelectorAll('[data-treatment-hero-el]');

    if (heroTitle) {
      gsap.fromTo(
        heroTitle,
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, ease: 'power4.out', delay: 0.1 }
      );
    }

    if (heroElements.length) {
      gsap.fromTo(
        heroElements,
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out', delay: 0.25 }
      );
    }

    // Section reveals
    const sections = document.querySelectorAll('[data-reveal-section]');
    sections.forEach((sec) => {
      gsap.fromTo(
        sec,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sec,
            start: 'top 85%',
            once: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [treatment.id]);

  const handleLinkClick = (e, href) => {
    if (onNavigate) {
      onNavigate(e, href);
    }
  };

  return (
    <main id="main" className="treatment-detail-page bg-paper text-ink pt-28 md:pt-36">
      {/* BREADCRUMB & HERO */}
      <section className="relative px-6 md:px-10 lg:px-14 pb-16 md:pb-24 max-w-[1440px] mx-auto">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 md:mb-12">
          <ol className="flex items-center flex-wrap gap-2 text-[11px] tracking-ultra uppercase text-muted">
            <li>
              <a
                href="/"
                onClick={(e) => handleLinkClick(e, '/')}
                className="treatment-breadcrumb-link"
              >
                Home
              </a>
            </li>
            <li aria-hidden="true" className="text-muted/40">/</li>
            <li>
              <a
                href="/#trattamenti"
                onClick={(e) => handleLinkClick(e, '/#trattamenti')}
                className="treatment-breadcrumb-link"
              >
                Treatments
              </a>
            </li>
            <li aria-hidden="true" className="text-muted/40">/</li>
            <li className="text-ink font-medium" aria-current="page">
              {treatment.title}
            </li>
          </ol>
        </nav>

        {/* Hero Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12 md:mb-16">
          <div className="lg:col-span-8">
            <span
              data-treatment-hero-el
              className="text-[11px] tracking-ultra uppercase text-muted block mb-4"
            >
              {treatment.eyebrow}
            </span>
            <h1
              data-treatment-hero-title
              className="treatment-detail-hero-title text-ink font-medium tracking-tight2"
            >
              {treatment.title}
            </h1>
          </div>

          <div className="lg:col-span-4" data-treatment-hero-el>
            <p className="text-[16px] md:text-[17px] leading-[1.7] text-muted mb-8">
              {treatment.heroIntro}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://app.smilevirtual.com/dr-jarett-hulse"
                target="_blank"
                rel="noopener noreferrer"
                className="appointment-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  fill="#222"
                  className="appointment-icon"
                  aria-hidden="true"
                >
                  <rect x="8" y="28" width="84" height="64" rx="4" ry="4" fill="#5d5c66" />
                  <rect x="17" y="15" width="10" height="16" rx="4" ry="4" fill="#5d5c66" />
                  <rect x="73" y="15" width="10" height="16" rx="4" ry="4" fill="#5d5c66" />
                  <rect x="14" y="36" width="14" height="13" rx="2" ry="2" fill="#ffffff" />
                  <rect x="32" y="36" width="14" height="13" rx="2" ry="2" fill="#ffffff" />
                  <rect x="52" y="36" width="14" height="13" rx="2" ry="2" fill="#ffffff" />
                  <rect x="72" y="36" width="14" height="13" rx="2" ry="2" fill="#ffffff" />
                  <circle cx="29" cy="67" r="19" fill="#5d5c66" stroke="#ffffff" strokeWidth="4.5" />
                  <path d="M 29 67 L 29 54 M 29 67 L 19 71" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
                <span className="appointment-label">Book a Consultation</span>
              </a>

              <a
                href="#overview"
                className="inline-flex items-center gap-2 text-[12px] uppercase tracking-ultra text-muted hover:text-ink transition-colors py-2 px-3"
              >
                <span>Learn More</span>
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </div>

        {/* Hero Main Photography */}
        <div data-treatment-hero-el className="relative w-full aspect-[16/9] md:aspect-[21/9] max-h-[560px] overflow-hidden rounded-sm bg-soft">
          <img
            src={treatment.heroImg}
            alt={treatment.title}
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section
        id="overview"
        data-reveal-section
        className="relative bg-cream py-20 md:py-28 lg:py-32"
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
            <div className="md:col-span-6">
              <span className="text-[11px] tracking-ultra uppercase text-muted block mb-4">
                Clinical Overview
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight2 leading-[1.05] text-ink mb-8">
                {treatment.overviewHeading}
              </h2>
              <div className="flex flex-col gap-5 text-[15px] leading-[1.8] text-muted">
                <p>{treatment.overviewParagraph1}</p>
                <p>{treatment.overviewParagraph2}</p>
              </div>
            </div>

            <div className="md:col-span-6 md:col-start-7">
              <div className="relative w-full max-w-[460px] mx-auto md:ml-auto aspect-[4/5] overflow-hidden rounded-sm bg-soft shadow-sm">
                <img
                  src={treatment.secondaryImg}
                  alt={`${treatment.title} clinical examination`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section data-reveal-section className="relative bg-paper py-20 md:py-28 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="flex items-center justify-between mb-12 md:mb-16">
            <span className="text-[11px] tracking-ultra uppercase text-muted">
              Clinical Benefits
            </span>
            <span className="text-[11px] tracking-ultra uppercase text-muted">
              Why Choose Austin Artistic Dental
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {treatment.benefits.map((b, idx) => (
              <div
                key={idx}
                className="border-t border-line pt-6 pb-4 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[12px] font-mono text-muted/60 block mb-3">
                    0{idx + 1}
                  </span>
                  <h3 className="text-xl md:text-2xl font-medium tracking-tight text-ink mb-3">
                    {b.title}
                  </h3>
                  <p className="text-[14px] leading-[1.75] text-muted">
                    {b.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-6 border-t border-line text-[12px] text-muted">
            <p>
              * Note: Clinical indications, biological healing, and treatment longevity depend on individual oral health profiles, bone condition, and consistent aftercare routines.
            </p>
          </div>
        </div>
      </section>

      {/* STEP-BY-STEP PROCESS */}
      <section data-reveal-section className="relative bg-cream py-20 md:py-28 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-20 gap-4">
            <div>
              <span className="text-[11px] tracking-ultra uppercase text-muted block mb-4">
                Treatment Pathway
              </span>
              <h2 className="text-4xl md:text-5xl font-normal tracking-tight2 leading-[0.95] text-ink">
                How it works.
              </h2>
            </div>
            <p className="text-[14px] text-muted max-w-[340px]">
              Every step is planned using precision diagnostics to deliver comfort, accuracy, and peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {treatment.processSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-paper p-8 rounded-sm border border-line/60 flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-medium tracking-tight2 text-ink/20 block mb-6">
                    {step.step}
                  </span>
                  <h3 className="text-lg font-medium tracking-tight text-ink mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[13px] leading-[1.75] text-muted">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CANDIDACY & SUITABILITY */}
      <section data-reveal-section className="relative bg-paper py-20 md:py-28 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="max-w-[860px] mx-auto text-center">
            <span className="text-[11px] tracking-ultra uppercase text-muted block mb-4">
              Suitability & Assessment
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight2 leading-[1.05] text-ink mb-8">
              {treatment.suitability.headline}
            </h2>
            <p className="text-[16px] md:text-[18px] leading-[1.8] text-muted mb-10">
              {treatment.suitability.text}
            </p>
            <div className="inline-block p-5 bg-mist rounded-sm text-left max-w-[620px]">
              <p className="text-[13px] leading-[1.65] text-ink/80">
                <span className="font-semibold text-ink">Clinical Consideration:</span> An in-person consultation with our multidisciplinary clinical team is always required to evaluate your teeth, bone density, and gums before confirming the ideal treatment approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section data-reveal-section className="relative bg-cream py-20 md:py-28 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
            <div className="md:col-span-4">
              <span className="text-[11px] tracking-ultra uppercase text-muted block mb-4">
                Frequently Asked Questions
              </span>
              <h2 className="text-4xl md:text-5xl font-normal tracking-tight2 leading-[0.95]">
                Common questions regarding {treatment.title}.
              </h2>
            </div>

            <div className="md:col-span-8">
              <FaqAccordion items={treatment.faqs} idPrefix={`faq-${treatment.id}`} />
            </div>
          </div>
        </div>
      </section>

      {/* NEXT / PREVIOUS NAVIGATION */}
      <nav aria-label="Treatment pagination" className="treatment-prev-next-nav bg-paper py-10 md:py-14">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <a
              href={`/${treatment.prevSlug}`}
              onClick={(e) => handleLinkClick(e, `/${treatment.prevSlug}`)}
              className="flex items-center gap-3 text-muted hover:text-ink transition-colors group"
            >
              <span className="text-xl transition-transform group-hover:-translate-x-1" aria-hidden="true">
                ←
              </span>
              <div>
                <span className="text-[10px] tracking-ultra uppercase text-muted block">
                  Previous Treatment
                </span>
                <span className="text-base md:text-lg font-medium text-ink group-hover:underline">
                  {treatment.prevTitle}
                </span>
              </div>
            </a>

            <a
              href="/#trattamenti"
              onClick={(e) => handleLinkClick(e, '/#trattamenti')}
              className="text-[11px] tracking-ultra uppercase text-muted hover:text-ink py-2 px-4 rounded-full border border-line transition-colors"
            >
              All Treatments (06)
            </a>

            <a
              href={`/${treatment.nextSlug}`}
              onClick={(e) => handleLinkClick(e, `/${treatment.nextSlug}`)}
              className="flex items-center gap-3 text-muted hover:text-ink transition-colors text-right group"
            >
              <div>
                <span className="text-[10px] tracking-ultra uppercase text-muted block">
                  Next Treatment
                </span>
                <span className="text-base md:text-lg font-medium text-ink group-hover:underline">
                  {treatment.nextTitle}
                </span>
              </div>
              <span className="text-xl transition-transform group-hover:translate-x-1" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
      </nav>

      {/* TREATMENT APPOINTMENT CTA */}
      <section data-reveal-section className="relative bg-ink text-paper py-20 md:py-28 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="max-w-[800px]">
            <span className="text-[11px] tracking-ultra uppercase text-white/50 block mb-4">
              Take the next step
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight2 leading-[0.95] mb-6">
              {treatment.ctaHeadline}
            </h2>
            <p className="text-[15px] md:text-[17px] leading-[1.75] text-white/70 mb-10 max-w-[620px]">
              {treatment.ctaSubtext}
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <a
                href="https://app.smilevirtual.com/dr-jarett-hulse"
                target="_blank"
                rel="noopener noreferrer"
                className="appointment-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  fill="#222"
                  className="appointment-icon"
                  aria-hidden="true"
                >
                  <rect x="8" y="28" width="84" height="64" rx="4" ry="4" fill="#5d5c66" />
                  <rect x="17" y="15" width="10" height="16" rx="4" ry="4" fill="#5d5c66" />
                  <rect x="73" y="15" width="10" height="16" rx="4" ry="4" fill="#5d5c66" />
                  <rect x="14" y="36" width="14" height="13" rx="2" ry="2" fill="#ffffff" />
                  <rect x="32" y="36" width="14" height="13" rx="2" ry="2" fill="#ffffff" />
                  <circle cx="29" cy="67" r="19" fill="#5d5c66" stroke="#ffffff" strokeWidth="4.5" />
                  <path d="M 29 67 L 29 54 M 29 67 L 19 71" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
                <span className="appointment-label">Book a Consultation</span>
              </a>

              <a
                href="#contatti"
                onClick={(e) => handleLinkClick(e, '#contatti')}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 text-paper px-8 py-4 text-[13px] font-medium tracking-wide hover:border-white transition-colors"
              >
                Send an Online Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <ContactSection />
    </main>
  );
}
