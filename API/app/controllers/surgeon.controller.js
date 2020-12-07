const Surgeon = require("../models/surgeon.model");

exports.getAllSurgeon = (req, res) => {
    var options = {
        "limit": req.query.limit || 10,
        "skip": ((req.query.page || 1) - 1) * (req.query.limit || 10)
    };
    var filterObject = {};
    var unselectedField = {
        __v: false,
        _id: false
    };

    if (req.query.name)
        Object.assign(filterObject, {name: req.query.name});

    Surgeon.find(filterObject, unselectedField, options).sort({"intervention": -1}).populate({path: 'intervention'}).exec(function(err, surgeons) {
        if (err)
            res.send(400, err);
        res.send(200, surgeons);
    });
};

exports.createSurgeon = (req, res) => {
    var surgeon = new Surgeon(req.body);

    surgeon.save(function(err) {
        if (err)
            res.send(400, err);
        res.send(200, {message: 'Surgeon created!'});
    });
};
