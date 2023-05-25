const Record = require("../models/BorrowRecord");
const Books = require("../models/Book");

module.exports = (req, response) => {
    Promise.all
    ([
        Record.findById(req.params.id),
        Books.find({})
    ])
    .then( ([record, books]) => {
        var book;
        for (var i = 0; i < books.length; i++)
        {
            if (record.bookID.equals(books[i]._id))
            {
                book = books[i];
            }
        }
        response.render('payOnline', { 
            record,
            book
         })
    })
}