import React, { useState } from 'react';
import './Sidebar.css';

// Import your images
import IMG1 from '../assets/image1.png';
import IMG2 from '../assets/image2.png';
import IMG3 from '../assets/image3.png';
import IMG4 from '../assets/image4.png';
import IMG5 from '../assets/image5.png';
import IMG6 from '../assets/image6.png';
import LOGO from '../assets/Logo.png';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <div className='navwrapper'>
        

        <div className="sidebar">
      <div className="Sidebar-child">
        {/* Logo */}
        <img src={LOGO} alt="Logo" className="sidebar-logo" />

        <div className="nav-list">
          <div
            className={`nav-item ${activeItem === 'Dashboard' ? 'active' : ''}`}
            onClick={() => handleItemClick('Dashboard')}
          >
            <img src={IMG1} alt="Dashboard" className="nav-icon" />
            <span className="content1">Dashboard</span>
          </div>
          <div
            className={`nav-item ${activeItem === 'Students' ? 'active' : ''}`}
            onClick={() => handleItemClick('Students')}
          >
            <img src={IMG2} alt="Students" className="nav-icon" />
            <span className="content2">Students</span>
          </div>
          <div
            className={`nav-item ${activeItem === 'Chapter' ? 'active' : ''}`}
            onClick={() => handleItemClick('Chapter')}
          >
            <img src={IMG3} alt="Chapter" className="nav-icon" />
            <span className="content2">Chapter</span>
          </div>
          <div
            className={`nav-item ${activeItem === 'Help' ? 'active' : ''}`}
            onClick={() => handleItemClick('Help')}
          >
            <img src={IMG4} alt="Help" className="nav-icon" />
            <span className="content3">Help</span>
          </div>
          <div
            className={`nav-item ${activeItem === 'Reports' ? 'active' : ''}`}
            onClick={() => handleItemClick('Reports')}
          >
            <img src={IMG5} alt="Reports" className="nav-icon" />
            <span className="content4">Reports</span>
          </div>
          <div
            className={`nav-item ${activeItem === 'Settings' ? 'active' : ''}`}
            onClick={() => handleItemClick('Settings')}
          >
            <img src={IMG6} alt="Settings" className="nav-icon" />
            <span className="content6">Settings</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
