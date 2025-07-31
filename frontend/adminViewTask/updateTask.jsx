import React , { useEffect, useState } from "react";
  import axios from 'axios';
  import { useNavigate, useLocation } from 'react-router-dom';
  import '../addTask/addTask.css';
//   import task from './task.json';
import Navbar from '../AdminNavBar/Nav'
// import allEmp from './allEmp.json';
  function UpdateTask() {
    const navigate = useNavigate()
    const location=useLocation();
    const[projecttask,setProjecttask]=useState(location.state);

    const[assignedtask,setAssignedTask]=useState(projecttask.employeesToAdd.map((e)=>e.empName))
    const[totalemp,setTotalEmp]=useState([]);
    const [projectname, setProjectname] = useState('');
      const [updateTask, setupdateTask] = useState({
        taskname : projecttask.taskname,
        projectname : projecttask.projectname,        
        description : projecttask.description,
        assignDate : projecttask.assignedDate,
        deadline : projecttask.deadline,
        employeesToAdd : [],
        status :projecttask.status
      });
      const [viewEmpInPro, setViewEmpInPro] = useState([])
      const [key, setKey] = useState(0);
      const[error,setError]= useState({});

      useEffect(() => {
    console.log(assignedtask)
        console.log(projecttask)
        axios.get(`http://127.0.0.1:3012/taskmanger/inns/api/project/getEmpInPro?projectname=${projecttask.projectname}`,{
            headers : {
                "Content-Type" : "application/json"
            }
        }).then((res)=>{
            console.log(res.data);
            setTotalEmp(res.data.empName)
        }).catch((err)=>{
            console.log(err);
        })
          
        if (updateTask.assignDate && updateTask.deadline) {
          let a = updateTask.assignDate.split('-').reverse().join('-');
          setupdateTask((prevAddEmp) => ({ ...prevAddEmp, assignDate: a }));
      
          let b = updateTask.deadline.split('-').reverse().join('-');
          setupdateTask((prevAddEmp) => ({ ...prevAddEmp, deadline: b }));
        }
        
        
       
      }, []);

        // console.log(assignedtask)

      const validateError=()=>{
        let err={};
        if(updateTask.taskname===""){
          err.taskname="Fill this field"
        }
        if(updateTask.projectname==="")
        {
          err.projectName="Fill this field"
        }
        if(updateTask.description==="")
        {
          err.description="Fill this field"
        }
        if(updateTask.assignDate==="")
        {
          err.assignDate="Fill this field"
        }
        if(updateTask.deadline==="")
        {
          err.deadline="Fill this field"
        }
        if(updateTask.employeesToAdd.length===0)
        {
          err.employeesToAdd="select one employee"
        }
        if(updateTask.status==="")
        {
          err.status="Select the status"
        }
        return err;
      }

      // console.log(updateTask.employeesToAdd[1]);
      const changeAddTask = (e) => {
        setupdateTask({...updateTask, [e.target.name] : e.target.value });
      }

      const handleCheckbox=(e)=>{
        const { value, checked } = e.target;
        if (checked) {
            // If checkbox is checked, add the value to the array
            setAssignedTask(prevAssignedTask => [...prevAssignedTask, value]);
            setupdateTask(prevUpdateTask => ({ ...prevUpdateTask, employeesToAdd: [...prevUpdateTask.employeesToAdd, value] }));
        } else {
            // If checkbox is unchecked, remove the value from the array
            setAssignedTask(prevAssignedTask => prevAssignedTask.filter(task => task !== value));
            setupdateTask(prevUpdateTask => ({ ...prevUpdateTask, employeesToAdd: prevUpdateTask.employeesToAdd.filter(task => task !== value) }));
        }
         
      }
    
      const submitAddTask = (e) => {
        e.preventDefault()
        // e.preventDefault();
        setError(validateError);
        // setupdateTask({...employeesToAdd,})
        console.log(updateTask)
   
        if(updateTask.taskname!=='' && updateTask.description!=="" && updateTask.projectname!=="" && updateTask.assignDate!=="" && updateTask.deadline!=="" && updateTask.employeesToAdd.length!==0 && updateTask.status!==""){
            setupdateTask({
            taskname: '',
            projectName: '',
            description: "",
            assignDate: '',
            deadline: "",
            employeesToAdd:[],
            status: ''
        });
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.checked = false;
        });
    
        }
        navigate('/adminViewTask')
        
      }

      return (
        <>
            <div className="totalDashBoardDiv">
                <div className="navDiv" id="navDiv">
                <Navbar/>
                </div>
                <div className="content-wrapper content-addtask" id="content-wrapper" >
                <div className="content">
                    <section className="addtask">
                    <div className="titleClass">
                        <h1>Task  Manager</h1>
                        <h4>Update a task for {updateTask.projectName} project</h4>
                    </div>
                    <form>
                        <div className="addtaskForm">
                        <input type='text' placeholder='taskname' name='taskname' value={updateTask.taskname} onChange={changeAddTask} className="form-inputs" />
                        <br /> 
                        <p>{error.taskname}</p><br />
                        <textarea type='text' placeholder='decription' rows='5' name='description' value={updateTask.description} onChange={changeAddTask} className="form-inputs text-area"></textarea>
                        <br />
                        <p>{error.description}</p><br />
                        <input type='text' placeholder={projectname}  name='projectName' value={updateTask.projectname} onChange={changeAddTask} className="form-inputs" readOnly/>
                        <br />
                        <p>{error.projectName}</p><br />
                        <div className="date-align">
                        <div>
                            <label>AssignDate &nbsp;</label> 
                            <input type='date' placeholder='MM/DD/YYYY' name='assignDate' value={updateTask.assignDate} onChange={changeAddTask} className="form-inputs date-input"  id="start" />
                            <br /> 
                            <p>{error.assignDate}</p><br />
                        </div>
                        <div>
                            <label>Dead line &nbsp;</label>
                            <input type='date' placeholder='deadline' name='deadline' value={updateTask.deadline} onChange={changeAddTask} className="form-inputs date-input" id="dead"/>
                            <br />
                            <p>{error.deadline}</p><br />
                        </div>
                        </div>
                        <label >Employess To Add</label> <br />
                        <div style={{display: "flex",flexWrap:" wrap",width:" 500px",margin:"28px 146px"}}>

                        {
                        totalemp.map((e,i)=>{
                            console.log(assignedtask.includes(e))
                            return(
                            <>
                            <span style={{width:"150px",textAlign:"justify"}}>
                                <input type="checkbox" name="employeesToAdd" value={e}  checked={assignedtask.includes(e)} onChange={handleCheckbox} className="checkbox"/>&nbsp; &nbsp; &nbsp;
                                <label>{e}</label> &nbsp; &nbsp; &nbsp; &nbsp;
                            </span>
                            
                            </>
                            )
                        })
                        }
                        </div>
                        <br />
                        <br /> <p>{error.employeesToAdd}</p>
                        <select name='status' value={updateTask.status} onChange={changeAddTask} className="form-inputs" placeholder='select'>
                            <option value="">Select status</option>
                            <option value="assigned">assigned</option>
                            <option value="in process">in process</option>
                            <option value="completed">completed</option>
                        </select>
                        <br /> <p>{error.status}</p><br />
                        <button onClick={submitAddTask} className="butn-form">Update task</button>
                        </div>
                    </form>
                    </section>
                </div>
                </div>
            </div>
        </>
      );
    }
  export default UpdateTask