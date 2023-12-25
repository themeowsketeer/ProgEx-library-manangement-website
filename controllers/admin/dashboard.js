const Users = require("../../models/User.js");
const Books = require("../../models/Book.js");

module.exports = (request, response) => {
    Promise.all
    ([
        Users.find({}).sort({ updatedAt: -1 })limit(5), 
        Books.find({}).sort({ updatedAt: -1 })limit(5)
    ])
    .then ( ([usersDoc, booksDoc]) => {
        var totalBorrowed = 0;
        var chartData = [];
        for (var i = 0; i < usersDoc.length; i++)
        {
            totalBorrowed += usersDoc[i].booksBorrowing.length;
        }
        for (var i = 0; i < booksDoc.length; i++)
        {
        chartData[i] = { title: booksDoc[i].title , copies: booksDoc[i].copiesAvailable, id: booksDoc[i]._id.toString().substring( 17, 24 ) }
        }
        response.render('adminDashboard', { 
            usersList: usersDoc,
            booksList: booksDoc, 
            totalBorrowed,
            chartData
        });
        console.log(request.session);
    })
    .catch ( (error) => {
        console.log(error);
    })
}
