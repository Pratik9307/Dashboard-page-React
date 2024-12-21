import React from 'react';
import './StudentTable.css';

const StudentTable = ({ students, onRemove }) => {
  return (
    <div className="student-table">
      <h3>Student List</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.status}</td>
              <td>
                <button onClick={() => onRemove(student.id)} className="remove-btn">
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
