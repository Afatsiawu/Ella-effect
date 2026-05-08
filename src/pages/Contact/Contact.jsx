import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    requestType: 'general'
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitStatus('Message sent successfully! I\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      requestType: 'general'
    });
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1>Get in Touch</h1>
          <p>Let's discuss how we can work together</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            {/* Contact Info */}
            <div className="contact-info">
              <h2>Contact Information</h2>
              
              <div className="info-block">
                <h3>Phone</h3>
                <p><a href="tel:0531259490">0531259490</a></p>
                <p><a href="tel:0267324709">0267324709</a></p>
              </div>

              <div className="info-block">
                <h3>Email</h3>
                <p><a href="mailto:Elladonkor2006@gmail.com">Elladonkor2006@gmail.com</a></p>
              </div>

              <div className="info-block">
                <h3>Preferred Communication</h3>
                <p>WhatsApp / Email</p>
              </div>

              <div className="info-block">
                <h3>Quick Response</h3>
                <p>I typically respond to inquiries within 24-48 hours during business days.</p>
              </div>

              <div className="request-types">
                <h3>Common Requests</h3>
                <ul>
                  <li>Personal Branding Consultation</li>
                  <li>PR & Media Services</li>
                  <li>Content Creation</li>
                  <li>Speaking Engagements</li>
                  <li>Collaboration Opportunities</li>
                  <li>Other Inquiries</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-section">
              <h2>Send Me a Message</h2>
              
              {submitStatus && (
                <div className="success-message">
                  {submitStatus}
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="requestType">Request Type</label>
                  <select
                    id="requestType"
                    name="requestType"
                    value={formData.requestType}
                    onChange={handleChange}
                  >
                    <option value="general">General Inquiry</option>
                    <option value="branding">Personal Branding</option>
                    <option value="pr">PR Services</option>
                    <option value="content">Content Creation</option>
                    <option value="booking">Booking/Interview Request</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me more about your project or inquiry..."
                    rows="6"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="contact-social">
        <div className="container">
          <h2>Follow Me Online</h2>
          <p>Stay connected for updates and inspiration</p>
          <div className="social-links">
            <a href="#" className="social-link">Instagram</a>
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">Facebook</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
