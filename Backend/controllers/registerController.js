
const { BatchName , Department , PassedOutYear , Gender ,BloodGroup , UserType  } = require('../models');


exports. getBatchDetails = async ( req , res ) => {
    try {
        const batch = await BatchName.findAll()
        res.json({ message : 'success' , data : batch })
    } catch (error) {
        res.status(500).json({ status : 'error' , message:error.message})
    }
}

exports. getDepartment = async ( req , res ) => {
    try {
        const dept = await Department.findAll()
        res.json({ message : 'success' , data : dept })
    } catch (error) {
        res.status(500).json({ status : 'error' , message:error.message})
    }
}

exports. getPassedOutYear = async ( req , res ) => {
    try {
        const poy = await PassedOutYear.findAll()
        res.json({ message : 'success' , data : poy })
    } catch (error) {
        res.status(500).json({ status : 'error' , message:error.message})
    }
}

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
