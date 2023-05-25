const User = require('../models/User')
module.exports = (req, response) => {
    const username = user1;
    console.log(username);
    User.findOne({username: username})
    .then((user)=>{
        console.log(user);
        response.render('userprofilesetting', {
            user: user 
        })
    })
    .catch((error,user) =>{
        console.log(error,user)
    })
    
}
