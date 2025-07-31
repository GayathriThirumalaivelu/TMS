
// import React, { useEffect, useState } from "react";
// import './AdminDashboard.css';
// import Navbar from '../AdminNavBar/Nav'
// import Barchart from '../charts/barChart'
// import Piechart from "../charts/pieChart";
// import axios from 'axios';
// import award1 from '../assets/award1.jfif';
// import award2 from '../assets/award2.jfif';
// import award3 from '../assets/award3.png';
// import award4 from '../assets/award4.jfif';
// import india from '../assets/india.png';
// import france from '../assets/france.png';
// import germany from '../assets/germany.png';
// import uk from '../assets/uk.png';


// // 
// import PropTypes from 'prop-types';
// import Slider, { SliderThumb } from '@mui/material/Slider';
// import { styled } from '@mui/material/styles';
// // import Box from '@mui/material/Box';
// // 
// import { Progress, ButtonGroup, Button, Row, Col } from 'rsuite';


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUserPen, faCheck, faHeartCircleCheck, faArrowTrendUp} from '@fortawesome/free-solid-svg-icons';
// import { useNavigate } from "react-router-dom";


// // const PrettoSlider = styled(Slider)({
// //     color: '#491d90',
// //     height: 8,
// //     '& .MuiSlider-track': {
// //       border: 'none',
// //     },
// //     '& .MuiSlider-thumb': {
// //       height: 24,
// //       width: 24,
// //       backgroundColor: '#fff',
// //       border: '2px solid currentColor',
// //       '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
// //         boxShadow: 'inherit',
// //       },
// //       '&::before': {
// //         display: 'none',
// //       },
// //     },
// //     '& .MuiSlider-valueLabel': {
// //       lineHeight: 1.2,
// //       fontSize: 12,
// //       background: 'unset',
// //       padding: 0,
// //       width: 32,
// //       height: 32,
// //       borderRadius: '50% 50% 50% 0',
// //       backgroundColor: '#491d90',
// //       transformOrigin: 'bottom left',
// //       transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
// //       '&::before': { display: 'none' },
// //       '&.MuiSlider-valueLabelOpen': {
// //         transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
// //       },
// //       '& > *': {
// //         transform: 'rotate(45deg)',
// //       },
// //     },
// //   });


// function AdminDashBoard(){
//     const[getCountOfEmp , setGetCountOfEmp] = useState(0);
//     const[getCountOfProject , setGetCountOfProject] = useState(0);
//     const[getCountOfCompTask , setGetCountOfCompTask] = useState(0);
//     const[getCountOfPendTask , setGetCountOfPendTask] = useState(0);
//     const [percent, setPercent] = React.useState(0);
//     const [status, setStatus] = useState(null);
//     const navigate = useNavigate();
//     const [popupProj, setPopupProj] = useState(false);
//     const [viewProj, setViewproj] = useState([]);
//     const [projectname, setProjectname] = useState('');
//     const [allProj, setAllProj] = useState([]);
//     // const [color, setColor] = useState('#3385ff')    

//     useEffect(()=>{
//         setStatus((percent === 100) ? 'success' : null);
//         // setColor((percent === 100) ? '#52c41a' : '#0f5ef4');
    
//         // count employee
//         axios.get('http://127.0.0.1:3012/taskmanager/api/employee/getCountOfEmp',{
//             headers : {
//                 "Content-Type" : "apllication/json"
//             }
//         }).then((res)=>{
//             console.log(res.data.getCount);
//             setGetCountOfEmp(res.data.getCount);
//         }).catch((err)=>{
//             console.log(err)
//         })

//         // count project
//         axios.get('http://127.0.0.1:3012/taskmanager/api/project/getCountOfPro',{
//             headers : {
//                 "Content-Type" : "apllication/json"
//             }
//         }).then((res)=>{
//             console.log(res.data.getCount);
//             setGetCountOfProject(res.data.getCount);
//         }).catch((err)=>{
//             console.log(err)
//         });

