import React from 'react';
import './Footer.css';
 
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
);
 
const TwitterXIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
 
const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
 
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
 
const socialLinks = [
  { href: 'https://instagram.com', label: 'Instagram', Icon: InstagramIcon },
  { href: 'https://twitter.com', label: 'X (Twitter)', Icon: TwitterXIcon },
  { href: 'https://linkedin.com', label: 'LinkedIn', Icon: LinkedInIcon },
  { href: 'https://facebook.com', label: 'Facebook', Icon: FacebookIcon },
];
 
const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
];
 
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
 
        {/* Brand */}
        <div className="footer-section footer-brand">
          <h3>The Ella Effect</h3>
          <p className="footer-tagline">
            Empowering through communication, creativity, and authentic storytelling.
          </p>
          <div className="social-links">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <span className="social-icon"><Icon /></span>
                <span className="social-label">{label}</span>
              </a>
            ))}
          </div>
        </div>
 
        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map(({ href, label }) => (
              <li key={label}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
 
        {/* Contact */}
        <div className="footer-section">
          <h4>Contact Info</h4>
          <ul className="contact-list">
            <li>
              <span className="contact-label">Phone</span>
              <span>0531259490 / 0267324709</span>
            </li>
            <li>
              <span className="contact-label">Email</span>
              <a href="mailto:Elladonkor2006@gmail.com">Elladonkor2006@gmail.com</a>
            </li>
            <li>
              <span className="contact-label">Preferred</span>
              <span>WhatsApp / Email</span>
            </li>
          </ul>
        </div>
 
      </div>
 
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} The Ella Effect. All rights reserved.</p>
      </div>
    </footer>
  );
};
 
export default Footer;