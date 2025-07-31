
import Navbar from '../EmpNav/Nav';
import './EmpDash.css';
import img from './ad.png';
import projectbar from '../assets/projectbar.jpeg';
import profile from '../assets/admin.jpeg';
import { useEffect, useState } from 'react';
import BarChat from "./Bar";
import BarChartExample from './Bar';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import { useUserData } from '../userContext';




function EmpDash(){
    // const location=useLocation();
    // const[userDatas,setUpdateDatas]=useState(location.state);
    const { userData } = useUserData();
    let[count,setCount]=useState(0);
    let[teamdata,setTeamdata]=useState([])

    useEffect(()=>{
        axios.get('http://127.0.0.1:3012/taskmanager/api/employee/getUsername',{
            headers : {
                "Content-Type" : "application/json"
            }
        }).then((res)=>{
            let data = res.data.viewUsernames;
            // console.log(data);
            let teammate=data.filter((e)=>e.userRole=== "Web developer" || e.userRole == 'Frontend developer' || e.userRole == 'Backend developer');
            // console.log(teammate)
            setTeamdata(teammate)
             console.log(teamdata)
        }).catch((err)=>{
            console.log(err);
        })
    },[])

    useEffect(()=>{
        if(count<250){
            setTimeout(()=>{
                setCount(count+3);
            },5)
        }
    },[count])
    return(
        <>
       <div className="totalDashBoardDiv ">
        <div className="navDiv" id='navDiv'>
            <Navbar/>
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
             <section className='row'>
                  <div className='part'><h1 style={{textAlign:"center"}}>Project</h1>
                   <div className='line'>
                        <div class="progress">
                            <div class="progress-value1"></div>
                        </div>
                        <div style={{margin:"8px  10px"}}>60% Completed</div>
                  </div>
                  <div  className='line'>
                        <div class="progress">
                            <div class="progress-value2"></div>
                        </div>
                        <div style={{margin:"8px  10px"}}>45% Pending</div>
                  </div>
                  <div  className='line'>
                        <div class="progress">
                            <div class="progress-value3"></div>
                        </div>
                        <div style={{margin:"8px  10px"}}>30% Inprogress</div>
                  </div>
                  </div>     
                  <div className='part' style={{width:"220px"}}>
                        <h1 style={{textAlign:"center"}}><br></br>Number of Project</h1>
                        <h1 class="counting">{count}</h1>
                  </div>
                  <div className='part' style={{width:"220px"}}>
                        <h1 style={{textAlign:"center"}}><br></br>Experience</h1>
                        <h1 class="counting">{userData.experience[2]}+years</h1>
                  </div>
             </section>
             <section className='row'>
                  <div className='part'>
                         <BarChartExample/>
                    </div>  
                  <div className='part'>
                    <h1 style={{textAlign:"center"}}>Team Members</h1>
                    <div id="teammate">
                        {teamdata.map((e)=>{
                            return(
                            <div class="data">
                            <div>
                                <img src={img} className="team"></img>
                                </div>
                            <div style={{marginTop:6}}>
                                <p>{e.firstname} {e.lastname}</p>
                                <p>{e.userRole}</p>
                            </div>
                        </div>
                            )
                        })}
                        
                        
                       
                    </div>
                  </div>
             </section>
          </div>
        </div>
      </div>
        </>
    )
}
export default EmpDash;