//         // get count of completed task
//         axios.get('http://127.0.0.1:3012/taskmanger/inns/api/task/countOfCompSts?status=completed',{
//             headers : {
//                 "Content-Type" : "apllication/json"
//             }
//         }).then((res)=>{
//             console.log(res.data.compStatus);
//             setGetCountOfCompTask(res.data.compStatus);
//         }).catch((err)=>{
//             console.log(err)
//         });
//         // get count of in process task
//         axios.get('http://127.0.0.1:3012/taskmanger/inns/api/task/countOfCompSts?status=in process',{
//             headers : {
//                 "Content-Type" : "apllication/json"
//             }
//         }).then((res)=>{
//             // console.log(res.data.compStatus);
//             setGetCountOfPendTask(res.data.compStatus);
//         }).catch((err)=>{
//             console.log(err)
//         });

//         axios.get('http://127.0.0.1:3012/taskmanger/inns/api/project/viewAllProject', {
//             headers: {
//               "Content-Type": "application/json"
//             }
//           }).then((res) => {
//             console.log(res.data.viewProject)
            
//             let projects = res.data.viewProject;
//             // setProp(projects)
//             // Extract project names from each project object
//             let projectNames = projects.map(project => project.projectname);
//             // console.log(projectNames);
//             setAllProj(projectNames);
//           }).catch((err) => {
//             console.log(err)
//           })
        
//     }, []);

//     useEffect(()=>{

//     },[viewProj])

//     const popupProject = async(projectname) => {
//         // console.log(allProj)
//         try {
//            const data = await axios.get(`http://127.0.0.1:3012/taskmanger/inns/api/project/viewOneProject?projectname=${projectname}`,{
//             headers : {
//               "Content-Type" : "application/json"
//             }
//           })
//           setViewproj(data.data.viewProject[0]);
//         } catch (error) {
//             console.error('Error project getting', error);
//         }
//         // .then((res)=>{
//         //     // console.log(res.data.viewProject)
//         //     setViewproj(res.data.viewProject[0])
//         //     console.log(viewProj)
//         //   }).catch((err)=>{
//         //     console.log(err)
//         //   })
//         (popupProj === false) ? setPopupProj(true) : setPopupProj(false);
//     }

//     const closePopupProj = () => {
//         setPopupProj(false)
//     }

