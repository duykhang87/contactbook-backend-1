const express = require("express");
const cors = require("cors");
const config = require("./app/config");
const { BadRequestError } = require("./app/helpers/errors");

const app = express();

var corsOptions = {
    origin:"http://localhost:8080",
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

setupContactRoutes(app);

//handle 404 response
app.use((req, res, next) => {
    next(new BadRequestError(404, "Resource not found"));
});

//define error-handing middleware last, atfer other app.use() and routes calls
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.statusCode || 500).json({
        message: err.message || "Internal Sever Error",
    });
});

//set port, listen for requests
const PORT = config.app.port;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);


});