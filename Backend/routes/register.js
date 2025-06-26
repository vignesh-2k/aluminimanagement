const express = require('express');
const { getBatchDetails, getDepartment, getPassedOutYear, getBloodGroup, getGender, getUserType, addBatchDetails, updateBatchDetails, deleteBatchDetails, addDepartment, updateDepartment, deleteDepartment, addPassedOutYear, updatePassedOutYear, deletePassedOutYear } = require('../controllers/registerController');
const router = express.Router();

// GetRoutes


router.get('/batch' , getBatchDetails);
router.get('/dept' , getDepartment);
router.get('/passedoutyear' , getPassedOutYear);
router.get('/bloodgroup' , getBloodGroup);
router.get('/gender' , getGender);
router.get('/usertype' , getUserType);


// PostRoutes
router.post('/createbatch' , addBatchDetails);
router.post('/createdept' , addDepartment);
router.post('/createpoy' , addPassedOutYear);

//Put Routes
router.put('/batch/:id' , updateBatchDetails);
router.put('/dept/:id', updateDepartment);
router.put('/poy/:id' , updatePassedOutYear);

//Delete Routes
router.delete('/batch/:id' , deleteBatchDetails);
router.delete('/dept/:id', deleteDepartment);
router.delete('/poy/:id' , deletePassedOutYear);



module.exports= router ; 