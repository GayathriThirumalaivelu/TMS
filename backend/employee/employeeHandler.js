const employeeSchema=require('./employeeSchema');
const bcrypt= require('bcrypt');


exports.postEmployee= async(req,res)=>{
    try{
    const checkEmp= await employeeSchema.findOne({email:req.body.email} || {empNo : req.body.empNo});
    if(checkEmp){
        return res.status(400).json({
            message: "Employee with this email or employee number already exists"
        });
    }
   else{
    const postemp= await employeeSchema.create(req.body);
    res.status(200).json({
        message: "data posted successfully",
  
    })
    // console.log(postemp);
   }
    }
    catch(err){
        res.status(400).json({
            message:"Data not posted",
            err:err
        })
    }

}

exports.postempLogin= async(req,res)=>{

    try{
        const {email}= req.body ;
        console.log(email);
        const postlogin= await employeeSchema.findOne({email});
        let viewEmp = await employeeSchema.find({email : req.body.email})

        console.log(postlogin);
        if(postlogin){
           bcrypt.compare(req.body.password, postlogin.password,(error, result)=>{
             if(error){
                res.status(400).json({
                    message:"password incorrect",
                    err:error
                })
             }
             else{
                res.status(200).json({
                    message:"login successfully",
                    result:result,     
                    viewEmp : viewEmp          
                })
             }
           })
        }
        else{
           res.status(400).json({
            message:"data unavailable",

           })
        }

        
    }
    catch(err){
         res.status(400).json({
                message:'cannot login',
                err:err
            })
    }
}

exports.viewOneEmp = async(req, res) => {
    try {
        const viewEmp = await employeeSchema.find(req.query) 
        res.status(200).json({
            message : "employee displayed",
            viewEmp
        })
    } catch (error) {
        res.status(404).json({
            message : error.message
        })
    }
}

exports.getUsername = async(req, res) => {
    try {
        const viewUsernames = await employeeSchema.find({}, {username : 1, userRole : 1,firstname : 1, lastname : 1 , image : 1, "_id" : 0});
        res.status(200).json({
            message : "names displayed",
            viewUsernames
        })
    } catch (error) {
        res.status(404).json({
            message : error.message
        })
    }
}

// exports.getNameOfEmp = async(req, res) => {
//     try {
//         const viewUsernames = await employeeSchema.find({} , {firstname : 1, lastname : 1 , "_id" : 0});
//         res.status(200).json({
//             message : "names displayed",
//             viewUsernames
//         })
//     } catch (error) {
//         res.status(404).json({
//             message : error.message
//         })
//     }
// }

exports.countOfEmp = async(req, res) => {
    try {
        const getCount = employeeSchema.find();
        res.status(200).json({
            message : "count displayed",
            getCount : (await getCount).length
        })
    } catch (error) {
        res.status(404).json({
            message : error.message
        })
    }
}

exports.updateEmp = async(req, res) => {
    try {
        const updateData = await employeeSchema.findOneAndUpdate(req.query, req.body, {
            new : true, 
            runValidators : true
        })
        res.status(200).json({
            message : "emloyee data updated successfully",
            updateData
        })
    } catch (error) {
        res.status(404).json({
            message : "data not updated",
            error : error.message
        })
    } 
}