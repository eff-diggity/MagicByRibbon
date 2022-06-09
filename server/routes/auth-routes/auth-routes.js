const express = require("express");
const router = express.Router();
// require('dotenv').config({path: "../../../.env"}); Currently doesn't work with .ENV file. Needs Refactor
const Client = require("../../models/client"); //Import our mongoose client schema which we use to validate create new user
router.use(express.json()); //allows us to access req.body
router.use(express.urlencoded({ extended: true }));

// require("../../../server/mongoose")
// const path = require('path');
const path2 = require("path");
const { resolveNaptr } = require("dns");


router.get('/clients/signup', function(req, res) {
    // res.sendFile(path2.join(__dirname, '../../../views/sign-up.html'));
    res.render('sign-up');
  });
router.post('/clients/signup', async (req, res)=>{ //build client object from form data
    const client = new Client({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password
    });
    console.log(client)

    client.save().then((newClient)=>{ //this saved the client object to the database
        res.status(201).send(newClient)
        console.log(req.body)
    }).catch((error)=>{
        res.status(400).send(error)
        console.log(error)
    });
});

router.get('/clients/login', function(req, res){
    res.render('login');
})

router.post('/clients/login', async (req, res)=>{

    try {
        const client = await Client.findByCredentials(req.body.email, req.body.password)
        res.send(client);
    }catch(error){
        res.status(400).send()
    }

})
module.exports = router;
