import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import MainContent from '../components/MainContent';
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
       <Sidebar/>
        <Navbar/>
        <MainContent/>
        
      </div>
  
  );
};

export default Dashboard;
