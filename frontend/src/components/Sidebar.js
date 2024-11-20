import React, { useRef } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const sidebarRef = useRef(null);  // Reference to the sidebar element

  const handleToggleSidebar = () => {
    if (sidebarRef.current) {
      sidebarRef.current.classList.toggle('collapsed');  // Example: Toggle class to collapse the sidebar
    }
  };

  return (
    <aside ref={sidebarRef} className="sidebar">
      <button onClick={handleToggleSidebar}>Toggle Sidebar</button>
      <nav>
        <a href="#">Overview</a>
        <a href="#">Analytics</a>
        <a href="#">Reports</a>
        <a href="#">Settings</a>
      </nav>
    </aside>
  );
};

export default Sidebar;
