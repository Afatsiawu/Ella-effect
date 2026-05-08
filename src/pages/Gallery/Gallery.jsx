import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Gallery.css';

/* ── Icons ── */
const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

/* ── Gallery Data ── */
const categories = ['All', 'Lifestyle', 'Media', 'Creative', 'Professional'];

const galleryItems = [
  { id: 1,  category: 'lifestyle',     title: 'Golden Hour Portraits',      monogram: 'GH', tall: true },
  { id: 2,  category: 'media',         title: 'Behind the Mic',             monogram: 'BM' },
  { id: 3,  category: 'creative',      title: 'Editorial Concept',          monogram: 'EC' },
  { id: 4,  category: 'professional',  title: 'Brand Session',              monogram: 'BS' },
  { id: 5,  category: 'lifestyle',     title: 'Creative Workspace',         monogram: 'CW' },
  { id: 6,  category: 'media',         title: 'Press Feature Moments',      monogram: 'PF', tall: true },
  { id: 7,  category: 'creative',      title: 'Campaign Visuals',           monogram: 'CV', wide: true },
  { id: 8,  category: 'professional',  title: 'Speaking Engagement',        monogram: 'SE' },
  { id: 9,  category: 'lifestyle',     title: 'Studio Day',                 monogram: 'SD' },
  { id: 10, category: 'media',         title: 'Interview Series',           monogram: 'IS' },
  { id: 11, category: 'creative',      title: 'Visual Identity Work',       monogram: 'VI', tall: true },
  { id: 12, category: 'professional',  title: 'Panel Discussion',           monogram: 'PD' },
];

const socialLinks = [
  { label: 'Instagram', href: '#', Icon: InstagramIcon },
  { label: 'Twitter',   href: '#', Icon: TwitterIcon   },
  { label: 'LinkedIn',  href: '#', Icon: LinkedInIcon  },
  { label: 'Facebook',  href: '#', Icon: FacebookIcon  },
];

/* ── Scroll Reveal Hook ── */
function useScrollReveal(delay = 0) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return ref;
}

/* ── Gallery Item Card ── */
function GalleryCard({ item, index, onOpen }) {
  const ref = useScrollReveal((index % 4) * 80);
  const cls = [
    'gallery-item animate-in',
    item.tall ? 'tall' : '',
    item.wide ? 'wide' : '',
  ].filter(Boolean).join(' ');

  return (
    <div
      className={cls}
      data-index={item.id}
      ref={ref}
      onClick={() => onOpen(item.id - 1)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onOpen(item.id - 1)}
      aria-label={`Open ${item.title}`}
    >
      <div className="gallery-image" />
      <span className="gallery-monogram">{item.monogram}</span>
      <div className="gallery-overlay">
        <span className="overlay-category">{item.category}</span>
        <p className="overlay-title">{item.title}</p>
      </div>
    </div>
  );
}

/* ── Lightbox ── */
function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const item = items[index];

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="lightbox-backdrop"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      <div className="lightbox-content">
        <button className="lightbox-close" onClick={onClose} aria-label="Close">
          <CloseIcon />
        </button>

        <div
          className="lightbox-image"
          data-index={item.id}
          style={{ background: `var(--brown)` }}
        />

        <div className="lightbox-info">
          <div className="lightbox-meta">
            <span className="lightbox-category">{item.category}</span>
            <span className="lightbox-title">{item.title}</span>
          </div>
          <div className="lightbox-nav">
            <button
              className="lightbox-nav-btn"
              onClick={onPrev}
              aria-label="Previous image"
            >
              <ChevronLeft />
            </button>
            <button
              className="lightbox-nav-btn"
              onClick={onNext}
              aria-label="Next image"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Main Component ── */
const Gallery = () => {
  const [activeFilter, setActiveFilter]   = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(i => i.category === activeFilter.toLowerCase());

  const openLightbox  = useCallback((i) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage     = useCallback(() =>
    setLightboxIndex(i => (i - 1 + filtered.length) % filtered.length), [filtered.length]);
  const nextImage     = useCallback(() =>
    setLightboxIndex(i => (i + 1) % filtered.length), [filtered.length]);

  const ctaRef = useScrollReveal(100);

  return (
    <div className="gallery-page">

      {/* ── Hero ── */}
      <section className="gallery-hero">
        <div className="hero-inner">
          <p className="hero-eyebrow">Visual Portfolio</p>
          <h1>A Life <em>Beautifully</em><br />Documented</h1>
          <p className="hero-tagline">
            Lifestyle · Media · Creative · Professional
          </p>
          <div className="hero-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`hero-filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="hero-bar" />
      </section>

      {/* ── Gallery Grid ── */}
      <section className="gallery-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">The Collection</span>
            <h2>Selected <em>Moments</em></h2>
            <div className="gold-rule" />
          </div>

          <div className="gallery-grid">
            {filtered.map((item, index) => (
              <GalleryCard
                key={item.id}
                item={item}
                index={index}
                onOpen={openLightbox}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && (
        <Lightbox
          items={filtered}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}

      {/* ── CTA / Social ── */}
      <section className="gallery-cta">
        <div className="cta-inner animate-in" ref={ctaRef}>
          <span className="section-label">Follow the Journey</span>
          <h2>Behind the <em>Scenes</em><br />& Beyond</h2>
          <p>
            Every frame tells a story. Follow along for creative moments,
            campaign launches, press features, and the everyday art
            of building a brand with intention.
          </p>

          <div className="social-strip">
            {socialLinks.map(({ label, href, Icon }) => (
              <a key={label} href={href} className="social-link" aria-label={label}>
                <Icon />
                {label}
              </a>
            ))}
          </div>

          <div className="cta-divider" />

          <div className="cta-btn-group">
            <a href="/portfolio" className="btn btn-primary">
              <span>View Portfolio</span>
            </a>
            <a href="/contact" className="btn btn-outline">
              Work Together
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Gallery;