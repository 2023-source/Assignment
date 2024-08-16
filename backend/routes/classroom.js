const express = require('express');
const { createClassroom, assignTeacher, assignStudent, createTimetable } = require('../controllers/classroomController');
const {verifyAdmin} = require('../utils/verifyToken');
const router = express.Router();

router.post('/:name', verifyAdmin, createClassroom);

// router.post('/:id/assignTeacher', protect, assignTeacher);
// router.post('/:id/assignStudent', protect, assignStudent);
// router.post('/:id/timetable', protect, createTimetable);

module.exports = router;
