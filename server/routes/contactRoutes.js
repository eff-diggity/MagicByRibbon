const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");
router.use(express.json());
const ribbonController = require('../controllers/ribbonController');
const path3 = require("path");
const res = require("express/lib/response");


router.get('/contact', (req, res) => {
    res.render("contact")
    // res.sendFile(path3.join(__dirname, "../../views/contact.ejs"))
});

router.post('/contact', (req, res) => { //build client object from form data
    const contact = new Contact({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });
    console.log(contact)

    contact.save().then((newContact) => { //this saved the client object to the database
        res.send(newContact)
        console.log(req.body)
    }).catch((error) => {
        res.send(error)
        console.log(error)
    });
});

module.exports = router;