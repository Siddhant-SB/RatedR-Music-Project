var express = require('express');
var fs = require('fs')
var nodemailer = require('nodemailer')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/about', function(req, res, next) {
  res.render('about')
})
router.get('/gallery', function(req, res, next) {
  res.render('gallery')
})
router.get('/contact', function(req, res, next) {
  res.render('contact')
})
router.post('/submit', function (req, res, next) {
  let name = req.body.name;
  let email = req.body.email;
  let number = req.body.number;
  fs.appendFile('data.txt', `name : ${name}, email : ${email}, number : ${number} \n`, function(e) {
    if(e) {
      console.log(e)
    }
    else {
      res.render('success')
    }
    // // Step 1 - Create transporter
    // var transporter = nodemailer.createTransport({
    //   service : 'gmail',
    //   auth : {
    //     user : 'siddhantbambrah@gmail.com',
    //     pass : '',


    //   }
    

    // });
    // Step 2 - MailOptions (Below)
    // var mailOptions = {
    //   from : 'siddhantbambrah@gmail.com',
    //   to : req.body.email,
    //   subject : 'Tickets Successfully Booked',
    //   text : 'Congratulations, You have successfully booked the ticket for the upcoming event!'

    // }
    // transporter.sendMail(mailOptions, function(error, info) {
    //   if(error) {
    //     console.log(error);
      
    //   }
    //   else {
    //     res.render('success')
    //   }

    // })
  })
})


module.exports = router;
