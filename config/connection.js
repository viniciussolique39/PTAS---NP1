const { Sequelize } = require('sequelize');
const config = require('../config/config')
require('dotenv').config();

const sequelize = new Sequelize(    );

try {
  sequelize.authenticate();
  console.log('              ');
} catch (error) {
  console.error('             ', error);
}

module.exports = { Sequelize, sequelize };