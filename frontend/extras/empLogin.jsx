import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

function EmpLogin() {
  const [emploginData, setEmploginData] = useState({
    username : "",
    password : ""
  });
  const navigate = useNavigate()

  const changeEmpLogin = (e) => {
      setEmploginData({...emploginData, [e.target.name] : e.target.value });
  }

  // console.log(props)
  const submitEmpLogin = (e) => {
    e.preventDefault();
    console.log(emploginData);
    axios.post(`http://127.0.0.1:3012/taskmanager/inns/api/employee/login?username=${emploginData.username}`,JSON.stringify(emploginData),{
      headers : {
        "Content-Type" : "application/json"
      }
    }).then((res)=>{
      console.log(res.data);
      navigate('/viewTaskEmp', {
        state:{
          username:emploginData.username
        }
      })
    }).catch((err)=>{
      console.log(err);
    })
  }

  return (
    <>
      <h1>Admin login</h1>
      <p>emp1fe.innovaskill@gmail.com / emp1</p>
      <form>
          <input type='email' placeholder='email' name='username' value={emploginData.username} onChange={changeEmpLogin}/>
          <br /><br />
          <input type='password' placeholder='password' name='password' value={emploginData.password} onChange={changeEmpLogin}/>
          <br /><br />
          <button onClick={submitEmpLogin}><Link to='/viewTaskEmp' state={emploginData.username}>Login</Link></button>
      </form>
    </>
  );
}

export default EmpLogin;