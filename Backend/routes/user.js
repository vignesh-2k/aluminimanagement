const express = require('express');
const { getUserDataById,  getUsers, getTotalAlumni } = require('../controllers/userController');
const router = express.Router();

router.get('/' , getUsers);
router.get('/alumnicount' , getTotalAlumni);
router.get('/:id', getUserDataById);

module.exports = router;