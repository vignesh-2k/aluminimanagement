require('dotenv').config();
const sequelize = require('../config/database');
const User = require('./user');
const UserType = require('./userType');
const BloodGroup = require('./bloodGroup');
const BatchName = require('./batchName');
const Department = require('./department');
const Gender = require('./gender');
const PassedOutYear = require('./passedOutYear');
const EventType = require('./eventType');
const Event = require('./event');
const EmployeeStatus = require('./employeestatus');
const Jobs = require('./jobPost');
const PendingUser = require('./pendingUser');
const Internship = require('./internship');


const initDB = async () => {
    if (process.env.ENVIRONMENT === 'development') {
        await Internship.drop();
        await Jobs.drop();
        await EmployeeStatus.drop();
        await Event.drop();
        await EventType.drop();
        await PendingUser.drop();
        await User.drop();
        await BatchName.drop();
        await Department.drop();
        await Gender.drop();
        await PassedOutYear.drop();
        await BloodGroup.drop();
        await UserType.drop();

        await UserType.sync({ force: true });
        await BatchName.sync({ force: true });
        await BloodGroup.sync({ force: true });
        await Department.sync({ force: true });
        await Gender.sync({ force: true });
        await PassedOutYear.sync({ force: true });
        await User.sync({ force: true });
        await PendingUser.sync( { force : true });
        await EventType.sync({ force : true});
        await Event.sync({force: true});
        await EmployeeStatus.sync({force : true});
        await Jobs.sync({force : true});
        await Internship.sync({ force : true});
    } else {
        await UserType.sync();
        await BatchName.sync();
        await BloodGroup.sync();
        await Department.sync();
        await Gender.sync();
        await PassedOutYear.sync();
        await User.sync();
    }
};

// Users
UserType.hasMany(User, { foreignKey: 'userTypeId' });
User.belongsTo(UserType, { foreignKey: 'userTypeId' });

BatchName.hasMany(User, { foreignKey: 'batchNameId' });
User.belongsTo(BatchName, { foreignKey: 'batchNameId' });

Department.hasMany(User, { foreignKey: 'departmentId' });
User.belongsTo(Department, { foreignKey: 'departmentId' });

Gender.hasMany(User, { foreignKey: 'genderId' });
User.belongsTo(Gender, { foreignKey: 'genderId' });

PassedOutYear.hasMany(User, { foreignKey: 'passedOutYearId' });
User.belongsTo(PassedOutYear, { foreignKey: 'passedOutYearId' });

BloodGroup.hasMany(User, { foreignKey: 'bloodGroupId' });
User.belongsTo(BloodGroup, { foreignKey: 'bloodGroupId' });

//events

EventType.hasMany(Event , { foreignKey : 'eventType'});
Event.belongsTo(EventType , {foreignKey : 'eventType'});

//jobs
 
EmployeeStatus.hasMany(Jobs, {foreignKey : 'employeeStatus'});
Jobs.belongsTo(EmployeeStatus , {foreignKey : 'employeeStatus'})

//pending User

UserType.hasMany(PendingUser , { foreignKey : 'userTypeId'});
PendingUser.belongsTo(UserType , {foreignKey : 'userTypeId'});


BatchName.hasMany(PendingUser, { foreignKey: 'batchNameId' });
PendingUser.belongsTo(BatchName, { foreignKey: 'batchNameId' });

Department.hasMany(PendingUser, { foreignKey: 'departmentId' });
PendingUser.belongsTo(Department, { foreignKey: 'departmentId' });

Gender.hasMany(PendingUser, { foreignKey: 'genderId' });
PendingUser.belongsTo(Gender, { foreignKey: 'genderId' });

PassedOutYear.hasMany(PendingUser, { foreignKey: 'passedOutYearId' });
PendingUser.belongsTo(PassedOutYear, { foreignKey: 'passedOutYearId' });

BloodGroup.hasMany(PendingUser, { foreignKey: 'bloodGroupId' });
PendingUser.belongsTo(BloodGroup, { foreignKey: 'bloodGroupId' });




module.exports = {
    initDB,
    User,
    UserType,
    Gender,
    BloodGroup,
    BatchName,
    PassedOutYear,
    Department,
    EventType,
    Event,
    EmployeeStatus,
    Jobs,
    PendingUser,
    Internship
};