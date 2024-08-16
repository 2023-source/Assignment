import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Student = () => {
  const [students, setStudents] = useState([]);
  const [timetable, setTimetable] = useState('');

//   useEffect(() => {
//     const fetchClassroomData = async () => {
//       const res = await axios.get('/api/student/classroom');
//       setStudents(res.data.students);
//       setTimetable(res.data.timetable);
//     };
//     fetchClassroomData();
//   }, []);

  return (
    <div>
      <h1>Student Dashboard</h1>
      <h2>Classmates</h2>
      <ul>
        {students.map(student => (
          <li key={student._id}>{student.name}</li>
        ))}
      </ul>

      <h2>Timetable</h2>
      <p>{timetable}</p>
    </div>
  );
};

export default Student;
