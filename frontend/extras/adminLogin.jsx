import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const [loginData, setLoginData] = useState({
    username : "",
    password : ""
  });
  const navigate = useNavigate()

  const changeLogin = (e) => {
      setLoginData({...loginData, [e.target.name] : e.target.value });
  }

  const submitLogin = (e) => {
    e.preventDefault();
    console.log(loginData);
    axios.post(`http://127.0.0.1:3012/taskmanger/inns/api/admin/loginadmin?username=${loginData.username}`,JSON.stringify(loginData),{
      headers : {
        "Content-Type" : "application/json"
      }
    }).then((res)=>{
      console.log(res.data);
      navigate('/AdminHome');
    }).catch((err)=>{
      console.log(err);
    })
  }

  return (
    <>
      <h1>Admin login</h1>
      <p>admin2 / admin2</p>
      <form>
          <input type='text' placeholder='username' name='username' value={loginData.username} onChange={changeLogin}/>
          <br /><br />
          <input type='password' placeholder='password' name='password' value={loginData.password} onChange={changeLogin}/>
          <br /><br />
          <button onClick={submitLogin}>Login</button>
      </form>
    </>
  );
}

export default AdminLogin;