//     return(
//         <div className="totalDashBoardDiv adminDashbaord">
//             <div className="navDiv" id='navDiv'>
//                 <Navbar />
//             </div>
//             <div className="content-wrapper admn-dshbrd-wraper" id='content-wrapper'>
//                 <div className="content content-boxes">
//                     <div className={(popupProj == true) ? 'active' : 'deactive'}>
//                         <div className="contentActive">
//                             <b id="closeActive" onClick={closePopupProj}>&times;</b>
//                             <h1>{viewProj.projectname}</h1>
//                             <div>
//                             <p><span>description : </span>{viewProj.description}</p>
//                             <p><span>assignedDate :</span> {viewProj.assignedDate}</p>
//                             <p><span>deadline : </span>{viewProj.deadline}</p>
//                             <p><span>applicationType : </span>{viewProj.applicationType}</p>
//                             <p><span>sector :</span> {viewProj.sector}</p>
//                             <p><span>status :</span> {viewProj.status}</p>
//                             <p><span>budget :</span> {viewProj.budget}</p>
//                             <p><span>manager : </span>{viewProj.manager}</p>
//                             <p><span>teamLeader : </span>{viewProj.teamLeader}</p>
//                             <p><span>technologies :</span> {viewProj.technologies}</p>
//                             <p><span>tasks : </span>{viewProj.tasks}</p>
//                             <p><span>employeesToAdd :</span> {viewProj.employeesToAdd}</p>
//                             <p><span>softwareUsing :</span> {viewProj.softwareUsing}</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='content-box3 content-box-common' id='contbox7' onClick={()=> navigate('/ListOfEmp')}>
//                         <p>No of employees joined</p>
//                         <h1><FontAwesomeIcon icon={faUserPen} style={{width:"35px"}}/> {5050+getCountOfEmp}</h1> till date
//                     </div>
//                     <div className='content-box4 content-box-common' id='contbox8'>
//                         <p>Task status</p> 
//                         {/* <Row>
//                             <Col md={6}> */}
//                             <div className="loaderPercent">
//                                 <div style={{ width: 40 }}>
//                                     <Progress.Circle percent={getCountOfCompTask*10} strokeColor={'#59e90c'} strokeWidth={10} status={status} trailColor="#9b9999" trailWidth={10}/>
//                                 </div>
//                                 <div>
//                                     <p style={{color:'#59e90c'}}>Completed</p>
//                                     <p style={{color:'#3385ff'}}>in process</p>
//                                 </div>
//                                 <div style={{ width: 40 }}>
//                                     <Progress.Circle percent={getCountOfPendTask*10} strokeColor={'#3385ff'} strokeWidth={10} status={status} trailColor="grey" trailWidth={10}/>
//                                 </div>
//                             </div>
//                             {/* </Col>
//                         </Row> */}
//                         {/* <hr />
//                         <Progress.Line percent={percent} strokeColor={color} status={status} /> */}
//                         {/* <Box sx={{ width: '10vw' }}>
//                             <Box sx={{ m: 3 }} />
//                             <PrettoSlider
//                             valueLabelDisplay="auto"
//                             aria-label="pretto slider"
//                             defaultValue={20}
//                             />
//                         </Box> */}
//                     </div>
//                     <div className='content-box5 content-box-common' id='contbox9'>
//                         <p>No of projects completed</p>
//                         <h1>
//                             {/* <span></span> */}
//                             <FontAwesomeIcon icon={faCheck}  id="faCheck"/> 
//                         {2780+getCountOfProject}</h1> till date
//                     </div>
//                     <div className='content-box6 content-box-common' id='contbox10'>
//                         <h1>Time & Budget</h1>
//                         <ul>
//                             <span>
//                                 <li><span></span>March</li>
//                                 <li><span></span> June</li>
//                             </span>
//                             <span>
//                                 <li><span></span> 5Cr</li>
//                                 <li><span></span> 20Cr</li>
//                             </span>
//                         </ul>
//                     </div>
//                     <div className='content-box1 content-box-common' id='contbox1'>
//                        <div className="boxInBox">
//                         <Piechart />
//                        </div>
//                        <div className="boxInBox">
//                             <div onClick={()=>popupProject(allProj[0])}>
//                                 <span></span> <b>project A in 2019</b>              
//                             </div>
//                             <div onClick={()=>popupProject(allProj[1])}>
//                                 <span></span> <b>project B in 2019</b> 
//                             </div>
//                             <div onClick={()=>popupProject(allProj[2])}>
//                                 <span></span> <b>project C in 2020</b>              
//                             </div>
//                             <div onClick={()=>popupProject(allProj[3])}>
//                                 <span></span> <b>project D in 2020</b> 
//                             </div>
//                             <div onClick={()=>popupProject(allProj[4])}>
//                                 <span></span> <b>project E in 2021</b>              
//                             </div>
//                             <div onClick={()=>popupProject(allProj[0])}>
//                                 <span></span> <b>project F in 2021</b> 
//                             </div>
//                             <div onClick={()=>popupProject(allProj[1])}>
//                                 <span></span> <b>project G in 2022</b>              
//                             </div>
//                             <div onClick={()=>popupProject(allProj[2])}>
//                                 <span></span> <b>project H in 2022</b> 
//                             </div>
//                             <div onClick={()=>popupProject(allProj[3])}>
//                                 <span></span> <b>project I in 2023</b>              
//                             </div>
//                             <div onClick={()=>popupProject(allProj[4])}>
//                                 <span></span> <b>project J in 2023</b>
//                             </div>
//                             <div onClick={()=>popupProject(allProj[0])}>
//                                 <span></span> <b>project K in 2024</b>
//                             </div>
                            
