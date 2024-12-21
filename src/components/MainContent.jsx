import React from "react";
import "./MainContent.css"; // Import Main Content styles
import first from "../assets/1st.png"
import second from "../assets/2nd.png"
import User2 from "../assets/user2.png"
import User3 from "../assets/user3.png"
const MainContent = () => {
  const students = [
    { name: "Anshuman Kashyap", status: "online" },
    { name: "Bansi Dadhaniya", status: "online" },
    { name: "Chandrika Valotia", status: "offline" },
    { name: "Devang Dave", status: "online" },
    { name: "AForum Bhatt", status: "online" },
    { name: "Hritika Dattani", status: "online" },
    { name: "Khushi Joshi", status: "online" },  
    { name: "Mansi Patel", status: "ofline" },
    { name: "Nita Shah", status: "online" },
    { name: "Priyanshu Shirvastava", status: "offline" },
    { name: "Shreya Singhalia", status: "online" },
    { name: "Vatsal Trivedi", status: "offline" },
    { name: "Hritika Dattani", status: "online" },
    { name: "Khushi Joshi", status: "online" },
    
  ];

  return (
    <div className="main-content-wrapper">
      

     <div className="so">
        
           {/* First Div */}
           <div className="header-section">  
          <div className="image-wrapper">
            <img
              src={second}
              className="header-image"
            />
          </div>
          <div className="add-btn">Add new Student</div>
        </div>

 {/* Third Div */}
<div className="header-container-small">
    <div className="add-btn-small">CBSE 9</div>
  
  <div className="icon-box">
    <img
      src={first}
      alt=""
      className="small-icon"
    />
  </div>
</div>

{/* Fourth Div */}
<div className="header-container-large">
  
    <div className="add-btn-large">AY 2024-25</div>
  

  {/* Second Container */}
  <div className="icon-wrapper">
    <img
      src={first}
      alt=""
      className="large-icon"
    />
  </div>
</div>
     </div>
<div>
  <table className="students-table1">
    
  <div className="table-header">
  <div className="student-name" id="pratik">Student Name</div>
  <div className="cohort">Cohort</div>
  <div className="courses">Courses</div>
  <div className="date-joined">Date Joined</div>
  <div className="last-login">Last Login</div>
  <div className="status">Status</div>
</div>

   

  </table>
</div>


       {/* Second Div */}
<div className="table-section">
  <table className="students-table">
    <tbody>
      {students.map((student, index) => (
        <tr key={index} className="table-row">
          <td className="P">{student.name}</td>
          <td className="R">AY 2024-25</td>
          <td className="A">
  <div className="row-content">
    <img src={User2} alt="Profile" className="profile-pic" />
    <span className="text-content">CBSE 9 Science</span>
  </div>
</td>

<div className="I">
  <div className="row-content">
    <img src={User3} alt="Profile" className="profile-pic" />
    <span className="text-content">CBSE 9 Math</span>
  </div>
</div>

          <td className="S">17. Nov. 2024</td>
          <td className="H">17. Nov. 2024 4:16 PM</td>
          <td>
            <span
              className={`status-dot ${
                student.status === "online" ? "green" : "red"
              }`}
            ></span>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


      
      </div>
    
  );
};

export default MainContent;
