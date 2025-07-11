const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User , PendingUser } = require('../models');

const register = async (req, res) => {
    const { 
        name, 
        email, 
        password, 
        userTypeId,
        mobileNumber, 
        dateOfBirth,
        rollNumber,
        address,
        city,
        state,
        pinCode,
        linkedInUrl,
        companyName,
        companyDesignation,
        companyAddress,
        batchNameId,
        departmentId,
        passedOutYearId,
        genderId,
        bloodGroupId
    } = req.body;

    console.log(req.body);

    const hashedPassword = await bcrypt.hash(password, 10);

    try {

        if(userTypeId === 1) {
            const admin = await User.create({
            email,
            password: hashedPassword,
            name,
            userTypeId,
            mobileNumber,
            dateOfBirth,
            rollNumber,
            address,
            city,
            state,
            pinCode,
            linkedInUrl,
            companyName,
            companyDesignation,
            companyAddress,
            batchNameId,
            departmentId,
            passedOutYearId,
            genderId,
            bloodGroupId
        });

        res.status(201).json({ message: 'Admin created', admin });
 
        } else {
            const pendingUser = await PendingUser.create({
            email,
            password: hashedPassword,
            name,
            userTypeId,
            mobileNumber,
            dateOfBirth,
            rollNumber,
            address,
            city,
            state,
            pinCode,
            linkedInUrl,
            companyName,
            companyDesignation,
            companyAddress,
            batchNameId,
            departmentId,
            passedOutYearId,
            genderId,
            bloodGroupId
             })
            res.status(201).json({ message: 'User created', pendingUser });
            }
           } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
};




const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
        let userType = 'Alumni'; 
        if (user.userTypeId === 1) {
            userType = 'Admin';
        }
        res.json({ message: 'Login successful', token , userType});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const linkedinLogin = async (req, res) => {
    // LinkedIn login logic
};



module.exports = { register, login, linkedinLogin  };


