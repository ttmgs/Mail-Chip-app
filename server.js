const express = require("express");
const path = require("path")
const app = express();
import Success from "./client/src/components/success/success";

// PORT
const PORT = process.env.PORT || 8080;

app.use(express.static('./public/index.html'))

// data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




// Send every request to the React app
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


// API routes

router.get('/', (req, res)=> {
  res.send( [Success] )
});




router.post('/api/post', (req, res) => {

  const firstName = require('./client/src/components/signup/signup')
const lastName = require('./client/src/components/signup/signup')
const email = require('./client/src/components/signup/signup')

 firstName = req.body.fname
 lastName = req.body.lname
 email = req.body.email
console.log(firstName, lastName, email)
})


// live port
app.listen(PORT, function() {
  console.log('app is listening on port http://localhost:' + PORT)
});