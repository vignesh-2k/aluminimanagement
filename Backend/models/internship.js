const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const Internship = sequelize.define('Internship' , {
     internshipId:{
        type : DataTypes.INTEGER,
        primaryKey : true,
        allowNull:false,
        autoIncrement:true
    },
    internshipTitle:{
        type: DataTypes.STRING,
        allowNull:false
    },
     internshipType:{
        type: DataTypes.STRING,
        allowNull:false
    },
     stipendPerks:{
        type: DataTypes.STRING,
        allowNull:false
    },
    companyName : {
        type : DataTypes.STRING,
        allowNull : false
    },
    stipend :{
        type : DataTypes.STRING,
        allowNull: false
    },
    location : {
        type : DataTypes.STRING,
        allowNull : false
    },
    applicationDeadline : {
        type : DataTypes.DATE,
        allowNull : false
    },
    applicationUrl : {
        type : DataTypes.STRING,
        allowNull : false ,
        validate : {
            isUrl : true
        }
    },
    internshipContext : {
        type : DataTypes.STRING,
        allowNull : false
    },
    internshipResponsibilities : {
        type : DataTypes.STRING ,
        allowNull : false
    },
    educationalRequirements : {
        type : DataTypes.STRING,
        allowNull : false
    },
    additionalRequirements : {
        type : DataTypes.STRING,
        allowNull : true
    }
} , {
    timestamps : true
}

)


module.exports = Internship ;