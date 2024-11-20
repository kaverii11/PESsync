import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import './HomePage.css';

const HomePage = () => {
  useEffect(() => {
    document.title = "Profile - PESync";
  }, []);

  // State for tracking active buttons for each post
  const [activeButtons, setActiveButtons] = useState({
    1: { like: false, repost: false, comment: false, share: false }, // For Post 1
    2: { like: false, repost: false, comment: false, share: false }, // For Post 2
    3: { like: false, repost: false, comment: false, share: false }, // For Post 3
  });

  // Handler for button clicks (toggle active state for specific buttons)
  const handleButtonClick = (postId, button) => {
    setActiveButtons((prevState) => ({
      ...prevState,
      [postId]: {
        ...prevState[postId],
        [button]: !prevState[postId][button], // Toggle active state of the specific button
      },
    }));
  };

  return (
    <div>
      <Header />
      <main className="profile-page">
        {/* Left Column */}
        <div className="left-column">
          <div className="profile-sidebar">
            <div className="profile-info">
              <div className="profile-picture"></div>
              <h2>Khushi Sharma</h2>
              <p>Student at PES University</p>
            </div>
            <div className="profile-stats">
              <div className="stat-item">
                <div className="stat-label">Profile Viewers</div>
                <div className="stat-value">251</div>
              </div>
              <div className="stat-item">
                <div className="stat-label">Network</div>
                <div className="stat-value">90</div>
              </div>
            </div>
            <div className="mentor-section">
              <div className="section-title">Mentor</div>
              <div className="section-content">Dr. Smith, Prof. Lee</div>
            </div>
            <div className="skills-section">
              <div className="section-title">Skills</div>
              <div className="section-content">JavaScript, React, Networking</div>
            </div>
          </div>
        </div>

        {/* Middle Feed Section */}
        <div className="feed-section">
          {/* Post for Tom Cruise */}
          <div className="post-card">
            <div className="post-header">
              <span className="post-author">Tom Cruise</span>
              <span className="post-options">+</span>
            </div>
            <div className="post-content"></div>
            <div className="post-actions">
              <button
                onClick={() => handleButtonClick(1, 'like')}
                className={activeButtons[1].like ? "active" : ""}
              >
                👍
              </button>
              <button
                onClick={() => handleButtonClick(1, 'repost')}
                className={activeButtons[1].repost ? "active" : ""}
              >
                🔄
              </button>
              <button
                onClick={() => handleButtonClick(1, 'comment')}
                className={activeButtons[1].comment ? "active" : ""}
              >
                💬
              </button>
              <button
                onClick={() => handleButtonClick(1, 'share')}
                className={activeButtons[1].share ? "active" : ""}
              >
                📤
              </button>
            </div>
          </div>

          {/* Post for Alicia Keys */}
          <div className="post-card">
            <div className="post-header">
              <span className="post-author">Alicia Keys</span>
              <span className="post-options">+</span>
            </div>
            <div className="post-content"></div>
            <div className="post-actions">
              <button
                onClick={() => handleButtonClick(2, 'like')}
                className={activeButtons[2].like ? "active" : ""}
              >
                👍
              </button>
              <button
                onClick={() => handleButtonClick(2, 'repost')}
                className={activeButtons[2].repost ? "active" : ""}
              >
                🔄
              </button>
              <button
                onClick={() => handleButtonClick(2, 'comment')}
                className={activeButtons[2].comment ? "active" : ""}
              >
                💬
              </button>
              <button
                onClick={() => handleButtonClick(2, 'share')}
                className={activeButtons[2].share ? "active" : ""}
              >
                📤
              </button>
            </div>
          </div>

          {/* Post for Kaveri B. Mahesh */}
          <div className="post-card">
            <div className="post-header">
              <span className="post-author">Kaveri B. Mahesh</span>
              <span className="post-options">+</span>
            </div>
            <div className="post-content"></div>
            <div className="post-actions">
              <button
                onClick={() => handleButtonClick(3, 'like')}
                className={activeButtons[3].like ? "active" : ""}
              >
                👍
              </button>
              <button
                onClick={() => handleButtonClick(3, 'repost')}
                className={activeButtons[3].repost ? "active" : ""}
              >
                🔄
              </button>
              <button
                onClick={() => handleButtonClick(3, 'comment')}
                className={activeButtons[3].comment ? "active" : ""}
              >
                💬
              </button>
              <button
                onClick={() => handleButtonClick(3, 'share')}
                className={activeButtons[3].share ? "active" : ""}
              >
                📤
              </button>
            </div>
          </div>
        </div>

        {/* Right Column Narrow Discover Section */}
        <div className="right-column narrow">
          <div className="discover-sidebar">
            <h3>Discover</h3>
            {[1, 2, 3, 4, 5].map((index) => (
              <div key={index} className="discover-item">
                <div className="discover-picture"></div>
                <div className="discover-info">
                  <p>Name</p>
                  <p>Student at PES University</p>
                  <button className="connect-btn">Connect</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;


