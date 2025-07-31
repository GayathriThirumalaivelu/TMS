
// import Navbar from '../AdminNavBar/Nav';
// import '../EmployeeDash/EmpDash.css';

// import React from 'react';
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
// import profile from '../assets/admin.jpeg';
// import { useEffect, useState } from 'react';
// import axios from 'axios'
// import tasks from './task.json';
// import { useNavigate } from 'react-router-dom';
// function AdminViewTask(){
//     const [data, setData] = useState([]);
//      const[task,setTask]=useState(tasks[0]);
//     //  console.log(task);
//     let[count,setCount]=useState(0);
//     const navigate = useNavigate();
//     let[taskname,settaskname]=useState(
//         ['Ui design',
//          'Frontend',
//          'database Schema',
//          'Backend connection',
//          'connecting MERN Stack',
//          'Testing'])

//     // /taskmanger/inns/api/task/viewAllTask
//     useEffect(()=>{
        
//         axios.get('http://127.0.0.1:3012/taskmanger/inns/api/task/viewOneTask?taskname=task be 2',{
//             headers : {
//                 "Content-Type" : "application/json"
//             }
//             }).then((res)=>{
//             // console.log(res.data.viewProject)
//             setData(res.data.viewTask[0])
//             // console.log(data)
//             }).catch((err)=>{
//             console.log(err)
//             })

//         axios.get('http://127.0.0.1:3012/taskmanger/inns/api/task/viewAllTask',{
//         headers : {
//             "Content-Type" : "application/json"
//         }
//         }).then((res)=>{
//         console.log(res.data.viewTask)
//         // setTask(res.data.viewTask)
//         // console.log(data)
//         }).catch((err)=>{
//         console.log(err)
//         })
// },[]);
   
   
//     return(
//         <>
//        <div className="totalDashBoardDiv ">
//         <div className="navDiv" id='navDiv'>
//             <Navbar />
//         </div>
//         <div className="content-wrapper" id='content-wrapper' style={{height:" 100.56vh"}}>
//           <div className="content">
//           <h1 style={{color:"#420678",textAlign:"center"}}>List of task</h1><br/>
//              <section className='table-wrapper'>
//                 <table style={{textAlign:"center"}}>
//                     <thead>
//                         <tr>
//                             <th style={{paddingLeft:"40px"}}>S.No</th>
//                             <th>Task Name</th>
//                             <th>View Task</th>
//                             <th>Update status</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                           {
//                             taskname.map((e,index)=>{
//                                 return(
//                                     <>
//                                     <tr>
//                                         <td style={{paddingTop:"26px"}}>{index+1}</td>
//                                         <td>{e}</td>
//                                         <td><Popup trigger=
//                                                 {<button> View Task </button>} 
//                                                 modal nested>
//                                                 {
//                                                     close => (
//                                                         <div className='modal'>
//                                                             <br></br>
//                                                             <h1 style={{textAlign:"center",fontSize:"25px"}}>{task.projectname.toLocaleUpperCase()}</h1>
//                                                         <br></br>
//                                                             <div className='content-popup'>
                                                            
//                                                                 <div>
//                                                                     <label>Task Name</label><br/><br/>
//                                                                     <label>Project Name</label><br/><br/>
//                                                                     <label>Description</label><br/><br/>
//                                                                     <label>Assigned Date</label><br/><br/>
//                                                                     <label>Dead Line</label><br/><br/>
//                                                                     <label>Status</label><br/><br></br>
//                                                                     <label>Employees added</label><br/><br></br><br/>
                                                                
//                                                                 </div>
//                                                                 <div>
//                                                                     <label>:&nbsp;&nbsp;&nbsp;{task.taskname}</label><br/><br/>
//                                                                     <label>:&nbsp;&nbsp;&nbsp;{task.projectname}</label><br/><br/>
//                                                                     <label>:&nbsp;&nbsp;&nbsp;{task.description}</label><br/><br/>
//                                                                     <label>:&nbsp;&nbsp;&nbsp;{task.assignedDate}</label><br/><br/>
//                                                                     <label>:&nbsp;&nbsp;&nbsp;{task.deadline}</label><br/><br/>
//                                                                     <label>:&nbsp;&nbsp;&nbsp;{task.status}</label><br/><br></br>
//                                                                     <section className='table-wrappers'>
                                                                    
//                                                                         <table>
//                                                                     <thead>
//                                                                     <tr>
//                                                                         <th>S.no</th>
//                                                                         <th>Name</th>
//                                                                         <th>Status</th>
//                                                                     </tr>
//                                                                     </thead>
//                                                                     {/* <tbody>
//                                                                     {
//                                                                         task.employeesToAdd.map((e,index)=>{
//                                                                         return(
//                                                                             <>
//                                                                             <tr>
//                                                                                 <td>{index+1}</td>
//                                                                                 <td>{e.firstname+e.lastname}</td>
//                                                                                 <td>{e.status}</td>
//                                                                             </tr>
//                                                                             </>
//                                                                         )
//                                                                         })
//                                                                     }
//                                                                     </tbody> */}
//                                                                     </table>
//                                                                     </section>
//                                                                     {/* <label>{task.employeesToAdd}</label> */}
                                                                
