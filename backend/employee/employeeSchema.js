const mongoose=require('mongoose');
const bcrypt=require('bcrypt');

const employeeSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true
    },
    number : {
        type : String,
        required : true
    },
    email:{
        type:String,
        required:true,
    },
    qualification:{
        type:String,
        required:true,
    },
    dob : {
        type : String,
        required : true
    },
    gender : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    }
    ,
    address : {
        type : String,
        required : true
    },
    skills : {
        type : Array,
        required : true
    },
    department : {
        type : String,
        required : true
    },
    userRole:{
        type:String,
        required:true,
    },
    salary:{
        type:String,
        required:true,
    },
    dateOfJoin:{
        type:String,
        required:true,
    },
    experience:{
        type:String,
        required:true,
    },
    prevJobRole:{
        type:String,
        required:true,
    },
    empNo : {
        type : Number,
        required : true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    confirmPassword:{
        type:String,
        required:true
    },
    username:{
        type: String,
        // default : `${this.firstname}`
    }
})



employeeSchema.pre("save", async function (){
    this.username = this.firstname + "innovaskill" + this.empNo;
})

employeeSchema.pre('save', async function(){
    this.password=  await bcrypt.hash(this.password, 8);
    this.confirmPassword=undefined;
})

// Explicitly drop the existing unique index on the 'firstname' field
employeeSchema.index({ userRole: 1 }, { unique: false });

const empSchema= mongoose.model('employee', employeeSchema);
module.exports=empSchema;
