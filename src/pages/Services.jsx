import React from 'react';
import '../styles/pages/Services.scss';

const Services = () => {
  return (
    <div className="services">
      <section className="services-hero">
        <h1>Our Services</h1>
        <p>Comprehensive BPO Solutions for Your Business</p>
      </section>

      <section className="services-grid">
        <div className="service-card">
          <h2>Call Center Solutions</h2>
          <ul>
            <li>Inbound Customer Support</li>
            <li>Outbound Sales</li>
            <li>Technical Support</li>
            <li>Multi-lingual Support</li>
          </ul>
        </div>

        <div className="service-card">
          <h2>Back Office Support</h2>
          <ul>
            <li>Data Entry & Processing</li>
            <li>Document Management</li>
            <li>Accounting Services</li>
            <li>HR Support</li>
          </ul>
        </div>

        <div className="service-card">
          <h2>Digital Marketing</h2>
          <ul>
            <li>SEO & SEM</li>
            <li>Social Media Management</li>
            <li>Content Marketing</li>
            <li>Email Marketing</li>
          </ul>
        </div>

        <div className="service-card">
          <h2>IT Services</h2>
          <ul>
            <li>Software Development</li>
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>Cloud Solutions</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Services;
