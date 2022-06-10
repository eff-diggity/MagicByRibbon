const mongoose = require('mongoose');
const validator = require('validator');
// const { contact } = require('../controllers/ribbonController');
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// const { db } = require('./contact');

// const contactDb = mongoose.connection;
// contactDb.on('error', console.error.bind(console, 'connection error;'));
// contactDb.once('open', function () {
//     console.log('Connected?')
// });

const Contact = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true
    }

});

// module.exports = mongoose.model('contact', Contact);
module.exports = Contact;