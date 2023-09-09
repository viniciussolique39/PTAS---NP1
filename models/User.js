const connection = require('../config/connection');

const User = .sequelize.define('users',{
    id: {
        type: .Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: .Sequelize.STRING,
        allowNull: false
    },
    password:{
        type: .Sequelize.STRING,
        allowNull:false
    },
    email:{
        type: .Sequelize.STRING,
        allowNull:false,
        unique:true
    } 
    })
User.sync();
module.exports = User;