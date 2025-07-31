
import Navbar from '../EmpNav/Nav';
import '../EmployeeDash/EmpDash.css';
import './EmpViewTask.css'

import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import profile from '../assets/admin.jpeg';
import { useEffect, useState } from 'react';
import tasks from './task.json';
import { useUserData } from '../userContext';
import axios from 'axios';
import { unstable_usePrompt } from 'react-router-dom';

function EmpViewTask()
{
    const { userData } = useUserData();
    const [status, setStatus] = useState("");
     const[task,setTask]=useState([]);
    const [updStatus, setUpdStatus] = useState({
      taskname : "",
      projectname: "",
      description: "",
      assignedDate: "",
      deadline : "",
      employeesToAdd : [{
        empName : "",
        status : ""
      }],
      status: ""
    });

    useEffect(()=>{
        axios.get(`http://127.0.0.1:3012/taskmanager/api/employee/getTaskForEmp?employeesToAdd.empName=${userData.firstname}${userData.lastname}`, {
            headers: {
              "Content-Type": "application/json"
            }
          }).then((res) => {
            // console.log(res.data);
            const t = res.data.viewTask
            setTask(t)
            console.log(task)
          }).catch((err) => {
            console.log(err)
          })
    },[]);

    // const viewOneTask = (e) =>{
    //     // /taskmanger/inns/api/task/viewOneTask
    //     axios.get(`http://127.0.0.1:3012/taskmanager/api/employee/getTaskForEmp?taskname.empName=${e.taskname}`, {
    //         headers: {
    //           "Content-Type": "application/json"
    //         }
    //       }).then((res) => {
    //         // console.log(res.data);
    //         const t = res.data.viewTask
    //         setOneTask(t)
    //         console.log(oneTask)
    //       }).catch((err) => {
    //         console.log(err)
    //       })
    //     // let a = task.filter(x => x.taskname == e.taskname);
    //     // // console.log(a)
    //     // setOneTask(a);
    //     // console.log(oneTask);
    // }

    const changeUpdStatus = (e) => {
      setStatus(e.target.value);
      console.log(status)
    }

    const setStOFSts = (e) =>{
      let b = e
      setUpdStatus(b)
    }

    const updateStatusOfEmp = (e) => {
      // console.log(status)
      console.log(updStatus);
      let a = updStatus.employeesToAdd.findIndex((x)=> x.empName == userData.firstname+userData.lastname);
      // console.log(a);
      updStatus.employeesToAdd[a].status = status;
      console.log(updStatus)

      axios.patch(`http://127.0.0.1:3012/taskmanger/inns/api/task/updateTask?taskname=${updStatus.taskname}`, updStatus, {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        console.log(res.data); // Log response data
        alert("your status in this task has been updated successfully!")
    }).catch(err => {
        console.error("Update failed:", err);
    });
    }
   
    useEffect(()=>{
        // console.log(oneTask)
    },[task,updStatus]);
   
    return(
        <>
       <div className="totalDashBoardDiv ">
        <div className="navDiv" id='navDiv'>
            <Navbar />
        </div>
        <div className="content-wrapper" id='content-wrapper'>
          <div className="content empViewTask">
            <section className='row' style={{boxShadow: "0px 0px 4px 2px rgb(227, 226, 226)",borderRadius:"20px"}}>
              <div id="profilepicture">
                 <img src={profile} id="profilepic"></img>
              </div>
              <div id="profiledata">
                <div className="row1">
                    <p>Emp id</p>
                    <p>:&nbsp;&nbsp;EMP8978654{userData.empNo}</p>
                </div>
                <div className="row1">
                    <p>Name</p>
                    <p>:&nbsp;&nbsp;{userData.firstname} {userData.lastname}</p>
                </div>
                <div className="row1">
                    <p>Role</p>
                    <p>:&nbsp;&nbsp;{userData.userRole}</p>
                </div>
                <div className="row1">
                    <p>Location</p>
                    <p>:&nbsp;&nbsp;{userData.address}</p>
                </div>
              </div>
            </section>
             <section className='table-wrapper'>
                <table style={{textAlign:"center"}}>
                    <thead>
                        <tr>
                            <th style={{paddingLeft:"40px"}}>S.No</th>
                            <th>Task Name</th>
                            <th>View Task</th>
                            <th>Update status</th>
                        </tr>
                    </thead>
                    <tbody>
                          {
                            task.map((el,index)=>{
                                return(
                                    <>
                                    <tr>
                                        <td style={{paddingTop:"26px"}}>{index+1}</td>
                                        <td>{el.taskname}</td>
                                        <td>
                                          <Popup trigger=
                                              {<button> View Task </button>} 
                                              modal nested >
                                              {
                                                  close => (
                                                      <div className='modal'>
                                                          <br></br>
                                                          <h1 style={{textAlign:"center",fontSize:"25px"}}>{task[index].taskname}</h1>
                                                        <br></br>
                                                          <div className='content-popup'>
                                                          
                                                              <div>
                                                                  {/* <label>Task Name</label><br/><br/> */}
                                                                  <label>Project Name</label><br/><br/>
                                                                  <label>Description</label><br/><br/>
                                                                  <label>Assigned Date</label><br/><br/>
                                                                  <label>Dead Line</label><br/><br/>
                                                                  <label>Status</label><br/><br></br>
                                                                  <label>Members added</label><br/><br></br><br/>
                                                                
                                                              </div>
                                                              <div>
                                                                  {/* <label>:&nbsp;&nbsp;&nbsp;{task[index].taskname}</label><br/><br/> */}
                                                                  <label>:&nbsp;&nbsp;&nbsp;{task[index].projectname}</label><br/><br/>
                                                                  <label>:&nbsp;&nbsp;&nbsp;{task[index].description}</label><br/><br/>
                                                                  <label>:&nbsp;&nbsp;&nbsp;{task[index].assignedDate}</label><br/><br/>
                                                                  <label>:&nbsp;&nbsp;&nbsp;{task[index].deadline}</label><br/><br/>
                                                                  <label>:&nbsp;&nbsp;&nbsp;{task[index].status}</label><br/><br></br>
                                                                  <section className='table-wrappers'>
                                                                    
                                                                      <table>
                                                                  <thead>
                                                                    <tr>
                                                                      <th>Name</th>
                                                                      <th>Status</th>
                                                                  </tr>
                                                                  </thead>
                                                                  <tbody>
                                                                    {task[index].employeesToAdd.map((e)=>{
                                                                      return(
                                                                        <tr>
                                                                          <td>{e.empName}</td>
                                                                          <td>{e.status}</td>
                                                                        </tr>
                                                                      )
                                                                    })}
                                                                  </tbody>
                                                                  </table>
                                                                  </section>                                   
                                                              </div>
                                                          </div>
                                                          <div id="closebtn">
                                                            <i className="fa-solid fa-xmark"  onClick={() => close()}></i>
                                                          </div>
                                                      </div>
                                                  )
                                              }
                                          </Popup>
                                        </td>
                                        <td><Popup trigger={<button>Update status</button>}
                                            modal nested onOpen={()=>setStOFSts(el)}>
                                              {
                                                close => (
                                                  <div className='modal updateStatus' style={{textAlign : "center"}}>
                                                    <br />
                                                    <h1>Update your status in the task {task[index].taskname}</h1>
                                                    <br />
                                                    <div>
                                                      <p>Taskname : {task[index].taskname}</p>
                                                      <br />
                                                      <p>Project : {task[index].projectname}</p>
                                                      <br />
                                                      <p>Description : {task[index].description}</p>
                                                      <br />
                                                      <div>Status : 
                                                          <select name="status" 
                                                          // value={task[index].employeesToAdd.find((x)=> x.empName == userData.firstname+userData.lastname).status} 
                                                          onChange={(e)=>setStatus(e.target.value)} className='selectForUpdStaus'
                                                           >
                                                            <option value="Assigned">Assigned</option>
                                                            <option value="Started">Started</option>
                                                            <option value="In process">In process</option>
                                                            <option value="Completed">Completed</option>
                                                          </select>
                                                      </div>
                                                      <br />
                                                      <button className='buttonForUpdStaus' onClick={()=>updateStatusOfEmp(el)}>Update Status</button>
                                                    </div>
                                                    <div id="closebtn">
                                                      <i className="fa-solid fa-xmark"  onClick={() => close()}></i>
                                                    </div>
                                                  </div>
                                                )
                                              }
                                          </Popup></td>
                                    </tr>
                                    </>
                                )
                            })
                          }
                    </tbody>
                </table>
             </section>
          </div>
        </div>
      </div>
        </>
    )
}
export default EmpViewTask;