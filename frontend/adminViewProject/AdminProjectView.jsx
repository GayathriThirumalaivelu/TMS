// // import { useEffect } from 'react';
// import axios from 'axios'
// import Navbar from '../AdminNavBar/Nav';
// import '../EmployeeDash/EmpDash.css';
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
// // import img from '../EmployeeDash/ad.png';
// import datas from './project.json';
// import profile from '../assets/admin.jpeg';
// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './adminViewProj.css'

// function AdminViewProject()
// {
//     let[count,setCount]=useState(0);
//     const [data, setData] = useState([])
//     let[projectdetails,setProjectDetails]=useState(datas[0]);
//     const navigate = useNavigate()
//     let[projectname,setProjectname]=useState(
//         ['School Management System',
//          'College Management System',
//          'Employee Management Syatem',
//          'Azure E-commerse App',
//          'E-Learning Academy',
//          'Trash Management System'])


//          useEffect(()=>{
//             axios.get('http://127.0.0.1:3012/taskmanger/inns/api/project/viewOneProject?projectname=test project 1',{
//               headers : {
//                 "Content-Type" : "application/json"
//               }
//             }).then((res)=>{
//               // console.log(res.data.viewProject)
//               setData(res.data.viewProject[0])
//               // console.log(data)
//             }).catch((err)=>{
//               console.log(err)
//             })
//           },[]);
//     return(
//         <>
//        <div className="totalDashBoardDiv ">
//         <div className="navDiv" id='navDiv'>
//             <Navbar />
//         </div>
//         <div className="content-wrapper" id='content-wrapper' style={{height:"99.6vh !important"}}>
//           <div className="content adminViewProj"><br></br>
//                 <div className="titleClass">
//                     <h1>Task Management System</h1>
//                     <h2>List of Projects</h2>
//                 </div>
//                     {/* <h1 style={{color:"#420678",textAlign:"center"}}>List of Projects</h1><br/> */}
//              <section className='table-wrapper'>
//                 <table>
                    
//                     <thead>
//                         <tr>
//                             <th style={{paddingRight:"70px"}}>S.No</th>
//                             <th>Project Name</th>
//                             <th>View Project</th>
//                             <th>update Project</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                           {
//                             projectname.map((e,index)=>{
//                                 return(
//                                     <>
//                                     <tr>
//                                         <td style={{paddingLeft:"70px",paddingTop:"26px"}}>{index+1}</td>
//                                         <td>{e}</td>
//                                         <td ><Popup trigger=
//                 {<button>View Project </button>} 
//                 modal nested>
//                 {
//                     close => (
//                         <div className='modal'>
//                             <br></br>
//                             <h1 style={{textAlign:"center",fontSize:"25px"}}>{projectdetails.projectname}</h1>
//                            <br></br>
//                             <div className='content-popup'>
                            
//                                 <div>
//                                     <label style={{fontSize:"10px !important"}}>Project Name</label><br/><br/>
//                                     <label>Description</label><br/><br/>
//                                     <label>AssignedDate</label><br/><br/>
//                                     <label>Dead Line</label><br/><br/>
//                                     <label>Tasks</label><br/><br/>
//                                     <label>Status</label><br/><br></br>
//                                     <label>Manager</label><br/><br/>
//                                     <label>Team Leader</label><br/><br></br>
//                                     <label>Sector</label><br/><br></br>
//                                     <label>Budget</label><br/><br/>
//                                     <label>Application Type</label><br/><br></br>
//                                     <label>Technologies</label><br/><br></br>
//                                     <label>Software Using</label><br/><br/>
//                                     <label>Employees added</label><br/><br></br><br/>
                                  
//                                 </div>
//                                 <div>
//                                     <label>:&nbsp;&nbsp;&nbsp;{projectdetails.projectname}</label><br/><br/>
//                                     <label>:&nbsp;&nbsp;&nbsp;{projectdetails.description}</label><br/><br/>
//                                     <label>:&nbsp;&nbsp;&nbsp;{projectdetails.assignedDate}</label><br/><br/>
//                                     <label>:&nbsp;&nbsp;&nbsp;{projectdetails.deadline}</label><br/><br/>
//                                     <label>:&nbsp;&nbsp;&nbsp;{projectdetails.tasks}</label><br/><br/>
//                                     <label>:&nbsp;&nbsp;&nbsp;{projectdetails.status}</label><br/><br></br>
//                                     <label>:&nbsp;&nbsp;&nbsp;{projectdetails.manager}</label><br/><br></br>
//                                     <label>:&nbsp;&nbsp;&nbsp;{projectdetails.teamLeader}</label><br/><br></br>
//                                     <label>:&nbsp;&nbsp;&nbsp;{projectdetails.sector}</label><br/><br></br>
//                                     <label>:&nbsp;&nbsp;&nbsp;{projectdetails.budget}</label><br/><br></br>
//                                     <label>:&nbsp;&nbsp;&nbsp;{projectdetails.applicationType}</label><br/><br></br>
//                                     <label>:&nbsp;&nbsp;&nbsp;{projectdetails.technologies.join(" , ")}</label><br/><br></br>
//                                     <label>:&nbsp;&nbsp;&nbsp;{projectdetails.softwareUsing.join(" , ")}</label><br/><br></br>
//                                     {/* <label style={{display:"inline-flex",width:"200px"}}>:&nbsp;&nbsp;&nbsp;{projectdetails.employeesToAdd.join(" , ")}</label><br/><br></br> */}
                                    
