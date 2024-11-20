import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import './JobListingPage.css';

const JobListingPage = () => {
  useEffect(() => {
    document.title = "Job Listings - PESync";
  }, []);

  const [tracker, setTracker] = useState({
    applied: false,
    interviewScheduled: false,
    accepted: false,
    campusPlacement: false,
    saved: false,
    internships: false,
    questionnaire: false,
  });

  const toggleTracker = (stage) => {
    setTracker({ ...tracker, [stage]: !tracker[stage] });
  };

  return (
    <div>
      <Header />
      <main className="job-listing-page">
        <div className="banner">
          <h2>Explore Opportunities: Find internships, campus placements, and job openings tailored for PES students.</h2>
        </div>
        
        <div className="content-container">
          {/* Filter Sidebar */}
          <aside className="filter-sidebar">
            <h3>Filter</h3>
            <label>Year of Study</label>
            <select>
              <option>2021</option>
              <option>2022</option>
              <option>2023</option>
              <option>2024</option>
            </select>
            <label>Major</label>
            <select>
              <option>Computer Science</option>
              <option>Electronics</option>
              <option>Mechanical</option>
            </select>
            <label>Skills</label>
            <select>
              <option>Software Development</option>
              <option>Data Science</option>
              <option>Product Management</option>
            </select>
            <label>Location</label>
            <select>
              <option>Bengaluru (Urban)</option>
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Pune</option>
            </select>
          </aside>

          {/* Job Listings Panel */}
          <section className="job-listings-panel">
            <h3>Job Listings:</h3>
            <div className="job-card">
              <div className="job-details">
                <h4>Atlassian 3.7 ★</h4>
                <p>Software Engineer - Bengaluru</p>
                <p><strong>Project Role:</strong> Software Development Engineer</p>
                <p>Analyze, design, code, and test multiple components of application code across one or more clients. Perform maintenance, enhancements, and/or development work.</p>
                <p><strong>Must have skills:</strong> Oracle CC&B Technical Architecture</p>
                
                <div className="company-overview">
                  <p><strong>Company overview</strong></p>
                  <p><strong>Size:</strong> 5001 to 10000 Employees</p>
                  <p><strong>Sector:</strong> Information Technology</p>
                  <p><strong>Industry:</strong> Software Development</p>
                  <p><strong>Ratings:</strong> 3.7 ★★★★★</p>
                </div>
                <button className="save-button">Save for Later</button>
                <button className="read-more">Read more</button>
              </div>
            </div>
          </section>

          {/* Job Application Tracker */}
          <aside className="application-tracker">
            <h3>Job Application Tracker</h3>
            <div className="tracker-item">
              <label>
                <input
                  type="checkbox"
                  checked={tracker.applied}
                  onChange={() => toggleTracker('applied')}
                />
                Applied
              </label>
            </div>
            <div className="tracker-item">
              <label>
                <input
                  type="checkbox"
                  checked={tracker.interviewScheduled}
                  onChange={() => toggleTracker('interviewScheduled')}
                />
                Interview Scheduled
              </label>
            </div>
            <div className="tracker-item">
              <label>
                <input
                  type="checkbox"
                  checked={tracker.accepted}
                  onChange={() => toggleTracker('accepted')}
                />
                Accepted
              </label>
            </div>
            <div className="tracker-item">
              <label>
                <input
                  type="checkbox"
                  checked={tracker.campusPlacement}
                  onChange={() => toggleTracker('campusPlacement')}
                />
                Exclusive Campus Placement
              </label>
            </div>
            <div className="tracker-item">
              <label>
                <input
                  type="checkbox"
                  checked={tracker.saved}
                  onChange={() => toggleTracker('saved')}
                />
                Saved
              </label>
            </div>
            <div className="tracker-item">
              <label>
                <input
                  type="checkbox"
                  checked={tracker.internships}
                  onChange={() => toggleTracker('internships')}
                />
                Internships
              </label>
            </div>
            <div className="tracker-item">
              <label>
                <input
                  type="checkbox"
                  checked={tracker.questionnaire}
                  onChange={() => toggleTracker('questionnaire')}
                />
                Interview Questionnaire
              </label>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default JobListingPage;
