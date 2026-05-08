import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

/* ─── Reveal Hook ───────────────────────────────── */
const useReveal = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('revealed'); observer.disconnect(); } },
      { threshold: 0.1 }
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
const values = [
  {
    num: '01',
    title: 'Authenticity',
    desc: 'Real stories, genuine connections. Transparent communication that resonates on a personal level — no performance, just truth.',
  },
  {
    num: '02',
    title: 'Creativity',
    desc: 'Bold, innovative thinking that challenges the status quo. Every project is an opportunity to create something truly remarkable.',
  },
  {
    num: '03',
    title: 'Empowerment',
    desc: 'Dedicated to uplifting voices, amplifying stories, and creating opportunities for growth, collaboration, and lasting impact.',
  },
  {
    num: '04',
    title: 'Excellence',
    desc: 'A commitment to delivering high-quality work with meticulous attention to detail across every touchpoint and platform.',
  },
];

const expertise = [
  { title: 'Personal Branding', desc: 'Building and amplifying unique brand identities that tell compelling stories and create lasting impressions.' },
  { title: 'Media & PR Strategy', desc: 'Strategic communication plans that boost visibility, credibility, and engagement across the right platforms.' },
  { title: 'Content Creation', desc: 'Engaging, purposeful content that inspires, educates, and connects with target audiences authentically.' },
  { title: 'Digital Communication', desc: 'Leveraging digital media channels to maximise reach, impact, and meaningful audience interaction.' },
  { title: 'Youth Empowerment', desc: 'Supporting young professionals and creators in building their brands and achieving their fullest potential.' },
  { title: 'Networking & Collaborations', desc: 'Strategic partnerships and connections that drive mutual growth and create shared, lasting value.' },
];

/* ─── Component ─────────────────────────────────── */
const About = () => {
  return (
    <div className="about">

      {/* ── Hero ─────────────────────────────────── */}
      <section className="about-hero">
        <div className="about-hero-grain" />
        <div className="about-hero-glow" />
        <div className="about-hero-content">
          <Reveal>
            <p className="about-eyebrow">The Story Behind The Brand</p>
            <div className="about-hero-rule" />
            <h1 className="about-hero-name">
              Emmanuella<br /><em>Donkor</em>
            </h1>
            <p className="about-hero-role">Public Relations · Personal Branding · Storytelling</p>
          </Reveal>
        </div>
        <div className="about-hero-scroll">
          <span>Scroll</span>
          <div className="about-scroll-line" />
        </div>
      </section>

      {/* ── Story ────────────────────────────────── */}
      <section className="about-story">
        <div className="container">
          <div className="story-layout">
            <Reveal className="story-left">
              <span className="label-tag">Who I Am</span>
              <h2 className="section-heading">
                The <em>Ella</em><br />Effect
              </h2>
              <div className="story-rule" />
            </Reveal>
            <div className="story-right">
              <Reveal delay={100}>
                <p>
                  The Ella Effect is a personal branding and media platform founded by
                  Emmanuella Donkor — a passionate public relations student dedicated to
                  the power of communication, networking, and authentic storytelling.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <p>
                  With a focus on building influence, sharing impactful content, and
                  creating meaningful connections, The Ella Effect represents more than
                  just a brand. It is a movement — centred on empowering individuals and
                  communities through creative digital media, strategic communication,
                  and bold, authentic narratives.
                </p>
              </Reveal>
              <Reveal delay={250}>
                <blockquote className="story-quote">
                  "Empowering through communication, creativity,<br />and authentic storytelling."
                </blockquote>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────── */}
      <section className="about-values">
        <div className="container">
          <Reveal className="values-header">
            <span className="label-tag">What I Stand For</span>
            <h2 className="section-heading">Core <em>Values</em></h2>
          </Reveal>
          <div className="values-grid">
            {values.map((v, i) => (
              <Reveal key={v.num} className="value-card" delay={i * 80}>
                <span className="value-num">{v.num}</span>
                <div className="value-body">
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Expertise ────────────────────────────── */}
      <section className="about-expertise">
        <div className="container">
          <Reveal className="expertise-header">
            <span className="label-tag light">Skills & Focus</span>
            <h2 className="section-heading light">Areas of <em>Expertise</em></h2>
          </Reveal>
          <div className="expertise-grid">
            {expertise.map((e, i) => (
              <Reveal key={e.title} className="expertise-card" delay={i * 70}>
                <div className="expertise-index">{String(i + 1).padStart(2, '0')}</div>
                <h3>{e.title}</h3>
                <p>{e.desc}</p>
                <div className="expertise-line" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ─────────────────────── */}
      <section className="about-vision">
        <div className="container">
          <Reveal className="vision-header">
            <span className="label-tag">Purpose & Direction</span>
            <h2 className="section-heading">Vision &amp; <em>Mission</em></h2>
          </Reveal>
          <div className="vision-grid">
            <Reveal className="vision-card" delay={0}>
              <span className="vision-label">Mission</span>
              <p className="vision-text">
                To empower individuals and organisations through strategic communication,
                creative storytelling, and authentic personal branding — inspiring action
                and building meaningful, lasting connections.
              </p>
            </Reveal>
            <Reveal className="vision-card vision-card--accent" delay={120}>
              <span className="vision-label">Vision</span>
              <p className="vision-text">
                To be a leading platform for personal brand development, media innovation,
                and community empowerment — creating opportunities for growth, collaboration,
                and positive impact across the digital landscape.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="about-cta">
        <div className="about-cta-glow" />
        <div className="container about-cta-inner">
          <Reveal>
            <span className="label-tag light">Let's Work Together</span>
            <h2 className="cta-heading">
              Ready to Build<br />Something <em>Lasting?</em>
            </h2>
            <p className="cta-sub">Interested in collaborating or learning more? I'd love to connect.</p>
            <Link to="/contact" className="btn btn-gold">Get in Touch</Link>
          </Reveal>
        </div>
      </section>

    </div>
  );
};

export default About;