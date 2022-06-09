const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require("bcryptjs");
const clientSchema = new mongoose.Schema({
    userName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
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
})
/** Middleware this hashes our password using BCryptjs just before we save
 * (first argument is the action we want to run the middleware on)  a client to the DB*/
clientSchema.pre('save', async function(next){ 
    const client = this
    client.password = await bcrypt.hash(client.password, 8);
    next();
})
/** Middleware for logging in grabs user by email submitted to form, 
 * uses bcrypt to check the form password with the hashed password stored in database */
clientSchema.statics.findByCredentials = async (email, password)=>{
    const client = await Client.findOne({ email: email})
    if(!client){
        throw new Error('Unable to login')
    }
    const isMatch = await bcrypt.compare(password, client.password);

    if(!isMatch){
        throw new Error('Unable to login')
    }

    return client
}
const Client = mongoose.model('Client', clientSchema);

module.exports = Client