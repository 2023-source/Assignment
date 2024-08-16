const express = require('express');
const { getAllTeachers, getAllStudents, getAllUsers } = require('../controllers/detailsController');


const router = express.Router();

// router.post('/teacher', getAllTeachers);
// router.post('/student', getAllStudents);
router.get('', getAllUsers);

module.exports = router;
