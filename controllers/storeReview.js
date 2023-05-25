const Review = require('../models/Review')
module.exports=(req,res) =>{
    Review.create(req.body)
    .then(()=>{
        res.send({
           text:"sucessfully send"
        });
    })
}
