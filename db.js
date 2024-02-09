const mongoose = require('mongoose');
require('dotenv').config()

const mongoURI = process.env.CONNECTION_STRING;

const connectToMongo = async () => {
    await mongoose.connect(mongoURI).then(
        () => {
            console.log("success")
        },
        err => {
            console.log(err);
        }
    )
}

module.exports = connectToMongo;