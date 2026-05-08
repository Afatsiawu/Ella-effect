import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

/* ─── Data ─────────────────────────────────────── */
const services = [
  {
    number: '01',
    title: 'Personal Branding',
    desc: 'Craft and amplify your unique brand story — authentic narratives that position you as a thought leader and resonate deeply with your audience.',
  },
  {
    number: '02',
    title: 'Media & PR Services',
    desc: 'Strategic public relations and media management that elevates your visibility, builds credibility, and keeps your name in the right rooms.',
  },
  {
    number: '03',
    title: 'Content Creation',
    desc: 'Compelling, intentional content crafted to engage, inspire, and convert — across every platform your audience calls home.',
  },
  {
    number: '04',
    title: 'Collaborations',
    desc: 'Purposeful partnerships that open doors, drive mutual growth, and create meaningful cultural impact beyond the campaign.',
  },
];

const portfolioItems = [
  { title: 'Brand Campaign', tag: 'PR · Strategy', featured: true },
  { title: 'Editorial Series', tag: 'Content · Media' },
  { title: 'Launch Event', tag: 'Events · Branding' },
];

const blogPosts = [
  {
    title: 'How to Build a Brand That Outlasts the Algorithm',
    date: 'April 2026',
    excerpt: 'In a world of trending sounds and fleeting virality, the brands that endure are the ones rooted in something real.',
  },
  {
    title: 'The Art of Showing Up: Consistency in Personal PR',
    date: 'March 2026',
    excerpt: 'Presence is not about being everywhere. It is about being unforgettable in the right places, at the right time.',
  },
  {
    title: 'Why Your Story Is Your Most Powerful Marketing Tool',
    date: 'February 2026',
    excerpt: 'Before the pitch deck, before the press release — there is always a story. Here is how to tell yours with intention.',
  },
];

/* ─── Intersection Observer Hook ───────────────── */
const useReveal = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('revealed'); observer.disconnect(); } },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
};

/* ─── Sub-components ────────────────────────────── */
const RevealSection = ({ className, children }) => {
  const ref = useReveal();
  return <div ref={ref} className={`reveal-section ${className || ''}`}>{children}</div>;
};

/* ─── Component ─────────────────────────────────── */
const Home = () => {
  return (
    <div className="home">

      {/* ── Hero ─────────────────────────────────── */}
      <section className="hero">
        <div className="hero-bg-overlay" />
        <div className="hero-grain" />
        <div className="hero-content">
          <p className="hero-eyebrow">PR · Branding · Storytelling</p>
          <div className="hero-rule" />
          <h1 className="hero-headline">
            The&nbsp;<em>Ella</em><br />Effect
          </h1>
          <p className="hero-sub">
            Empowering through communication,<br />creativity, and authentic storytelling.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-gold">Get in Touch</Link>
            <Link to="/about" className="btn btn-ghost">Discover More</Link>
          </div>
        </div>
        <div className="hero-scroll-hint">
          <span></span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ── Marquee Banner ───────────────────────── */}
      <div className="marquee-bar" aria-hidden="true">
        <div className="marquee-track">
          {['Personal Branding', 'PR & Media', 'Content Strategy', 'Storytelling', 'Influence', 'Creative Direction'].map((t, i) => (
            <span key={i}>{t} <span className="marquee-dot">✦</span></span>
          ))}
          {['Personal Branding', 'PR & Media', 'Content Strategy', 'Storytelling', 'Influence', 'Creative Direction'].map((t, i) => (
            <span key={`b${i}`}>{t} <span className="marquee-dot">✦</span></span>
          ))}
        </div>
      </div>

      {/* ── Services ─────────────────────────────── */}
      <section className="services-section">
        <div className="container">
          <RevealSection className="services-header">
            <span className="label-tag">What I Offer</span>
            <h2 className="section-heading">Expertise Built<br />for <em>Impact</em></h2>
          </RevealSection>
          <div className="services-grid">
            {services.map((s, i) => (
              <RevealSection key={s.number} className="service-card" style={{ transitionDelay: `${i * 80}ms` }}>
                <span className="service-number">{s.number}</span>
                <div className="service-body">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
                <div className="service-arrow">→</div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Portfolio Preview ─────────────────────── */}
      <section className="portfolio-section">
        <div className="container">
          <RevealSection className="portfolio-header">
            <span className="label-tag light">Selected Work</span>
            <h2 className="section-heading light">Recent <em>Projects</em></h2>
            <p className="section-desc light">A showcase of creative work, campaigns, and achievements.</p>
          </RevealSection>
          <div className="portfolio-grid">
            {portfolioItems.map((item, i) => (
              <RevealSection
                key={i}
                className={`portfolio-card ${item.featured ? 'portfolio-featured' : ''}`}
              >
                <div className="portfolio-img-placeholder">
                  <div className="portfolio-overlay">
                    <span className="portfolio-tag">{item.tag}</span>
                    <h4>{item.title}</h4>
                    <Link to="/portfolio" className="btn btn-ghost-sm">View Project</Link>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/portfolio" className="btn btn-outline-dark">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* ── Blog Preview ─────────────────────────── */}
      <section className="blog-section">
        <div className="container">
          <RevealSection className="blog-header">
            <span className="label-tag">The Journal</span>
            <h2 className="section-heading">Latest <em>Insights</em></h2>
            <p className="section-desc">Perspectives on media, PR, lifestyle, and personal branding.</p>
          </RevealSection>
          <div className="blog-grid">
            {blogPosts.map((post, i) => (
              <RevealSection key={i} className="blog-card">
                <div className="blog-card-inner">
                  <p className="blog-date">{post.date}</p>
                  <h4 className="blog-title">{post.title}</h4>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <Link to="/blog" className="read-more">
                    Read Article <span className="arrow">→</span>
                  </Link>
                </div>
              </RevealSection>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/blog" className="btn btn-outline-dark">Read All Articles</Link>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="cta-section">
        <div className="cta-inner">
          <RevealSection>
            <span className="label-tag light">Let's Connect</span>
            <h2 className="cta-heading">Ready to Create<br />Something <em>Remarkable?</em></h2>
            <p className="cta-sub">Let's collaborate and build something that leaves a lasting impression.</p>
            <Link to="/contact" className="btn btn-gold">Start a Conversation</Link>
          </RevealSection>
        </div>
      </section>

    </div>
  );
};

export default Home;