//                             {/* <span></span> <b>project C in 2020</b> <br />
//                             <span></span> <b>project D in 2020</b> <br />
//                             <span></span> <b>project E in 2021</b> <br />
//                             <span></span> <b>project F in 2021</b> <br />
//                             <span></span> <b>project G in 2022</b> <br />
//                             <span></span> <b>project H in 2023</b> <br />
//                             <span></span> <b>project I in 2023</b> <br />
//                             <span></span> <b>project J in 2024</b> <br />
//                             <span></span> <b>project K in 2024</b> <br /> */}
//                        </div>
//                     </div>
//                     <div className='content-box2 content-box-common' id='contbox2'>
//                         <div>
//                             <h3>Company growth</h3>
//                         </div>
//                         <div className="percent">
//                             <h4>profit Percentage</h4>
//                         </div>
//                         <Barchart />
//                     </div>
//                     <div className='content-box3 content-box-common' id='contbox3'>
//                         <h1>Awards</h1>
//                         <div>
//                             <span className="awardsCont">
//                                 <img src={award1} alt="" width={'40px'} height={'40px'}/>
//                                 <span>
//                                     Best Company in 2020
//                                 </span>
//                             </span>
//                             <span className="awardsCont">
//                                 <img src={award2} alt="" width={'40px'} height={'40px'}/>
//                                 <span>
//                                     Best Company in 2018
//                                 </span>
//                             </span>
//                             <span className="awardsCont">
//                                 <img src={award3} alt="" width={'40px'} height={'40px'}/>
//                                 <span>
//                                     Best Company in 2020
//                                 </span>
//                             </span>
//                             <span className="awardsCont">
//                                 <img src={award4} alt="" width={'40px'} height={'40px'}/>
//                                 <span>
//                                     Best Company in 2023
//                                 </span>
//                             </span>
//                         </div>
//                     </div>
//                     <div className='content-box4 content-box-common' id='contbox4'>
//                        <p>clients feedback</p>
//                        <h1>4.8 <FontAwesomeIcon icon={faHeartCircleCheck} id="heartbeatIcon"/></h1>
//                     </div>
//                     <div className='content-box5 content-box-common' id='contbox5'>
//                         <h1>Countries</h1>
//                         <ul>
//                             <span>
//                                 <li><img src={india} alt="" width={'30px'} height={'20px'}/> India</li>
//                                 <li><img src={france} alt="" width={'30px'} height={'20px'}/> France</li>
//                             </span>
//                             <span>
//                                 <li><img src={germany} alt="" width={'30px'} height={'20px'}/> Germany</li>
//                                 <li><img src={uk} alt="" width={'30px'} height={'20px'}/> UK</li>
//                             </span>
//                         </ul>
//                     </div>
//                     <div className='content-box6 content-box-common' id='contbox6'>
//                         <p>Company Value</p>
//                         <h3><FontAwesomeIcon icon={faArrowTrendUp} id="faCaretUp"/></h3>$ <h3>1.3 M</h3>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default AdminDashBoard;




import React, { useEffect, useState } from "react";
import './AdminDashboard.css';
import Navbar from '../AdminNavBar/Nav'
import Barchart from '../charts/barChart'
import Piechart from "../charts/pieChart";
import axios from 'axios';
import award1 from '../assets/award1.jfif';
import award2 from '../assets/award2.jfif';
import award3 from '../assets/award3.png';
import award4 from '../assets/award4.jfif';
import india from '../assets/india.png';
import france from '../assets/france.png';
import germany from '../assets/germany.png';
import uk from '../assets/uk.png';
import PropTypes from 'prop-types';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import { Progress, ButtonGroup, Button, Row, Col } from 'rsuite';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPen, faCheck, faHeartCircleCheck, faArrowTrendUp} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";



