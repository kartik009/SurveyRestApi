var express = require('express');
const Survey = require('./routes/Survey');
const PORT = process.env.PORT || 5000
const bodyParser = require('body-parser')

var app = express();


app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(bodyParser.json())


//------- ROUTING ----------
app.use('/',Survey);


app.listen(PORT, () => {
  console.log("Server Started ...........");
})
//----------------------- END EXPRESS JS CODE ---------------------------------------------