const express = require('express');
const { createClassroom, assignTeacher, assignStudent, createTimetable } = require('../controllers/classroomController');
const { verifyAdmin } = require('../utils/verifyToken.js');
const router = express.Router();

router.post('/:name', verifyAdmin, createClassroom);

router.post('/:name/assignTeacher', verifyAdmin, assignTeacher);
// router.post('/:id/assignStudent', protect, assignStudent);
// router.post('/:id/timetable', protect, createTimetable);

module.exports = router;
