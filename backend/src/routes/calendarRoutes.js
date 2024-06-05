const express = require('express');
const router = express.Router();
const LeaveController = require('../controllers/C_leave');

// Route untuk mendapatkan semua data cuti
router.get('/', LeaveController.getAllLeaves);

module.exports = router;
