const Users = require("../../models/User.js");

module.exports = (req,res) => 
{
    Users.findByIdAndUpdate(req.params.id, req.body)
    .then ( () => {
        res.redirect("/adminUsersList")
    })
    .catch ( (error) => {
        console.log(error);
    })
}
