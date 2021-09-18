// nCreate and Save a new Contact
exports.create = async(req,res) => {
    res.send({ message: "create handler"});
};

//Retrieve all contacts of a user from the database.
exports.findAll = async(req, res) => {
    res.send({ message: "findOne handler"})
};

//Find a single contact with an id
exports.findOne = async(req, res) => {
    res.send({message: "findOne hander "} );
};

//Update a contact by the id in the request
exports.update = async(req, res) => {
    res.send({ message: "update hander" });
};

//Delete a contact with the specified id in the request
exports.delete = async(req, res) => {
    res.send({ message: "delete handler"});
};

//Delete all contacts of a user from the database
exports.deleteAll = async(req, res) => {
    res.send({message: "delete handler"});
};

// Find all favorite contacts of a user
exports.findAllFavorite = async(req,res) => {
    res.send({message: "findAllFavorite handler"});
};


