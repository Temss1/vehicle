import React from "react";
import { Link } from "react-router-dom";
import '../css/LoginPage.css';
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

const LoginPage = () => {
  return (
    <div>
      
      <div className="login-page ">
        <div className="container ">
          <div className="row justify-content-center">
            <div className="col-md-4 col-lg-4">
              <div className="login-card p-4 ">
                <h2 className="text-center mb-4 pt-4 ">Login</h2>
                <form>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      <FontAwesomeIcon icon={faUser} /> Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      <FontAwesomeIcon icon={faLock} /> Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100 mb-3" >
                    <Link to="/dashboard">Login</Link>
                  </button>
                  <p className="text-center">
                    Don’t have an account? <Link to="/register">Register here</Link>.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;