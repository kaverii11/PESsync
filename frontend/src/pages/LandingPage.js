import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header'; // Assuming you have a shared header component
import Footer from '../components/Footer';
import './LandingPage.css'; // Create this CSS file for styling

const CombinedPage = () => {
  const navigate = useNavigate();

  return (
    <div className="combined-page">
      {/* Single Header */}
      <Header />

      {/* Landing Page Section */}
      <section className="landing-page">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-text">
            <h1>PESync</h1>
            <p>Connect with Students and Alumni</p>
            <button className="cta-button">Connect Here</button>
          </div>
          <div className="hero-images">
            <img src="handshake.jpg" alt="Handshake" />
            <img src="globe.jpg" alt="Community" />
            <img src="lady_w_laptop.jpg" alt="Student" />
          </div>
        </div>

        {/* Our Services Section */}
        <section className="content-section">
          <h2>Our Services</h2>
          <p> Welcome to PESync, your all-in-one platform designed to connect students, alumni, and industry experts in a thriving campus community. Whether you're looking to build valuable networks, find mentorship, access exclusive resources, or explore career opportunities, PESync brings it all together seamlessly. Join us to kickstart your journey, collaborate with like-minded peers, and take your personal and professional growth to the next level!</p>
        </section>

        {/* How It Works Section */}
        <section className="content-section">
          <h2>How It Works</h2>
          <p>Discover how PESync simplifies connecting with peers and alumni to expand your network and opportunities.</p>
        </section>

        {/* Exclusive Benefits Section */}
        <section className="content-section">
          <h2>Exclusive Benefits</h2>
          <p>Unlock exclusive benefits that enhance your professional and personal growth through PESync.</p>
        </section>

        {/* Connect Section */}
        <section className="content-section">
          <h2>Connect</h2>
          <p>Join a vibrant community of students and alumni ready to support each other on the path to success.</p>
        </section>
      </section>

      {/* Dashboard Page Section */}
      <section className="dashboard-page">
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
              onClick={() => navigate('/login') }
            >
              Login
            </button>

            <p className="terms">
              By clicking Sign Up or Login, you agree to PESync's
              <a href="#">User Agreement</a>, <a href="#">Privacy Policy</a>, and <a href="#">Cookie Policy</a>.
            </p>
          </div>

          <div className="icon-section">
            <img src="signup.jpg" alt="Community Icon" />
          </div>
        </main>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CombinedPage;
