const Books = require("../../models/Book.js")
module.exports = (request, response) => {
    Books.findById(request.params.id)
    .then ( (detailedBook) => {
        response.render('adminWarnDeleteBook', { detailedBook });
    })
    .catch ( (error) => {
        console.log(error);
    })
}