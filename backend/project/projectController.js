const projectModel = require('./projectSchema');

exports.addProject = async(req, res) =>{
    try {
        const checkProject = await projectModel.findOne({projectname : req.body.projectname});
        if(checkProject){
            res.status(404).json({
                message : "project name already exist"
            })
        }
        else{
            const addProject = await projectModel.create(req.body);
            res.status(200).json({
                message : "project added",
                addProject
            })
        }
    } catch (error) {
        res.status(404).json({
            message : error.message
        })
    }
}


exports.viewAllProject = async(req, res) => {
    try {
        const viewProject = await projectModel.find();
        res.status(200).json({
            message : "task displayed",
            viewProject
        })
    } catch (error) {
        res.status(404).json({
            message : error.message
        })
    }
}


exports.viewOneProject = async(req, res) => {
    try {
        // const viewTask = await taskModel.find({taskname : req.query.taskname}) || await taskModel.find({employeesToAdd : req.query.employeesToAdd});
        const viewProject = await projectModel.find(req.query) 
        res.status(200).json({
            message : "task displayed",
            viewProject
        })
    } catch (error) {
        res.status(404).json({
            message : error.message
        })
    }
}

exports.getEmpInPro = async(req, res) => {
    try {
        const viewEmpInPro = await projectModel.find(req.query);
        const empName = viewEmpInPro[0].employeesToAdd
        res.status(200).json({
            message : "Emp in project displayed",
            empName
        })
    } catch (error) {
        res.status(404).json({
            message : error.message
        })
    }
}

// exports.addTasksInPro = async(req, res) => {
//     try {
//         // let tasks = [];
//         // tasks.push(req.body.taskname);
//         // console.log(tasks)
//         const tsk = await projectModel.findOne({ projectname : req.body.projectname});
//         let t = tsk.tasks;
//         console.log(t.push(req.body.taskname))
//         const viewProject = await projectModel.findOneAndUpdate({ projectname : req.body.projectname},
//                             {tasks : t},{
//                              new:true,  
//                              runValidators:true 
//                             }); 
//         console.log(viewProject);
//         res.status(200).json({
//             message : "task updated",
//             // viewProject
//         })
//     } catch (error) {
//         res.status(404).json({
//             message : error.message
//         })
//     }
// }


exports.deleteTaskInPro = async(req, res) => {
    try {
        const tsk = await projectModel.findOne({ projectname : req.body.projectname});
        // let t = tsk.tasks;
        let ta = tsk.tasks.find((e)=> e == req.body.taskname);
        console.log(ta)
        const tas = await projectModel.updateOne({
                                            projectname : req.body.projectname }, {
                                            $pull: { tasks: ta}
                                        })
        console.log(tas)
    } catch (error) {
        res.status(404).json({
            message : error.message
        })
    }
}



exports.countOfProject = async(req, res) => {
    try {
        const getCount = projectModel.find();
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


exports.getDateOfDeadLine = async(req, res) => {
    try {
        const getdate = await projectModel.find(req.query , {deadline : 1, projectname:1 , "_id" : 0});
        res.status(200).json({
            message : "count displayed",
            getdate : getdate
        })
    } catch (error) {
        res.status(404).json({
            message : error.message
        })
    }
}

exports.getProjectname = async(req, res) => {
    try {
        const viewProjectnames = await projectModel.find({}, {projectname : 1, employeesToAdd : 1,"_id" : 0});
        res.status(200).json({
            message : "project names displayed",
            viewProjectnames
        })
    } catch (error) {
        res.status(404).json({
            message : error.message
        })
    }
}


exports.updateProject = async(req, res) => {
    try {
        const updateProject = await projectModel.findOneAndUpdate(req.query, req.body, {
            new : true, 
            runValidators : true
        })
        res.status(200).json({
            message : "project data updated successfully",
            updateProject
        })
    } catch (error) {
        res.status(404).json({
            message : "data not updated",
            error : error.message
        })
    } 
}

exports.getProjForEMp = async(req, res) => {
    try {
        // const viewTask = await taskModel.find({taskname : req.query.taskname}) || await taskModel.find({employeesToAdd : req.query.employeesToAdd});
        const viewProject = await projectModel.find(req.query) 
        res.status(200).json({
            message : "project displayed",
            viewProject
        })
    } catch (error) {
        res.status(404).json({
            message : error.message
        })
    }   
}