//                                     <section className='table-wrappers'>
                                       
//                                         <table>
//                                      <thead>
//                                        <tr>
//                                         <th>S.no</th>
//                                         <th>Name</th>
                                        
//                                      </tr>
//                                      </thead>
//                                      <tbody>
//                                      {
//                                         projectdetails.employeesToAdd.map((e,index)=>{
//                                            return(
//                                             <>
//                                             <tr>
//                                                 <td>{index+1}</td>
//                                                 <td>{e}</td>
                                                
//                                             </tr>
//                                             </>
//                                            )
//                                         })
//                                      }
//                                      </tbody>
//                                      </table>
//                                      </section>
//                                     {/* <label>{task.employeesToAdd}</label> */}
                                   
//                                 </div>
//                             </div>
//                             <div id="closebtn" style={{top:"-751px"}}>
//                             <i class="fa-solid fa-xmark"  onClick=
//                                     {() => close()}></i>
                               
//                             </div>
//                         </div>
//                     )
//                 }
//             </Popup></td>
//                                         <td><button onClick={()=>navigate('/updateProject',{ state: data })}>update Project</button></td>
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
// export default AdminViewProject;


// import { useEffect } from 'react';
import axios from 'axios'
import Navbar from '../AdminNavBar/Nav';
import '../EmployeeDash/EmpDash.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
// import img from '../EmployeeDash/ad.png';
// import datas from './project.json';
import profile from '../assets/admin.jpeg';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './adminViewProj.css'

