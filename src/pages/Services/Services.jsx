import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

/* ─── Reveal Hook ───────────────────────────────── */
import { useEffect, useRef } from 'react';

const useReveal = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('revealed'); observer.disconnect(); } },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
};

const Reveal = ({ children, className = '', tag: Tag = 'div', delay = 0 }) => {
  const ref = useReveal();
  return (
    <Tag ref={ref} className={`reveal-el ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
};

/* ─── Data ──────────────────────────────────────── */
const servicesList = [
  {
    title: 'Personal Brand Development',
    description: 'Build and establish your unique personal brand identity',
    details: 'Comprehensive personal branding strategy including brand positioning, messaging, visual identity guidelines, and online presence optimisation. We help you define who you are, what you stand for, and how to communicate your value powerfully and consistently.',
  },
  {
    title: 'Media & PR Services',
    description: 'Strategic public relations and media management',
    details: 'Professional PR strategies including media relations, press release writing, media training, crisis management, and thought leadership positioning. We help you get featured in the right rooms and build credibility that lasts.',
  },
  {
    title: 'Content Creation & Strategy',
    description: 'Engaging content across multiple platforms',
    details: 'Creation of compelling written, visual, and multimedia content — from blog posts and articles to social media content and video scripts. We develop content strategies aligned with your brand voice and designed to resonate with your audience.',
  },
  {
    title: 'Social Media Management',
    description: 'Build and manage your social presence',
    details: 'Complete social media management including content calendar creation, daily posting, community engagement, analytics tracking, and growth strategies. We help you build an engaged, loyal community around your brand.',
  },
  {
    title: 'Collaboration & Partnership Development',
    description: 'Identify and facilitate strategic partnerships',
    details: 'Strategic collaboration planning and partnership development. We identify complementary brands and influencers, negotiate partnerships, and create collaborative content that expands your reach and amplifies your voice.',
  },
  {
    title: 'Interview & Speaking Preparation',
    description: 'Prepare for media interviews and public speaking',
    details: 'Comprehensive interview coaching and speaking preparation. We work on key messages, difficult question handling, media presence, and delivery techniques — ensuring you make a confident, lasting impression every time.',
  },
  {
    title: 'Booking & Event Management',
    description: 'Manage speaking engagements and event bookings',
    details: 'Professional booking and event management including speaker inquiry coordination, contract negotiation, event logistics, and post-event follow-up — maximising every opportunity to grow your platform.',
  },
  {
    title: 'E-Commerce Integration',
    description: 'Sell products and services online with ease',
    details: 'Full e-commerce setup and management with integration of multiple payment methods including Mobile Money, Visa, Mastercard, and Bank Transfer — from product listing to order fulfilment, handled seamlessly.',
  },
];

const packages = [
  {
    name: 'Starter',
    price: 'Custom Quote',
    desc: 'Perfect for building your foundation.',
    features: ['Personal Brand Consultation', 'Basic Content Strategy', 'Social Media Setup (1 platform)', 'Email Support'],
    featured: false,
    cta: 'Get Started',
    ctaClass: 'btn-outline-light',
  },
  {
    name: 'Professional',
    price: 'Custom Quote',
    desc: 'The complete toolkit for serious growth.',
    features: ['Full Brand Development', 'Content Creation & Strategy', 'Social Media Management (3 platforms)', 'Monthly PR Strategy', 'Interview Preparation', 'Priority Support'],
    featured: true,
    badge: 'Most Popular',
    cta: 'Request Consultation',
    ctaClass: 'btn-gold',
  },
  {
    name: 'Enterprise',
    price: 'Custom Quote',
    desc: 'Full-service for maximum impact.',
    features: ['Everything in Professional', 'Complete Brand Overhaul', 'All Social Media Platforms', 'Media Relations & Pitching', 'Event Management', 'E-Commerce Integration', '24/7 Dedicated Support'],
    featured: false,
    cta: 'Inquire Now',
    ctaClass: 'btn-outline-light',
  },
];

const steps = [
  { num: '01', title: 'Discovery & Strategy', desc: 'An in-depth consultation to understand your goals, audience, and unique value proposition — the foundation of everything.' },
  { num: '02', title: 'Development & Planning', desc: 'A customised strategy and action plan built specifically around your brand objectives and growth targets.' },
  { num: '03', title: 'Implementation & Execution', desc: 'Precise execution of the strategy — creating content, managing platforms, and staying true to your brand voice throughout.' },
  { num: '04', title: 'Analysis & Optimisation', desc: 'Tracking results, analysing performance, and continuously refining for maximum impact and sustainable growth.' },
];

/* ─── Component ─────────────────────────────────── */
const Services = () => {
  const [expanded, setExpanded] = useState(null);

  const toggle = (i) => setExpanded(expanded === i ? null : i);

  return (
    <div className="services">

      {/* ── Hero ─────────────────────────────────── */}
      <section className="services-hero">
        <div className="services-hero-glow" />
        <div className="services-hero-grain" />
        <div className="services-hero-content">
          <Reveal>
            <p className="svc-eyebrow">What I Offer</p>
            <div className="svc-hero-rule" />
            <h1 className="svc-hero-heading">
              Services &amp;<br /><em>Solutions</em>
            </h1>
            <p className="svc-hero-sub">
              Comprehensive personal branding, media, and PR services<br />
              tailored to your unique story and ambitions.
            </p>
          </Reveal>
        </div>
        <div className="svc-hero-scroll">
          <span>Scroll</span>
          <div className="svc-scroll-line" />
        </div>
      </section>

      {/* ── Services Accordion ───────────────────── */}
      <section className="svc-list-section">
        <div className="container">
          <Reveal className="svc-list-header">
            <span className="label-tag">Full Offering</span>
            <h2 className="section-heading">
              Everything You<br /><em>Need to Grow</em>
            </h2>
            <p className="section-desc">
              Whether you're starting from scratch or scaling an existing presence, every service is built around you — your story, your goals, your audience.
            </p>
          </Reveal>

          <div className="svc-accordion">
            {servicesList.map((s, i) => (
              <Reveal key={i} className={`svc-accordion-item ${expanded === i ? 'is-open' : ''}`} delay={i * 40}>
                <button className="svc-accordion-trigger" onClick={() => toggle(i)} aria-expanded={expanded === i}>
                  <span className="svc-acc-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="svc-acc-titles">
                    <span className="svc-acc-title">{s.title}</span>
                    <span className="svc-acc-desc">{s.description}</span>
                  </span>
                  <span className={`svc-acc-icon ${expanded === i ? 'open' : ''}`}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 6L9 12L15 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
                <div className="svc-accordion-body">
                  <p>{s.details}</p>
                  <Link to="/contact" className="svc-acc-link">
                    Enquire about this service <span>→</span>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Packages ─────────────────────────────── */}
      <section className="svc-packages-section">
        <div className="container">
          <Reveal className="svc-packages-header">
            <span className="label-tag light">Pricing</span>
            <h2 className="section-heading light">
              Service <em>Packages</em>
            </h2>
            <p className="section-desc light">Flexible packages designed to meet you where you are — and take you where you want to go.</p>
          </Reveal>

          <div className="packages-grid">
            {packages.map((pkg, i) => (
              <Reveal key={pkg.name} className={`pkg-card ${pkg.featured ? 'pkg-featured' : ''}`} delay={i * 100}>
                {pkg.badge && <span className="pkg-badge">{pkg.badge}</span>}
                <div className="pkg-header">
                  <h3 className="pkg-name">{pkg.name}</h3>
                  <p className="pkg-desc">{pkg.desc}</p>
                  <div className="pkg-price">{pkg.price}</div>
                </div>
                <ul className="pkg-features">
                  {pkg.features.map((f, j) => (
                    <li key={j}>
                      <span className="pkg-check">✦</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`btn ${pkg.ctaClass}`}>{pkg.cta}</Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────── */}
      <section className="svc-process-section">
        <div className="container">
          <Reveal className="svc-process-header">
            <span className="label-tag">How It Works</span>
            <h2 className="section-heading">My <em>Process</em></h2>
          </Reveal>
          <div className="process-grid">
            {steps.map((step, i) => (
              <Reveal key={step.num} className="process-card" delay={i * 90}>
                <span className="process-num">{step.num}</span>
                <div className="process-connector" aria-hidden="true" />
                <h4 className="process-title">{step.title}</h4>
                <p className="process-desc">{step.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="svc-cta-section">
        <div className="svc-cta-glow" />
        <div className="container svc-cta-inner">
          <Reveal>
            <span className="label-tag light">Ready to Begin?</span>
            <h2 className="cta-heading">
              Let's Elevate<br />Your <em>Brand</em>
            </h2>
            <p className="cta-sub">Tell me about your goals and let's figure out exactly what you need.</p>
            <Link to="/contact" className="btn btn-gold">Schedule a Consultation</Link>
          </Reveal>
        </div>
      </section>

    </div>
  );
};

export default Services;