//                                                                 </div>
//                                                             </div>
//                                                             <div id="closebtn">
//                                                             <i class="fa-solid fa-xmark"  onClick=
//                                                                     {() => close()}></i>
                                                            
//                                                             </div>
//                                                         </div>
//                                                     )
//                                                 }
//                                             </Popup></td>
//                                         <td><button onClick={()=>navigate('/updateTask',{ state: task })}>Update status</button></td>
//                                     </tr>
//                                     </>
//                                 )
//                             })
//                           }
//                     </tbody>
//                 </table>
//              </section>
//           </div>
//         </div>
//       </div>
//         </>
//     )
// }
// export default AdminViewTask;


import Navbar from '../AdminNavBar/Nav';
import '../EmployeeDash/EmpDash.css';

import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
// import tasks from './task.json';
import { useNavigate } from 'react-router-dom';
function AdminViewTask(){
    const[task,setTask]=useState();
    const navigate = useNavigate();
    const [taskList, setTaskList] = useState([]);

    // /taskmanger/inns/api/task/viewAllTask
    useEffect(()=>{
        
        // axios.get('http://127.0.0.1:3012/taskmanger/inns/api/task/viewOneTask?taskname=task be 2',{
        //     headers : {
        //         "Content-Type" : "application/json"
        //     }
        //     }).then((res)=>{
        //     // console.log(res.data.viewProject)
            
        //     // console.log(data)
        //     }).catch((err)=>{
        //     console.log(err)
        //     })

            axios.get('http://127.0.0.1:3012/taskmanger/inns/api/task/viewAllTask', {
                headers: {
                  "Content-Type": "application/json"
                }
              })
              .then((res) => {
                console.log(res.data.viewTask)
                setTaskList(res.data.viewTask);
              })
              .catch((err) => {
                console.log(err);
              });
    },[]);
   
   
    return(
        <>
       <div className="totalDashBoardDiv ">
        <div className="navDiv" id='navDiv'>
            <Navbar />
        </div>
        <div className="content-wrapper" id='content-wrapper' style={{height:" 100.56vh"}}>
          <div className="content">
          <h1 style={{color:"#420678",textAlign:"center"}}>List of task</h1><br/>
             <section className='table-wrapper'>
                <table style={{textAlign:"center"}}>
                    <thead>
                        <tr>
                            <th style={{paddingLeft:"40px"}}>S.No</th>
                            <th>Task Name</th>
                            <th>View Task</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                          {
                            taskList.map((e,index)=>{
                                return(
                                    <>
                                    <tr>
                                        <td style={{paddingTop:"26px"}}>{index+1}</td>
                                        <td>{e.taskname}</td>
                                        <td><Popup trigger=
                                            {<button> View Task </button>} 
                                            modal nested>
                                            {
                                                close => (
                                                    <div className='modal'>
                                                        <br></br>
                                                        <h1 style={{textAlign:"center",fontSize:"25px"}}>{taskList[index].taskname}</h1>
                                                    <br></br>
                                                        <div className='content-popup'>
                                                        
                                                            <div>
                                                                <label>Task Name</label><br/><br/>
                                                                <label>Project Name</label><br/><br/>
                                                                <label>Description</label><br/><br/>
                                                                <label>Assigned Date</label><br/><br/>
                                                                <label>Dead Line</label><br/><br/>
                                                                <label>Status</label><br/><br></br>
                                                                <label>Employees added</label><br/><br></br><br/>
                                                            
                                                            </div>
                                                            <div>
                                                                <label>:&nbsp;&nbsp;&nbsp;{taskList[index].taskname}</label><br/><br/>
                                                                <label>:&nbsp;&nbsp;&nbsp;{taskList[index].projectname}</label><br/><br/>
                                                                <label>:&nbsp;&nbsp;&nbsp;{taskList[index].description}</label><br/><br/>
                                                                <label>:&nbsp;&nbsp;&nbsp;{taskList[index].assignedDate}</label><br/><br/>
                                                                <label>:&nbsp;&nbsp;&nbsp;{taskList[index].deadline}</label><br/><br/>
                                                                <label>:&nbsp;&nbsp;&nbsp;{taskList[index].status}</label><br/><br></br>
                                                                <section className='table-wrappers'>
                                                                
                                                                    <table>
                                                                <thead>
                                                                <tr>
                                                                    <th>S.no</th>
                                                                    <th>Name</th>
                                                                    <th>Status</th>
                                                                </tr>
                                                                </thead>
                                                                
                                                                </table>
                                                                </section>
                                                            
                                                            </div>
                                                        </div>
                                                        <div id="closebtn">
                                                        <i className="fa-solid fa-xmark" style={{position : "relative" , top : '22px'}}  onClick=
                                                                {() => close()}></i>
                                                        
                                                        </div>
                                                    </div>
                                                )
                                            }
                                            </Popup></td>
                                        <td><button onClick={()=>navigate('/updateTask',{ state: taskList[index] })}>Update status</button></td>
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
export default AdminViewTask;