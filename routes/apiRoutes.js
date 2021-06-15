const express = require('express');
const router = express.Router();
import {Signup} from ('../client/src/components/signup/signup');
import {Success} from ('../client/src/components/success/success');





router.get('/', (req, res)=> {
  res.send( [Success] )
});




router.post('/', (req, res) => {

const firstName = req.body.fname
const lastName = req.body.lastName
const email = req.body.email

console.log(firstName, lastName, email)
})
