import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
    message: '',
    privacy: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.privacy) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        reason: '',
        message: '',
        privacy: false,
      });
    }, 800);
  };

  return (
    <section id="contatti" className="relative bg-cream py-20 md:py-28 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          <div className="md:col-span-5">
            <span className="text-[11px] tracking-ultra uppercase text-muted block mb-4">
              Your first visit starts here.
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight2 leading-[0.95] mb-10">
              Contact Us.
            </h2>

            <div className="flex flex-col gap-8 text-[14px] leading-[1.8]">
              <div>
                <span className="text-[10px] tracking-ultra uppercase text-muted block mb-1">
                  Address
                </span>
                <p className="text-ink">
                  Austin, Texas<br />United States
                </p>
              </div>
              <div>
                <span className="text-[10px] tracking-ultra uppercase text-muted block mb-1">
                  Phone
                </span>
                <a
                  href="tel:+1234567890"
                  className="text-ink hover:opacity-60 transition-opacity"
                >
                  +1 (234) 567-890
                </a>
              </div>
              <div>
                <span className="text-[10px] tracking-ultra uppercase text-muted block mb-1">
                  Email
                </span>
                <a
                  href="mailto:austinartisticdental@gmail.com"
                  className="text-ink hover:opacity-60 transition-opacity break-all"
                >
                  austinartisticdental@gmail.com
                </a>
              </div>
              <div>
                <span className="text-[10px] tracking-ultra uppercase text-muted block mb-1">
                  Hours
                </span>
                <p className="text-ink">
                  Monday – Saturday<br />By appointment
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <form className="flex flex-col gap-6" id="contactForm" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <label className="block">
                  <span className="text-[10px] tracking-ultra uppercase text-muted block mb-1">
                    Full Name *
                  </span>
                  <input
                    type="text"
                    name="name"
                    className="input-min"
                    placeholder="Jane Doe"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </label>
                <label className="block">
                  <span className="text-[10px] tracking-ultra uppercase text-muted block mb-1">
                    Email *
                  </span>
                  <input
                    type="email"
                    name="email"
                    className="input-min"
                    placeholder="jane@example.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <label className="block">
                  <span className="text-[10px] tracking-ultra uppercase text-muted block mb-1">
                    Phone
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    className="input-min"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </label>
                <label className="block">
                  <span className="text-[10px] tracking-ultra uppercase text-muted block mb-1">
                    Reason for Visit
                  </span>
                  <select
                    name="reason"
                    className="input-min appearance-none cursor-pointer"
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  >
                    <option value="">Select a reason…</option>
                    <option>First Consultation</option>
                    <option>Dental Implants</option>
                    <option>Invisible Orthodontics</option>
                    <option>Teeth Whitening</option>
                    <option>Restorative Dentistry</option>
                    <option>Periodontics</option>
                    <option>Hygiene & Prevention</option>
                    <option>Other Inquiry</option>
                  </select>
                </label>
              </div>

              <label className="block">
                <span className="text-[10px] tracking-ultra uppercase text-muted block mb-1">
                  Message
                </span>
                <textarea
                  name="message"
                  rows={4}
                  className="input-min resize-none"
                  placeholder="Write your message here…"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </label>

              <label className="flex items-start gap-3 text-[12px] leading-[1.6] text-muted cursor-pointer">
                <input
                  type="checkbox"
                  name="privacy"
                  className="check-min mt-1"
                  required
                  checked={formData.privacy}
                  onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
                />
                <span>
                  I have read and agree to the Privacy Policy and consent to
                  the processing of my personal information.
                </span>
              </label>

              <button
                type="submit"
                disabled={submitting}
                className="submit-btn mt-2 inline-flex items-center gap-3 self-start rounded-full bg-ink text-paper px-8 py-4 text-[13px] font-medium tracking-wide transition-all duration-300 hover:bg-ink/80 hover:gap-4 cursor-pointer border-0"
              >
                {submitting ? 'Sending…' : submitted ? 'Sent ✓' : 'Send Request'}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H8M17 7v9" />
                </svg>
              </button>

              {submitted && (
                <p id="formStatus" className="text-[12px] text-muted">
                  Thank you — your request has been received. We will contact
                  you shortly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
