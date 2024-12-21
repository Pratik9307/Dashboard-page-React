import React from 'react';
import './Navbar.css';
import Search from "../assets/serch.png";
import R1 from "../assets/r1.png";
import R2 from "../assets/r2.png";
import R3 from "../assets/r3.png";
import R4 from "../assets/r4.png";
import User from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="Navbar-Container">
      {/* First Div - Search Icon and Input */}
      <div className="Navbar-Left">
        <div className="Navbar-Search-Container">
          <div className="img-container">
            <img src={Search} alt="Search" className="Navbar-Search-Icon" />
          </div>
          <input
            type="text"
            placeholder="Search your course"
            className="Navbar-Search-Input"
          />
        </div>
      </div>

      <div className="Navbar-Right">
        <div className="Notification-Container">
          <img src={R1} alt="Notification 1" className="Notification-Icon1" />
        </div>
        <div className="Notification-Container">
          <img src={R2} alt="Notification 2" className="Notification-Icon2" />
          <div className="Notification-Dot"></div>
        </div>
        <div className="Notification-Container">
          <img src={R3} alt="Notification 3" className="Notification-Icon3" />
        </div>
        <div className="Notification-Container">
          <img src={R4} alt="Notification 4" className="Notification-Icon4" />
          <div className="Notification-Dot"></div>
        </div>
        <div className="Profile-Container">
          <div className="Profile-Image">
            <img src={User} alt="Profile" className="Profile-Pic" />
          </div>
          <div className="User-Name">
            <span>Adeline H. Dancy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
