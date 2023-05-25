const Borrow = require('../models/BorrowRecord')
var mongoose = require('mongoose');
module.exports= async (req,res) =>{
    var id = req.body.ID
    console.log(id)
    var objectId = new mongoose.Types.ObjectId(id);
    var user = loggedIn
    var userId = new mongoose.Types.ObjectId(user);

        // Borrow.findOneAndUpdate({bookID : objectId .toString(), userID: userId.toString() }, {status: "returned",hasReturned: true}),
        let doc = await Borrow.findOne({bookID : objectId .toString(), userID: userId.toString(), 'hasReturned': false })
        if(doc == null) {
            
            res.redirect('/404')
        };
            console.log(doc)
            doc.hasReturned = true;
            doc.status = 'returned';
            
            await doc.save();
            console.log("delete done")
            console.log("")
        
            res.redirect('/bookcart')
    // .then(()=>{
        
    // })
}