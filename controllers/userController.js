const User = require('../models/User');
const secret = require('../config/auth.json');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");

const createUser = async (req, res) => {
    const { name, password, email } = req.body;
    const newpassword = await bcrypt.hash(password,10);
    await User.create({
        name: name,
        password: newpassword,
        email: email
    }).then(() => {
        res.json('Cadastro de usuário realizado com sucesso!');
        console.log('Cadastro de usuário realizado com sucesso!');
    }).catch((erro) => {
        res.json("Deu erro!");
        console.log(`Deu erro: ${erro}`);
    })
}

const searchUsers = async (req, res) => {
    const users = await User.findAll()
       try{
        res.json(users);
       }
       catch(error){
            res.status(404).json("Deu erro")
       }
}


const deleteUser = async(req, res) =>{
    const id = parseInt(req.params.id);
    try {
        await User.destroy({
            where:{
                id:id
            }
    }).then(()=>{
        res.json("Usuário deletado")
    })
} catch(error){
    res.status(404).json("Deu erro!")
}
}

const updateUser = async(req, res) =>{
    const id = parseInt(req.params.id);
    const { name, password, email } = req.body;
    try {
        await User.update({
        name: name,
        password: password,
        email:email
    },
    {
        where: {
        id:id
    }
    }).then(()=>{
        res.json("Deu erro!")
    })
}
    catch(error){
          res.status(404).json("Deu erro!")
}
}

const authenticatedUser = async (req, res) =>{
    const {email, password} = req.body;
    try {
        const isUserAthenticated = await User.findOne({
            where:{
                email: email,
 
            }
        })
        const response = await bcrypt.compare(password, isUserAthenticated.password);
        if(response){
        const token = jwt.sign({id:email}, secret.secret, {
            expiresIn:86400,
        })
        return res.json({
            name: isUserAthenticated.name,
            email: isUserAthenticated.email,
            token: token
        });
    } else{
        return res.json('Usuário nao autenticado!!');
    } 
}
    catch (error){
        return res.json('Usuário nao encontrado');
    }
}


module.exports = { createUser, searchUsers, deleteUser, updateUser, authenticatedUser };