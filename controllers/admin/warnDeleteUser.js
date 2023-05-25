const Users = require("../../models/User.js")
module.exports = (request, response) => {
    Users.findById(request.params.id)
    .then ( (detailedUser) => {
        response.render('adminWarnDeleteUser', { detailedUser });
    })
    .catch ( (error) => {
        console.log(error);
    })
}