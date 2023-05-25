const Users = require("../../models/User.js")
module.exports = (request, response) => {
    Users.find({})
    .then ( (users) => {
        response.render('adminUsersList', { usersList : users });
    })
    .catch ( (error) => {
        console.log(error);
    })
}
