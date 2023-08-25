var express = require('express');
const { RegisterUser } = require('../Controller/RegisterUser');
const { loginHelper } = require('../Controller/Login');
const { AddPassword, Getpassword, DeletePass } = require('../Controller/AddPassword');
const JWTvarify = require('../Controller/ValidateUser');

// const JWTvarify = require('../Controller/ValidateUser');

var router = express.Router();
/* GET home page. */
router.post('/userregister',RegisterUser);
router.post('/loginuser',loginHelper);
router.post('/newpassword',JWTvarify,AddPassword);
router.get('/getpassowrd',JWTvarify,Getpassword);
router.get('/deletepasword',JWTvarify,DeletePass); 
router.get('/test',(req,res)=>
{
    console.log(res.json(
'hello'

    ));
});

module.exports = router;
 