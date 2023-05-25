const Borrow = require("../models/BorrowRecord");
const Users = require("../models/User.js");

const sendEmail=require('../controllers/sendEmail')
module.exports = (req, res, next) => {
    Promise.all
    ([
        Users.find(), 
        Borrow.find(),
    ])
        .then(([user, borrow]) => {
            //caculate the date
           if (user.length != 0 && borrow.length !=0) {
                var dif = []
                var due = []
                for (var i = 0; i < borrow.length; i++) {
                    var now = new Date().getTime();
                    dif[i] = (Math.abs(now - borrow[i].createdAt)) / (1000 * 3600 * 24);
                    due[i] = (Math.abs(borrow[i].dueDate - borrow[i].createdAt)) / (1000 * 3600 * 24);
                    //  dif[i] = 0;
                    //  due[i] = 0;
                    console.log(dif[i])
                    console.log(due[i])
                    
                    if (dif[i] != due[i] &&  due[i]- dif[i] <= 1 ){
                        console.log("one or less than one day left")
                        for (var k = 0; k < user.length; k++) {
                            if (user[k]._id.equals(borrow[i].userID) ){
                                console.log("help")
                                sendEmail(user[k].email,
                                'Password reset link', 'the book is almost due bro'
                                )
                            }
                            
                        }
                    } else if (dif[i] == due[i] ){
                        console.log("time out")
                        for (var k = 0; k < user.length; k++) {
                            if (user[k]._id.equals(borrow[i].userID) ){
                                console.log("help")
                                borrow[i].overDue = true
                                borrow[i].paymentAmount = 100;
                                borrow[i].status = "overdue";
                                borrow[i].save()
                            }
                        }
                    }
                }
            }
            next(); 
           
        })
}