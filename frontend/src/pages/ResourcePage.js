import React, { useEffect } from 'react';
import Header from '../components/Header';
import './ResourcePage.css';

const ResourcePage = () => {
  useEffect(() => {
    document.title = "Resources - PESync";
  }, []);

  return (
    <div>
      <Header />
      <main className="resource-page">
        <div className="resource-columns">
          {/* Project Group Section */}
          <div className="resource-column project-group">
            <h2>Project Group</h2>
            <div className="resource-content">
              <label>Domain:</label>
              <input type="text" placeholder="Enter domain" />
              <label>Members:</label>
              <div className="members">
                <span className="member-icon">👤</span>
                <span className="member-icon">👤</span>
                <span className="member-icon">👤</span>
                <button className="add-member">+</button>
              </div>
              <label>Links:</label>
              <input type="text" placeholder="Add link" />
              <label>Tasks:</label>
              <input type="text" placeholder="Describe tasks" />
              <label>Deadline:</label>
              <input type="date" />
              <label>Suggestions:</label>
              <ol>
                <li><input type="text" placeholder="Suggestion 1" /></li>
                <li><input type="text" placeholder="Suggestion 2" /></li>
                <li><input type="text" placeholder="Suggestion 3" /></li>
              </ol>
            </div>
          </div>

          {/* Clubs/Recruitment Section */}
          <div className="resource-column clubs-recruitment">
            <h2>Clubs/Recruitment</h2>
            <div className="resource-content">
              <p>Notifications</p>
              <div className="notification-item">📢 E-Yantra Registrations</div>
              <div className="notification-item">📢 SIH Ideathon</div>
              <div className="notification-item">📢 ThingQbator</div>
              <div className="notification-item">📢 HackZee</div>
              <div className="notification-item">📢 PeCon</div>
              <div className="notification-item">📢 Team Trance Auditions</div>
            </div>
          </div>

          {/* Trends Section */}
          <div className="resource-column trends">
            <h2>Trends</h2>
            <div className="resource-content">
              <button className="trend-item">Featured Projects/Collaborations</button>
              <button className="trend-item">Job Market Trends</button>
              <button className="trend-item">Most Active Users/Influencers</button>
              <button className="trend-item">Event & Workshop Trends</button>
              <button className="trend-item">Network Activity Overview</button>
              <button className="trend-item">Learning & Skill Development Insights</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ResourcePage;
