const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const EmployeeStatus = sequelize.define('EmployeeStatus',{
  employeeStatusId :{
    type : DataTypes.INTEGER,
    primaryKey : true,
    allowNull : false,
    autoIncrement : true,
  },
  employeeStatus: {
    type : DataTypes.STRING,
    allowNull: false,
  },
},{
    timestamps:true,

})
 module .exports = EmployeeStatus;