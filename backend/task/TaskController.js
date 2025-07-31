const taskModel = require('./taskSchema');
const projectModel = require('../project/projectSchema')

exports.addTask = async(req, res) =>{
    try {
        const checkTask = await taskModel.findOne({taskname : req.body.taskname});
        if(checkTask){
            res.status(404).json({
                message : "taskname already exist"
            })
        }
        else{
            const addTask = await taskModel.create(req.body);
            // let tasks = [];
            // tasks.push(req.body.taskname);
            // console.log(tasks);
            const getProject = await projectModel.findOne({ projectname : req.body.projectname});
            const updTaskInPro =  getProject.tasks;
            updTaskInPro.push(req.body.taskname);
            const viewProject = await projectModel.findOneAndUpdate({ projectname : req.body.projectname},
                                {tasks : updTaskInPro},{
                                new:true,  
                                runValidators:true 
                                });
            res.status(200).json({
                message : "task added in " + req.body.projectname,
                addTask
            })
        }
    } catch (error) {
        res.status(404).json({
            message : error.message
        })
    }
}


exports.viewAllTask = async(req, res) => {
    try {
        const viewTask = await taskModel.find();
        res.status(200).json({
            message : "task displayed",
            viewTask
        })
    } catch (error) {
        res.status(404).json({
            message : error.message
        })
    }
}

exports.viewOneTask = async(req, res) => {
    try {
        // const viewTask = await taskModel.find({taskname : req.query.taskname}) || await taskModel.find({employeesToAdd : req.query.employeesToAdd});
        const viewTask = await taskModel.find(req.query) 
        res.status(200).json({
            message : "task displayed",
            viewTask
        })
    } catch (error) {
        res.status(404).json({
            message : error.message
        })
    }
}

exports.updateTask = async(req, res) =>{
    try {  
        const updateTask = await taskModel.findOneAndUpdate(req.query,
                                                            req.body,
                                                            {
                                                            new : true,
                                                            runValidators : true
                                                            });
        const updTNameInPro = await projectModel.updateOne({tasks : req.query.taskname},{$set :{ "tasks.$" : req.body.taskname }})
        // console.log(updTNameInPro)
        res.status(200).json({
            message : "task updated",
            updateTask
        })
    } catch (error) {
        res.status(404).json({
            message : error.message
        })
    }
}

exports.countOfCompSts = async(req, res) => {
    try {
        const compStatus = await taskModel.find(req.query , { "status" : 1 , "_id" : 0});
        res.status(200).json({
            message : "count displayed",
            compStatus : compStatus.length
        })
    } catch (error) {
        res.status(404).json({
            message : error.message
        })
    }
}

exports.getTaskForEMp = async(req, res) => {
    try {
        // const viewTask = await taskModel.find({taskname : req.query.taskname}) || await taskModel.find({employeesToAdd : req.query.employeesToAdd});
        const viewTask = await taskModel.find(req.query);
        res.status(200).json({
            message : "task displayed",
            viewTask
        })
    } catch (error) {
        res.status(404).json({
            message : error.message
        })
    }   
}