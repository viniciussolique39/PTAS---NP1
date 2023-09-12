const connection = require('../config/connection');

const User = connection.sequelize.define('users',{
    id: {
        type: connection.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: connection.Sequelize.STRING,
        allowNull: false
    },
    password:{
        type: connection.Sequelize.STRING,
        allowNull:false
    },
    email:{
        type: connection.Sequelize.STRING,
        allowNull:false,
        unique:true
    } 
    })
User.sync();
module.exports = User;