const mongoose = require('mongoose');

const otherdataSchema = new mongoose.Schema({
    sector : {
        type : Array,
        required : true
    },
    applicationType : {
        type : Array,
        required : true
    },
    technologies : {
        type : Array,
        required : true
    },
    softwareUsing : {
        type : Array,
        required : true
    }
});


const otherdataModel = mongoose.model('otherdatas', otherdataSchema);
module.exports = otherdataModel;