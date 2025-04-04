const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const UserType = sequelize.define('Usertype' , {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,  
        allowNull: false
      },
      usertype: {
        type: DataTypes.STRING,
        allowNull: false 
      },
} , {
    timestamps: true,
    createdAt: 'created_at', 
    updatedAt: 'updated_at',
    tableName: 'UserTypes', 
});

module.exports = UserType ;