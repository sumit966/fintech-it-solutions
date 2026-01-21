import React from "react";

function Services() {
  return (
    <div className="page">
      <h1>Our Services</h1>

      <div className="services-grid">
        <div className="service-card">
          <h3>FinTech Solutions</h3>
          <p>Secure and scalable fintech platforms.</p>
        </div>

        <div className="service-card">
          <h3>Web & E-Commerce</h3>
          <p>High-performance websites and e-commerce systems.</p>
        </div>

        <div className="service-card">
          <h3>Software Development</h3>
          <p>Custom enterprise software solutions.</p>
        </div>

        <div className="service-card">
          <h3>IT Consulting</h3>
          <p>Strategic IT consulting and digital transformation.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;

