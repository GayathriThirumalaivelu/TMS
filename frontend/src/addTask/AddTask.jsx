import React , { useEffect, useState } from "react";
  import axios from 'axios';
  import { useNavigate } from 'react-router-dom';
  import './addTask.css'
  import Navbar from '../AdminNavBar/Nav'

  function AddTask() {
    const [projDetail, setProjDetail] = useState([])
    const [projectname, setProjectname] = useState([]);
    const [empToAdd, setEmpToAdd] = useState([]);
      const [addTask, setAddTask] = useState({
        taskname : "",
        projectname : "",        
        description : "",
        assignedDate : "",
        deadline : "",
        employeesToAdd : [],
        status : ""
      });
      const [viewEmpInPro, setViewEmpInPro] = useState([])
      const navigate = useNavigate();
      const [key, setKey] = useState(0);
      const[error,setError]= useState({});


      useEffect(()=>{
        axios.get(`http://127.0.0.1:3012/taskmanager/api/employee/getProjectname`,{
          headers: {
            "Content-Type": "application/json"
          }
        }).then((res)=>{
          setProjDetail(res.data.viewProjectnames)
                  
        }).catch ((error) =>{
          console.log(error);
        })
       
      // let isMounted = true; // Flag to track component mount state
      // const fetchData = async () => {
      //   try {
      //     const response = await axios.get(`http://127.0.0.1:3012/taskmanger/inns/api/project/getEmpInPro?projectname=${empToAddProj}`, {
      //       headers: {
      //         "Content-Type": "application/json"
      //       }
      //     });
      //     console.log(response.data);
      //     console.log(response.data.empName);
      //     if (isMounted) { // Check if component is still mounted before updating state
      //       setViewEmpInPro(response.data.empName);
      //     }
      //     // console.log(viewEmpInPro)
      //   } catch (error) {
      //     console.log(error);
      //   }
      // };
    
      // fetchData(); // Call the async function
      // // console.log(viewEmpInPro)
      // // Cleanup function to set isMounted to false when component unmounts
      // return () => {
      //   isMounted = false;
      // };

    }, []);

    useEffect(() => {
      // console.log("ViewEmpInPro after state update:", viewEmpInPro);
      console.log(empToAdd)

      // setEmpToAdd(projDetail.map((e)=>e.employeesToAdd));
      setProjectname(projDetail.map((e)=>e.projectname));
    },[projDetail,empToAdd]);

    const validateError=()=>{
        let err={};
        if(addTask.taskname===""){
          err.taskname="* Please fill this field"
        }
        if(addTask.projectname==="")
        {
          err.projectName="* Please fill this field"
        }
        if(addTask.description==="")
        {
          err.description="* Please fill this field"
        }
        if(addTask.assignedDate==="")
        {
          err.assignDate="* Please fill this field"
        }
        if(addTask.deadline==="")
        {
          err.deadline="* Please fill this field"
        }
        if(addTask.employeesToAdd.length===0)
        {
          err.employeesToAdd="* Please select Employees"
        }
        if(addTask.status==="")
        {
          err.status="* Please select status"
        }
        return err;
    }

    const changeEmpinProj = (e) =>{
      let selectedProject = e.target.value;
      let selectedProjectDetails = projDetail.find((x) => x.projectname === selectedProject);
      console.log(selectedProjectDetails);
    
      setEmpToAdd(selectedProjectDetails.employeesToAdd); // Set the employees to add
      console.log(empToAdd);
    
      setAddTask({ ...addTask, projectname: selectedProject }); // Set the selected project name
    };
    
    
      const changeAddTask = (e) => {
          setAddTask({...addTask, [e.target.name] : e.target.value });
      }

      // const handleCheckbox = (e) => {
      //   const employeeName = e.target.value;
      //   const isChecked = e.target.checked;
      
      //   setAddTask((prevAddTask) => {
      //     let updatedEmployeesToAdd = [...prevAddTask.employeesToAdd];
      
      //     if (isChecked) {
      //       // If checkbox is checked, add the employee object to the array
      //       updatedEmployeesToAdd.push({ empName: employeeName });
      //     } else {
      //       // If checkbox is unchecked, remove the employee object from the array
      //       updatedEmployeesToAdd = updatedEmployeesToAdd.filter((employee) => employee.empName !== employeeName);
      //     }
      
      //     // Ensure that each object in updatedEmployeesToAdd has the empName field
      //     updatedEmployeesToAdd = updatedEmployeesToAdd.map((employee) => {
      //       if (!employee.empName) {
      //         return { ...employee, empName: employeeName };
      //       }
      //       return employee;
      //     });
      
      //     return { ...prevAddTask, employeesToAdd: updatedEmployeesToAdd };
      //   });
      // };
      
      const handleCheckbox = (e) => {
        const employeeName = e.target.value;
        const isChecked = e.target.checked;
      
        setAddTask((prevAddTask) => {
          let updatedEmployeesToAdd = [...prevAddTask.employeesToAdd];
      
          if (isChecked) {
            // If checkbox is checked and the employee doesn't exist in the array, add it
            if (!updatedEmployeesToAdd.some(employee => employee.empName === employeeName)) {
              updatedEmployeesToAdd.push({ empName: employeeName });
            }
          } else {
            // If checkbox is unchecked, remove the employee object from the array
            updatedEmployeesToAdd = updatedEmployeesToAdd.filter((employee) => employee.empName !== employeeName);
          }
      
          return { ...prevAddTask, employeesToAdd: updatedEmployeesToAdd };
        });
      };
      
      
    
      const submitAddTask = (e) => {
        e.preventDefault();
        setError(validateError);
        console.log(addTask);
        axios.post('http://127.0.0.1:3012/taskmanger/inns/api/task/addTask', addTask, {
          headers: {
            "Content-Type": "application/json"
          }
        }).then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
        



      if(addTask.taskname!=='' && addTask.description!=="" && addTask.projectname!=="" && addTask.assignedDate!=="" && addTask.deadline!=="" && addTask.employeesToAdd.length!==0 && addTask.status!==""){
        setAddTask({
          taskname: '',
          projectName: '',
          description: "",
          assignedDate: '',
          deadline: "",
          employeesToAdd:[{}],
          status: ''
        });
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
          checkbox.checked = false;
        });
    
      }

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
                    <h4>Create a task for {} project</h4>
                  </div>
                  <form>
                    <div className="addtaskForm">
                    <input type='text' placeholder='taskname' name='taskname' value={addTask.taskname} onChange={changeAddTask} className="form-inputs" />
                    <br /> 
                    <p>{error.taskname}</p><br />
                    <textarea type='text' placeholder='decription' rows='5' name='description' value={addTask.description} onChange={changeAddTask} className="form-inputs text-area"></textarea>
                    <br />
                    <p>{error.description}</p><br />
                    {/* <input type='text' placeholder={projectname} name='projectName' defaultValue={projectname} readOnly onChange={changeAddTask} className="form-inputs"/> */}
                    
                    <select className="form-inputs" name="projectName" value={addTask.projectname} onChange={changeEmpinProj}>
                      <option value="">Select Project Name</option>
                      {
                       projectname.map((e)=>{
                          return(
                            <>
                            <option value={e}>{e}</option>
                            </>
                          )
                        })
                      }
                    </select>
                    <br />
                    <p>{error.projectName}</p><br />
                    <div className="date-align">
                      <div>
                        <label>AssignDate &nbsp;</label> 
                        <input type='date' placeholder='MM/DD/YYYY' name='assignedDate' value={addTask.assignedDate} onChange={changeAddTask} className="form-inputs date-input"  id="start" />
                        <br /> 
                        <p>{error.assignDate}</p><br />
                      </div>
                      <div>
                        <label>Dead line &nbsp;</label>
                        <input type='date' placeholder='deadline' name='deadline' value={addTask.deadline} onChange={changeAddTask} className="form-inputs date-input" id="dead"/>
                        <br />
                        <p>{error.deadline}</p><br />
                      </div>
                    </div>
                    <label >Employess To Add</label> <br />
                    {
                      empToAdd.map((e,i)=>{
                        return(
                          <span key={i}>
                            <input type="checkbox" name="employeesToAdd" value={e} onChange={handleCheckbox} className="checkbox"/>
                            <label>{e}</label> &nbsp; &nbsp; &nbsp; &nbsp;
                          </span>
                        )
                      })
                    }
                    <br /> <p>{error.employeesToAdd}</p> <br />
                    <select name='status' value={addTask.status} onChange={changeAddTask} className="form-inputs" placeholder='select'>
                        <option value="">Select status</option>
                        <option value="assigned">assigned</option>
                        <option value="in process">in process</option>
                        <option value="completed">completed</option>
                    </select>
                    <br /> <p>{error.status}</p><br />
                    <button onClick={submitAddTask} className="butn-form">Add task</button>
                    </div>
                  </form>
                </section>
              </div>
            </div>
          </div>
        </>
      );
    }
  export default AddTask