const Users = require("../../models/User.js");

module.exports = (req,res) => 
{
    Users.findByIdAndDelete(req.params.id)
    .then ( () => {
        res.redirect("/adminUsersList")
    })
    .catch ( (error) => {
        console.log(error);
    })
}