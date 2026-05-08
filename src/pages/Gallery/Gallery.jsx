import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const galleryItems = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Gallery Image ${i + 1}`,
    category: ['lifestyle', 'media', 'creative', 'professional'][i % 4]
  }));

  return (
    <div className="gallery">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="container">
          <h1>Gallery</h1>
          <p>Visual showcase of creative work and moments</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-section">
        <div className="container">
          <div className="gallery-grid">
            {galleryItems.map(item => (
              <div key={item.id} className="gallery-item">
                <div className="gallery-image"></div>
                <div className="gallery-overlay">
                  <p>{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gallery-cta">
        <div className="container">
          <h2>Behind the Scenes & Creative Moments</h2>
          <p>Follow for more updates on projects and collaborations</p>
          <div className="social-cta">
            <p>Check out my social media for more content</p>
            <div className="social-links">
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Facebook</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
