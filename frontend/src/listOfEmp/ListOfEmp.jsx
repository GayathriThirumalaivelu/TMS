import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from '../AdminNavBar/Nav'
import './listOfEmp.css';
import empImg from './admin.jpeg';
import Names from "./empnames";

function ListOfEmp(){
    const [list,setList] = useState([]);
    const [count, setCount] = useState(0);
    const [names, setNames] = useState(Names)


    useEffect(()=>{
        // console.log(names)
        axios.get('http://127.0.0.1:3012/taskmanager/api/employee/getUsername',{
            headers : {
                "Content-Type" : "apllication/json"
            }
        }).then((res)=>{
            // console.log(res.data.compStatus);
            setList(res.data.viewUsernames);
            
            // console.log(list);
        }).catch((err)=>{
            console.log(err)
        });

    },[])

    
    useEffect(() => {
    // console.log("list of emp", list);
        let a = list.length;
        setCount(a);
    }, [list, count]);

    return(
        <>
            <div className="totalDashBoardDiv">
                <div className="navDiv" id='navDiv'>
                    <Navbar />
                </div>
                <div className="content-wrapper" id='content-wrapper'>
                    <div className="content">
                        <div className="listOfEmp">
                            <h1>List of employees</h1>
                            <div className="listEmp">
                                <ul>
                                    {list.filter((e,i) => i < 4).map((e, ind)=>{
                                        return(
                                            <span key={ind}>
                                                <li>
                                                    <img src={empImg} alt="" />
                                                    <span>
                                                    {e.firstname} {e.lastname} 
                                                    {/* <br/> {e.userRole} */}
                                                    </span>
                                                </li> 
                                            </span>
                                            )
                                        })
                                    }
                                </ul>
                                <ul>
                                    {list.filter((e,i) => (i >= 4) && (i < 8)).map((e, ind)=>{
                                        return(
                                            <span key={ind}>
                                                <li>
                                                    <img src={empImg} alt="" />
                                                    <span>
                                                    {e.firstname} {e.lastname} 
                                                    {/* <br /> {e.userRole} */}
                                                    </span>
                                                </li> 
                                            </span>
                                            )
                                        })
                                    }
                                </ul>
                                <ul>
                                    {list.filter((e,i) => (i >= 8) && (i < 12)).map((e, ind)=>{
                                        return(
                                            <span key={ind}>
                                                <li>
                                                    <img src={empImg} alt="" />
                                                    <span>
                                                    {e.firstname} {e.lastname}
                                                    {/* <br/> {e.userRole} */}
                                                    </span>
                                                </li> 
                                            </span>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="listEmp">
                                <ul>
                                    {names.filter((e,i) => (i >= 0) && (i < 150)).map((e, ind)=>{
                                            return(
                                                <span key={ind}>
                                                    <li>
                                                        <img src={empImg} alt="" />
                                                        <span>
                                                        {e.firstName} {e.lastName} 
                                                        {/* <br /> {e.userRole} */}
                                                        </span>
                                                    </li> 
                                                </span>
                                                )
                                            })
                                        }
                                </ul>
                                <ul>
                                    {names.filter((e,i) => (i >= 150) && (i < 300)).map((e, ind)=>{
                                        return(
                                            <span key={ind}>
                                                <li>
                                                    <img src={empImg} alt="" />
                                                    <span>
                                                    {e.firstName} {e.lastName} 
                                                    {/* <br /> {e.userRole} */}
                                                    </span>
                                                </li> 
                                            </span>
                                            )
                                        })
                                    }
                                </ul>
                                <ul>
                                    {names.filter((e,i) => (i >= 300) && (i < 450)).map((e, ind)=>{
                                        return(
                                            <span key={ind}>
                                                <li>
                                                    <img src={empImg} alt="" />
                                                    <span>
                                                    {e.firstName} {e.lastName} 
                                                    {/* <br /> {e.userRole} */}
                                                    </span>
                                                </li> 
                                            </span>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ListOfEmp;