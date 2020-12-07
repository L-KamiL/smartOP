const mongoose = require('mongoose');

var MONGODB_URI = "mongodb+srv://admin:admin@smartopcluester.6rrmx.mongodb.net/<dbname>?retryWrites=true&w=majority"

const dbConnection = () => {
    mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    mongoose.connection.on('connected', () => {
        console.log("[OK] Now connected to database.");
    })
}

exports.dbConnection = dbConnection;