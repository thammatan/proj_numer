const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./db-connect");

//const bisectionRouter = require("./routes/bisection-router");
//const falsepositionRouter = require("./routes/falseposition-router");
//const bisectionRouter = require("./routes/bisection-router");
const Router = require("./routes/index");
const app = express();
const apiPort = 5000;
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to Server!!!!!");
});

app.use("/api", Router);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
