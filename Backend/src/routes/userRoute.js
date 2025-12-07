const express = require('express');
const router = express.Router();
const { getAllUsers, getUnapprovedAlumni, approveAlumni } = require('../controllers/userController');

// Get all users
router.get('/all', getAllUsers);

// Get unapproved alumni
router.get('/unapproved', getUnapprovedAlumni);

// Approve alumni by ID
router.put('/approve/:userId', approveAlumni);

module.exports = router;
