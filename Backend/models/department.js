const { DataTypes }  = require('sequelize');
const sequelize = require('../config/database');

const Department = sequelize.define('Department' , {
    id : {
        type : DataTypes.INTEGER,
        allowNull : false ,
        autoIncrement : true ,
        primaryKey : true
    },
    department : {
        type : DataTypes.STRING,
        allowNull : false
    }
} , {
    timestamps: true,
    createdAt: 'created_at', 
    updatedAt: 'updated_at',
    tableName: 'Departments', 
})

module.exports = Department;