const Admin = require('../models/Admin')

module.exports = (req, res, next) => {
    Admin.findById(req.session.userId)
    .then((check) =>
    {
        if (!check) {
            console.log('You are not admin. Please log in as one.')
            return res.redirect('/auth/loginAdmin')
        }
            next();
        }
    )
}