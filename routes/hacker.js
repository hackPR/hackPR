var db = require('./db');
var dotenv = require('dotenv').load();
var sendgrid = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);

exports.collect = function (req, res, next) {

  //get the user emails, store them in the db
<<<<<<< HEAD
  // console.log(req);
  if (req.body) {
    //create a new hacker document
    console.log(req.body.email)
    var hacker = db.Hacker({
      email : req.body.email
    });

    hacker.save( function (err, result) {
      if (err) {
        //Handle this error.
        throw err;
      }
      sendgrid.send({
        to : req.body.email,
        from : 'info@hackpr.io',
        subject : 'hackPR: Good things are brewing!',
        html: '<h3>You\'ve been succesfully added to our mailling list.</h3><p>Awesome things are incoming! We\'ll keep you posted on important event details through this email.</p><p>Thanks</p><h5>- HackPR Team </h5>'
      }, function (err, json) {
=======
  if (req.body) {
    //create a new hacker document
    console.log(req.body.email)
    if(req.body.email.length > 0){
      var hacker = db.Hacker({
        email : req.body.email
      });

      hacker.save( function (err, result) {
>>>>>>> 23c44c465879273315bf03bc1947cfe6cdb4d1fa
        if (err) {
          //Handle this error.
          res.send(404);
          throw err;
        }
<<<<<<< HEAD
        res.render('thanks', {email : req.body.email});
      });
     });
=======
        sendgrid.send({
          to : req.body.email,
          from : 'info@hackpr.io',
          subject : 'hackPR: Good things are brewing!',
          html: '<h3>You\'ve been succesfully added to our mailling list.</h3><p>Awesome things are incoming! We\'ll keep you posted on important event details through this email.</p><p>Thanks</p><h5>- HackPR Team </h5>'
        }, function (err, json) {
          if (err) {
            res.send(404);
            throw err;
          }
          res.send(200);
        });
     });
    }
    else{
      res.send(204);
    }
>>>>>>> 23c44c465879273315bf03bc1947cfe6cdb4d1fa
  }
  else {
    //There was no form data
    res.send(204);
  }

};