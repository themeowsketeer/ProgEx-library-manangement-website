//user clicks the link
const jwt=require('jsonwebtoken')
const User=require('../models/User')
const config=require('../controllers/config')


//before redirecting to the page, check first
module.exports = (req,res) => {
    const {id,token}=req.params
    if(!global.userid) global.userid = null;
    global.userid=req.params.id
    User.findOne({_id:id}) //check id, if id exists means that user exists
    .then((user)=>{
        console.log("Id match, user exist")
        console.log("checking token")
        const secret=config.secret+user.password
        //validate jwt token
        try{
            const verify=jwt.verify(token,secret)
            console.log('Valid token')
            res.render('resetPasswordPage')
        }
        catch{
            console.log('Invalid token')
            res.render('404')
        }
    })
    .catch(()=>{
        console.log("Invalid id, no user found")
    })
}
//module.exports(userid)