import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../utils/config';
import useFetch from '../hooks/useFetch';

const Principal = () => {
  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);
  const [classrooms, setClassrooms] = useState([]);


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

  const handleCreateClassroom = async () => {
    const name = prompt("Enter Classroom Name:");
  
    if (name) {
      try {
        const response = await fetch(`${BASE_URL}/classrooms/${name}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials:"include",
          body: JSON.stringify({ name })
        });

        const data = await response.json();

        if (data.success) {
          alert('Classroom created successfully');
          // Optionally, you can update the UI with the new classroom data
        } else {
          alert('Failed to create classroom');
        }
      } catch (err) {
        console.error('Error:', err);
        alert('Error creating classroom');
      }
    }
  };

  const handleAssignClassroom = async (teacherId) => {
    const classroomName = prompt("Enter Classroom Name to Assign:");
    if (classroomName) {
        try {
            const response = await fetch(`${BASE_URL}/classrooms/${classroomName}/assignTeacher`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials:"include",
                body: JSON.stringify({ teacherId })
            });

            const data = await response.json();

            if (response.ok) {
                alert('Teacher assigned to classroom successfully');
            } else {
                alert(data.message || 'Failed to assign teacher');
            }
        } catch (err) {
            console.error('Error:', err);
            alert('Error assigning teacher to classroom');
        }
    }
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
