//////////////////////////////////////
// DEPENDENCIES
//////////////////////////////////////
const mongoose = require("mongoose");
require("dotenv").config();
const { MONGODB_URI, DB_NAME } = process.env;

///////////////////////////////////////
// Config Object
//////////////////////////////////////
const dbconfig = { useUnifiedTopology: true, useNewUrlParser: true };

//////////////////////////////////////
// DATABASE CONNECTION
//////////////////////////////////////
mongoose.connect(`${MONGODB_URI}${DB_NAME}`, dbconfig);

///////////////////////////////////////
// DATABASE EVENTS
///////////////////////////////////////
const db = mongoose.connection;
db.on("open", () => {
  console.log("YOU ARE CONNECTED TO MONGO");
})
  .on("close", () => {
    console.log("YOU ARE DISCONNECTED TO MONGO");
  })
  .on("error", (err) => {
    console.log(err);
  });

///////////////////////////////
// EXPORT CONNECTION TO USE IN OTHER SCRIPTS
//////////////////////////////
module.exports = mongoose;
