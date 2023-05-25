const bcrypt = require('bcrypt')
const User = require('../models/User')
const mongoose = require('mongoose')

module.exports=(req,res)=>{
    const {username,password}=req.body
    User.findOne({username: username})
    .then((user)=>{
        //console.log(User);
        if(user){
            bcrypt.compare(password,user.password)
       .then((same)=>{
                if(same){
                    //get username
                    user1= user.username;
                    console.log('sucess')
                    console.log(user1)
                    req.session.userId = user._id
                    loggedIn = req.session.userId
                    //console.log("Successful")
                    res.redirect('/')
                   
                }
                else{
                    //console.log("Failed")
                    res.redirect('/auth/login')
                }
            })
        }
    })
    .catch((error,user) =>{
        console.log(error,user)
    })
}