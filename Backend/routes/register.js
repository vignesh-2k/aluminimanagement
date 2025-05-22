const express = require('express');
const { getBatchDetails, getDepartment, getPassedOutYear, getBloodGroup, getGender, getUserType } = require('../controllers/registerController');
const router = express.Router();


router.get('/batch' , getBatchDetails);
router.get('/dept' , getDepartment);
router.get('/passedoutyear' , getPassedOutYear);
router.get('/bloodgroup' , getBloodGroup);
router.get('/gender' , getGender);
router.get('/usertype' , getUserType);

module.exports= router ; 