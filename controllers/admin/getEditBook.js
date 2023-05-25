const Books = require("../../models/Book.js")
module.exports = (request, response) => {
    Books.findById(request.params.id)
    .then ( (detailedBook) => {
        response.render('adminEditBook', { detailedBook });
    })
    .catch ( (error) => {
        console.log(error);
    })
}