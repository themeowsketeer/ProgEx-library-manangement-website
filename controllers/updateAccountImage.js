const User = require('../models/User')
const path = require('path')
module.exports = (req, res) => {
    console.log(req.files);
    if(!req.files) console.log('Nothing');
    let { iconLink } = req.files;
    iconLink.mv(path.resolve(__dirname,'..' ,'public/upload', iconLink.name), function (err) 
    {   
    const username = user1;
    User.findOneAndUpdate({username: username}, {...req.body, iconLink: '/upload/' + iconLink.name}, {upsert: true})
    .then((user)=>{
                console.log("yo");
                res.redirect('/user_profile_setting')
           
    })
    .catch((error,user) =>{
        console.log(error,user)
    })
    })
}
