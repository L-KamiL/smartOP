const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const interventionSchema = new Schema({
    surgeon: {type: Schema.Types.ObjectId, ref: 'surgeon', required: false},
    specialty: {type: String, required: true},
    anesthsiste: {type: String, required: true},
    nurse1: {type: String, required: true},
    nurse2: {type: String, required: true},
    roomNumber: {type: Number, required: true},
    intervention: {type: String, required: true},
});

const intervention = mongoose.model('intervention', interventionSchema);

module.exports = intervention;