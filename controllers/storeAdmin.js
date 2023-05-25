const Admin = require('../models/Admin')
module.exports=(req,res) =>{
    Admin.create(req.body)
    .then(()=>{
        console.log(req.body)
        res.redirect('/auth/loginAdmin')
    })
}