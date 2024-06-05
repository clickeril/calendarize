const express = require('express');
const router = express.Router();
const UserController = require('../controllers/C_users');

// Route untuk mendapatkan semua pengguna
router.get('/', UserController.getAllUsers);

module.exports = router;
