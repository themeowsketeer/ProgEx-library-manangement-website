const Users = require("../../models/User.js");
const Books = require("../../models/Book.js");

var mysort = { updatedAt: -1 };
module.exports = (request, response) => {
    Promise.all
    ([
        Users.find({}).sort(mysort), 
        Books.find({}).sort(mysort)
    ])
    .then ( ([usersDoc, booksDoc]) => {
        var totalBorrowed = 0;
        var chartData = [];
        var top5count = 5;
        if (booksDoc.length < 5)
        {
            top5count = booksDoc.length;
        }
        for (var i = 0; i < usersDoc.length; i++)
        {
            totalBorrowed += usersDoc[i].booksBorrowing.length;
        }
        for (var i = 0; i < top5count; i++)
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
