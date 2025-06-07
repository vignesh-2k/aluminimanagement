const { Internship } = require('../models');


exports.getInternship = async ( req , res ) => {
    try {
        const intern = await Internship.findAll();
        res.json({ status : 'success' , data : intern})
    } catch (error) {
        res.status(500).json({ status : 'error' , message:error.message})

    }
}


exports.createInternship = async ( req , res ) => {
    try {
        const newIntern = await Internship.create(req.body);
        res.status(201).json({ status : 'success' , data : newIntern})
    } catch (error) {
        res.status(500).json({ status : 'error' , message:error.message})
    }
}


exports.DeleteInternship = async ( req, res ) => {
    try {
        const { internshipId } = req.params ;

        const deleted = await Internship.destroy( { where : { internshipId }})
        if(deleted){
            res.json( { status : 'success' , message : 'Internship Deleted Succesfully'})
        } else {
            res.status(404).json( { status : 'error' , message : 'Internship Not Found'})
        }
    } catch (error) {
        res.status(500).json({ status : 'error' , message:error.message})
    }
}


exports.updateInternship = async ( req , res ) => {
    try {
        const { internshipId } = req.params ;

        const [updated] = await Internship.update(req.body , { where : { internshipId }})
        if(updated){
            const updatedInternship = await Internship.findOne( { where : { internshipId }})
            res.json({ status : 'success' , data : updatedInternship})
        } else {
            res.status(404).json( { status : 'error' , message : 'Internship Not Found'})
        }
    } catch (error) {
        res.status(500).json({ status : 'error' , message:error.message})

    }
}


exports.getInternshipById = async ( req , res ) => {
    try {
        const { internshipId } = req.params ;
        const internId = await Internship.findOne({ where : { internshipId }})
        if(!internId){
            res.status(400).json( { status : 'error' , message : 'Internship Not Found'})
        }
        res.json({ status : 'success' , data : internId })
    } catch (error) {
        res.status(500).json({ status : 'error' , message:error.message})
    }
}