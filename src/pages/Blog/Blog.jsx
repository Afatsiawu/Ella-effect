import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

/* ── Arrow Icon ── */
const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

/* ── Blog Data ── */
const featuredPost = {
  id: 0,
  category: 'Personal Branding',
  date: 'May 8, 2026',
  readTime: '6 min read',
  title: 'Building Your Personal Brand in the Digital Age',
  titleEm: 'Digital Age',
  excerpt:
    'Discover the essential steps to create a compelling personal brand that stands out in today\'s digital landscape — from defining your voice to commanding attention across every platform.',
  monogram: 'PB',
};

const blogPosts = [
  {
    id: 1,
    category: 'Communication',
    date: 'May 5, 2026',
    title: 'The Power of Authentic Storytelling',
    excerpt: 'Learn how authentic storytelling creates deeper connections with your audience and builds lasting, loyal relationships.',
    monogram: 'AS',
  },
  {
    id: 2,
    category: 'PR & Media',
    date: 'May 1, 2026',
    title: 'Social Media Strategy for PR Professionals',
    excerpt: 'Strategic insights on leveraging social media to amplify your PR efforts and reach your target audience effectively.',
    monogram: 'SM',
  },
  {
    id: 3,
    category: 'PR & Media',
    date: 'April 28, 2026',
    title: 'Navigating Media Relations & Press Coverage',
    excerpt: 'A comprehensive guide to building relationships with media professionals and securing valuable press coverage.',
    monogram: 'MR',
  },
  {
    id: 4,
    category: 'Content Strategy',
    date: 'April 25, 2026',
    title: 'Content Creation for Lifestyle Brands',
    excerpt: 'Master the art of creating engaging content that resonates with lifestyle audiences and builds a thriving community.',
    monogram: 'CC',
  },
  {
    id: 5,
    category: 'Empowerment',
    date: 'April 22, 2026',
    title: 'Youth Empowerment Through Digital Media',
    excerpt: 'Explore how digital media can be used as a powerful tool for empowering young voices and creating positive change.',
    monogram: 'YE',
  },
  {
    id: 6,
    category: 'Personal Branding',
    date: 'April 18, 2026',
    title: 'The Invisible Architecture of Influence',
    excerpt: 'Unpacking the mindset shifts, habits, and systems behind brands that quietly lead and loudly inspire.',
    monogram: 'IA',
  },
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
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return ref;
}

/* ── Featured Post Card ── */
function FeaturedCard({ post }) {
  const ref = useScrollReveal(100);
  return (
    <div className="featured-card animate-in" ref={ref}>
      <div className="featured-image">
        <span className="image-placeholder">{post.monogram}</span>
      </div>
      <div className="featured-body">
        <span className="featured-tag">{post.category}</span>
        <h2>{post.title.replace(post.titleEm, '')} <em>{post.titleEm}</em></h2>
        <div className="featured-meta">
          <span className="post-date">{post.date}</span>
          <span className="read-time">{post.readTime}</span>
        </div>
        <p>{post.excerpt}</p>
        <a href="#" className="read-full">
          Read Full Article <ArrowRight />
        </a>
      </div>
    </div>
  );
}

/* ── Blog Post Card ── */
function BlogCard({ post, index }) {
  const ref = useScrollReveal((index % 3) * 100);
  return (
    <article className="blog-post-card animate-in" ref={ref}>
      <div className="post-image">
        <span className="image-placeholder">{post.monogram}</span>
      </div>
      <div className="post-content">
        <div className="post-meta">
          <span className="post-category">{post.category}</span>
          <span className="post-date">{post.date}</span>
        </div>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <a href="#" className="read-full">
          Read Article <ArrowRight />
        </a>
      </div>
    </article>
  );
}

/* ── Main Component ── */
const Blog = () => {
  return (
    <div className="blog">

      {/* ── Hero ── */}
      <section className="blog-hero">
        <div className="hero-inner">
          <p className="hero-eyebrow">The Journal</p>
          <h1>
            Ideas That <em>Inspire</em><br />& Influence
          </h1>
          <p className="hero-tagline">
            Insights on Media · PR · Branding · Lifestyle
          </p>
          <div className="hero-tags">
            {['Personal Branding', 'PR & Media', 'Content Strategy', 'Empowerment', 'Communication'].map(tag => (
              <span key={tag} className="hero-tag">{tag}</span>
            ))}
          </div>
        </div>
        <div className="hero-bar" />
      </section>

      {/* ── Featured Post ── */}
      <section className="blog-featured">
        <div className="container">
          <div className="featured-label">
            <span className="section-label">Featured Story</span>
            <div className="gold-rule" />
          </div>
          <FeaturedCard post={featuredPost} />
        </div>
      </section>

      {/* ── Blog Grid ── */}
      <section className="blog-posts">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Latest Articles</span>
            <h2>From the <em>Archive</em></h2>
            <div className="gold-rule" />
          </div>

          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="blog-newsletter">
        <div className="newsletter-inner">
          <span className="section-label">Stay in the Know</span>
          <h2>Words Worth <em>Reading,</em><br />Delivered to You</h2>
          <p>
            Join a community of creatives, professionals, and visionaries
            who receive curated insights on branding, PR, and influence
            — straight to their inbox.
          </p>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Your email address…"
              aria-label="Email address"
              required
            />
            <button type="button" className="btn btn-primary">
              Subscribe
            </button>
          </div>
          <p className="newsletter-note">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="blog-cta">
        <div className="cta-inner">
          <span className="section-label">Collaborate</span>
          <h2>Have a Story to <em>Share?</em></h2>
          <p>
            Whether it's a guest post, a perspective, or an idea worth spreading —
            let's put it into the world together.
          </p>
          <div className="cta-btn-group">
            <Link to="/contact" className="btn btn-dark">Get in Touch</Link>
            <Link to="/portfolio" className="btn btn-nude">View Portfolio</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Blog;