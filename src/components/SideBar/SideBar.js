import React from 'react';

// Sidebar component
const SideBar = () => {
  return (
    <div className="sidebar">
      <a href="/home" className="sidebar-item">
        🏠 Home
      </a>
      <a href="/profile" className="sidebar-item">
        👤 Profile
      </a>
      <a href="/settings" className="sidebar-item">
        ⚙ Settings
      </a>
      <a href="/notifications" className="sidebar-item">
        🔔 Notifications
      </a>
      <a href="/help" className="sidebar-item">
        ❓ Help
      </a>
    </div>
  );
};

export default SideBar;
