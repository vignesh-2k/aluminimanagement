const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Jobs= sequelize.define('JobPost' , {
jobId :{
    type : DataTypes.INTEGER,
    primaryKey : true,
    allowNull : false,
    autoIncrement: true,
},
jobTitle : {
    type: DataTypes.STRING,
    allowNull : false,
},
employeeStatus:{
    type:DataTypes.INTEGER,
    allowNull:false,
    references :{
        model:'EmployeeStatuses',
        key:'employeeStatusId'
    }
},
 compensation :{
    type : DataTypes.STRING,
    allowNull:false,
 },
 companyName : {
    type : DataTypes.STRING,
    allowNull :false,
 },
 salary:{
    type: DataTypes.INTEGER,
    allowNull:false,
 },
 location : {
    type: DataTypes.STRING,
    allowNull:false,
 },
 applicationDeadline :{
    type : DataTypes.DATE,
    allowNull : false,
 },
 url : {
    type : DataTypes.STRING,
    allowNull:false,
 },
 jobContext :{
    type : DataTypes.STRING,
    allowNull:false,
 },
 jobResponsibility :{
    type : DataTypes.STRING,
    allowNull : false,
 },
 educationalRequirements :{
    type : DataTypes.STRING,
    allowNull :false,
 },
 additionalRequirements : {
    type : DataTypes.STRING,
    allowNull : true,
 },
},{
timestamps : true,

})

module . exports = Jobs;