import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from '../AdminNavBar/Nav';
import '../listOfEmp/listOfEmp.css';
import empImg from '../assets/admin.jpeg';
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import '../adminViewTask/Task.css';

function ViewEmployee(){
    const [list,setList] = useState([]);
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);
  const navigate = useNavigate();


    useEffect(()=>{
      axios.get('http://127.0.0.1:3012/taskmanager/api/employee/getUsername',{
          headers : {
              "Content-Type" : "application/json"
          }
      }).then((res)=>{
          // console.log(res.data.compStatus);
          setList(res.data.viewUsernames);
          
          // console.log(list);
      }).catch((err)=>{
          console.log(err)
      });
    },[])

    const updateEmp = (e) =>{
        console.log(e)
        axios.get(`http://127.0.0.1:3012/taskmanger/inns/api/employee/viewOneEmp?username=${e.username}`,{
            headers : {
            "Content-Type" : "application/json"
            }
        }).then((res)=>{
            // console.log(res.data.viewEmp[0])
            const d = res.data.viewEmp[0];
            setData(d);
        }).catch((err)=>{
            console.log(err)
        })
    }

    useEffect(() => {
        if (Object.keys(data).length !== 0) {
            navigate('/updateEmployee', { state: data });
        }
    }, [data, navigate]);

    
    // useEffect(() => {
    // // console.log("list of emp", list);
    //     let a = list.length;
    //     setCount(a);
    // }, [list, count]);

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
                                <section className='table-wrapper' style={{marginLeft : "21px"}}>
                                    <table>
                                        <thead>
                                            <tr>
                                            <th style={{paddingLeft:"40px"}}>S.No</th>
                                                <th>Employee Name</th>
                                                <th>Employee Role</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {list.map((e,i)=>{
                                                return(
                                                    <tr key={i}>
                                                        <td style={{paddingTop:"26px"}}>{i+1}</td>
                                                        <td>{e.firstname}{e.lastname}</td>
                                                        <td>{e.userRole}</td>
                                                        <td> <button onClick={()=>updateEmp(e)} style={{width:"140px", fontFamily : 'var(--fontFamily)'}}>  Update Employee</button></td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ViewEmployee;