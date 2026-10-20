import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../css/RegisterPage.css';
import { FaUser, FaEnvelope, FaLock, FaCheck } from "react-icons/fa";
import Footer from "../components/Footer"; // Import Footer


const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation and submission logic here
    console.log("Form Data:", formData);
  };

  return (
    <div>
      
      <div className="register-page d-flex align-items-center justify-content-center">
        <div className="card register-card">
          <div className="card-body">
            <h2 className="card-title text-center mb-4">Register</h2>
            <form onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="mb-3 d-flex align-items-center">
                <label htmlFor="name" className="form-label me-3">
                  <FaUser className="me-2" /> Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              {/* Email Field */}
              <div className="mb-3 d-flex align-items-center">
                <label htmlFor="email" className="form-label me-3">
                  <FaEnvelope className="me-2" /> Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* Password Field */}
              <div className="mb-3 d-flex align-items-center">
                <label htmlFor="password" className="form-label me-3">
                  <FaLock className="me-2" /> Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              {/* Confirm Password Field */}
              <div className="mb-3 d-flex align-items-center">
                <label htmlFor="confirmPassword" className="form-label me-3">
                  <FaCheck className="me-2" /> Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary w-100 mb-3">
                Register
              </button>

              {/* Login Link */}
              <p className="text-center">
                Already have an account? <Link to="/login">Login here</Link>.
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterPage;