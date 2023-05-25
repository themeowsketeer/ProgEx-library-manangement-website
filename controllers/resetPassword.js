const User = require("../models/User")
const jwt=require('jsonwebtoken')
const config=require('../controllers/config')
const userid=require('../controllers/resetPasswordPage')
const bcrypt=require('bcrypt')
//user clicks "reset password"
module.exports=(req,res)=>{
    console.log(global.userid)
    const{password,password2}=req.body
    User.findOne({_id:global.userid})
    .then((user)=>{
        //console.log('User exist'+user)
        const secret=config.secret+user.password
        console.log(secret)
        try{
            //const verify=jwt.verify(token,secret)
            if(password==password2){
                User.findOneAndUpdate(
                    {_id : global.userid},
                    {password : password}
                )
                .then ((user2) => {
                    console.log(user2)
                    res.redirect('/auth/login')
                }
            )}
            else{
                console.log('Password not match, try again')
                res.render('resetPasswordPage')
            }
        }
        catch(error){
            console.log(error)
        }
    })
    .catch(()=>{
        console.log('User not exist')
    })
}