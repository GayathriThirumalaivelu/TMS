import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// import './UserLogin.css';

function AdminLogin()
{
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
    
    return(
        <>
           <div id="total"> 
                <div className="container">
                    <div className="screen">
                        <div className="screen__content">
                        <h1>Admin Login</h1>
                            <form className="login">
                                <div className="login__field">
                                
                                    <i className="login__icon fas fa-user"></i>
                                    <input type="text" className="login__input" placeholder="User name / Email"  name='username' value={loginData.username} onChange={changeLogin}/>
                                </div>
                                <div className="login__field">
                                    <i className="login__icon fas fa-lock"></i>
                                    <input type="password" className="login__input" placeholder="Password" name='password' value={loginData.password} onChange={changeLogin}/>
                                </div>
                                
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
         
        </>
    )
}
export default AdminLogin;