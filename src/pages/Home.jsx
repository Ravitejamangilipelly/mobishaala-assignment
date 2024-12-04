import React from 'react';
import '../styles/pages/Home.scss';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__content">
          <h1>Transform Your Business with VSynergize</h1>
          <p>Innovative BPO Solutions for the Digital Age</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Call Center Solutions</h3>
            <p>24/7 customer support with multilingual capabilities</p>
          </div>
          <div className="service-card">
            <h3>Back Office Support</h3>
            <p>Streamline your operations with our efficient back-office solutions</p>
          </div>
          <div className="service-card">
            <h3>Digital Marketing</h3>
            <p>Comprehensive digital marketing services to grow your business</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <h2>Why Choose VSynergize?</h2>
        <div className="features-grid">
          <div className="feature">
            <h3>Experience</h3>
            <p>Years of industry expertise</p>
          </div>
          <div className="feature">
            <h3>Quality</h3>
            <p>ISO certified processes</p>
          </div>
          <div className="feature">
            <h3>Technology</h3>
            <p>Latest tech infrastructure</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
