
import Navbar from '../EmpNav/Nav';
import '../EmployeeDash/EmpDash.css';
import './addproject.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import img from '../EmployeeDash/ad.png';
import data from './project.json';
import '../empViewTask/Task.css'
import profile from '../assets/admin.jpeg';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {useUserData} from '../userContext'

function ViewProjectEmp(){
    const { userData } = useUserData();
    let[count,setCount]=useState(0);
    let[projectdetails,setProjectDetails]=useState([])
    let[projectname,setProjectname]=useState(
        ['School Management System',
         'College Management System',
         'Employee Management Syatem',
         'Azure E-commerse App',
         'E-Learning Academy',
         'Trash Management System']);
    const [a, setA] = useState([]);

    useEffect(()=>{
        axios.get(`http://127.0.0.1:3012/taskmanager/api/employee/getProjForEmp?employeesToAdd=${userData.firstname}${userData.lastname}`, {
            headers: {
              "Content-Type": "application/json"
            }
          }).then((res) => {
            console.log(res.data);
            setProjectDetails(res.data.viewProject)
            // const t = res.data
            // setA(t)
            // console.log(a)
          }).catch((err) => {
            console.log(err)
          })
    },[]);


    return(
        <>
       <div className="totalDashBoardDiv ">
        <div className="navDiv" id='navDiv'>
            <Navbar />
        </div>
        <div className="content-wrapper" id='content-wrapper'>
          <div className="content empdashboard">
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
                <table>
                    <thead>
                        <tr>
                            <th style={{paddingRight:"70px"}}>S.No</th>
                            <th>Project Name</th>
                            <th>View Project</th>
                        </tr>
                    </thead>
                    <tbody>
                          {
                            projectdetails.map((e,index)=>{
                                return(
                                    <>
                                    <tr>
                                        <td style={{paddingTop:"26px"}}>{index+1}</td>
                                        <td>{e.projectname}</td>
                                        <td ><Popup trigger=
                                                {<button>View project </button>} 
                                                modal nested>
                                                {
                                                    close => (
                                                        <div className='modal'>
                                                            <br></br>
                                                            <h1 style={{textAlign:"center",fontSize:"25px"}}>{projectdetails[index].projectname}</h1>
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
                                                                    <label>:&nbsp;&nbsp;&nbsp;{projectdetails[index].projectname}</label><br/><br/>
                                                                    <label>:&nbsp;&nbsp;&nbsp;{projectdetails[index].description}</label><br/><br/>
                                                                    <label>:&nbsp;&nbsp;&nbsp;{projectdetails[index].assignedDate}</label><br/><br/>
                                                                    <label>:&nbsp;&nbsp;&nbsp;{projectdetails[index].deadline}</label><br/><br/>
                                                                    <label>:&nbsp;&nbsp;&nbsp;{projectdetails[index].tasks}</label><br/><br/>
                                                                    <label>:&nbsp;&nbsp;&nbsp;{projectdetails[index].status}</label><br/><br></br>
                                                                    <label>:&nbsp;&nbsp;&nbsp;{projectdetails[index].manager}</label><br/><br></br>
                                                                    <label>:&nbsp;&nbsp;&nbsp;{projectdetails[index].teamLeader}</label><br/><br></br>
                                                                    <label>:&nbsp;&nbsp;&nbsp;{projectdetails[index].sector}</label><br/><br></br>
                                                                    <label>:&nbsp;&nbsp;&nbsp;{projectdetails[index].budget}</label><br/><br></br>
                                                                    <label>:&nbsp;&nbsp;&nbsp;{projectdetails[index].applicationType}</label><br/><br></br>
                                                                    <label>:&nbsp;&nbsp;&nbsp;{projectdetails[index].technologies}</label><br/><br></br>
                                                                    <label>:&nbsp;&nbsp;&nbsp;{projectdetails[index].softwareUsing}</label><br/><br></br>
                                                                    {/* <label style={{display:"inline-flex",width:"200px"}}>:&nbsp;&nbsp;&nbsp;{projectdetails.employeesToAdd.join(" , ")}</label><br/><br></br> */}
                                                                    
                                                                    <section className='table-wrappers'>
                                                                    
                                                                        <table>
                                                                    <thead>
                                                                    <tr>
                                                                        <th>S.no</th>
                                                                        <th>Name</th>
                                                                        
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    {/* {
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
                                                                    } */}
                                                                    </tbody>
                                                                    </table>
                                                                    </section>
                                                                    {/* <label>{task.employeesToAdd}</label> */}
                                                                
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
export default ViewProjectEmp;