const express = require('express');
const { createJobPost, getJobPost, deleteJobPost, updateJobPost, getEmployeeStatus, getJobPostById, getTotalJobs } = require('../controllers/jobPostController');
const router = express.Router();

router.post('/createjobpost' , createJobPost) ;
router.get('/' , getJobPost) ;
router.get('/jobcount' , getTotalJobs);
router.delete('/:jobId' , deleteJobPost);
router.put('/:jobId' , updateJobPost);
router.get('/employeestatus' , getEmployeeStatus);
router.get('/jobpost/:jobId' , getJobPostById);

module.exports = router ;