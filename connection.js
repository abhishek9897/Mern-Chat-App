const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect("mongodb+srv://abhishek:gabbar12@cluster0.b1rnlmb.mongodb.net/chatapp?retryWrites=true&w=majority", ()=> {
  console.log('connected to mongodb')
})
