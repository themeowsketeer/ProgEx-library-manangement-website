const BorrowedBookSchema = require('../models/BorrowRecord')
module.exports=(req,res) =>{
    BorrowedBookSchema.findByIdAndUpdate(req.params.id, { paymentAmount : 0 })
    .then((remain)=>{
        console.log('Pay success')
        res.redirect('/paySuccess/' + req.params.id)
    })
}