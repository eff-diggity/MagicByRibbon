const mongoose = require('mongoose');
const validator = require('validator');

const Client = mongoose.model('Client', { 
    userName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalida')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 7,
        validate(value){
            if (value.toLowerCase().includes("password")){
                throw new Error("Password cannot contain 'password' ")
            }
        }
    }
});

module.exports = Client