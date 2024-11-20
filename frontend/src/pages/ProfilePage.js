import React from 'react';
import Header from '../components/Header';
import './ProfilePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faCog } from '@fortawesome/free-solid-svg-icons';

const ProfilePage = () => {
  return (
    <div>
      <Header />
      <div className="profile-page">
        {/* Left Column */}
        <div className="left-column">
          <header className="profile-header">
            <div className="profile-image-container">
              <div className="profile-image"></div>
              <div className="status-indicator"></div>
            </div>
            <div className="profile-info">
              <h2 className="username">Khushi_Sharma</h2>
              <div className="profile-stats">
                <span>15 posts</span>
                <span>|</span>
                <span>1,044 connections</span>
                <span>|</span>
                <span>1,417 following</span>
              </div>
              <h1 className="full-name">Khushi Sharma</h1>
              <p className="headline">Computer Science Major, Class of 2025</p>
              <p className="description">Headline, a brief tagline or description</p>
            </div>
            <div className="profile-actions">
              <button className="edit-profile-button">Edit Profile</button>
              <button className="view-archive-button">View Archive</button>
              <FontAwesomeIcon icon={faCog} className="settings-icon" />
            </div>
          </header>
          
          <section className="academic-info">
            <h3>Academic Info:</h3>
            <p><strong>Degree Program:</strong> Computer Science</p>
            <p><strong>University Details:</strong> PES University</p>
            <p><strong>GPA & Honors (Optional):</strong> 3.8/4.0</p>
            <p><strong>Courses:</strong> Algorithms, Data Structures, AI, ML</p>
          </section>
        </div>

        {/* Right Column */}
        <div className="right-column">
          <div className="vertical-scrollable-widgets">
            <div className="widget">
              <h3>Skills/Certifications/Awards <FontAwesomeIcon icon={faPen} className="edit-icon" /></h3>
              <div className="scrollable-content">
                <div className="card">Skill 1 <button className="endorse-btn">Endorse</button></div>
                <div className="card">Skill 2 <button className="endorse-btn">Endorse</button></div>
                <div className="card">Skill 3 <button className="endorse-btn">Endorse</button></div>
              </div>
            </div>
            <div className="widget">
              <h3>Projects <FontAwesomeIcon icon={faPen} className="edit-icon" /></h3>
              <div className="scrollable-content">
                <div className="card">Project 1 <button className="endorse-btn">Endorse</button></div>
                <div className="card">Project 2 <button className="endorse-btn">Endorse</button></div>
                <div className="card">Project 3 <button className="endorse-btn">Endorse</button></div>
              </div>
            </div>
            <div className="widget">
              <h3>Clubs/Societies/Volunteer <FontAwesomeIcon icon={faPen} className="edit-icon" /></h3>
              <div className="scrollable-content">
                <div className="card">Club 1 <button className="endorse-btn">Endorse</button></div>
                <div className="card">Club 2 <button className="endorse-btn">Endorse</button></div>
                <div className="card">Society 1 <button className="endorse-btn">Endorse</button></div>
              </div>
            </div>
            <div className="widget">
              <h3>Internships <FontAwesomeIcon icon={faPen} className="edit-icon" /></h3>
              <div className="scrollable-content">
                <div className="card">Nvidia Intern <button className="endorse-btn">Endorse</button></div>
                <div className="card">CIE Intern <button className="endorse-btn">Endorse</button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;