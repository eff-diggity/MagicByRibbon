const express = require("express");
// const session = require('express-session')

const auth = require('../../middleware/auth-middleware')

const router = express.Router();
// router.use(session({secret: 'ErgoSum'}))
// require('dotenv').config({path: "../../../.env"}); Currently doesn't work with .ENV file. Needs Refactor
const Client = require("../../models/client"); //Import our mongoose client schema which we use to validate create new user
router.use(express.json()); //allows us to access req.body
router.use(express.urlencoded({ extended: true }));


// require("../../../server/mongoose")
// const path = require('path');
const path2 = require("path");


// router.get('/clients/me', auth, function(req, res) {
//     if(!req.session.client_id){
//         res.redirect('/')
//     }
//     res.send(req.client)
//     // Client.find({}).then((all_clients)=>{ //grabs all clients from DB
//     //     if(!all_clients){
//     //         return res.status(404).send("error");
//     //     }
//     //     res.status(200).send(all_clients);
//     // }).catch((error)=>{
//     //     res.status(404).send(error);
//     // })
//     // res.sendFile(path2.join(__dirname, '../../../views/sign-up.html'));
//   });

  router.get('/clients/:id', (req, res)=>{ //Grabs single client from DB by pulling ID from route params
      const _id = req.params.id;

      Client.findById(_id).then((client)=>{
        if(!client){
            return res.status(404).send(error, "resource not found");        
        }
        console.log(client)
        res.send(client)
      }).catch((error)=>{
        res.status(404).send(error);
      });
  });

  module.exports = router;