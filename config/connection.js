const { Sequelize } = require('sequelize');
const config = require('../config/config')
require('dotenv').config();

const sequelize = new Sequelize( 
  "url postgres", {

  }
   );

try {
  sequelize.authenticate();
  console.log('Conectado com o Postgres');
} catch (error) {
  console.error('Falha, o banco de dados não conectou', error);
}

module.exports = { Sequelize, sequelize };