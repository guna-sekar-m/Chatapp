const nodemailer = require('nodemailer');

const mail = async (data,mailId)=>{
    try{
let transporter = nodemailer.createTransport({
    service: 'gmail',
  
    auth: {
      user: 'remotesharing01@gmail.com',
      pass: 'rxfw ungc qcne ecct' 
      },
      tls: {
        rejectUnauthorized: false
    }

  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'remotesharing01@gmail.com', // sender address
    to: mailId, // list of receivers
    subject: "Chatapp OTP", // Subject line
    text: "Your OTP is : "+data, // plain text body
    html: "Your OTP is :<b>"+data+"</b> <br> OTP (One-time password) validity will expire after 2 minutes", // html body
  });

  console.log("Message sent: %s", info.messageId);
}
catch(err){
  console.log(err)
}
}

module.exports = {mail}