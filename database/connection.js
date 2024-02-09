const mongoose = require('mongoose');

function getDbUrl() {
   return `mongodb+srv://Gaurav77:lucifer@db.lj9rb7j.mongodb.net/HeavyDriver`
}
function GetDbConnection() {
   mongoose.connect(getDbUrl()).then(()=>{console.log('Connected to MongoDB');}).catch((error)=>{console.error('Error connecting to MongoDB:', error);});
   return mongoose.connection;
}
module.exports = GetDbConnection

