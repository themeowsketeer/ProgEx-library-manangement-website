const User = require('../models/User')
const Review = require('../models/Review')
const BorrowRecord = require('../models/BorrowRecord')
const WishList = require('../models/WishList')
module.exports = (req, response) => {
    const username = user1;
    console.log(username);
    Promise.all([
        User.findById(req.session.userId),
        Review.find({ "writtenBy.userID": req.session.userId }),
        BorrowRecord.find({ userID: req.session.userId }),
        WishList.find({ userID: req.session.userId })
    ])
    .then(([user,reviews,record,wishlist])=>{
        console.log(wishlist)
        console.log("hi")
        var dueCount = 0;
        var borrowCount = 0;
        var wishlistCount = 0;
        if (wishlist.length != 0)
        {
            wishlistCount = wishlist[0].books.length;
        };
        for (var i = 0; i < record.length; i++)
        {
            if (record[i].overDue)
            {
                dueCount++;
            }
            if (!record[i].overDue && !record[i].hasReturned)
            {
                borrowCount++;
            }
        }
        response.render('userprofile', {
            user,
            reviews,
            dueCount,
            borrowCount,
            wishlistCount
        })
    })
    .catch((error,user) =>{
        console.log(error,user)
    })
}
