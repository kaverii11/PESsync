import React, { useEffect } from 'react';
import Header from '../components/Header';
import './ConnectPage.css';

const ConnectPage = () => {
  useEffect(() => {
    document.title = "Connect - PESync";
  }, []);

  return (
    <div>
      <Header />
      <main className="connect-page">
        <div className="content-wrapper">
          {/* Profile Widget */}
          <div className="profile-widget">
            <div className="profile-card">
              <div className="profile-picture"></div>
              <h2>Khushi Sharma</h2>
              <p>Student at PES University</p>
              <div className="profile-details">
                <p><strong>Age:</strong> 20</p>
                <p><strong>Gender:</strong> Female</p>
                <p><strong>Born in:</strong> Bangalore</p>
                <p><strong>Currently in:</strong> Bangalore</p>
                <p><strong>Email:</strong> khushish@gmail.com</p>
                <p><strong>Phone No.:</strong> 910-349-3331</p>
              </div>
            </div>
          </div>

          {/* People You May Know Section */}
          <div className="connect-section">
            <h2 className="section-title">People you may know...</h2>
            <div className="connect-grid">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="connect-card">
                  <div className="connect-picture"></div>
                  <div className="connect-info">
                    <p>Name</p>
                    <p>Student at PES University</p>
                    <button className="connect-btn">Connect</button>
                    <span className="share-icon">🔗</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer/Links Section - Moved Below */}
            <div className="footer-links">
              <h3>Stay Connected, Stay Updated...</h3>
              <div className="link-buttons">
                <div className="link-button">
                  <span className="icon">📈</span>
                  <p>Alumni Network</p>
                </div>
                <div className="link-button">
                  <span className="icon">👥</span>
                  <p>Communities</p>
                </div>
                <div className="link-button">
                  <span className="icon">💼</span>
                  <p>Clubs / Recruitment</p>
                </div>
                <div className="link-button">
                  <span className="icon">➕</span>
                  <p>Share your story...</p>
                </div>
                <div className="link-button">
                  <span className="icon">💬</span>
                  <p>Suggestions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ConnectPage;
