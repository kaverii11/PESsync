import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faLink, faBriefcase, faChalkboardUser, faUser, faGlobe, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation(); // Use location to get the current route

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Function to check if the current path is '/connect' or any of its subpaths
  const isNetworkActive = () => {
    return location.pathname.startsWith('/connect');
  };

  // Helper function to check if the current path matches a given path
  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <a href="/" className="logo">
        <FontAwesomeIcon icon={faGlobe} className="logo-icon" />
        <span>PESync</span>
      </a>
      <nav className="nav-links">
        <a href="/homepage" className={`nav-icon ${isActive('/homepage') ? 'active-link' : ''}`}>
          <FontAwesomeIcon icon={faHouse} />
          <span>Home</span>
        </a>
        <div
          className={`nav-icon network-dropdown-container ${isNetworkActive() ? 'active-link' : ''}`}
          onClick={toggleDropdown}
        >
          <FontAwesomeIcon icon={faLink} />
          <span className="network-link">Network</span>
          <FontAwesomeIcon icon={faChevronDown} className="dropdown-arrow" />
          {showDropdown && (
            <div className="dropdown-menu">
              <a href="/connect" className="dropdown-item">Connect</a>
              <a href="/resources" className="dropdown-item">Resources</a>
              <a href="/connect" className="dropdown-item">Alumni Network</a>
              <a href="/resources" className="dropdown-item">Discussions</a>
              <a href="/resources" className="dropdown-item">Project Group</a>
              <a href="/resources" className="dropdown-item">Trends</a>
            </div>
          )}
        </div>
        <a href="/opportunities" className={`nav-icon ${isActive('/opportunities') ? 'active-link' : ''}`}>
          <FontAwesomeIcon icon={faBriefcase} />
          <span>Opportunities</span>
        </a>
        <a href="/mentorship" className={`nav-icon ${isActive('/mentorship') ? 'active-link' : ''}`}>
          <FontAwesomeIcon icon={faChalkboardUser} />
          <span>Mentorship</span>
        </a>
        <a href="/profile" className={`nav-icon ${isActive('/profile') ? 'active-link' : ''}`}>
          <FontAwesomeIcon icon={faUser} />
          <span>My Profile</span>
        </a>
      </nav>
    </header>
  );
};

export default Header;