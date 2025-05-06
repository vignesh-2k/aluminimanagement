const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    userTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'UserTypes',
            key: 'id'
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mobileNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        // validate: {
        //     isNumeric: true,
        //     len: [10, 10]
        // }
    },
    dateOfBirth: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    rollNumber: {
        type: DataTypes.STRING,
        allowNull: true
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true
    },
    city: {
        type: DataTypes.STRING,
        allowNull: true
    },
    state: {
        type: DataTypes.STRING,
        allowNull: true
    },
    pinCode: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isNumeric: true,
            len: [6, 6]
        }
    },
    linkedInUrl: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isUrl: true
        }
    },
    companyName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    companyDesignation: {
        type: DataTypes.STRING,
        allowNull: true
    },
    companyAddress: {
        type: DataTypes.STRING,
        allowNull: true
    },
    batchNameId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'BatchNames',
            key: 'id'
        }
    },
    departmentId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Departments',
            key: 'id'
        }
    },
    passedOutYearId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'PassedOutYears',
            key: 'id'
        }
    },
    genderId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Genders',
            key: 'id'
        }
    },
    bloodGroupId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'BloodGroups',
            key: 'id'
        }
    },
    
}, {
    timestamps: true,
    createdAt: 'created_at', 
    updatedAt: 'updated_at',
    tableName: 'Users', 
});

module.exports = User;