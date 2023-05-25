const Borrow = require('../models/BorrowRecord')
const WishList = require('../models/WishList')
var mongoose = require('mongoose');
module.exports=(req,res) =>{
    const id = req.session.userId;
    var objectId = new mongoose.Types.ObjectId(id);
    console.log(req.body)
    let book = {
        'bookID': req.body.bookID,
    }

    Promise.all
    ([
        Borrow.create(req.body),
        WishList.findOneAndUpdate({userID: objectId.toString()}, {$pull: {books: book}})
    ])
    .then(()=>{
        res.redirect('/bookcart')
        
    })
}