function AdminViewProject()
{
    let[count,setCount]=useState(0);
    let[projectdetails,setProjectDetails]=useState([])
    let[projectname,setProjectname]=useState([]);
    const [prop, setProp] = useState([]);
    const navigate= useNavigate();
    

    useEffect(() => {
      axios.get('http://127.0.0.1:3012/taskmanger/inns/api/project/viewAllProject', {
        headers: {
          "Content-Type": "application/json"
        }
      }).then((res) => {
        console.log(res.data.viewProject)
        
        let projects = res.data.viewProject;
        // setProp(projects)
        // Extract project names from each project object
        let projectNames = projects.map(project => project.projectname);
        console.log(projectNames);
        setProjectname(projectNames);
      }).catch((err) => {
        console.log(err)
      })
    }, []);
   
    

      const viewPopupEmpProject=(e)=>{
        axios.get(`http://127.0.0.1:3012/taskmanger/inns/api/project/viewOneProject?projectname=${e}`,{
          headers : {
            "Content-Type" : "application/json"
          }
        }).then((res)=>{
          console.log(res.data.viewProject[0])
         setProjectDetails(res.data.viewProject[0]);
          // console.log(data)
        }).catch((err)=>{
          console.log(err)
        })
      }
      const handleUpdate=(e)=>{
        axios.get(`http://127.0.0.1:3012/taskmanger/inns/api/project/viewOneProject?projectname=${e}`, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => {
            const data = res.data.viewProject[0];
            setProp(data);
            
        }).catch((err) => {
            console.log(err);
        });
      }
      
      useEffect(() => {
        if (Object.keys(prop).length !== 0) {
            navigate('/updateProject', { state: prop });
        }
      }, [prop, navigate]);

    return(
        <>
       <div className="totalDashBoardDiv ">
        <div className="navDiv" id='navDiv'>
            <Navbar />
        </div>
        <div className="content-wrapper" id='content-wrapper' style={{height:"99.6vh !important"}}>
          <div className="content adminViewProj"><br></br>
                <div className="titleClass">
                    <h1>Task Management System</h1>
                    <h2>List of Projects</h2>
                </div>
                    {/* <h1 style={{color:"#420678",textAlign:"center"}}>List of Projects</h1><br/> */}
                    <section className='table-wrapper'>
                <table>
                    
                    <thead>
                        <tr>
                            <th style={{paddingRight:"70px"}}>S.No</th>
                            <th>Project</th>
                            <th>View</th>
                           <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                          {
                            projectname.map((e,index)=>{
                                return(
                                    <>
                                    <tr>
                                        <td style={{paddingTop:"26px"}}>{index+1}</td>
                                        <td>{e}</td>
                                       
                                        <td >
                                            <Popup trigger=
                                                {<button>View project </button>} 
                                                modal nested onOpen={()=>viewPopupEmpProject(e)}>
                                                {
                                                    close => (
                                                        <div className='modal'>
                                                            <br></br>
                                                            <h1 style={{textAlign:"center",fontSize:"25px"}}>{projectdetails.projectname}</h1>
                                                        <br></br>
                                                            <div className='content-popup'>
                                                            
                                                                <div>
                                                                    <label style={{fontSize:"10px !important"}}>Project Name</label><br/><br/>
                                                                    <label>Description</label><br/><br/>
                                                                    <label>AssignedDate</label><br/><br/>
                                                                    <label>Dead Line</label><br/><br/>
                                                                    <label>Tasks</label><br/><br/>
                                                                    <label>Status</label><br/><br></br>
                                                                    <label>Manager</label><br/><br/>
                                                                    <label>Team Leader</label><br/><br></br>
                                                                    <label>Sector</label><br/><br></br>
                                                                    <label>Budget</label><br/><br/>
                                                                    <label>Application Type</label><br/><br></br>
                                                                    <label>Technologies</label><br/><br></br>
                                                                    <label>Software Using</label><br/><br/>
                                                                    <label>Employees added</label><br/><br></br><br/>
                                                                
                                                                </div>
                                                                <div>
                                                                    <label>:&nbsp;&nbsp;&nbsp;{projectdetails.projectname}</label><br/><br/>
                                                                    <label>:&nbsp;&nbsp;&nbsp;{projectdetails.description}</label><br/><br/>
                                                                    <label>:&nbsp;&nbsp;&nbsp;{projectdetails.assignedDate}</label><br/><br/>
                                                                    <label>:&nbsp;&nbsp;&nbsp;{projectdetails.deadline}</label><br/><br/>
                                                                    <label>:&nbsp;&nbsp;&nbsp;{projectdetails.tasks}</label><br/><br/>
                                                                    <label>:&nbsp;&nbsp;&nbsp;{projectdetails.status}</label><br/><br></br>
                                                                    <label>:&nbsp;&nbsp;&nbsp;{projectdetails.manager}</label><br/><br></br>
                                                                    <label>:&nbsp;&nbsp;&nbsp;{projectdetails.teamLeader}</label><br/><br></br>
                                                                    <label>:&nbsp;&nbsp;&nbsp;{projectdetails.sector}</label><br/><br></br>
                                                                    <label>:&nbsp;&nbsp;&nbsp;{projectdetails.budget}</label><br/><br></br>
                                                                    <label>:&nbsp;&nbsp;&nbsp;{projectdetails.applicationType}</label><br/><br></br>
                                                                    <label>:&nbsp;&nbsp;&nbsp;{projectdetails.technologies}</label><br/><br></br>
                                                                    <label>:&nbsp;&nbsp;&nbsp;{projectdetails.softwareUsing}</label><br/><br></br>
                                                                    
                                                                    <section className='table-wrappers'>
                                                                    
                                                                        <table>
                                                                    <thead>
                                                                    <tr>
                                                                        <th>S.no</th>
                                                                        <th>Name</th>
                                                                        
                                                                    </tr>
                                                                    </thead>
                                                                    {/* <tbody>
                                                                    {
                                                                        projectdetails.employeesToAdd.map((e,index)=>{
                                                                        return(
                                                                            <>
                                                                            <tr>
                                                                                <td>{index+1}</td>
                                                                                <td>{e}</td>
                                                                                
                                                                            </tr>
                                                                            </>
                                                                        )
                                                                        })
                                                                    }
                                                                    </tbody> */}
                                                                    </table>
                                                                    </section>
                                                                
                                                                </div>
                                                            </div>
                                                            <div id="closebtn" style={{top:"-751px"}}>
                                                            <i class="fa-solid fa-xmark"  onClick=
                                                                    {() => close()}></i>
                                                            
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            </Popup>
                                        </td>
                                      <td><button onClick={()=>handleUpdate(e)}>Update Project</button></td>
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
export default AdminViewProject;