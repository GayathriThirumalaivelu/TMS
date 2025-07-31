import React, { useState } from 'react';
import admin from './ad.png';
import './Nav.css'
import { useNavigate, Link } from 'react-router-dom';

function Navbar(){
    const[open1,setOpen1]=useState(false);
    const[open2,setOpen2]=useState(false);
    const[open3,setOpen3]=useState(false);
    const[open4,setOpen4]=useState(false);

    const navigate = useNavigate();

    let showdata=(e)=>{
        switch(e)
        {
            case 1:
                if(open1)
                {
                    setOpen1(false);
                }
                else{
                    setOpen1(true);
                }
                break;
            case 2:
                if(open2)
                {
                    setOpen2(false);
                }
                else{
                    setOpen2(true);
                }
                break;
            case 3:
                if(open3)
                {
                    setOpen3(false);
                }
                else{
                    setOpen3(true);
                }
                break;
            case 4:
                    if(open4)
                    {
                        setOpen4(false);
                    }
                    else{
                        setOpen4(true);
                    }
                    break;
        }
    }
    return(
        <div>
            <div className="vertical-menu-wrapper">
                {/* <img src={admin} id="admin"/> */}
                <div id='admin'>
                    <i className="fa-solid fa-user-check"></i>
                </div>
            
                <div className="vertical-menu-logo" onClick={()=> navigate('/adminDashboard')}>
                    <div className="top"><i className="fa-solid fa-chart-line"></i>&nbsp;Admin Dashbaord
                    </div>
                        {/* <span className="open-menu-btn"><hr/><hr/><hr/></span> */}
                </div>
                <ul className="vertical-menu">
                    <li className="main" onClick={()=> navigate('/adminDashboard')}>&nbsp;<span><i className="fa-solid fa-house"></i>Home</span></li> 
                    <li className="main" onClick={()=>showdata(1)} style={{backgroundColor : (open1) ? "#e0e0e058" : ""}}>
                        &nbsp;
                        <span className='listText'>
                      
                            <i className="fas fa-project-diagram"></i>
                            <span>Project</span>
                            {/* <i className="fa-solid fa-caret-up listTexticon"></i>  */}
                            <i className="fa-solid fa-caret-down listTexticon"></i> 
                        </span> 
                    </li>
                        { open1 ? <div className='sub'>
                                    <li className="one">&nbsp;<span><Link to='/AddProject'>Add New Project</Link></span> </li>
                                    <li className="two">&nbsp;<span><Link to='/adminViewProj'>View Project</Link></span> </li>
                                    </div> : ""
                        }
                    <li className="main" onClick={()=>showdata(2)} style={{backgroundColor : (open2) ? "#e0e0e058" : ""}}>
                        &nbsp;
                        <span className='listText'>
                            <i className="fa-solid fa-list-check"></i>
                            <span>Task</span>
                            <i className="fa-solid fa-caret-down listTexticon"></i> 
                        </span> 
                    </li>
                        { open2 ? <div className='sub'>
                                    <li className="one">&nbsp;<span><i className="fa-solid fa-book"></i><Link to='/AddTask'>Add Task</Link></span> </li>
                                    <li className="one">&nbsp;<span><i className="fa-solid fa-book"></i><Link to='/adminViewTask'>View Task</Link></span> </li>
                                </div> : ""
                        }  
                        {/* <i className="fa-solid fa-users"></i> */}
                        <li className="main" onClick={()=>showdata(3)} style={{backgroundColor : (open3) ? "#e0e0e058" : ""}}>
                        &nbsp;<span><i className="fa-solid fa-user-group"></i>Users<i className="fa-solid fa-caret-down listTexticon"></i> </span> </li>
                        { open3 ? <div className='sub'>
                            
                                    <li>&nbsp;<span className="one"><Link to='/addEmp'>Add New User</Link></span> </li>
                                    <li className="two">&nbsp;<span><Link to='/viewEmp'>View User</Link></span> </li>
                                </div> : ""
                        }
                
                    <li className="main" onClick={()=>showdata(4)} style={{backgroundColor : (open4) ? "#e0e0e058" : ""}}>
                        &nbsp;<span><i className="fa-solid fa-gear"></i>Settings</span> </li>
                        { open4 ? <div className='sub'>
                            
                                    <li>&nbsp;<span className="one"><Link to='/viewEmp'>Update Employee</Link></span> </li>
                                    <li className="two">&nbsp;<span><Link to='/adminViewProj'>Update Project</Link></span> </li>
                                    <li>&nbsp;<span className="one"><Link to='/adminViewTask'>Update Task</Link></span> </li>
                                </div> : ""
                        }
                </ul>
            </div>
        </div>
    )
}

export default Navbar