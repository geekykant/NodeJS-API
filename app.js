var express = require('express');
var db = require('./db/db');
var parser = require('body-parser');

var app = express();
app.use(parser.urlencoded({
  extended: true
}));

var admin = express();
admin.get('/', (req, res) => {
  res.send('admin homepage!');
});

var secret = express();
secret.get('/', (req, res) => {
  res.send('admin secr*t');
});

admin.use(parser.urlencoded({
  extended: true
}));


app.use(['/admin', '/manager'], admin);
admin.use('/secr*t', secret);



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`)
});
