const User=require('../models/User')
const jwt=require('jsonwebtoken')
const config=require('../controllers/config')
const sendEmail=require('../controllers/sendEmail')

module.exports=(req,res)=>{
    const{email}=req.body
    User.findOne({email:email})
    .then((user)=>{
        const secret=config.secret+user.password
        const token=jwt.sign({email:user.email,_id:user.id},secret,{expiresIn:'5m'})
        const link=`http://localhost:3000/reset/${user.id}/${token}`
        res.send('Password reset link has been sent')
        sendEmail(user.email,
        'Password reset link',
        `Here is your password reset link: ${link}`)
    })
    .catch(()=>{
        console.log('User not exist')
        res.redirect('/reset')
    })
}