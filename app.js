var express = require('express');
var app = express();

app.get('/', (req, res) => res.send('Hello world!'));


const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server running on port 3000!")
});
