const BorrowRecords = require("../models/BorrowRecord");
const Users = require("../models/User.js");
const WishList = require('../models/WishList')
const Book = require('../models/Book')
var mongoose = require('mongoose');
module.exports = (req, response) => {
    const id = req.session.userId;
    var objectId = new mongoose.Types.ObjectId(id);
    
    
    Promise.all
    ([
        Users.findById(req.session.userId), 
        BorrowRecords.find({userID : objectId.toString()}),
        WishList.find({userID: objectId.toString()}),
        Book.find(),
    ])
    .then( ([user, record, wishlist, book]) => {
        //get date and set due date for the borrow book
        var start = Date.now()
        var date = new Date(start);
        date.setDate(date.getDate() + 4);
        console.log(date)
        console.log("have it")
        var date1 = date. toISOString();
        console.log(date1)
        // console.log(user)
         //console.log(record[0].bookID)
        // console.log(wishlist[0].books)
        if (wishlist[0] != null && record.length != 0 ) {
            idk = "yes"
            a = wishlist[0].books

            response.render('bookcart', {
             borrowedList : record, 
             user: user,
             wishlist: wishlist,
             a: a,
             book: book,
             idk: idk,
             date: date1, // this is ISO format to store to the data base
             da:date, // this is date format which will be used to print out on Front End
            })

        } else if(wishlist[0] != null && record.length == 0) {
            
            idk = "yes"
            a = wishlist[0].books

            response.render('bookcart', {
             borrowedList : record, 
             user: user,
             wishlist: wishlist,
             a: a,
             book: book,
             idk: idk,
             date: date1, // this is ISO format to store to the data base
             da:date, // this is date format which will be used to print out on Front End
            })
        }
        
        else {
            idk = "no"
            response.render('bookcart', {
                borrowedList : record, 
                user: user,
                wishlist: wishlist,
                book: book,
                idk: idk,
                date: date1,
                da:date,
               })
        }

    })

    .catch ((error, user, record) => {
        idk = "no"
        console.log("don't have")
        response.render('bookcart', {
            borrowedList : record, 
            user: user,
            idk : idk
           })
    })
}