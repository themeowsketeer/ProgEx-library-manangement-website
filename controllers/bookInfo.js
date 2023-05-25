const Review = require("../models/Review");
const Book = require("../models/Book");
const User = require('../models/User')
module.exports = (req, response) => {
    var id1 = req.params.id
    var username = user1
    if (id1.match(/^[0-9a-fA-F]{24}$/)) {
    // Yes, it's a valid ObjectId, proceed with `findById` call.
    if(loggedIn) {
    Promise.all ([ Book.findById(req.params.id), Review.find({}), User.find({username : username}).limit(1)]) 
    .then(([book, reviews, user])=>{
        //this is for when there are reviews
        var start = Date.now()
        var date = new Date(start);
        date.setDate(date.getDate() + 4);
        console.log(date)
        console.log("have it")
        var date1 = date. toISOString();
        console.log(date1)
            //if(!user) {console.log("no user");throw new Error('UwU user not logged in')}
            var id = "yes"
            console.log("have reviews")
            response.render('book-info',{
                reviews:reviews,
                book:book,
                id: id,
                date: date1,
                user: user
            });
        
        
    })
    .catch((error, book) => { 
        //console.log("no bro")
        console.log(book.name)
        //if there are no reviews
        id = "no"
        response.render('book-info',{
            book: book,
            id: id
        });
    })
    } else {
    Promise.all ([ Book.findById(req.params.id), Review.find({})]) 
    .then(([book, reviews])=>{
        var start = Date.now()
        var date = new Date(start);
        date.setDate(date.getDate() + 1);
        console.log(date)
        console.log("have it")
        var date1 = date. toISOString();
        console.log(date1)
        //this is for when there are reviews
        var id = "yes"
        console.log("have reviews")
        response.render('book-info',{
            reviews:reviews,
            book:book,
            date: date1,
            id: id,
        });
    })
    .catch((error, book ,reviews,) => { 
        //if there are no reviews
        id = "no"
        response.render('book-info',{
            reviews:reviews,
            book: book,
            id: id

        });
    })
    }
}
    
}
