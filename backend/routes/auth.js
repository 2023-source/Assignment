const express = require('express');
const { login, createUser } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/login', login);
router.post('/signup', protect, createUser);

module.exports = router;
