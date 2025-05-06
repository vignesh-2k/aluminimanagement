const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Event = sequelize.define('Event' , {
    eventId:{
        type: DataTypes.INTEGER,
        primaryKey : true,
        allowNull : false,
        autoIncrement : true,
    },
    eventTitle:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    eventDate :{
        type:DataTypes.DATE,
        allowNull:false,
    },
    eventCategory: {
        type : DataTypes.STRING,
        allowNull: false
    },
    eventType:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references :{
            model:'EventTypes',
            key:'id'
        }
    },
    noOfTicket:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    location:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    eventImg:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    ticketImg:{
        type:DataTypes.STRING,
        allowNull:false,
    }
},{
    timestamps:true,

})

module.exports = Event;