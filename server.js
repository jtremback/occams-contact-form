'use strict';

var express = require('express')
  , sendgrid = require('sendgrid')(
      process.env.SENDGRID_USERNAME
    , process.env.SENDGRID_PASSWORD
  )
;

var app = express();

app.use(express.bodyParser());

app.get('/', function(req, res) {
  res.send('Occam\'s contact form is running.');
});

app.post('/', function(req) {
  var req_body = req.body
    , email_body = ''
  ;

  for (var field in req_body) {
    email_body += field + ': ';
    email_body += req_body[field] + ', ';
  }

  // Send the email.
  sendgrid.send({
      to: process.env.EMAIL_TO
    , from: process.env.EMAIL_FROM
    , subject: process.env.EMAIL_SUBJECT
    , text: email_body
  }, function(err, json) {
    if (err) { return console.error(err); }
    console.log(json);
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log('Listening on ' + port);
});


