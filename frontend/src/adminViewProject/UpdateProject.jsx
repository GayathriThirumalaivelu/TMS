import React , { useEffect, useState,} from "react";
import axios from 'axios';
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
// import { Location } from "react-router-dom";

import './updateProject.css';
import Navbar from '../AdminNavBar/Nav'

function UpdateProject() {
  const navigate = useNavigate()
    const location=useLocation();
   const[updateData,setUpdateData]=useState(location.state);

   const[emp,setEmp]=useState([])
   const[mgrname,setMgrname]=useState([]);
   const[tL,setTL]=useState([])
   const[sector,setSector]=useState([])
   const[software,setSoftware]=useState([])
   const[technology,setTechnology]=useState([])
   const[appType,setAppType]=useState([]);
   const [assignedEmp,setAssignedEmp] = useState(updateData.employeesToAdd.map((e)=>e))
   const [assignedTech, setAssignedTech] = useState(updateData.technologies.map((e)=>e));
   const [assignedSw, setAssignedSw] = useState(updateData.softwareUsing.map((e)=>e))
     const [updateProject, setUpdateProject] = useState({
       projectname : updateData.projectname,
       description :  updateData.description,
       assignedDate :  updateData.assignedDate,
       deadline :  updateData.deadline,
       tasks : updateData.tasks,
       employeesToAdd : updateData.employeesToAdd.map((e)=>e),
       status : updateData.status,
       softwareUsing : updateData.softwareUsing.map((e)=>e),
       technologies : updateData.technologies.map((e)=>e),
       sector :  updateData.sector,
       teamLeder :  updateData.teamLeder,
       manager :  updateData.manager,
       applicationType :  updateData.applicationType,
       budget :  updateData.budget
     });
     const[error,setError]=useState({});


   
     useEffect(()=>{
      // console.log(assignedSw)
      console.log(updateData)
      axios.get('http://127.0.0.1:3012/taskmanger/inns/api/otherdata/getDataInOtherData',{
            headers : {
                "Content-Type" : "application/json"
            }
        }).then((res)=>{
          // console.log(res)
            let data = res.data.viewOtherData[0];
            // console.log(data);
            setSector(data.sector);
            // console.log(data.sector)
            setTechnology(data.technologies);
            // console.log(data.technologies)
            setSoftware(data.softwareUsing);
            // console.log(data.softwareUsing)
            setAppType(data.applicationType);
        }).catch((err)=>{
            console.log(err);
        })

        axios.get('http://127.0.0.1:3012/taskmanager/api/employee/getUsername',{
            headers : {
                "Content-Type" : "application/json"
            }
        }).then((res)=>{
            let data = res.data.viewUsernames;
            // console.log(data);
            let mgrData = data.filter((e)=>e.userRole == "Manager");
            setMgrname(mgrData);
            let teamlead=data.filter((e)=>e.userRole=== "TL"  )
            setTL(teamlead);
            let employee= data.filter((e)=>{
              let emp = (e.userRole !== "TL" && e.userRole !== "Manager");
              // console.log(emp);
              return emp;
            })
            setEmp(employee);
    
        }).catch((err)=>{
            console.log(err);
        })
      
    },[]);

    const handleEmpCheckbox=(e)=>{
      const { value, checked } = e.target;
      if (checked) {
          // If checkbox is checked, add the value to the array
          // setAssignedEmp(prevAssignedEmp => [...prevAssignedEmp, value]);
          // setAssignedTech(prev => [...prev, value]);
          // setAssignedSw(prev => [...prev, value]);
          setUpdateProject(updateProject => ({ ...updateProject, employeesToAdd: [...updateProject.employeesToAdd, value]}));
          console.log(assignedEmp)
          // setUpdateProject(prevUpdateProj => ({ ...prevUpdateProj, technologies: [...prevUpdateProj.technologies, value]}))
          // setUpdateProject(prevUpdateProj => ({ ...prevUpdateProj, softwareUsing: [...prevUpdateProj.softwareUsing, value]}));

      } else {
          // If checkbox is unchecked, remove the value from the array
          // setAssignedEmp(prevAssignedEmp =>prevAssignedEmp.filter(task => task !== value));
          // setAssignedTech(prev =>prev.filter(task => task !== value));
          // setAssignedSw(prev =>prev.filter(task => task !== value));
          setUpdateProject(prevUpdateProj => ({ ...prevUpdateProj.employeesToAdd, employeesToAdd: [...prevUpdateProj.employeesToAdd, value]}));
          // setUpdateProject(prevUpdateProj => ({ ...prevUpdateProj.technologies, technologies: [...prevUpdateProj.technologies, value]}))
          // setUpdateProject(prevUpdateProj => ({ ...prevUpdateProj.softwareUsing, softwareUsing: [...prevUpdateProj.softwareUsing, value]}));
      
        }
    }

    const handleTechCheckbox = (e) => {
      const { value, checked } = e.target;
      if (checked) {
          // If checkbox is checked, add the value to the array
          // setAssignedTech(prev => [...prev, value]);
          setUpdateProject(prevUpdateProj => ({ ...prevUpdateProj, technologies: [...prevUpdateProj.technologies, value]}))

      } else {
          // If checkbox is unchecked, remove the value from the array
          // setAssignedTech(prev =>prev.filter(task => task !== value));
          setUpdateProject(prevUpdateProj => ({ ...prevUpdateProj.technologies, technologies: [...prevUpdateProj.technologies, value]}))
      
        }
    }

    const handleSWCheckbox = (e) => {
      const { value, checked } = e.target;
      if (checked) {
          // If checkbox is checked, add the value to the array
          // setAssignedSw(prev => [...prev, value]);
          setUpdateProject(prevUpdateProj => ({ ...prevUpdateProj, softwareUsing: [...prevUpdateProj.softwareUsing, value]}));

      } else {
          // If checkbox is unchecked, remove the value from the array
          // setAssignedSw(prev =>prev.filter(task => task !== value));
          setUpdateProject(prevUpdateProj => ({ ...prevUpdateProj.softwareUsing, softwareUsing: [...prevUpdateProj.softwareUsing, value]}));
        }
    }

    const changeUpdateProj = (e) => {
      setUpdateProject({...updateProject, [e.target.name] : e.target.value });
    }

    const submitUpdateTask = (e) => {
      e.preventDefault();
      console.log(updateProject);
      axios.patch(`http://127.0.0.1:3012/taskmanager/api/project/updateProject?projectname=${updateProject.projectname}`, updateProject, {
        headers: {
            "Content-Type": "application/json" // corrected typo
        }
    }).then(res => {
        console.log(res.data); // Log response data
        alert("Updated successfully");
    }).catch(err => {
        console.error("Update failed:", err);
    });
    
      if (updateProject.assignedDate!=="" && updateProject.budget!==""&& updateProject.deadline!==""&& updateProject.description!==""  && updateProject.employeesToAdd.length!==0 && updateProject.projectname!==""&& updateProject.status!==""&& updateProject.sector!=="" && updateProject.manager!=="" && updateProject.teamLeder!=="" && updateProject.applicationType!=="" && updateProject.softwareUsing.length!==0&& updateProject.technologies.length!==0) {      
        setUpdateProject({
          assignedDate:"",
          status:"",
          deadline:"",
          description:"",
          budget:"",
          projectname:"",
          employeesToAdd:[],
          applicationType:"",
          sector:"",
          manager:"",
          technologies:[],
          tL:"",
          softwareUsing:[]
        })
          // setAppType([])
          // setSector([]);
          // // setEmp([]);
          // setMgrname([])
          // // setSoftware([])
          // setTL([])
          // setTechnology([]);
        
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
          checkbox.checked = false;
        });
      }
      navigate('/adminViewProj');
    }

    return (
      <>
      <div className="totalDiv totalDashBoardDiv">
        <div className="navDiv" id='navDiv'>
          <Navbar/>
        </div>
        <div className="content-wrapper" id='content-wrapper'>
          <div className="content">
            <div id="updateProjectContainer">
            <div className="titleClass">
              <h1>Task  Manager</h1>
              <h4>Update the data of project {updateProject.projectname}</h4>
            </div>
            <form>
              <input type='text' readOnly name='projectname' defaultValue={updateProject.projectname} onChange={changeUpdateProj}/>
              <br /> <p>{error.projectname}</p>
              <br />
              <textarea placeholder='decription' rows='5' name='description' defaultValue={updateProject.description} onChange={changeUpdateProj}></textarea>
              <br /><p>{error.description}</p><br />
              <div id='date'>
                <div>
                  <label>AssignDate</label>
                  <input type='date'className="data" placeholder='assignedDate' name='assignedDate' defaultValue={updateProject.assignedDate} onChange={changeUpdateProj}/>
                  <br /><p>{error.assignedDate}</p><br />
                </div>
              <div>
              <label>Dead line</label>
              <input type='date' className="data" placeholder='deadline' name='deadline' defaultValue={updateProject.deadline} onChange={changeUpdateProj}/>
              <br /><p>{error.deadline}</p><br />
              </div>
              </div>
              <div id='date'>
                <div>
                        <label>Manager </label>&nbsp;
                        <select className="select" name="manager" value={updateProject.manager} onChange={changeUpdateProj}>
                          {
                            mgrname.map((e)=>{
                              return(
                                <>
                                  <option value={e.firstname + e.lastname}>{e.firstname + e.lastname}</option>
                                </>
                              )
                            })
                          }
                        </select>
                </div>
                <div>
                  
            <label>Team Leader </label>
            <select className="select" name="teamLeder" style={{marginLeft:"5px"}} value={updateProject.teamLeder} onChange={changeUpdateProj}>
                {
                  tL.map((e)=>{
                    return(
                      <>
                        <option value={e.firstname + e.lastname}>{e.firstname + e.lastname}</option>
                      </>
                    )
                  })
                } 
              </select>
              </div>
              </div><br></br>
              <div id='date'>
                <div>
                  <label>Sector      &nbsp;</label>
                  <select className="select" name="sector" style={{marginLeft:"47px"}} value={updateProject.sector} onChange={changeUpdateProj}>
                      {
                        sector.map((e)=>{
                          return(
                            <>
                              <option value={e}>{e}</option>
                            </>
                          )
                        })
                      }
                  </select>
              </div>
              <div>
              <label>App Type</label>
              <select className="select" name="applicationType" style={{marginLeft:"30px"}} value={updateProject.applicationType} onChange={changeUpdateProj}>
                {
                  appType.map((e)=>{
                    return(
                      <>
                        <option value={e}>{e}</option>
                      </>
                    )
                  })
                }
              </select>
              </div>
              </div>
              <br/>
            <label className="soft-tech-emp">Technologies using</label><br/>
            <div className="scroll">
              {
                  technology.map((e,i)=>{
                    let filter=e;
                    return(
                      < div className="checkbox" key={i}>
                      <input type="checkbox" className="check" name="technologies" value={e} checked={updateProject.technologies.includes(filter)} onChange={handleTechCheckbox}/>
                      <label className="checkvalue">{e}</label><br></br>
                      </div>
                    )
                  })
              }
              </div> 
            <br />
            <label className="soft-tech-emp">Employess to add in project</label><br/>
              <div className="scroll">
              {
                  emp.map((e,i)=>{
                    // console.log(assignedEmp)
                    let filter=e.firstname+e.lastname;
                    return(
                      < div className="checkbox" key={i}>
                      <input type="checkbox" className="check" name='employeesToAdd' value={e.firstname+e.lastname} checked={updateProject.employeesToAdd.includes(filter)} onChange={handleEmpCheckbox}/>
                      <label className="checkvalue">{e.firstname + e.lastname}</label><br></br>
                      </div>
                    )
                  })
              }
              </div>
              <p>{error.employeesToAdd}</p>
              <br /> <label className="soft-tech-emp">Software using</label> <br/>
              <div className="scroll">
              {
                  software.map((e,i)=>{
                    let filter=e;
                    return(
                      < div className="checkbox" key={i}>
                      <input type="checkbox" className="check" name="softwareUsing" value={e} checked={updateProject.softwareUsing.includes(filter)} onChange={handleSWCheckbox}/>
                      <label className="checkvalue">{e}</label><br></br>
                      </div>
                    )
                  })
              }
              </div>   
              <br/>
              <div id="date">
                <div>
                  <label>Status      &nbsp;</label>
                  <select className="select" style={{marginLeft:"47px"}} name='status' value={updateProject.status} onChange={changeUpdateProj}>
                    <option value="">Select status</option>
                    <option value="started">started</option>
                    <option value="completed">completed</option>
                  </select>
                  <br /><p>{error.status}</p><br />
                </div>
              <div>
                <label >Budget</label>
                <input type="text" style={{marginLeft:"40px"}} name="budget" value={updateProject.budget} onChange={changeUpdateProj}></input>
              </div>
              </div>
              <br />
              <button onClick={submitUpdateTask}>Update Project</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      </>
    );
  }
export default UpdateProject;