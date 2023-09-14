const express = require('express');
const routes = express.Router();

const userController = require('../controllers/userController');


routes.get('/users', userController.searchUsers);
routes.post('/user', userController.createUser);
routes.delete('/user/:id', userController.deleteUser);
routes.put('/user/:id', userController.updateUser);
routes.post('/user/authenticated', userController.authenticatedUser);


module.exports = routes;
