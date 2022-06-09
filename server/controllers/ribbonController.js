const Category = require("../models/Category");
const mongoose = require('mongoose');
const Contact = require("../models/contact");

exports.homepage = async (req, res) => {
    res.render('index');
}


exports.blog = async (req, res) => {
    res.render('index');
}

exports.contact = async (req, res) => {
    res.render('contact');
}
