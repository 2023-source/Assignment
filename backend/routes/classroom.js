const express = require('express');
const { createClassroom, assignTeacher, assignStudent, createTimetable } = require('../controllers/classroomController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, createClassroom);
router.post('/:id/assignTeacher', protect, assignTeacher);
router.post('/:id/assignStudent', protect, assignStudent);
router.post('/:id/timetable', protect, createTimetable);

module.exports = router;
