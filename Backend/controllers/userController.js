const { User , UserType} = require("../models");

const getUserData = async (req, res) => {
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
          password : userData.password,
          mobileNumber  : userData.mobileNumber ,
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


const getUserType = async (req , res) => {

    const userType = await UserType.findAll();
    console.log(userType);

    if(userType) {
      return res.status(200).json({ message: 'success',userType });
    }
}

module.exports = { getUserData , getUserType} ;