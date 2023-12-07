require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PWD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "dialect": process.env.DB_DIALECT,
    "logging": false
  },
  "test": {
    "username": process.env.DB_NAME,
    "password": process.env.DB_PWD,
    "database": process.env.DATABASE,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "dialect": process.env.DB_DIALECT,
    "logging": true
  },
  "production": {
    "username": process.env.DB_NAME,
    "password": process.env.DB_PWD,
    "database": process.env.DATABASE,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "dialect": process.env.DB_DIALECT,
    "logging": false
  }, 
  secret:process.env.SECRET
}

