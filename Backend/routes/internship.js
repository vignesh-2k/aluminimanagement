const express = require('express');
const { getInternship, createInternship, updateInternship, DeleteInternship, getInternshipById } = require('../controllers/internshipController');
const { route } = require('./user');
const router = express.Router();

router.get('/' , getInternship);
router.get('/:internshipId' , getInternshipById)
router.post('/createintern' , createInternship);
router.put('/:internshipId' , updateInternship);
router.delete('/:internshipId' , DeleteInternship);



module.exports = router ;