import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './AdminLogin.css';

function AdminLogin(){
    const [loginData, setLoginData] = useState({
        username : "",
        password : ""
      });
      const [err1, setErr1] = useState({});
      const [err2, setErr2] = useState("")
      const navigate = useNavigate()
    
      const changeLogin = (e) => {
          setLoginData({...loginData, [e.target.name] : e.target.value });
      }

      const validateAdminLogin = (loginData) =>{
        let err1 = {}
        if(loginData.username === ""){
            err1.ErrLogin = "Please enter username"
        }
        else if(loginData.password === ""){
            err1.ErrLogin = "Please enter password"
        }

        return err1;
      }
    
      const submitLogin = (e) => {
        e.preventDefault();
        console.log(loginData);
        const errors = validateAdminLogin(loginData);
        if (Object.keys(errors).length === 0) {
            axios.post(`http://127.0.0.1:3012/taskmanger/inns/api/admin/loginadmin?username=${loginData.username}`, JSON.stringify(loginData), {
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((res) => {
                console.log(res.data);
                navigate('/adminDashboard');
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
    
    return(
        <div className='adminTotal'>
           <div id="total"> 
                <div className="container">
                    <div className="screen">
                        <div className="screen__content">
                        <h1>Admin Log<span>in</span></h1>
                            <form className="login">
                                <div className="login__field">
                                    <i className="login__icon fas fa-user"></i>
                                    <input type="text" className="login__input" placeholder="User name / Email"  name='username' value={loginData.username} onChange={changeLogin}/>
                                </div>
                                <div className="login__field">
                                    <i className="login__icon fas fa-lock"></i>
                                    <input type="password" className="login__input" placeholder="Password" name='password' value={loginData.password} onChange={changeLogin}/>
                                </div>
                                <p>{err1.ErrLogin}</p>
                                <p>{err1.backend}</p>
                                <button className="button login__submit" onClick={submitLogin}>
                                    <span className="button__text">Log In Now</span>
                                    <i className="button__icon fas fa-chevron-right"></i>
                                </button>				
                            </form>
                            <div className="social-login">
                                <h3>log in via</h3>
                                <div className="social-icons">
                                    <a href="#" className="social-login__icon fab fa-instagram"></a>
                                    <a href="#" className="social-login__icon fab fa-facebook"></a>
                                    <a href="#" className="social-login__icon fab fa-twitter"></a>
                                </div>
                            </div>
                        </div>
                        <div className="screen__background">
                            <span className="screen__background__shape screen__background__shape4"></span>
                            <span className="screen__background__shape screen__background__shape3"></span>		
                            <span className="screen__background__shape screen__background__shape2"></span>
                            <span className="screen__background__shape screen__background__shape1"></span>
                        </div>		
                    </div>
                </div>
                
           </div>
         
        </div>
    )
}
export default AdminLogin;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function AdminLogin() {
//     const [loginData, setLoginData] = useState({
//         username: "",
//         password: ""
//     });
//     const navigate = useNavigate();
//     const [err, setErr] = useState({});

//     const changeLogin = (e) => {
//         setLoginData({ ...loginData, [e.target.name]: e.target.value });
//     }

//     const validateAdminLogin = () => {
//         let err = {};
//         if(loginData.username === "") {
//             err.PWresponse = "Username is required.";
//         }
//         else if(loginData.password === "") {
//             err.PWresponse = "Password is required.";
//         }
//         return err;
//     }

//     const submitLogin = (e) => {
//         e.preventDefault();
//         const errors = validateAdminLogin();
//         if (Object.keys(errors).length === 0) {
//             axios.post(`http://127.0.0.1:3012/taskmanger/inns/api/admin/loginadmin?username=${loginData.username}`, JSON.stringify(loginData), {
//                 headers: {
//                     "Content-Type": "application/json"
//                 }
//             }).then((res) => {
//                 console.log(res.data);
//                 navigate('/AdminHome');
//             }).catch((err) => {
//                 if (err.response && err.response.data && err.response.data.message) {
//                     setErr({ backend: err.response.data.message });
//                 } else {
//                     setErr({ backend: "An error occurred. Please try again later." });
//                 }
//             });
//         } else {
//             setErr(errors);
//         }
//     }

//     return (
//         <div id="total">
//             <div class="container">
//                 <div class="screen">
//                     <div class="screen__content">
//                         <h1>Admin Login</h1>
//                         <form class="login">
//                             <div class="login__field">
//                                 <i class="login__icon fas fa-user"></i>
//                                 <input type="text" class="login__input" placeholder="User name / Email" name='username' value={loginData.username} onChange={changeLogin} />
//                             </div>
//                             <div class="login__field">
//                                 <i class="login__icon fas fa-lock"></i>
//                                 <input type="password" class="login__input" placeholder="Password" name='password' value={loginData.password} onChange={changeLogin} />
//                             </div>
//                             <p>{err.PWresponse}</p>
//                             <p>{err.backend}</p>
//                             <button class="button login__submit" onClick={submitLogin}>
//                                 <span class="button__text">Log In Now</span>
//                                 <i class="button__icon fas fa-chevron-right"></i>
//                             </button>
//                         </form>
//                         <div class="social-login">
//                             <h3>log in via</h3>
//                             <div class="social-icons">
//                                 <a href="#" class="social-login__icon fab fa-instagram"></a>
//                                 <a href="#" class="social-login__icon fab fa-facebook"></a>
//                                 <a href="#" class="social-login__icon fab fa-twitter"></a>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="screen__background">
//                         <span class="screen__background__shape screen__background__shape4"></span>
//                         <span class="screen__background__shape screen__background__shape3"></span>
//                         <span class="screen__background__shape screen__background__shape2"></span>
//                         <span class="screen__background__shape screen__background__shape1"></span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default AdminLogin;