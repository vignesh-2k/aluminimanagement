const express = require('express');
const { getUserDataById,  getUsers, getTotalAlumni, updateUsers } = require('../controllers/userController');
const router = express.Router();

router.get('/' , getUsers);
router.get('/alumnicount' , getTotalAlumni);
router.get('/:id', getUserDataById);
router.put('/:id' , updateUsers);

module.exports = router;