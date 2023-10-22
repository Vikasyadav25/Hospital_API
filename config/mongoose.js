const mongooose = require('mongoose');
// -----------connection to mongodb-------------------//
mongooose.connect(
  "mongodb+srv://vikassinghyadav6:ot9cfaHIUpqEab5U@cluster1.9oquvxy.mongodb.net/Issues_Tracker"
);
// mongooose.connect('mongodb://localhost/HospitalAPI');

// ---------------establish connection---------------//
const db = mongooose.connection;

db.on('error', console.error.bind(console, "Error connecting to DB"));
// ----------if db is connected --------------//
db.once('open', function () {
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;