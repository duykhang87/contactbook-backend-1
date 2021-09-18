const express = require("express");
const cors = require("cors");
const config = require("./app/config");

const app = express();

var corsOptions = {
    origin:"http://localhost:8081",
};

app.use(cors(corsOptions));

// pare requests of content-type- application/json
app.use(express.json());

//parse requests of content-type - application/x-www-from-urlencoded
app.use(express.urlencoded({extended: true}));

//simple route
app.get("/",(req, res) => {
    res.json( { message: "welcome to contact book application"});
});

//set port, listen for requests
const PORT = config.app.port;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});