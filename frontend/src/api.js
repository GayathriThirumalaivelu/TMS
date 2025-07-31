// api for sector , tech, app type, s/w
// no need to pass query
'127.0.0.1:3012/taskmanger/inns/api/otherdata/getDataInOtherData'


// getCount of Emp to create emp no in create employee
'127.0.0.1:3012/taskmanager/api/employee/getCountOfEmp'

// getCount of project for dashboard
'127.0.0.1:3012/taskmanager/api/project/getCountOfPro'

// get count of completed task for dashboard
// pass query 1. completed     2. in process
'http://127.0.0.1:3012/taskmanger/inns/api/task/countOfCompSts?status='

// get task assigned for an emp
'http://127.0.0.1:3012/taskmanger/inns/api/task/viewOneTask?employeesToAdd=${username}'
// get project assugned to an emp
'http://127.0.0.1:3012/taskmanger/inns/api/project/viewOneProject?employeesToAdd=${username}'

// get date for deadline alert


// get name of emp for list of emp
'http://127.0.0.1:3012/taskmanager/api/employee/getNameOfEmp'
