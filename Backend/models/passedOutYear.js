const { DataTypes } = require('sequelize');
const sequelize = require('../config/database')

const PassedOutYear = sequelize.define ('PassedOutYear' , {
    id : {
        type : DataTypes.INTEGER,
        allowNull : false ,
        primaryKey : true , 
        autoIncrement : true
    },
    passedOutYear : {
        type : DataTypes.INTEGER,
        allowNull : false
    }
} , {
    timestamps: true,
    createdAt: 'created_at', 
    updatedAt: 'updated_at',
    tableName: 'PassedOutYears', 
})

module.exports = PassedOutYear;