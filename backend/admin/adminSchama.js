const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const adminSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
});

adminSchema.pre("save", async function (){
    this.password = await bcrypt.hash(this.password, 10)
})

const adminModel = mongoose.model('Admin', adminSchema);
module.exports = adminModel;