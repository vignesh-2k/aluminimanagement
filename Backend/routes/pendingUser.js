const express = require('express');
const { getPendingUser, approvePendingUser, deletePendingUser } = require('../controllers/pendingUserController');
const router = express.Router();

router.get('/' , getPendingUser);
router.post('/approve/:id' , approvePendingUser);
router.delete('/:id' , deletePendingUser);


module.exports = router ;