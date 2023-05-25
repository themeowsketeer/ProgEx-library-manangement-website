const Users = require("../../models/User.js")
module.exports = (request, response) => {
    Users.findById(request.params.id)
    .then ( (detailedUser) => {
        response.render('adminEditUser', { detailedUser });
    })
    .catch ( (error) => {
        console.log(error);
    })
}