import React, { useEffect, useState } from 'react';
// import admin from '../AdminDashboard/ad.png';
import './Nav.css'
import { Link } from 'react-router-dom';


function Navbar(){
    // const [userDatas, setUserDatas] = useState(props.userDatas);
    const[open1,setOpen1]=useState(false);
    const[open2,setOpen2]=useState(false);
    const[open3,setOpen3]=useState(false);

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
        }
    }

    // useEffect(()=>{
    //     console.log(userDatas)
    // },[])

    return(
        <div>
            <div className="vertical-menu-wrapper">
                {/* <img src={admin} id="admin"/> */}
                <div id='admin'>
                <i class="fa-solid fa-user"></i>
                </div>
            
                <div className="vertical-menu-logo">
                    <div className="top"><i class="fa-solid fa-chart-line"></i>&nbsp;<Link to='/empDashboard' style={{color:"inherit", textDecoration : "none"}}>Employee Dashbaord</Link>
                    </div>
                        {/* <span className="open-menu-btn"><hr/><hr/><hr/></span> */}
                </div>
                <ul className="vertical-menu">
                    <li className="main"><Link to='/empDashboard'>&nbsp;<span><i class="fa-solid fa-house"></i>Home</span></Link></li> 
                    <li className="main" onClick={()=>showdata(1)} style={{backgroundColor : (open1) ? "#e0e0e058" : ""}}>
                        &nbsp;
                        <span className='listText'>
                        <i class="fa-solid fa-user"></i>
                            <span>Profile</span>
                            {/* <i className="fa-solid fa-caret-up listTexticon"></i>  */}
                            <i className="fa-solid fa-caret-down listTexticon"></i> 
                        </span> 
                    </li>
                        { open1 ? <div className='sub'>
                                    <li className="one"><Link to='/ViewEmpProfile'>&nbsp;<span>View Profile</span></Link></li>
                                    {/* <li className="two"><Link to='/viewEmp'>&nbsp;<span>Edit Profile</span></Link></li> */}
                                    </div> : ""
                        }
                    <li className="main"><span> <Link to='/ViewProjectEmp'><i class="fas fa-project-diagram"></i>Project</Link></span></li> 
                    <li className="main" onClick={()=>showdata(2)} style={{backgroundColor : (open2) ? "#e0e0e058" : ""}}>
                        &nbsp;
                        <span className='listText'>
                            <i className="fa-solid fa-list-check"></i>
                            <span>Task</span>
                            <i className="fa-solid fa-caret-down listTexticon"></i> 
                        </span> 
                    </li>
                        { open2 ? <div className='sub'>
                                    <li className="one"><Link to='/EmpViewTask'>&nbsp;<span><i className="fa-solid fa-book"></i>View Task</span> </Link></li>
                                    {/* <li className="one"><Link to='/updateTask'>&nbsp;<span><i className="fa-solid fa-book"></i>Update  Task</span> </Link></li> */}
                                </div> : ""
                        }  
                        {/* <i class="fa-solid fa-users"></i> */}
                        
                        <li className="main" onClick={()=>showdata(3)} style={{backgroundColor : (open3) ? "#e0e0e058" : ""}}>
                        &nbsp;
                        <span className='listText'>
                        <i className="fa-solid fa-gear"></i>
                            <span>Settings</span>
                            <i className="fa-solid fa-caret-down listTexticon"></i> 
                        </span> 
                    </li>
                        { open3 ? <div className='sub'>
                                    <li className="one">&nbsp;<span><Link to='/ViewEmpProfile'>Update Profile</Link></span></li>
                                    <li className="one">&nbsp;<span><Link to='/EmpViewTask'>Update Task</Link></span></li>
                                </div> : ""
                        } 
                </ul>
            </div>
        </div>
    )
}
export default Navbar;