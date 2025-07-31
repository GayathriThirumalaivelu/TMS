// import React, { useEffect } from "react";
// import Navbar from "../EmpNav/Nav";
// import { useUserData } from '../userContext';
// import { useNavigate } from "react-router-dom";

// function ViewEmpProfile(){
//   const { userData } = useUserData();
//   const navigate = useNavigate()

//   // useEffect(()=>{
//   //   console.log(userData)
//   // })
//     return(
//         <>
//            <div className="totalDashBoardDiv ">
//             <div className="navDiv" id='navDiv'>
//                 <Navbar />
//             </div>
//             <div className="content-wrapper" id='content-wrapper'>
//               <div className="content">
//                     <h1>view profile of emp</h1>
//                     <button onClick={()=>navigate('/UpdateEmpProfile', {state: userData})}>update</button>
//               </div>
//             </div>
//           </div>
//         </>
//     )
// }

// export default ViewEmpProfile;



import '../EmployeeDash/EmpDash.css';
import '../AddProject/addproject.css';
import './viewEmpProfile.css';
// import emp from './emp.json';
import profile from '../assets/admin.jpeg';
import { useState } from 'react';
import React, { useEffect } from "react";
import Navbar from "../EmpNav/Nav";
import { useUserData } from '../userContext';
import { useNavigate } from "react-router-dom";

function ViewEmpProfile(){
  const { userData } = useUserData();
  const navigate = useNavigate()
    const[data,setData]=useState(userData)
    return(
        <>
       <div className="totalDashBoardDiv ">
        <div className="navDiv" id='navDiv'>
            <Navbar />
        </div>
        <div className="content-wrapper" id='content-wrapper'>
          <div className="content"> 
          <div id="emp"> 
          <div id="total"> 
                <div class="container">
                    <div class="screen">
                        <div class="screen__content">
                        </div>
                        <div class="screen__background">
                           <span class="screen__background__shape screen__background__shape5">
                            <img src={data.image} id="profileimg"></img>
                           </span>
                            <span class="screen__background__shape screen__background__shape4"></span>
                            <span class="screen__background__shape screen__background__shape3"></span>		
                            <span class="screen__background__shape screen__background__shape2"></span>
                            <span class="screen__background__shape screen__background__shape1">
                                 <div id="profiledata">
                                    <p style={{marginLeft:"-90px"}}>Name   <span style={{paddingLeft:"133px",paddingRight:"20px"}}>:</span>&nbsp;{data.firstname+data.lastname}</p>
                                    <p style={{marginLeft:"-60px"}}>Email  <span style={{paddingLeft:"103px",paddingRight:"20px"}}>:</span>&nbsp;{data.email}</p>
                                    <p style={{marginLeft:"-30px"}}>Role   <span style={{paddingLeft:"86px",paddingRight:"20px"}}>:</span>&nbsp;{data.userRole}</p>
                                    <p style={{marginLeft:"0px"}}>Dep  <span style={{paddingLeft:"61px",paddingRight:"20px"}}>:</span>&nbsp;{data.department}</p>
                                    <p style={{marginLeft:"18px"}}>EmpNo  <span style={{paddingLeft:"11px",paddingRight:"20px"}}>:</span>&nbsp;{data.empNo}</p>
                                    
                                    {/* <label>Qualification</label> */}
                                 </div>
                            </span>
                        </div>		
                    </div>
                </div>
            </div>   
           </div>
           <section id="totalempdisplay">
                <section id="leftempdisplay">
                        <div>
                            <label>UserName</label><br/><br/>
                            <label>Mobile No</label><br/><br/>
                            <label>Qualification</label><br/><br/>
                            <label>Gender</label><br/><br/>
                            <label>Address</label><br/><br/>
                            <label>Skills</label><br/><br/>
                        </div>
                        <div>
                            <label>{data.username}</label><br/><br/>
                            <label>{data.number}</label><br/><br/>
                            <label>{data.qualification}</label><br/><br/>
                            <label>{data.gender}</label><br/><br/>
                            <label>{data.address}</label><br/><br/>
                            <label>{data.skills}</label><br/><br/>
                         
                        </div>
                </section>
                <section id="rightempdisplay">
                        <div>
                            <label>Salary</label><br/><br/>
                            <label>DateofJoin</label><br/><br/>
                            <label>Experience</label><br/><br/>
                            <label>PrevJobRole</label><br/><br/>
                            <label>Dob</label><br/>
                            <br/>
                        </div>
                        <div>
                            <label>{data.salary}</label><br/><br/>
                            <label>{data.dateOfJoin}</label><br/><br/>
                            <label>{data.experience}</label><br/><br/>
                            <label>{data.prevJobRole}</label><br/><br/>
                            <label>{data.dob}</label><br/><br/>
                         
                        </div>
                </section>
           </section>
         </div>
        </div>
      </div>
        </>
    )
}
export default ViewEmpProfile;