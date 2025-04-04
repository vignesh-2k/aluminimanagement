const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User   } = require('../models');

// const register = async (req, res) => {
//     const { name, batchName , mobileNumber , email , userType ,  department , passingYear , rollNumber , birthDate , gender , password } = req.body; 
//     console.log(req.body);
//     const hashedPassword = await bcrypt.hash(password, 10);
//     try {
       
//         const user = await User.create({ 
//             email : email, 
//             password: hashedPassword , 
//             batchName : batchName,
//             name : name , 
//             userTypeId : userType,
//             mobileNumber : mobileNumber , 
//             department : department , 
//             passingYear : passingYear , 
//             rollNumber : rollNumber , 
//             birthDate : birthDate ,
//             gender : gender
//         });
//         res.status(201).json({ message: 'User created', user });
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// };



const register = async (req, res) => {
    const { 
        name, 
        batchName, 
        mobileNumber, 
        email, 
        userType, 
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
        // Make sure the field names passed here match your Sequelize model field names
        const user = await User.create({
            email: email,
            password: hashedPassword,
            batchNameId: batchName,  // Assuming batchName is actually batchNameId in the database
            name: name,
            userTypeId: userType,    // Assuming userType is actually userTypeId in the database
            mobileNumber: mobileNumber,
            departmentId: department,  // Assuming department is actually departmentId
            passedOutYearId: passingYear,  // Assuming passingYear is actually passedOutYearId
            rollNumber: rollNumber,
            birthDate: birthDate,  // Assuming birthDate is the correct column name in the model
            genderId: gender       // Assuming gender is actually genderId in the database
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



// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const { User, UserType } = require('../models');  // Make sure you import UserType if using it.

// const register = async (req, res) => {
//     const { name, batchName, mobileNumber, email, userType, department, passingYear, rollNumber, birthDate, gender, password } = req.body;
//     console.log(req.body);

//     // Basic validation to ensure required fields are present
//     if (!email || !password || !name || !userType) {
//         return res.status(400).json({ error: 'Missing required fields: email, password, name, or userType' });
//     }

//     // Check if the password is strong enough (e.g., min length of 8)
//     if (password.length < 8) {
//         return res.status(400).json({ error: 'Password must be at least 8 characters long' });
//     }

//     try {
//         // Check if the userType exists
//         const userTypeExists = await UserType.findByPk(userType);
//         if (!userTypeExists) {
//             return res.status(400).json({ error: 'Invalid userType' });
//         }

//         // Hash the password before saving it
//         const hashedPassword = await bcrypt.hash(password, 10);

//         // Create the user
//         const user = await User.create({
//             email: email,
//             password: hashedPassword,
//             batchName: batchName,
//             name: name,
//             userTypeId: userType,
//             mobileNumber: mobileNumber,
//             department: department,
//             passingYear: passingYear,
//             rollNumber: rollNumber,
//             birthDate: birthDate,
//             gender: gender
//         });

//         // Send response
//         res.status(201).json({ message: 'User created', user });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: error.message });
//     }
// };

// const login = async (req, res) => {
//     const { email, password } = req.body;

//     // Basic validation
//     if (!email || !password) {
//         return res.status(400).json({ error: 'Email and password are required' });
//     }

//     try {
//         // Find user by email
//         const user = await User.findOne({ where: { email } });
//         if (!user || !(await bcrypt.compare(password, user.password))) {
//             return res.status(401).json({ message: 'Invalid credentials' });
//         }

//         // Generate JWT token
//         const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });  // Add expiration for better security

//         // Send response
//         res.json({ message: 'Login successful', token });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: error.message });
//     }
// };

// const linkedinLogin = async (req, res) => {
//     // LinkedIn login logic
//     res.status(200).json({ message: 'LinkedIn login not implemented yet' });
// };

// module.exports = { register, login, linkedinLogin };
