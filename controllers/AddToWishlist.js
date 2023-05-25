const WishList = require('../models/WishList')
module.exports=(req,res) =>{
    if(loggedIn){
        console.log(req.body)
        
        let uid= req.body.userID;
        console.log(req.body.userID);
        let book = {
            'bookID': req.body.bookID,
            'bookName': req.body.bookName,
            'Author': [req.body.Author]
        }
        console.log(req.body.Author);
        console.log(book);
        WishList.findOneAndUpdate({'userID': uid}, {$push: {'books': book}},{upsert:true})
        .catch((error)=> console.log(error))
        .then((book)=>{
            res.redirect('/index')
        })
    } else {
        console.log(req.body)
        res.send({
            text:"please login bro"
            });
    }
}
