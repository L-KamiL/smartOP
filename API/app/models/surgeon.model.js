const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const surgeonSchema = new Schema({
    name: {type: String, required: true},
    specialty: {type: String, required: true},
    intervention: [{type: Schema.Types.ObjectId, ref: 'intervention'}] 
});

const surgeon = mongoose.model('surgeon', surgeonSchema);

module.exports = surgeon;