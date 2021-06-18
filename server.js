const express = require("express");
const https = require('https');
const { response } = require("express");


// PORT
const PORT = process.env.PORT || 3000;
const app = express();

// static folder
app.use(express.static('public'));

// data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());






// API routes
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/signup.html')
})




app.post('/', (req, res) => {

  const firstName = req.body.fName
const lastName = req.body.lName
const email = req.body.email


const data = {
  members: [
    {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName
      }
    }
  ]
};

const jsonData = JSON.stringify(data)

const url = 'https://us6.api.mailchimp.com/3.0/lists/95d7a60ada';
const options = {
  method: "POST",
  auth: "ttmgs:8f7f5eabdcfb43b209d695753e78f37e-us6"
}

const request = https.request(url, options, function(response) {

  if (response.statusCode === 200) {
    res.sendFile(__dirname + "/success.html")
  } else {
    res.sendFile(__dirname + "/failure.html")
  }

  response.on("data", function(data) {
    console.log(JSON.parse(data))
  })

})
request.write(jsonData)
request.end();
});



app.post("/failure", (req, res) => {
  res.redirect('/')
});





// live port
app.listen(PORT, function() {
  console.log('app is listening on port http://localhost:' + PORT)
});




// Api key
// 8f7f5eabdcfb43b209d695753e78f37e-us6

// list id
// 95d7a60ada

