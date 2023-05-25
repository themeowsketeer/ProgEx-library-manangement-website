const Books = require("../../models/Book.js")
module.exports = (request, response) => {
    Books.find({})
    .then ( (books) => {
        response.render('adminBooksList', { booksList : books });
        // console.log(users);
    })
    .catch ( (error) => {
        console.log(error);
    })
}
