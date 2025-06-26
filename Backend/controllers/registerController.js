
const { BatchName , Department , PassedOutYear , Gender ,BloodGroup , UserType  } = require('../models');



// BatchName 


exports. getBatchDetails = async ( req , res ) => {
    try {
        const batch = await BatchName.findAll()
        res.json({ message : 'success' , data : batch })
    } catch (error) {
        res.status(500).json({ status : 'error' , message:error.message})
    }
}

exports. addBatchDetails = async ( req , res ) => {
    try {
        const newBatch = await BatchName.create(req.body);
        res.status(201).json({status :'success' , data:newBatch})
    } catch (error) {
        res.status(500).json({ status : 'error' , message:error.message})
    }
}

exports. deleteBatchDetails = async ( req , res ) => {
    try {
        const { id } = req.params;
        const deleted = await BatchName.destroy( { where : { id }})
        if(deleted) {
          res.json({ status: 'success', message: 'Batch deleted successfully' });
        } else {
           res.status(404).json({ status: 'error', message: 'Batch not found' });
        }
    } catch (error) {
        res.status(500).json({ status : 'error' , message:error.message})
    }
}


exports. updateBatchDetails = async ( req , res ) => {
    try {
        const { id } = req.params;
        const [updated] = await BatchName.update(req.body , { where : { id } } )
        if(updated){
            const updatedBatch = await BatchName.findOne( { where : { id } })
            res.json({ status : 'success' , data : updatedBatch })
        } else {
        res.status(404).json({ status: 'error', message: 'Batch not found' });
        }
    } catch (error) {
        res.status(500).json({ status : 'error' , message:error.message})
    }
}


//Department

exports. getDepartment = async ( req , res ) => {
    try {
        const dept = await Department.findAll()
        res.json({ message : 'success' , data : dept })
    } catch (error) {
        res.status(500).json({ status : 'error' , message:error.message})
    }
}


exports. addDepartment = async ( req , res ) => {
    try {
        const newDept = await Department.create(req.body);
        res.json( { status : 'success' , data : newDept })
    } catch (error) {
        res.status(500).json( { status : 'error' , message : error.message})
    }
}


exports. deleteDepartment = async ( req , res ) => {
    try {
        const { id } = req.params;
        const deleted = await Department.destroy( { where : { id }})
        if(deleted){
            res.json( { status : 'success' , message : 'Department Deleted Succesfully'})
        } else {
            res.status(404).json({ status: 'error', message: 'Department not found' });

        }
    } catch (error) {
        res.status(500).json( { staus : 'error' , message : error.message})
    }
}


exports .updateDepartment = async ( req , res ) => {
    try {
        const { id } = req.params;
        const [updated] = await Department.update(req.body , { where : { id }})
          if(updated){
            const updatedDepartment = await Department.findOne( { where : { id } })
            res.json({ status : 'success' , data : updatedDepartment })
        } else {
        res.status(404).json({ status: 'error', message: 'Department not found' });
        }
    } catch (error) {
        res.status(500).json( { status : 'error' , message : error.message})
    }
}


// PassedOutYear 

exports. getPassedOutYear = async ( req , res ) => {
    try {
        const poy = await PassedOutYear.findAll()
        res.json({ message : 'success' , data : poy })
    } catch (error) {
        res.status(500).json({ status : 'error' , message:error.message})
    }
}


exports. addPassedOutYear = async ( req , res ) => {
    try {
        const newPoy = await PassedOutYear.create(req.body)
        res.json( { status : 'success' , data : newPoy})
    } catch (error) {
        res.status(500).json( { status: ' error' , message : error.message})
    }
}


exports .deletePassedOutYear = async ( req , res ) => {
    try {
        const { id } = req.params;
        const deleted = await PassedOutYear.destroy( { where : { id }})
        if(deleted){
            res.json( { status : 'success' , message : 'POY Deleted Succesfully'})
        } else {
            res.status(404).json({ status: 'error', message: 'POY not found' });

        }
    } catch (error) {
        res.status(500).json( { status: ' error' , message : error.message})
    }
}


exports. updatePassedOutYear = async ( req , res ) => {
    try {
        const { id } = req.params;
        const [updated] = await PassedOutYear.update(req.body , { where : { id }})
        if(updated) {
            const updatePoy = await PassedOutYear.findOne( { where : { id } })
            res.json({ status : 'success' , data : updatePoy })
        } else {
        res.status(404).json({ status: 'error', message: 'POY not found' });
        }
    } catch (error) {
        res.status(500).json( { status: ' error' , message : error.message})

    }
}




// Gender 
exports. getGender = async ( req , res ) => {
    try {
        const gender = await Gender.findAll()
        res.json({ message : 'success' , data : gender })
    } catch (error) {
        res.status(500).json({ status : 'error' , message:error.message})
    }
}

exports. getBloodGroup = async ( req , res ) => {
    try {
        const bg = await BloodGroup.findAll()
        res.json({ message : 'success' , data : bg })
    } catch (error) {
        res.status(500).json({ status : 'error' , message:error.message})
    }
}


//UserType
exports .getUserType = async (req , res) => {

    try {
      const userType = await UserType.findAll();
      console.log(userType);

    if(userType) {
      return res.status(200).json({ message: 'success', data : userType });
    }
    } catch (error) {
      console.log(error)
    }
    
}
