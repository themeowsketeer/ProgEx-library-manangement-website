const User = require('../models/User')
module.exports=(req,res) =>{
    User.create(req.body)
    .then(()=>{
        console.log(req.body)
        res.redirect('/auth/login')
    })
}