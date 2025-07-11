const { User , UserType} = require("../models");

const getUserDataById = async (req, res) => {
  try {
    const userId = req.user.id;


    const userData = await User.findOne({
      where: { 
        id: userId, 
      }
    });

    if (userData) {
      return res.status(200).json({
        message: 'success',
        userData: {
          id: userData.id,
          name : userData.name,
          email : userData.email,
          // password : userData.password,
          mobileNumber  : userData.mobileNumber ,
          dateOfBirth : userData.dateOfBirth , 
          rollNumber : userData.rollNumber , 
          address : userData.address , 
          city : userData.city , 
          state : userData.state , 
          pinCode : userData.pinCode , 
          linkedInUrl : userData.linkedInUrl , 
          companyName : userData.companyName , 
          companyDesignation : userData.companyDesignation , 
          companyAddress : userData.companyAddress , 
          batchNameId : userData.batchNameId , 
          departmentId  : userData.departmentId , 
          passedOutYearId  : userData.passedOutYearId ,
          genderId : userData.genderId , 
          bloodGroupId : userData.bloodGroupId 
          // company : userData.company
        }
      });
    } else {
      return res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    return res.status(500).json({ message: 'Error fetching user data', error: error.message });
  }
};



const getUsers = async ( req, res ) => {
  try {
    const users = await User.findAll();
    if(users) {
      return res.status(200).json({ message : 'success' , users})
    }
  } catch (error) {
    console.log(error)
  }
}

const getTotalAlumni = async (req, res) => {
  try {
    const alumniCount = await User.count({
      where: { userTypeId: 2 }
    });
    
    return res.status(200).json({ count: alumniCount });
  } catch (error) {
    console.error('Error fetching alumni count:', error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
}

const updateUsers = async ( req , res ) => {
  try {
     const { id } = req.params ;
     const [updated] = await User.update(req.body , { where : { id }});
     if(updated){
      const updatedUsers = await User.findOne({ where : { id }});
      res.json({ status: 'success', data: updateUsers });
     } else {
      res.status(404).json({ status: 'error', message: 'User not found' });
     }
  } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });

  }
}

module.exports = { getUserDataById  , getUsers , getTotalAlumni , updateUsers} ;