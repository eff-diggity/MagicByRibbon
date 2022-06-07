const mongoose = require('mongoose');
// require('dotenv').config({path: "../../../.env"});

// mongoose.connect(`${process.env.MONGO}`); temp need to get this to work with .env
mongoose.connect("mongodb+srv://codex:launchc0d3@cluster0.dybqhon.mongodb.net/?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true");
// const newClient = new Client({
//     userName: 'MongooseClient3',
//     email: 'client2mongoose.com',
//     password: 'someMongoosePassword3'
// })

// newClient.save().then((newclient)=>{
//     console.log(newclient)
// }).catch((error)=>{
//     console.log('Error: ', error)
// });