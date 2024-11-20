import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import MentorshipDetailsPage from './MentorshipDetailsPage'; // Import the MentorshipDetailsPage component
import './MentorshipPage.css';

const MentorshipPage = () => {
  const [showDetails, setShowDetails] = useState(false); // State to toggle mentorship details

  useEffect(() => {
    document.title = "Mentorship - PESync";
  }, []);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      <Header />
      <main className="mentorship-page">
        <h1 className="page-title">Connect With Industry Experts</h1>

        <div className="filter-and-cards">
          <div className="filter-section">
            <div className="filter-title">
              <span className="filter-icon">🔍</span>
              <h2>Search Mentors</h2>
            </div>
            <div className="filter-fields">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Industry" />
              <input type="text" placeholder="Expertise" />
              <input type="text" placeholder="Department" />
            </div>
          </div>

          <div className="profile-cards">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="profile-card">
                <div className="profile-info">
                  <h3>Name</h3>
                  <p>Industry</p>
                  <p>Bio</p>
                </div>
                <button className="request-mentorship-btn" onClick={toggleDetails}>
                  {showDetails ? 'Hide Details' : 'View Details'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Mentor Mentee Match Section */}
        <section className="mentor-match-section">
          <h2>MENTOR MENTEE MATCH</h2>
          <div className="match-details">
            <div className="animated-progress-circle">
              <svg className="progress-ring" width="120" height="120">
                <circle
                  className="progress-ring__background"
                  cx="60"
                  cy="60"
                  r="50"
                  strokeWidth="10"
                  fill="transparent"
                />
                <circle
                  className="progress-ring__circle"
                  cx="60"
                  cy="60"
                  r="50"
                  strokeWidth="10"
                  fill="transparent"
                  strokeDasharray="314"
                  strokeDashoffset="75" /* Offset for 76% */
                />
              </svg>
              <div className="percentage-text">76%</div>
            </div>
            <div className="match-message">
              <p>You just matched with <span>_</span>, time to find your guide and grow</p>
            </div>
          </div>

          <div className="match-actions">
            <button className="goal-tracking-btn">🏆 Goal Tracking</button>
            <button className="feedback-btn">🔄 Feedback</button>
          </div>
        </section>

        {/* Mentorship Details Section - Conditionally Rendered */}
        {showDetails && (
          <section className="mentorship-details-section">
            <MentorshipDetailsPage /> {/* Render the MentorshipDetailsPage content */}
          </section>
        )}
      </main>
    </div>
  );
};

export default MentorshipPage;
