const nodemailer=require('nodemailer')

module.exports=async function sendEmail(recipient,subject,text){
  const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
      user:'vgulibpeteam3@gmail.com',
      pass:'xittksaucqhzwgiz'
    }
  })
  const info=await transporter.sendMail({
    from:'vgulibpeteam3@gmail.com',
    to:recipient,
    subject:subject,
    text:text
  })
  console.log('Message sent: '+info.messageId)
}