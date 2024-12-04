import React from 'react';
import '../styles/pages/About.scss';

const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <h1>About VSynergize</h1>
        <p>Leading the Way in Business Process Outsourcing</p>
      </section>

      <section className="about-content">
        <div className="mission-vision">
          <div className="mission">
            <h2>Our Mission</h2>
            <p>To provide innovative and efficient business solutions that help our clients achieve their goals while maintaining the highest standards of quality and customer satisfaction.</p>
          </div>
          <div className="vision">
            <h2>Our Vision</h2>
            <p>To be the global leader in business process outsourcing, recognized for our excellence, innovation, and commitment to client success.</p>
          </div>
        </div>

        <div className="values">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Integrity</h3>
              <p>We maintain the highest ethical standards in all our dealings</p>
            </div>
            <div className="value-card">
              <h3>Innovation</h3>
              <p>We continuously evolve and adapt to meet changing business needs</p>
            </div>
            <div className="value-card">
              <h3>Excellence</h3>
              <p>We strive for excellence in everything we do</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
