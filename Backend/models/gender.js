const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const Gender = sequelize.define('Gender' , {
    id : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        allowNull : false,
        autoIncrement : true
    }, 
    gender : {
        type : DataTypes.STRING,
        allowNull : false
    }
} , {
    timestamps: true,
    createdAt: 'created_at', 
    updatedAt: 'updated_at',
    tableName: 'Genders', 
})

module.exports = Gender;