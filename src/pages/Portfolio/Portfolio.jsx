import React, { useState, useEffect, useRef } from 'react';
import './Portfolio.css';

/* ── Arrow Icon ── */
const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

/* ── Portfolio Data ── */
const portfolioItems = [
  {
    id: 1,
    category: 'branding',
    title: 'Personal Brand Campaign',
    description: 'A full-spectrum brand identity — from visual language and tone of voice to positioning strategy that commands attention.',
    monogram: 'PB',
    featured: true,
  },
  {
    id: 2,
    category: 'content',
    title: 'Social Media Series',
    description: 'Multi-platform storytelling designed to build loyalty, grow reach, and convert audience into community.',
    monogram: 'SM',
  },
  {
    id: 3,
    category: 'pr',
    title: 'Press Release Campaign',
    description: 'Strategic media outreach that placed stories in premier publications and amplified brand authority.',
    monogram: 'PR',
  },
  {
    id: 4,
    category: 'branding',
    title: 'Brand Positioning Project',
    description: 'Deep market research and competitive mapping distilled into a positioning strategy that differentiates and resonates.',
    monogram: 'BP',
  },
  {
    id: 5,
    category: 'content',
    title: 'Thought Leadership Writing',
    description: 'Long-form editorial content that established authority, sparked conversation, and drove measurable engagement.',
    monogram: 'TL',
  },
  {
    id: 6,
    category: 'collaboration',
    title: 'Strategic Partnership',
    description: 'End-to-end collaboration development — from identifying aligned partners to executing co-branded campaigns.',
    monogram: 'SP',
  },
  {
    id: 7,
    category: 'pr',
    title: 'Media Relations Initiative',
    description: 'Comprehensive press kit creation paired with a targeted outreach campaign to tier-one media contacts.',
    monogram: 'MR',
  },
  {
    id: 8,
    category: 'content',
    title: 'Video Content Strategy',
    description: 'End-to-end scripting, storyboarding, and content strategy for a video series that grew audience by 3x.',
    monogram: 'VC',
  },
];

const stats = [
  { number: '50+', label: 'Projects Delivered' },
  { number: '8', label: 'Years of Influence' },
  { number: '30+', label: 'Media Features' },
  { number: '100%', label: 'Client Satisfaction' },
];

const categories = [
  { key: 'all', label: 'All Projects' },
  { key: 'branding', label: 'Branding' },
  { key: 'content', label: 'Content' },
  { key: 'pr', label: 'PR & Media' },
  { key: 'collaboration', label: 'Collaborations' },
];

/* ── Intersection Observer Hook ── */
function useScrollReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

/* ── Animated Stat ── */
function StatItem({ number, label, index }) {
  const ref = useScrollReveal();
  return (
    <div
      className="stat-item animate-in"
      ref={ref}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <span className="stat-number">{number}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

/* ── Portfolio Card ── */
function PortfolioCard({ item, index }) {
  const ref = useScrollReveal();
  return (
    <div
      className={`portfolio-card animate-in${item.featured ? ' featured' : ''}`}
      ref={ref}
      style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
    >
      <div className="portfolio-image">
        <span className="image-placeholder">{item.monogram}</span>
      </div>
      <div className="portfolio-content">
        <span className="category-tag">{item.category}</span>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <a href="#" className="view-project">
          View Project <ArrowRight />
        </a>
      </div>
    </div>
  );
}

/* ── Main Component ── */
const Portfolio = () => {
  const [filterCategory, setFilterCategory] = useState('all');

  const filteredItems =
    filterCategory === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filterCategory);

  return (
    <div className="portfolio">

      {/* ── Hero ── */}
      <section className="portfolio-hero">
        <div className="hero-inner">
          <p className="hero-eyebrow">Creative Portfolio</p>
          <h1>
            Work That <em>Speaks</em><br />For Itself
          </h1>
          <p className="hero-tagline">Branding · Content · PR · Collaborations</p>
          <div className="hero-cta-group">
            <a href="#portfolio" className="btn btn-primary">
              <span>Explore Projects</span>
            </a>
            <a href="/contact" className="btn btn-outline">
              Work Together
            </a>
          </div>
        </div>
        <div className="hero-bar" />
      </section>

      {/* ── Intro Quote Strip ── */}
      <div className="portfolio-intro">
        <p>
          Every project is an opportunity to build something that lasts —
          a brand, a story, a movement.
        </p>
      </div>

      {/* ── Portfolio Grid ── */}
      <section className="portfolio-section" id="portfolio">
        <div className="container">

          {/* Section Header */}
          <div className="section-header">
            <span className="section-label">Selected Work</span>
            <h2>Projects &amp; <em>Achievements</em></h2>
            <div className="gold-rule" />
          </div>

          {/* Filter Buttons */}
          <div className="filter-buttons">
            {categories.map((cat) => (
              <button
                key={cat.key}
                className={`filter-btn ${filterCategory === cat.key ? 'active' : ''}`}
                onClick={() => setFilterCategory(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="portfolio-grid">
            {filteredItems.map((item, index) => (
              <PortfolioCard key={item.id} item={item} index={index} />
            ))}
          </div>

        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section className="portfolio-stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s, i) => (
              <StatItem key={s.label} number={s.number} label={s.label} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="portfolio-cta">
        <div className="cta-inner">
          <span className="section-label">Let's Connect</span>
          <h2>Ready to Build Something <em>Remarkable?</em></h2>
          <p>
            Whether you have a vision or you're still shaping it —
            let's craft a brand experience that commands attention
            and leaves a lasting impression.
          </p>
          <div className="cta-btn-group">
            <a href="/contact" className="btn btn-dark">
              Get in Touch
            </a>
            <a href="/about" className="btn btn-nude">
              Learn More
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Portfolio;