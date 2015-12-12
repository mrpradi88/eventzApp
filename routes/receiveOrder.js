var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET users listing. */
router.post('/', function(req, res, next) {
    console.log("CAME REQUEST:",req.body)
    console.log("")
  // Sending email
  var fromEmail = 'pradeepmr538@gmail.com';
  var fromPassword = 'pradeepmr';
  var toEmail = 'bangaloreeventz@gmail.com';
  // Sending mail to the user

  var transporter = nodemailer.createTransport({
  service: 'Gmail',
      auth: {
          user: fromEmail,
          pass: fromPassword
      }
  });
   transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      subject: 'O-'+req.body.name+' : '+req.body.phone,
      text: 'email:'+req.body.email,
      html: req.body.orderTable
  }, function(error, response){
      if(error){
          console.log('Failed in sending mail');
          console.dir({success: false, existing: false, sendError: true});
          console.dir(error);
          res.end('Failed in sending mail');
      }else{
          console.log('Successful in sedning email');
          console.dir({success: true, existing: false, sendError: false});
          console.dir(response);
          res.end('Successful in sedning email');
      }
  });
res.writeHead(200, {'Content-Type': 'text/plain'});
});

module.exports = router;
