import React , { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
// import data from '../data.json';
import Navbar from '../AdminNavBar/Nav'
import "../addEmployee/addEmployee.css";
import empImg from '../assets/admin.jpeg';


function UpdateEmployee() {
  const[image,setImage]=useState("");
  //  const datas=data[0];
  //  console.log(datas);
  const location=useLocation();

  const[datas,setDatas]=useState(location.state);

    const [addEmp, setAddEmp] = useState({
      firstname : datas.firstname,
      lastname : datas.lastname,
      number:datas.number,
      email : datas.email,
      empNo:datas.empNo,
      password : datas.password,
      empRole :datas.userRole,
      dob:datas.dob,
      qualification:datas.qualification,
      gender:datas.gender,
      image:datas.image,
      address:datas.address,
      skill:datas.skill,
      department:datas.department,
      salary:datas.salary,
      dateOfJoin:datas.dateOfJoin,
      experience:datas.experience,
      prevJobRole:datas.prevJobRole,
});
    // const [empEmail, setEmpEmail] = useState([])
    const navigate = useNavigate();
    // const[errors,setErrors]=useState({});
    const [err,setErr] = useState({})

    // useEffect(()=>{
    //     axios.get('http://127.0.0.1:3012/taskmanager/inns/api/employee/getEmpEmail',{
    //         headers : {
    //             "Content-Type" : "application/json"
    //         }
    //     }).then((res)=>{
    //         console.log('success');
    //         setEmpEmail(res.data.viewEmailIds)
    //     }).catch((err)=>{
    //         console.log(err);
    //     })
    // }, [])
    const validateErrors=()=>{
      let err={};
      if(addEmp.firstname===""){
        err.firstname="Required field";
      }
      if(addEmp.lastname==="")
      {
        err.lastname="Required field";
      }
      if(addEmp.number==="")
      {
        err.number="Required Field"
      }
      if(addEmp.email==="")
      {
        err.email="Required field";
      }
      if(addEmp.empRole==="")
      {
        err.empRole="select userRole";
      }
      if(addEmp.empNo==="")
      {
        err.empNo="Required field";
      }
      if(addEmp.department==="")
      {
        err.department="Required field"
      }
      if(addEmp.gender==="")
      {
        err.gender="Required field"
      }
      if(addEmp.dateOfJoin==="")
      {
        err.dateOfJoin="Required field"
      }
      if(addEmp.dob==="")
      {
        err.dob="Required field"
      }
      if(addEmp.address==="")
      {
        err.address="Required field"
      }
      if(addEmp.salary==="")
      {
        err.salary="Required field"
      }
      if(addEmp.image==="")
      {
        err.image="Required field"
      }
      if(addEmp.experience==="")
      {
        err.experience="Required field"
      }
      if(addEmp.prevJobRole==="")
      {
        err.prevJobRole="Required field"
      }
      if(addEmp.skill==="")
      {
        err.skill="Required field"
      }
      if(addEmp.qualification==="")
      {
        err.qualification="Required field"
      }
      return err;
    }
  
    const changeAddEmp = (e) => {
        setAddEmp({...addEmp, [e.target.name] : e.target.value });
    }

    const converttoBase64=(e)=>{
        var reader=new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload=()=>{
          // console.log(reader.result)
          setAddEmp((prevAddEmp)=>{
            return {...prevAddEmp, image : reader.result}
          })
          // setImage(reader.result)
        }
        reader.onerror=(error)=>{
          console.log("error:",error);
          setAddEmp((prevAddEmp)=>{
            return {...prevAddEmp}
          })
        };      
    }
    useEffect(() => {
      if (addEmp.dateOfJoin && addEmp.dob) {
        let a = addEmp.dateOfJoin.split('-').reverse().join('-');
        setAddEmp((prevAddEmp) => ({ ...prevAddEmp, dateOfJoin: a }));
    
        let b = addEmp.dob.split('-').reverse().join('-');
        setAddEmp((prevAddEmp) => ({ ...prevAddEmp, dob: b }));
      }
    }, []);
   const handleGenderChange = (e) => {
    setAddEmp({ ...addEmp, gender: e.target.value });
  }
    const submitUpdateEmp = (e) => {
      e.preventDefault();
      //   console.log(addEmp);
      // setErr(validateErrors);
      console.log(addEmp)
      // axios.post(`http://127.0.0.1:3012/taskmanager/inns/api/employee/create`,JSON.stringify(addEmp),{
      //     headers : {
      //       "Content-Type" : "application/json"
      //     }
      //   }).then((res)=>{
      //     console.log(res.data);
      //   }).catch((err)=>{
      //     console.log(err);
      // })
      if(addEmp.firstname!==""&& addEmp.lastname!=="" && addEmp.email!=="" && addEmp.empNo!=="" && addEmp.password!==""&&addEmp.confirmPassword!=="" && addEmp.userRole!==""){
          setAddEmp({
            firstname:"",
            lastname:"",
            empNo:"",
            empRole:"",
            number:"",
            password:"",
            email:"",
            image:"",
            address:"",
            skill:"",
            department:"",
            salary:"",
            dateOfJoin:"",
            experience:"",
            prevJobRole:"",
            dob:"",
            qualification:"",
            gender:"",
          
          })
      }
  }
  
    return (
      <div className="totalDiv totalDashBoardDiv">
      <div className="navDiv" id='navDiv'>
        <Navbar/>
      </div>
      <div className="content-wrapper" id='content-wrapper'>
        <div className="content">
          <div className="addEmployeeTotal" id="addprojectcontainer">
            <h1>Edit Employee</h1>
            <section id="TotalEmployeeForm">
              <section id="Totalcontainer">  
                  <div>
                <img src={empImg} id="userimage"></img>
                  <input accept='image/*' id="image" style={{visibility:'hidden',width:"0px",height:"0px"}} 
                  type='file' onChange={converttoBase64}/><br></br><br></br>
                  <label for="image" id="imageupload">Update Profile</label><br></br>
                  <br></br>  <br /> 
                  <input type='text' placeholder='Emp no' name='empNo' value={addEmp.empNo} onChange={changeAddEmp}/>
                  <br /><p>{err.empNo}</p><br />
                    {/* firstname */}
                    <input type='text' placeholder='firstname' name='firstname' value={addEmp.firstname} onChange={changeAddEmp} readOnly></input>
                    <br /><p>{err.firstname}</p> <br />
                    {/* lastname */}
                  <input type='text' placeholder='lastname' name='lastname' value={addEmp.lastname} onChange={changeAddEmp} readOnly/>
                  <br /><p>{err.lastname}</p><br />
                  
                  

                    <br></br>
                    <label>Gender</label>
                  <input type="radio" name="gender" style={{width:"15px",height:"15px",margin:"0px 3px 0px 15px"}} value="female" checked={addEmp.gender === "female"} onChange={handleGenderChange} />
                  <label>Female</label>
                  <input type="radio" name="gender"style={{width:"15px",height:"15px",margin:"0px 3px 0px 15px"}}  value="male" checked={addEmp.gender === "male"} onChange={handleGenderChange} />
                  <label>Male</label>
                  <input type="radio" name="gender" style={{width:"15px",height:"15px",margin:"0px 3px 0px 15px"}} value="other" checked={addEmp.gender === "other"} onChange={handleGenderChange} />
                  <label>Others</label>
                      
                  <br/><br></br>
                    {/* salary */}
                    <label>Salary </label>
                    <input type="text" name="salary" placeholder="Salary" id="sal" value={addEmp.salary} onChange={changeAddEmp}/><br></br>
                    {/* experience*/}
                    <label htmlFor="">Years of Experience</label>
                  <select name="experience" id="exper" value={addEmp.experience} onChange={changeAddEmp}>
                    <option value="0-1">0-1</option>
                    <option value="1-2">1-2</option>
                    <option value="2-3">2-3</option>
                    <option value="3-4">3-4</option>
                  </select>
                  <p>{err.experience}</p>
                    <br />
                  </div>
                  <div>
                    <br></br><br></br>
                    {/* email id */}
                    <input type='text' placeholder='Email' name='email' value={addEmp.email} onChange={changeAddEmp} readOnly/>
                  <br /><p>{err.email}</p><br />
                  {/* qualification */}
                  <input type="text" placeholder="qualification" name="qualification" value={addEmp.qualification} onChange={changeAddEmp}/>
                  <br /><br></br>
                  {/* mobileno */}
                  <input type='text' placeholder='Enter number' name='number' value={addEmp.number} onChange={changeAddEmp}/>
                  <br /><p>{err.number}</p> <br/>
                  
                                  {/* skill */}
  <input type="text" placeholder="Skills" name="skill" value={addEmp.skill} onChangeCapture={changeAddEmp} id="skills"/>
                  <p>{err.skill}</p> <br />
                  {/* dob */}
                  <label>Date of birth</label>
                  <input type="date" placeholder="dob" name="dob" id="dob" value={addEmp.dob} onChange={changeAddEmp}/>
                  <br /><br></br>
                  <label>Department</label>
                    {/* department */}
                    <select name="department" id="dep" value={addEmp.department} onChange={changeAddEmp}>
                    <option value="Development">Development</option>
                    <option value="Testing">Testing</option>
                    <option value="Management">Management</option>
                    <option value="Design">Design</option>
                    <option value="Prodcution">Production</option>
                  </select>
                  <p>{err.department}</p> <br />
                  {/* userRole */}
                  <label>Emp Role</label>
                  <select name="empRole" value={addEmp.empRole} onChange={changeAddEmp} id="emproll">
                      <option value="Web developer">Web developer</option>
                      <option value="Frontend developer">Frontend developer</option>
                      <option value="Backend developer">Backend developer</option>
                      <option value="Test engineer">Test engineer</option>
                      <option value="Production engineer">Production engineer</option>
                      <option value="HR">HR</option>
                      <option value="TeamLeader">TeamLeader</option>
                      <option value="Manager">Manager</option>
                  </select> 
                  <br /><p>{err.empRole}</p><br />
                  {/* dateof join */}
                  <label>Date of Join</label>
                  <input type="date" placeholder="dob" name="dateOfJoin" value={addEmp.dateOfJoin} id="doj" onChange={changeAddEmp}/>
                  <br />
                  {/* preJobRole */}
                  <input type="text" placeholder="Enter previous job role" name="prevJobRole" value={addEmp.prevJobRole} onChange={changeAddEmp}/> 
                    <p>{err.prevJobRole}</p>
                  <br />
                  <textarea name="address" id="address" cols="30" rows="3" placeholder="address" value={addEmp.address} onChange={changeAddEmp}></textarea> <br /> 

                  </div>
              </section>
            </section>
            <button onClick={submitUpdateEmp} id="addbtn">Update</button>
          </div>
        </div>
        </div>
      </div>
    );
  }
export default UpdateEmployee;