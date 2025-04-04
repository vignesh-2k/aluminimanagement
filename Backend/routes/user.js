const express = require('express');
const { getUserData, getUserType } = require('../controllers/userController');
const router = express.Router();

router.get('/', getUserData);
router.get('/usertype' , getUserType);

module.exports = router;
