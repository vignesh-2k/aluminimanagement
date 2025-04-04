const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const BloodGroup = sequelize.define('BloodGroup' , {
    id :{
        type : DataTypes.INTEGER,
        allowNull : false ,
        primaryKey : true ,
        autoIncrement : true
    },
    bloodGroup : {
        type : DataTypes.STRING,
        allowNull : false
    }
} , {
    timestamps: true,
    createdAt: 'created_at', 
    updatedAt: 'updated_at',
    tableName: 'BloodGroups', 
})

module.exports = BloodGroup;