const Intervention = require("../models/intervention.model");
const Surgeon = require("../models/surgeon.model");

exports.createIntervention = (req, res) => {
    var intervention = new Intervention(req.body);

    Intervention.create(intervention).then(function(interventionId) {
        return Surgeon.findOneAndUpdate({_id: req.body.surgeon}, {$push: {intervention: interventionId._id}}, {new: true});
    }).then(function() {
        res.json(201, "Intervention created!");
    }).catch(function(err) {
        res.send(400, err);
    });
};