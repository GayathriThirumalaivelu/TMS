import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Loader from './loader/loader';

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoader(false)
    }, 3000)
  },[])

  return(
    <>
      {(loader == true) ? <Loader /> :
        <div className='avatar-total-container'>
          <div id="avatar-container">
              <h1>Task management system</h1>
              <div id="avatar">
              <div id="adm">
                  <Link to='/adminLogin'><i class="fa-solid fa-user-check" id="admi"></i></Link>
                  <br></br>
                  <p className="text">Admin</p>
              </div>
              <div id="emp">
                <Link to='/userLogin'><i class="fa-solid fa-user" id="user"></i></Link> 
                <br></br>
              <p className="text">Employee</p>
              </div>
            </div>
          </div>
          {/* <Link to='/adminLogin'>Admin</Link>
          <br/><br/>
          <Link to='/userLogin'>employee</Link> */}
        </div>
      }
    </>

  )
}

export default App;
