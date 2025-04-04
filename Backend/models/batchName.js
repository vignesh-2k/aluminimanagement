const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const BatchName = sequelize.define('BatchName' , {
    id : {
        type: DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true ,
        allowNull : false
    },
    batchName : {
        type : DataTypes.STRING,
        allowNull : false
    }
} , {
    timestamps: true,
    createdAt: 'created_at', 
    updatedAt: 'updated_at',
    tableName: 'BatchNames', 
})

module.exports = BatchName;