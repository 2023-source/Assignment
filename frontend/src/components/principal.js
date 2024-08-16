import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../utils/config';
import useFetch from '../hooks/useFetch';

const Principal = () => {
  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);
  // const [classrooms, setClassrooms] = useState([]);


  const { data: allData, loading, error } = useFetch(`${BASE_URL}/details`);
  console.log(allData,error);

  useEffect(() => {
    if (allData) {
      const teacherData = allData.filter((value) => value.role === "teacher");
      const studentData = allData.filter((value) => value.role === "student");
      setTeachers(teacherData);
      setStudents(studentData);
    }
  }, [allData]);

  if (loading) return <h4>Loading.......</h4>;
  if (error) return <h4>{error}</h4>;


  const handleEdit = (userId, role) => {
    // Edit logic for user (teacher or student)
  };

  const handleDelete = (userId, role) => {
    // Delete logic for user (teacher or student)
  };

  const handleCreateClassroom = () => {
    // Logic to create a new classroom
  };

  const handleAssignClassroom = (teacherId, classroomId) => {
    // Logic to assign a classroom to a teacher
  };

  return (
    <div>
      <h1>Principal Dashboard</h1>
      <h2>Teachers</h2>
      <table border={"1px solid black"}>
        <thead>
          <tr>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map(teacher => (
            <tr key={teacher._id}>
              <td>{teacher.email}</td>
              <td>
                <button onClick={() => handleEdit(teacher._id, 'Teacher')}>Edit</button>
                <button onClick={() => handleDelete(teacher._id, 'Teacher')}>Delete</button>
                <button onClick={() => handleAssignClassroom(teacher._id)}>Assign Classroom</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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
                <button onClick={() => handleEdit(student._id, 'Student')}>Edit</button>
                <button onClick={() => handleDelete(student._id, 'Student')}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Create Classroom</h2>
      <button onClick={handleCreateClassroom}>Create Classroom</button>
    </div>
  );
};

export default Principal;
