const mongoose = require("mongoose");
require('dotenv').config();  // Load environment variables from .env file

const url = process.env.MongoURL;

mongoose.connect(url)
    .then(() => {

    })
    .catch(err => {

        console.log('Error connecting to DB:', err);
    });
  