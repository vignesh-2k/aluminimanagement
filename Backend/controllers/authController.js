const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User   } = require('../models');

const register = async (req, res) => {
    const { 
        name, 
        batchName, 
        mobileNumber, 
        email, 
        userTypeId, 
        department, 
        passingYear, 
        rollNumber, 
        birthDate, 
        gender, 
        password 
    } = req.body;

    console.log(req.body);

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const user = await User.create({
            email: email,
            password: hashedPassword,
            batchNameId: batchName,  
            name: name,
            userTypeId ,   
            mobileNumber: mobileNumber,
            departmentId: department,  
            passedOutYearId: passingYear,  
            rollNumber: rollNumber,
            birthDate: birthDate,  
            genderId: gender       
        });

        res.status(201).json({ message: 'User created', user });
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
        res.json({ message: 'Login successful', token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const linkedinLogin = async (req, res) => {
    // LinkedIn login logic
};


module.exports = { register, login, linkedinLogin };