function AdminDashBoard(){
    const[getCountOfEmp , setGetCountOfEmp] = useState(0);
    const[getCountOfProject , setGetCountOfProject] = useState(0);
    const[getCountOfCompTask , setGetCountOfCompTask] = useState(0);
    const[getCountOfPendTask , setGetCountOfPendTask] = useState(0);
    const [percent, setPercent] = React.useState(0);
    const [status, setStatus] = useState(null);
    const navigate = useNavigate();
    const [popupProj, setPopupProj] = useState(false);
    const [viewProj, setViewproj] = useState([]);
    const [projectname, setProjectname] = useState('');
    const [allProj, setAllProj] = useState([]);

    useEffect(()=>{
        setStatus((percent === 100) ? 'success' : null);
    
        // count employee
        axios.get('http://127.0.0.1:3012/taskmanager/api/employee/getCountOfEmp',{
            headers : {
                "Content-Type" : "apllication/json"
            }
        }).then((res)=>{
            console.log(res.data.getCount);
            setGetCountOfEmp(res.data.getCount);
        }).catch((err)=>{
            console.log(err)
        })

        // count project
        axios.get('http://127.0.0.1:3012/taskmanager/api/project/getCountOfPro',{
            headers : {
                "Content-Type" : "apllication/json"
            }
        }).then((res)=>{
            console.log(res.data.getCount);
            setGetCountOfProject(res.data.getCount);
        }).catch((err)=>{
            console.log(err)
        });

        // get count of completed task
        axios.get('http://127.0.0.1:3012/taskmanger/inns/api/task/countOfCompSts?status=completed',{
            headers : {
                "Content-Type" : "apllication/json"
            }
        }).then((res)=>{
            console.log(res.data.compStatus);
            setGetCountOfCompTask(res.data.compStatus);
        }).catch((err)=>{
            console.log(err)
        });
        // get count of in process task
        axios.get('http://127.0.0.1:3012/taskmanger/inns/api/task/countOfCompSts?status=in process',{
            headers : {
                "Content-Type" : "apllication/json"
            }
        }).then((res)=>{
            // console.log(res.data.compStatus);
            setGetCountOfPendTask(res.data.compStatus);
        }).catch((err)=>{
            console.log(err)
        });

        axios.get('http://127.0.0.1:3012/taskmanger/inns/api/project/viewAllProject', {
            headers: {
              "Content-Type": "application/json"
            }
          }).then((res) => {
            console.log(res.data.viewProject)
            
            let projects = res.data.viewProject;
            let projectNames = projects.map(project => project.projectname);
            setAllProj(projectNames);
          }).catch((err) => {
            console.log(err)
          })
        
    }, []);

    useEffect(()=>{

    },[viewProj])

    const popupProject = async(projectname) => {
        try {
           const data = await axios.get(`http://127.0.0.1:3012/taskmanger/inns/api/project/viewOneProject?projectname=${projectname}`,{
            headers : {
              "Content-Type" : "application/json"
            }
          })
          setViewproj(data.data.viewProject[0]);
        } catch (error) {
            console.error('Error project getting', error);
        }
        (popupProj === false) ? setPopupProj(true) : setPopupProj(false);
    }

    const closePopupProj = () => {
        setPopupProj(false)
    }

    return(
        <div className="totalDashBoardDiv adminDashbaord">
            <div className="navDiv" id='navDiv'>
                <Navbar />
            </div>
            <div className="content-wrapper admn-dshbrd-wraper" id='content-wrapper'>
                <div className="content content-boxes">
                    <div className={(popupProj == true) ? 'active' : 'deactive'}>
                        <div className="contentActive">
                            <b id="closeActive" onClick={closePopupProj}>&times;</b>
                            <h1>{viewProj.projectname}</h1>
                            <div>
                            <p><span>description : </span>{viewProj.description}</p>
                            <p><span>assignedDate :</span> {viewProj.assignedDate}</p>
                            <p><span>deadline : </span>{viewProj.deadline}</p>
                            <p><span>applicationType : </span>{viewProj.applicationType}</p>
                            <p><span>sector :</span> {viewProj.sector}</p>
                            <p><span>status :</span> {viewProj.status}</p>
                            <p><span>budget :</span> {viewProj.budget}</p>
                            <p><span>manager : </span>{viewProj.manager}</p>
                            <p><span>teamLeader : </span>{viewProj.teamLeader}</p>
                            <p><span>technologies :</span> {viewProj.technologies}</p>
                            <p><span>tasks : </span>{viewProj.tasks}</p>
                            <p><span>employeesToAdd :</span> {viewProj.employeesToAdd}</p>
                            <p><span>softwareUsing :</span> {viewProj.softwareUsing}</p>
                            </div>
                        </div>
                    </div>
                    <div className='content-box3 content-box-common' id='contbox7' onClick={()=> navigate('/ListOfEmp')}>
                        <p>No of employees joined</p>
                        <h1><FontAwesomeIcon icon={faUserPen} style={{width:"35px"}}/> {5050+getCountOfEmp}</h1> till date
                    </div>
                    <div className='content-box4 content-box-common' id='contbox8'>
                        <p>Task status</p> 
                            <div className="loaderPercent">
                                <div style={{ width: 40 }}>
                                    <Progress.Circle percent={getCountOfCompTask*10} strokeColor={'#59e90c'} strokeWidth={10} status={status} trailColor="#9b9999" trailWidth={10}/>
                                </div>
                                <div>
                                    <p style={{color:'#59e90c'}}>Completed</p>
                                    <p style={{color:'#3385ff'}}>in process</p>
                                </div>
                                <div style={{ width: 40 }}>
                                    <Progress.Circle percent={getCountOfPendTask*10} strokeColor={'#3385ff'} strokeWidth={10} status={status} trailColor="grey" trailWidth={10}/>
                                </div>
                            </div>
                    </div>
                    <div className='content-box5 content-box-common' id='contbox9'>
                        <p>No of projects completed</p>
                        <h1>
                            <FontAwesomeIcon icon={faCheck}  id="faCheck"/> 
                        {2780+getCountOfProject}</h1> till date
                    </div>
                    <div className='content-box6 content-box-common' id='contbox10'>
                        <h1>Time & Budget</h1>
                        <ul>
                            <span>
                                <li><span></span>March</li>
                                <li><span></span> June</li>
                            </span>
                            <span>
                                <li><span></span> 5Cr</li>
                                <li><span></span> 20Cr</li>
                            </span>
                        </ul>
                    </div>
                    <div className='content-box1 content-box-common' id='contbox1'>
                       <div className="boxInBox">
                        <Piechart />
                       </div>
                       <div className="boxInBox">
                            <div onClick={()=>popupProject(allProj[0])}>
                                <span></span> <b>project A in 2019</b>              
                            </div>
                            <div onClick={()=>popupProject(allProj[1])}>
                                <span></span> <b>project B in 2019</b> 
                            </div>
                            <div onClick={()=>popupProject(allProj[2])}>
                                <span></span> <b>project C in 2020</b>              
                            </div>
                            <div onClick={()=>popupProject(allProj[3])}>
                                <span></span> <b>project D in 2020</b> 
                            </div>
                            <div onClick={()=>popupProject(allProj[4])}>
                                <span></span> <b>project E in 2021</b>              
                            </div>
                            <div onClick={()=>popupProject(allProj[0])}>
                                <span></span> <b>project F in 2021</b> 
                            </div>
                            <div onClick={()=>popupProject(allProj[1])}>
                                <span></span> <b>project G in 2022</b>              
                            </div>
                            <div onClick={()=>popupProject(allProj[2])}>
                                <span></span> <b>project H in 2022</b> 
                            </div>
                            <div onClick={()=>popupProject(allProj[3])}>
                                <span></span> <b>project I in 2023</b>              
                            </div>
                            <div onClick={()=>popupProject(allProj[4])}>
                                <span></span> <b>project J in 2023</b>
                            </div>
                            <div onClick={()=>popupProject(allProj[0])}>
                                <span></span> <b>project K in 2024</b>
                            </div>
                       </div>
                    </div>
                    <div className='content-box2 content-box-common' id='contbox2'>
                        <div>
                            <h3>Company growth</h3>
                        </div>
                        <div className="percent">
                            <h4>profit Percentage</h4>
                        </div>
                        <Barchart />
                    </div>
                    <div className='content-box3 content-box-common' id='contbox3'>
                        <h1>Awards</h1>
                        <div>
                            <span className="awardsCont">
                                <img src={award1} alt="" width={'40px'} height={'40px'}/>
                                <span>
                                    Best Company in 2020
                                </span>
                            </span>
                            <span className="awardsCont">
                                <img src={award2} alt="" width={'40px'} height={'40px'}/>
                                <span>
                                    Best Company in 2018
                                </span>
                            </span>
                            <span className="awardsCont">
                                <img src={award3} alt="" width={'40px'} height={'40px'}/>
                                <span>
                                    Best Company in 2020
                                </span>
                            </span>
                            <span className="awardsCont">
                                <img src={award4} alt="" width={'40px'} height={'40px'}/>
                                <span>
                                    Best Company in 2023
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className='content-box4 content-box-common' id='contbox4'>
                       <p>clients feedback</p>
                       <h1>4.8 <FontAwesomeIcon icon={faHeartCircleCheck} id="heartbeatIcon"/></h1>
                    </div>
                    <div className='content-box5 content-box-common' id='contbox5'>
                        <h1>Countries</h1>
                        <ul>
                            <span>
                                <li><img src={india} alt="" width={'30px'} height={'20px'}/> India</li>
                                <li><img src={france} alt="" width={'30px'} height={'20px'}/> France</li>
                            </span>
                            <span>
                                <li><img src={germany} alt="" width={'30px'} height={'20px'}/> Germany</li>
                                <li><img src={uk} alt="" width={'30px'} height={'20px'}/> UK</li>
                            </span>
                        </ul>
                    </div>
                    <div className='content-box6 content-box-common' id='contbox6'>
                        <p>Company Value</p>
                        <h3><FontAwesomeIcon icon={faArrowTrendUp} id="faCaretUp"/></h3>$ <h3>1.3 M</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashBoard;