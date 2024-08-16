import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Teacher = () => {
  const [students, setStudents] = useState([]);

//   useEffect(() => {
//     const fetchStudents = async () => {
//       const res = await axios.get('/api/teacher/students');
//       setStudents(res.data);
//     };
//     fetchStudents();
//   }, []);

  const handleEdit = (studentId) => {
    // Edit logic for student
  };

  const handleDelete = (studentId) => {
    // Delete logic for student
  };

  const handleCreateTimetable = () => {
    // Logic to create timetable for the classroom
  };

  return (
    <div>
      <h1>Teacher Dashboard</h1>
      <h2>Students</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>
                <button onClick={() => handleEdit(student._id)}>Edit</button>
                <button onClick={() => handleDelete(student._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Create Timetable</h2>
      <button onClick={handleCreateTimetable}>Create Timetable</button>
    </div>
  );
};

export default Teacher;
