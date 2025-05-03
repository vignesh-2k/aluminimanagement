const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const EventType = sequelize.define('EventType' , {
    id:{
        type : DataTypes.INTEGER,
        primaryKey : true,
        allowNull:false,
        autoIncrement:true
    },
    category:{
        type: DataTypes.STRING,
        allowNull:false
    }

} , {
    timestamps : true
}
)

module.exports = EventType ;
