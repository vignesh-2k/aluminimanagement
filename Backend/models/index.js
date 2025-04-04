require('dotenv').config();
const sequelize = require('../config/database');
const User = require('./user');
const UserType = require('./userType');
const BloodGroup = require('./bloodGroup');
const BatchName = require('./batchName');
const Department = require('./department');
const Gender = require('./gender');
const PassedOutYear = require('./passedOutYear');

const initDB = async () => {
    if (process.env.ENVIRONMENT === 'dev') {
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

// Define Associations
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

module.exports = {
    initDB,
    User,
    UserType,
    Gender,
    BloodGroup,
    BatchName,
    PassedOutYear,
    Department
};