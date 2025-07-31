const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    projectname : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    assignedDate : {
        type : String,
        required : true
    },
    deadline : {
        type :String,
        required : true
    },
    employeesToAdd : {
        type : Array,
        required : true
    },
    tasks : {
        type : [String]
    },
    status : {
        type : String,
        required : true
    },
    manager : {
        type : String,
        required : true
    },
    teamLeader : {
        type : String,
        required : true
    },
    sector : {
        type : String,
        required : true
    },
    applicationType : {
        type : String,
        required : true
    },
    technologies : {
        type : Array,
        required : true
    },
    softwareUsing : {
        type : Array,
        required : true
    },
    budget : {
        type : String,
        required : true
    }
});

projectSchema.pre("save", async function (){
    this.tasks = [];
})

const projectModel = mongoose.model('project', projectSchema);
module.exports = projectModel;