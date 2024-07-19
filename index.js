// index.js
// where your node app starts

// init project
var bodyParser = require("body-parser");
require('dotenv').config();
var express = require('express');
var app = express();
var jsonParser = bodyParser.json();
 var urlEncodedParser = app.use(bodyParser.urlencoded({ extended: false }));

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

app.get('/api/whoami/', (req, res) => {
  // res.send("Hello");
  
  var ipAdress = req.headers["host"]
  var language = req.headers["accept-language"]
  var software = req.headers["user-agent"]

  
  res.json({
    ipadress : ipAdress,
    language : language,
    software : software
  });
})


// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
