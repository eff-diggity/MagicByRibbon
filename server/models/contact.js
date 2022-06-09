const mongoose = require('mongoose');
const validator = require('validator');

const Contact = mongoose.model(`Contact`, {
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    message: {
        type: String,
        required: true
    }

});

module.exports = Contact