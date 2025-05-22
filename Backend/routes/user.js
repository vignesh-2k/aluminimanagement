const express = require('express');
const { getUserDataById,  getUsers } = require('../controllers/userController');
const router = express.Router();

router.get('/' , getUsers);
router.get('/:id', getUserDataById);

module.exports = router;