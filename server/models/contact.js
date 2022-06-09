const mongoose = require('mongoose');
const validator = require('validator');
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

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
        required: true,
        required: [true, "Message is required"]
    }

});

module.exports = Contact;

