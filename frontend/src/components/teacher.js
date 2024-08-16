import React, { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';
import axios from 'axios';

const Teacher = () => {
  const [students, setStudents] = useState([]);

  const { data: allData, loading, error } = useFetch(`${BASE_URL}/details`);
  console.log(allData,error);

  useEffect(() => {
    if (allData) {
      const studentData = allData.filter((value) => value.role === "student");
      setStudents(studentData);
    }
  }, [allData]);

  if (loading) return <h4>Loading.......</h4>;
  if (error) return <h4>{error}</h4>;

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
      <table border={"1px solid black"}>
        <thead>
          <tr>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student._id}>
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
