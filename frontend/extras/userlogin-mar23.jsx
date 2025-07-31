import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './UserLogin.css';
import axios from 'axios';

function UserLogin(){
    const navigate = useNavigate();
    const [userData, setUserData] = useState([])
    const [userloginData, setUserLoginData] = useState({
        email : "",
        password : ""
      });
      const [err1, setErr1] = useState({});
    
      const changeLogin = (e) => {
          setUserLoginData({...userloginData, [e.target.name] : e.target.value });
      }

      const validateuserLogin = (userloginData) =>{
        let err1 = {}
        if(userloginData.email === ""){
            err1.ErrLogin = "Please enter username"
        }
        else if(userloginData.password === ""){
            err1.ErrLogin = "Please enter password"
        }

        return err1;
      }
    
    //   const submitLogin = (e) => {
    //     e.preventDefault();
    //     // console.log(userloginData);
    //     const errors = validateuserLogin(userloginData);
    //     if (Object.keys(errors).length === 0) {
    //         axios.post(`http://127.0.0.1:3012/taskmanager/inns/api/employee/login?email=${userloginData.email}`, JSON.stringify(userloginData), {
    //             headers: {
    //                 "Content-Type": "application/json"
    //             }
    //         }).then((res) => {
    //             // console.log(res.data.viewEmp);
    //             // setUserData(res.data.viewEmp[0]);
    //             let data = res.data.viewEmp[0];
    //             setUserData(data);
    //             // console.log(userData)
    //             navigate('/empDashboard', {state: userData});
    //         }).catch((err) => {
    //             if (err.response && err.response.data && err.response.data.message) {
    //                 setErr1({ backend: err.response.data.message });
    //             } else {
    //                 setErr1({ backend: "An error occurred. Please try again later." });
    //             }
    //         });
    //     } else {
    //         setErr1(errors);
    //     }
    //   }

    const submitLogin = (e) => {
        e.preventDefault();
        const errors = validateuserLogin(userloginData);
        if (Object.keys(errors).length === 0) {
            axios.post(`http://127.0.0.1:3012/taskmanager/inns/api/employee/login?email=${userloginData.email}`, JSON.stringify(userloginData), {
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((res) => {
                console.log("Response data:", res.data); // Log response data
                if (res.data.viewEmp && res.data.viewEmp.length > 0) {
                    const data = res.data.viewEmp[0];
                    console.log("Received data:", data); // Log received data
                    setUserData(data); // Set user data state
                    navigate('/empDashboard', { state: data }); // Navigate with state
                } else {
                    console.error("No data received or invalid data format."); // Log error
                    setErr1({ backend: "An error occurred. Please try again later." });
                }
            }).catch((err) => {
                if (err.response && err.response.data && err.response.data.message) {
                    setErr1({ backend: err.response.data.message });
                } else {
                    setErr1({ backend: "An error occurred. Please try again later." });
                }
            });
        } else {
            setErr1(errors);
        }
    }
    



    //   useEffect(()=>{

    //   },[userData])

    return(
        <div className='totalOfTotal'>
           <div id="total"> 
                <div class="container">
                    <div class="screen">
                        <div class="screen__content">
                        <h1>Employee <br/> Login</h1>
                            <form class="login">
                                <div class="login__field">
                                
                                    <i class="login__icon fas fa-user"></i>
                                    <input type="text" class="login__input" placeholder="User name / Email" name='email' value={userloginData.email} onChange={changeLogin}/>
                                </div>
                                <div class="login__field">
                                    <i class="login__icon fas fa-lock"></i>
                                    <input type="password" class="login__input" placeholder="Password" name='password' value={userloginData.password} onChange={changeLogin}/>
                                </div>
                                <button class="button login__submit">
                                    <span class="button__text" onClick={submitLogin}>Log In Now</span>
                                    <i class="button__icon fas fa-chevron-right"></i>
                                </button>				
                            </form>
                            <div class="social-login">
                                <h3>log in via</h3>
                                <div class="social-icons">
                                    <a href="#" class="social-login__icon fab fa-instagram"></a>
                                    <a href="#" class="social-login__icon fab fa-facebook"></a>
                                    <a href="#" class="social-login__icon fab fa-twitter"></a>
                                </div>
                            </div>
                        </div>
                        <div class="screen__background">
                            <span class="screen__background__shape screen__background__shape4"></span>
                            <span class="screen__background__shape screen__background__shape3"></span>		
                            <span class="screen__background__shape screen__background__shape2"></span>
                            <span class="screen__background__shape screen__background__shape1"></span>
                        </div>		
                    </div>
                </div>
                
           </div>
         
        </div>
    )
}
export default UserLogin;