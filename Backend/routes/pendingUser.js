const express = require('express');
const { getPendingUser, approvePendingUser } = require('../controllers/pendingUserController');
const router = express.Router();

router.get('/' , getPendingUser);
router.post('/approve/:id' , approvePendingUser);


module.exports = router ;