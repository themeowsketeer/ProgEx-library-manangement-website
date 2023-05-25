const User = require('../models/User')
const path = require('path')
module.exports = (req, res) => {
   
    const username = user1;
    User.findOneAndUpdate({username: username}, req.body, {upsert: true})
    .then((user)=>{
                console.log("yo");
                res.send({
                    text:"sucess"
                 });
           
    })
    .catch((error,user) =>{
        console.log(error,user)
    })

}
