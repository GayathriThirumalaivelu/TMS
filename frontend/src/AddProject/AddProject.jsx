import React , { useEffect, useState } from "react";
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

import './addproject.css';
import Navbar from "../AdminNavBar/Nav";



function AddProject() {
  const[emp,setEmp]=useState([])
  const[mgrname,setMgrname]=useState([]);
  const[tL,setTL]=useState([])
  const[sector,setSector]=useState([])
  const[software,setSoftware]=useState([])
  const[technology,setTechnology]=useState([])
  const[apptype,setAppType]=useState([]);
  const [backendError, setBackendError] = useState("");
    const [addProject, setAddProject] = useState({
      projectname : "",
      description : "", 
      assignedDate : "",
      deadline : "",
      employeesToAdd : [],
      budget:"",
      status : "",
      teamLeader:"",
      sector:"",
     manager:"",
      applicationType:"",
      technologies:[],
      softwareUsing:[]
    });
    const[error,setError]=useState({});
    // const [usernames, setUsernames] = useState([])
    // const navigate = useNavigate();
    
  
      useEffect(()=>{
        axios.get('http://127.0.0.1:3012/taskmanger/inns/api/otherdata/getDataInOtherData',{
              headers : {
                  "Content-Type" : "application/json"
              }
          }).then((res)=>{
            console.log(res)
              let data = res.data.viewOtherData[0];
              console.log(data);
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
              console.log(data);
              let mgrData = data.filter((e)=>e.userRole === "Manager");
              setMgrname(mgrData);
              let teamlead=data.filter((e)=>e.userRole=== "TL"  )
              setTL(teamlead);
              let employee= data.filter(e=> e.userRole!==teamlead || e.userRole!==mgrData)
              setEmp(employee)
            
          }).catch((err)=>{
              console.log(err);
          })
        
      },[]);
      
    const changeAddProject = (e) => {
        setAddProject({...addProject, [e.target.name] : e.target.value });
    }
  
    const handleCheckbox = (e) => {
      const { value, checked } = e.target;
      if (checked) {
        setAddProject({ ...addProject, employeesToAdd: [...addProject.employeesToAdd, value] });
        // setAddProject({ ...addProject, software: [...addProject.software, { value }] });

      } else {
        // setAddProject({ ...addProject, software: addProject.software.filter(soft => soft.value !== value) });
        
        setAddProject({ ...addProject, employeesToAdd: addProject.employeesToAdd.filter(emp => emp !== value) });
      }
    }
    const handleSoftwareCheckbox = (e) => {
      const { value, checked } = e.target;
      console.log("Value:", value);
      console.log("Checked:", checked);
      if (checked) {
        console.log("Adding software:", value);
        setAddProject({ ...addProject, softwareUsing: [...addProject.softwareUsing,value] });
      } else {
        console.log("Removing software:", value);
        setAddProject({ ...addProject, softwareUsing: addProject.softwareUsing.filter(soft => soft.value !== value) });
      }
    };
    const handleTechnoloyCheckbox=(e)=>{
      const { value, checked } = e.target;
      console.log("Value:", value);
      console.log("Checked:", checked); 
      if (checked) {
        console.log("Adding technologies:", value);
        setAddProject({ ...addProject, technologies: [...addProject.technologies,value ] });
      } else {
        console.log("Removing technolo:", value);
        setAddProject({ ...addProject, technologies: addProject.technologies.filter(tech => tech.value !== value) });
      }
    }
    
    
    const validateForm=()=>{
      let err={};
      if(addProject.projectname===""){
        err.projectname="*Please enter the project name"
      }
      if(addProject.description===""){
        err.description="*Please enter the description"
      }
      if(addProject.assignedDate===""){
        err.assignedDate="*Please select the date"
      }
      if(addProject.deadline===""){
        err.deadline="*Please select deadline date"
      }
     
      if(addProject.employeesToAdd.length===0){
        err.employeesToAdd="*please select the employees"
      }
      if(addProject.status===""){
        err.status="*please select the status"
      }
      if(addProject.sector===""){
        err.sector="*please select the selector"
      }
      if(addProject.budget==="")
      {
        err.budget="*please enter the budger details"
      }
      if(addProject.teamLeader==="")
      {
        err.teamlead="*please select the tL"
      }
      if(addProject.manager==="")
      {
        err.manager="*please select the manager"
      }
      if(addProject.applicationType==="")
      {
        err.apptype="*please select the app type"
      }
      if(addProject.technologies.length===0)
      {
        err.technology="*Please select the technology"
      }
      if(addProject.softwareUsing.length===0)
      {
        err.software="*Please select the software";
        // console.log(err.software);
      }
      
      return err;
    }
    console.log(error)
    // const submitAddProject = (e) => {
    //   e.preventDefault();
    //   const validationErrors = validateForm();
    //   setError(validationErrors);
    //   if (addProject.assignedDate!=="" && addProject.budget!==""&& addProject.deadline!==""&& addProject.description!==""  && addProject.employeesToAdd.length!==0 && addProject.projectname!==""&& addProject.status!==""&& addProject.sectorData!=="" && addProject.managerData!=="" && addProject.tL!=="" && addProject.appType!=="" && addProject.softwareData.length!==0&& addProject.technologies.length!==0) {
        
    //     setAddProject({
    //       assignedDate:"",
    //       status:"",
    //       deadline:"",
    //       description:"",
    //       budget:"",
    //       projectname:"",
    //       employeesToAdd:[],
    //       applicationType:"",
    //       sector:"",
    //       manager:"",
    //       technologies:[],
    //       tL:"",
    //       softwareUsing:[]


    //     })
    const submitAddProject = (e) => {
      e.preventDefault();
      const validationErrors = validateForm();
      setError(validationErrors);
    
      if ( Object.keys(validationErrors).length===0 &&addProject.assignedDate!=="" && addProject.budget!==""&& addProject.deadline!==""&& addProject.description!==""  && addProject.employeesToAdd!=="" && addProject.projectname!==""&& addProject.status!==""&& addProject.sectorData!=="" && addProject.managerData!=="" && addProject.teamLeader!=="" && addProject.appType!=="" && addProject.softwareData!=="" && addProject.technologies!=="") {
        axios.post(`http://127.0.0.1:3012/taskmanger/inns/api/project/addProject`, addProject, {
          headers: {
            "Content-Type": "application/json"
          }
        }).then((res) => {
          console.log(res.data);
          // Reset form state
          setBackendError("");

         
       setAddProject({
        ...addProject,
        projectname: "",
        description: "",
        assignedDate: "",
        deadline: "",
        employeesToAdd: [],
        budget: "",
        status: "",
        teamLeader: "",
        sector: "",
        manager: "",
        applicationType: "",
        technologies: [],
        softwareUsing: []
      });
      setError({});
      // Reset checkboxes
      document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
      });
    }).catch((err) => {
      console.log(err);
      if (err.response && err.response.data && err.response.data.message) {
        setBackendError(err.response.data.message);
      } else {
        setBackendError("An error occurred. Please try again later.");
      }
    });
        // setAddProject({
        //   projectname: "",
        //   description: "",
        //   assignedDate: "",
        //   deadline: "",
        //   employeesToAdd: [],
        //   budget: "",
        //   status: "",
        //   tL: "",
        //   sector: "",
        //   manager: "",
        //   applicationType: "",
        //   technologies: [],
        //   softwareUsing: []
        // });
        // // Reset checkboxes
        // document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        //   checkbox.checked = false;
        // });
      }
      // else 
      //   setBackendError("");

        
        
    
      
    };
    
      
    return (
      <>
      <div className="totalDiv totalDashBoardDiv">
        <div className="navDiv" id='navDiv'>
          <Navbar/>
        </div>
        <div className="content-wrapper" id='content-wrapper'>
          <div className="content">
            <div id="addprojectcontainer">
                    <h1>Add Project</h1>
              <form>
                <input type='text' placeholder='project name' name='projectname' value={addProject.projectname} onChange={changeAddProject}/>
                <br /> <p className="errdisplay">{error.projectname}</p> 
                <p className="errdisplay">{backendError}</p>
                <br />
                <textarea placeholder='decription' name='description' value={addProject.description} onChange={changeAddProject}></textarea>
                <br /><p className="errdisplay">{error.description}</p><br />
                <div id='date'>
                  <div>
                    <label>AssignDate</label>
                    <input type='date' className="data" placeholder='assignedDate' name='assignedDate' value={addProject.assignedDate} onChange={changeAddProject}/>
                    <br /><p className="errdisplay">{error.assignedDate}</p><br />
                  </div>
                  <div>
                    <label>Dead line</label>
                    <input type='date' className="data" placeholder='deadline' name='deadline' value={addProject.deadline} onChange={changeAddProject}/>
                    <br /><p className="errdisplay">{error.deadline}</p><br />
                  </div>
                </div>
                <div id='date'>
                  <div>
                          <label>Manager </label>&nbsp;
                          <select className="select"  onChange={changeAddProject} name="manager" value={addProject.manager}>
                <option value="">select the manager</option>

                            {
                              mgrname.map((e)=>{
                                return(
                                  <>
                                    <option >{e.firstname + e.lastname}</option>
                                  </>
                                )
                              })
                            } 
                            </select>
                            <p className="errdisplay">{error.manager}</p>
                  </div>
                  <div>
                    
              <label>Team Leader </label>
                <select className="select" style={{marginLeft:"5px"}} name="teamLeader" value={addProject.teamLeader} onChange={changeAddProject}>
                <option value="">select the team leader</option>

                  {
                    tL.map((e)=>{
                      return(
                        <>
                          <option >{e.firstname+e.lastname}</option>
                        </>
                      )
                    })
                  } 
                </select>
                <p className="errdisplay">{error.teamlead}</p>
                </div>
                </div><br></br>
                <div id='date'>
                  <div>
                <label>Sector&nbsp;</label>
                <select className="select" style={{marginLeft:"47px"}} name="sector" value={addProject.sector} onChange={changeAddProject}>
                <option value="">select the sector</option>

                  {

                    sector.map((e)=>{
                      return(
                        <>
                          <option >{e}</option>
                        </>
                      )
                    })
                  }
                </select>
                  <p className="errdisplay"> {error.sector}</p>
              </div>
               
              <div>
              <label>App Type</label>
              <select className="select" style={{marginLeft:"30px"}} name="applicationType" value={addProject.applicationType} onChange={changeAddProject}>
                <option value="">select the apptype</option>
                {
                  apptype.map((e)=>{
                    return(
                      <>
                        <option >{e}</option>
                      </>
                    )
                  })
                }
              </select>
              <p className="errdisplay">{error.apptype}</p>
              </div>
              </div>
              <br></br>
              
               
           
             <div>
                <label className="soft-tech-emp">Technologies using</label><br/> <br />
                <div className="scroll">
                  {
                      technology.map((e,i)=>{
                        return(
                          < div className="checkbox" key={i}>
                          <input type="checkbox" className="check" onChange={handleTechnoloyCheckbox} name="technology
                          " value={e}/>
                          <label className="checkvalue">{e}</label><br></br>
                          </div>
                        )
                      })
                  }
                  </div> 
                  <p className="errdisplay">{error.technology}</p>
              </div>
              <br />
              
            <br></br> <label >Employess To Add</label> <br/><br/>
              <div className="scroll">
              {
                  emp.map((e)=>{
                    return(
                      <div className="checkbox">
                      <input type="checkbox" className="check" name="employeesToAdd"  onChange={handleCheckbox} value={e.firstname+e.lastname}/>
                      <label className="checkvalue">{e.firstname  + e.lastname}</label><br></br>
                      </div>
                    )
                  })
              }
                
              </div>
              <p className="errdisplay">{error.employeesToAdd}</p>
              <br></br> 
              <label >Software </label> <br/><br/>
              <div className="scroll">
                   {software.map((e) => (
                      <div className="checkbox" key={e}>
                      <input type="checkbox" className="check" onChange={handleSoftwareCheckbox} name="software" value={e} />
                     <label className="checkvalue">{e}</label><br />
               </div>
               ))}
</div>
              <p className="errdisplay">{error.software}</p>


            
              
        
            
  <br></br><br></br>

  <div id="date">
                <div>
                  <label>Status      &nbsp;</label>
                  <select className="select" style={{marginLeft:"47px"}} name='status' value={addProject.status} onChange={changeAddProject}>
                    <option value="">Select status</option>
                    <option value="started">started</option>
                    <option value="completed">completed</option>
                  </select>
                  <br /><p className="errdisplay">{error.status}</p><br />
                </div>
              <div>
                <label >Budget</label>
                <input type="text" style={{marginLeft:"40px"}}  value={addProject.budget} onChange={changeAddProject} name="budget"></input>
                <p className="errdisplay">{error.budget}</p>
              </div>
              </div>


              <button onClick={submitAddProject}>Add Project</button>
          </form>
            </div>
          </div>
        </div>
      </div>
      
      </>
    );
  }
export default AddProject;

