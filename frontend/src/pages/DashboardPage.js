// src/pages/DashboardPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './DashboardPage.css';

const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <main className="main-content">
        <div className="welcome-section">
          <h1>Welcome to your Campus Community</h1>

          {/* Sign Up and Login Buttons */}
          <button
            className="auth-button signup-button"
            onClick={() => navigate('/signup')}
          >
            Sign Up
          </button>
          <button
            className="auth-button login-button"
            onClick={() => alert('Navigate to Login')}
          >
            Login
          </button>

          <p className="terms">
            By clicking Sign Up or Login, you agree to PESync's 
            <a href="#">User Agreement</a>, <a href="#">Privacy Policy</a>, and <a href="#">Cookie Policy</a>.
          </p>
        </div>
        
        <div className="icon-section">
          <img src="/logo1.png" alt="Community Icon" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;