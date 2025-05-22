const express = require('express');
const { getUserDataById, getUserType, getUsers } = require('../controllers/userController');
const router = express.Router();

router.get('/' , getUsers);
router.get('/:id', getUserDataById);
router.get('/usertype' , getUserType);

module.exports = router;
