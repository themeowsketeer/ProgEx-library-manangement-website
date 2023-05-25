const Users = require("../../models/User.js");
const path = require('path')

module.exports = (req,res) => 
{
    let { iconLink } = req.files;
    iconLink.mv(path.resolve(__dirname,'..', '..' ,'public/upload', iconLink.name), function (err) 
    {   
        Users.create({
            ...req.body,
            iconLink: '/upload/' + iconLink.name
        })
        .then ( (user) => {
            console.log(user);
            res.redirect("/adminUsersList")
        })
        .catch ( (error) => {
            console.log(error);
        })
    })
}
