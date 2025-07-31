const mongoose = require('mongoose');
const adminModel = require('./adminSchama');
const bcrypt = require('bcrypt');

exports.postAdmin = async (req, res) => {
    try {
        const insertAdmin = adminModel.create(req.body);
        res.status(201).json({
            message : "admin created",
            insertAdmin
        })
    } catch (error) {
        res.status(404).json({
            message:"data not inserted",
            error : error.message
        }) 
    }
}

exports.loginAdmin = async(req, res) =>{
    try {
        let getadminData = await adminModel.find(req.query);
            getadminData = getadminData[0];
        // const getadminData = await adminModel.findOne({username : req.body.username})
        if(getadminData){
            // console.log(getadminData.password)
            bcrypt.compare(req.body.password, getadminData.password, (err,result)=>{
                // console.log(req.body.password, getadminData.password)
                if(result){
                    res.status(200).json({
                        message : "login successfully",
                        result
                    });  
                }
                else{
                    res.status(404).json({
                        message : "Login failed, Incorrect password",
                        err 
                    })
                }
            })
        }
        else{
            res.status(404).json({
                message : "admin not found, register admin",
                getadminData
            })
        }
        
    } catch (error) {
        res.status(404).json({
            message : error.message
        })
    }
}