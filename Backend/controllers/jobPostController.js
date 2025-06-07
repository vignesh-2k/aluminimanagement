const { Jobs , EmployeeStatus } = require('../models');


exports.createJobPost = async (req , res ) => {
    try {
        const newJobs = await Jobs.create(req.body)
        res.status(201).json({status :'success' , data:newJobs})
    } catch (error) {
        res.status(500).json({ status : 'error' , message:error.message})
    }
}

exports.getJobPost = async (req, res) => {
    try {
        const getJobDetails = await Jobs.findAll();
        res.json({status :'success' , data : getJobDetails})
    } catch (error) {
        res.status(500).json({ status : 'error' , message:error.message})
    }
}

exports.deleteJobPost = async ( req, res) => {
    try {
        const { jobId } = req.params;

        const deleted = await Jobs.destroy( { where : { jobId }})
        if(deleted) {
            res.json({ status: 'success', message: 'Job Post deleted successfully' });
        } else {
            res.status(404).json({ status: 'error', message: 'Jobpost not found' });
        }
    } catch (error) {
        res.status(500).json({ status : 'error' , message:error.message})

    }
}


exports.updateJobPost = async (  req, res ) => {
    try {
        const { jobId } = req.params ;

        const [updated] = await Jobs.update(req.body , { where : { jobId }})
        if(updated) {
            const updatedJobPost = await Jobs.findOne( { where : { jobId }})
            res.json({ status: 'success', data: updatedJobPost });
        } else {
            res.status(404).json({ status: 'error', message: 'Event not found' });

        }
    } catch (error) {
        res.status(500).json({ status : 'error' , message:error.message})

    }
}

exports.getJobPostById = async ( req, res ) => {
    try {
        const { jobId } = req.params ;

        const jobPost = await Jobs.findOne( { where : { jobId }})
        if(!jobId) {
            res.status(400).json( { status : 'error' , message : 'Jobpost Not Found'})
        }
        res.json( { status : 'success' , data : jobPost })

    } catch (error) {
        res.status(500).json({ status : 'error' , message:error.message})

    }
}

exports.getEmployeeStatus = async ( req , res ) => {
    try {
        const employeeStatus = await EmployeeStatus.findAll()
        res.json({status :'success' , data : employeeStatus})
    } catch (error) {
        res.status(500).json({ status : 'error' , message:error.message})
 
    }
}

exports.getTotalJobs = async ( req, res ) => {
    try {
        const jobs = await Jobs.count()
        return res.status(200).json({ jobCount : jobs });

    } catch (error) {
    res.status(500).json({ status : 'error' , message:error.message})

    }
}