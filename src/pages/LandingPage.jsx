import React from "react";
import { Link } from "react-router-dom";
import { FaCar, FaShieldAlt, FaGlobe, FaMoneyCheckAlt, FaClock, FaUserCheck } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/LandingPage.css";

const LandingPage = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Seamless Vehicle Licensing, Anytime, Anywhere</h1>
            <p>Register, renew, and manage vehicle licenses effortlessly across all states.</p>
            <Link to="/register" className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2>Why Choose Our System?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <FaCar className="feature-icon" />
              <h3>Fast Processing</h3>
              <p>Complete your vehicle registration and renewals in minutes.</p>
            </div>
            <div className="feature-item">
              <FaShieldAlt className="feature-icon" />
              <h3>Secure Transactions</h3>
              <p>We ensure your data and payments are protected with top-tier security measures.</p>
            </div>
            <div className="feature-item">
              <FaGlobe className="feature-icon" />
              <h3>Statewide Coverage</h3>
              <p>Access vehicle licensing services across multiple states with one platform.</p>
            </div>
            <div className="feature-item">
              <FaMoneyCheckAlt className="feature-icon" />
              <h3>Affordable Fees</h3>
              <p>Our platform offers competitive rates with no hidden charges.</p>
            </div>
            <div className="feature-item">
              <FaClock className="feature-icon" />
              <h3>24/7 Availability</h3>
              <p>Use our system anytime, anywhere—no need to wait in long queues.</p>
            </div>
            <div className="feature-item">
              <FaUserCheck className="feature-icon" />
              <h3>User-Friendly Interface</h3>
              <p>Easy navigation ensures a hassle-free experience for all users.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container text-center">
          <h2>Ready to Register Your Vehicle?</h2>
          <p>Join thousands of users benefiting from our efficient system.</p>
          <Link to="/register" className="btn btn-secondary">
            Get Started Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
