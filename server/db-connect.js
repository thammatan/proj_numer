const mongoose = require("mongoose");
mongoose
  .connect("mongodb+srv://thammatan43:0865321988@numer-o5kgk.mongodb.net/numer", { useNewUrlParser: true})
  .catch(e => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
