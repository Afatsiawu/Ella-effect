import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqItems = [
    {
      question: 'What services do you offer?',
      answer: 'I offer a comprehensive range of services including personal brand development, PR & media services, content creation, social media management, collaboration development, interview preparation, booking management, and e-commerce integration. Each service can be customized to meet your specific needs.'
    },
    {
      question: 'How do I book your services?',
      answer: 'You can reach out via the contact form on this website, email (Elladonkor2006@gmail.com), WhatsApp (0531259490 or 0267324709), or phone call. I\'ll be happy to discuss your project and create a customized proposal for you.'
    },
    {
      question: 'What are your service packages?',
      answer: 'I offer three main packages: Starter Package (basic services and setup), Professional Package (recommended for most clients, includes brand development and content strategy), and Enterprise Package (comprehensive solution with all services included). All packages are customizable based on your needs.'
    },
    {
      question: 'How long does it take to see results?',
      answer: 'Results vary depending on your goals and the services you choose. Some results like improved social media engagement can be seen within weeks, while personal brand establishment typically takes 2-3 months. I\'ll provide a realistic timeline during our consultation.'
    },
    {
      question: 'Do you offer retainer services?',
      answer: 'Yes! I offer both project-based and retainer services. Retainer packages are ideal if you need ongoing social media management, content creation, or PR strategy. We can discuss monthly or quarterly retainer options based on your needs.'
    },
    {
      question: 'Can I sell products on my website?',
      answer: 'Absolutely! I provide e-commerce integration services including setup for multiple payment methods (Mobile Money, Visa, Mastercard, and Bank Transfer). This allows you to sell products and services directly through your website.'
    },
    {
      question: 'How do you approach personal branding?',
      answer: 'I take a strategic, authentic approach to personal branding. We start with discovery workshops to understand your values, goals, and unique positioning. Then we develop your brand story, visual identity, messaging framework, and implementation strategy tailored to your audience and industry.'
    },
    {
      question: 'Do you handle social media management?',
      answer: 'Yes, I provide full social media management including content calendar creation, daily posting, community engagement, analytics tracking, and growth strategies. I can manage one or all of your platforms depending on your needs.'
    },
    {
      question: 'What is your response time for inquiries?',
      answer: 'I typically respond to inquiries within 24-48 hours during business days. For urgent matters, WhatsApp is the best way to reach me for immediate communication.'
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Yes, I work with clients internationally. We can conduct consultations and collaboration via video call, email, and WhatsApp. Timezone differences are not a barrier to working together effectively.'
    },
    {
      question: 'Can I customize service packages?',
      answer: 'Absolutely! All of my service packages are flexible and can be customized based on your specific needs, budget, and goals. We can mix and match services to create the perfect package for you.'
    },
    {
      question: 'What is your portfolio like?',
      answer: 'My portfolio includes work in personal branding, content creation, PR campaigns, social media strategy, collaboration projects, and more. Visit the Portfolio page to see case studies and examples of recent projects.'
    },
    {
      question: 'How do I stay updated with your latest content?',
      answer: 'You can subscribe to my email newsletter on the Blog page, follow my social media accounts (Instagram, Twitter, LinkedIn, Facebook), or check back to the blog regularly for new articles and insights.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'I accept various payment methods. Please inquire about payment options during our consultation. For any services related to your website e-commerce, I support Mobile Money, Visa, Mastercard, and Bank Transfer.'
    }
  ];

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="faq">
      {/* Hero Section */}
      <section className="faq-hero">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about my services</p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="faq-section">
        <div className="container">
          <div className="faq-grid">
            <div className="faq-content">
              <div className="faq-list">
                {faqItems.map((item, index) => (
                  <div 
                    key={index} 
                    className={`faq-item ${expandedIndex === index ? 'expanded' : ''}`}
                  >
                    <button
                      className="faq-question"
                      onClick={() => toggleFAQ(index)}
                    >
                      <span>{item.question}</span>
                      <span className="faq-icon">{expandedIndex === index ? '−' : '+'}</span>
                    </button>
                    {expandedIndex === index && (
                      <div className="faq-answer">
                        <p>{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="faq-sidebar">
              <div className="sidebar-box">
                <h3>Still Have Questions?</h3>
                <p>Can't find the answer you're looking for? Get in touch with me directly.</p>
                <a href="/contact" className="btn btn-primary">Contact Me</a>
              </div>

              <div className="sidebar-box">
                <h3>Quick Links</h3>
                <ul className="quick-links">
                  <li><a href="/about">About Me</a></li>
                  <li><a href="/services">Services</a></li>
                  <li><a href="/portfolio">Portfolio</a></li>
                  <li><a href="/blog">Blog</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </div>

              <div className="sidebar-box">
                <h3>Get Started</h3>
                <p>Ready to work together? Let's schedule a consultation to discuss your project.</p>
                <a href="/contact" className="btn btn-outline">Schedule Call</a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="faq-cta">
        <div className="container">
          <h2>Ready to Begin Your Brand Journey?</h2>
          <p>Let's discuss your goals and how I can help you achieve them</p>
          <a href="/contact" className="btn btn-primary">Get in Touch Today</a>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
