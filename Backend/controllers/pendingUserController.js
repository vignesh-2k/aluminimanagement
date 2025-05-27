const { PendingUser , User} = require('../models');

exports .getPendingUser = async ( req , res ) => {
    try {
        const pendingUser = await PendingUser.findAll();
        res.json({status :'success' , data : pendingUser})
    } catch (error) {
        res.status(500).json({ status : 'error' , message:error.message})

    }
}

exports.approvePendingUser = async ( req , res) => {

    const { id : pendingUserId } = req.params;
    try {
        const pendingUser = await PendingUser.findByPk(pendingUserId)

        if (!pendingUser) {
            return res.status(404).json({ message: 'Pending user not found' });
        }

         const user = await User.create({
            email: pendingUser.email,
            password: pendingUser.password,
            name: pendingUser.name,
            userTypeId: pendingUser.userTypeId,
            mobileNumber: pendingUser.mobileNumber,
            dateOfBirth: pendingUser.dateOfBirth,
            rollNumber: pendingUser.rollNumber,
            address: pendingUser.address,
            city: pendingUser.city,
            state: pendingUser.state,
            pinCode: pendingUser.pinCode,
            linkedInUrl: pendingUser.linkedInUrl,
            companyName: pendingUser.companyName,
            companyDesignation: pendingUser.companyDesignation,
            companyAddress: pendingUser.companyAddress,
            batchNameId: pendingUser.batchNameId,
            departmentId: pendingUser.departmentId,
            passedOutYearId: pendingUser.passedOutYearId,
            genderId: pendingUser.genderId,
            bloodGroupId: pendingUser.bloodGroupId
        });

        await pendingUser.destroy();

        res.status(200).json({ message: 'User approved successfully', user });
    } 

     catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
}