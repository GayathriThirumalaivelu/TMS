const express = require('express');
const app = express();
const mongoose = require('mongoose');
const adminhandler = require('./admin/adminHandler');
const taskHandler = require('./task/TaskController');
const empHandler = require('./employee/employeeHandler');
const projectHandler = require('./project/projectController');
const otherdataController = require('./otherdata/otherdataContr')
const cors = require('cors');
const empSchema = require('./employee/employeeSchema')

app.use(express.json());
app.use(cors())

// create admin
app.post('/taskmanger/inns/api/admin/createAdmin', adminhandler.postAdmin);
// login admin
app.post('/taskmanger/inns/api/admin/loginadmin' , adminhandler.loginAdmin);



// add task
app.post('/taskmanger/inns/api/task/addTask', taskHandler.addTask);
// view task
app.get('/taskmanger/inns/api/task/viewAllTask', taskHandler.viewAllTask);
app.get('/taskmanger/inns/api/task/viewOneTask', taskHandler.viewOneTask);
// update task
app.patch('/taskmanger/inns/api/task/updateTask', taskHandler.updateTask);
// get count of completed task
app.get('/taskmanger/inns/api/task/countOfCompSts', taskHandler.countOfCompSts);
// get task for emp
app.get('/taskmanager/api/employee/getTaskForEmp', taskHandler.getTaskForEMp)



// emp
app.post('/taskmanager/inns/api/employee/create',empHandler.postEmployee);
app.post('/taskmanager/inns/api/employee/login',empHandler.postempLogin);
// view one emp data
app.get('/taskmanger/inns/api/employee/viewOneEmp', empHandler.viewOneEmp);
// getEmp username & Emprole
app.get('/taskmanager/api/employee/getUsername',empHandler.getUsername);
// get fn & ln of Emp
// app.get('/taskmanager/api/employee/getNameOfEmp',empHandler.getNameOfEmp);
// get count of Emp
app.get('/taskmanager/api/employee/getCountOfEmp', empHandler.countOfEmp);
// update emp profile
app.patch('/taskmanager/api/employee/updateEmpProfile', empHandler.updateEmp);



// add project
app.post('/taskmanger/inns/api/project/addProject', projectHandler.addProject);
// view project
app.get('/taskmanger/inns/api/project/viewAllProject', projectHandler.viewAllProject);
app.get('/taskmanger/inns/api/project/viewOneProject', projectHandler.viewOneProject);
// get emp name in one project
app.get('/taskmanger/inns/api/project/getEmpInPro', projectHandler.getEmpInPro);
// get count of project
app.get('/taskmanager/api/project/getCountOfPro', projectHandler.countOfProject);
// get dead line for project
app.get('/taskmanager/api/project/getDeadline', projectHandler.getDateOfDeadLine);
// update project
app.patch('/taskmanager/api/project/updateProject', projectHandler.updateProject);
// getEmp project & Empname in projects
app.get('/taskmanager/api/employee/getProjectname',projectHandler.getProjectname);
// get proj for emp  ====  need to pass query
app.get('/taskmanager/api/employee/getProjForEmp', projectHandler.getProjForEMp)


// otherdata (sector, app type, tech, s/w)
app.get('/taskmanger/inns/api/otherdata/getDataInOtherData',otherdataController.viewOtherData)


// // adding / updating task into project
// app.post('/taskmanger/inns/api/project/addTaskInPro', projectHandler.addTasksInPro);

// // deleting task from project
// app.post('/taskmanger/inns/api/project/deleteTaskInPro', projectHandler.deleteTaskInPro)


app.listen(3012, '127.0.0.1' , ()=>{
    console.log('server started.');
})

mongoose.connect('mongodb://127.0.0.1:27017/TaskManager', 
// { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => {
    return empSchema.collection.dropIndex('userRole_1');
})
.then(() => {
    console.log('Unique index on userRole field dropped successfully');
    console.log('db connected')
})
.catch((error) => {
    console.log('Error dropping unique index:', error);
});
