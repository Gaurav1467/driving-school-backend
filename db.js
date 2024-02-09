const mongoose = require('mongoose');
require('dotenv').config()

const mongoURI = `mongodb+srv://Gaurav77:lucifer@db.lj9rb7j.mongodb.net/HeavyDriver`

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