const express = require("express");
const router = express.Router();
const UserController = require('../controller/usercontroller');

// Route to create a new user
router.post('/users', UserController.createUser);

module.exports = router;
