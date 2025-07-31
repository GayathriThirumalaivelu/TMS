import React , { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './addEmployee.css';
import Navbar from "../AdminNavBar/Nav";
import admin from '../assets/admin.jpeg'
// import "../AddProject/addproject.css";/


function AddEmployee() {
  const[image,setImage]=useState("");
  const[selectedValue, setSelectedValue]=useState(null)
    const [addEmp, setAddEmp] = useState({
      firstname : "",
      lastname : "",
      number:"",
      email : "",
      empNo:'',
      password : "",
      confirmPassword : "",
      userRole : "",
      dob:"",
      qualification:'',
      gender:"",
      image:image,
      address:"",
      skill:"",
      department:"",
      salary:"",
      dateOfJoin:"",
      experience:"",
      prevJobRole:"",
});
    const navigate = useNavigate();
    const [err,setErr] = useState({})


    const validateErrors=()=>{
      let err={};
      if(addEmp.firstname===""){
        err.firstname="firstname is required";
      }
      if(addEmp.lastname==="")
      {
        err.lastname="lastname is required";
      }
      if(addEmp.number==="")
      {
        err.number="mobile number is required"
      }
      if(addEmp.email==="")
      {
        err.email="Email id is required";
      }
      if(addEmp.userRole==="")
      {
        err.userRole=" employee role is required";
      }
      if(addEmp.password==="")
      {
        err.password="password is required";
      }
      if(addEmp.confirmPassword==="")
      {
        err.confirmPassword=" confirm password is required";
      }
      if(addEmp.empNo==="")
      {
        err.empNo=" Employee number is required";
      }
      if(addEmp.department==="")
      {
        err.department="Department is required"
      }
      if(addEmp.gender==="")
      {
        err.gender="Gender is required"
      }
      if(addEmp.dateOfJoin==="")
      {
        err.dateOfJoin="Date of join is required"
      }
      if(addEmp.dob==="")
      {
        err.dob="Date of birthe is required"
      }
      if(addEmp.address==="")
      {
        err.address="Address is required"
      }
      if(addEmp.salary==="")
      {
        err.salary="Salary is required"
      }
      if(addEmp.image==="")
      {
        err.image="Upload your profile image"
      }
      if(addEmp.experience==="")
      {
        err.experience="Experience is required"
      }
      if(addEmp.prevJobRole==="")
      {
        err.prevJobRole="Previous job role is required"
      }
      if(addEmp.skill==="")
      {
        err.skill="Skill is required"
      }
      if(addEmp.qualification==="")
      {
        err.qualification="Qualification is required"
      }
      return err;
    }
  
    const changeAddEmp = (e) => {
        setAddEmp({...addEmp, [e.target.name] : e.target.value });
    }
   
      const handleGenderChange = (e) => {
        const selected = e.target.value;
        setSelectedValue(selected);
        setAddEmp({ ...addEmp, gender: selected });
      };
    
    
    const converttoBase64=(e)=>{
      // setImage(e.target.files[0]);
      // setAddEmp((prevAddEmp)=>{
      //   return {...prevAddEmp, image : image.name}
      // })

        var reader=new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload=()=>{
          // console.log(reader.result)
          setAddEmp((prevAddEmp)=>{
            return {...prevAddEmp, image : reader.result}
          })
         setImage(reader.result)
        }
        reader.onerror=(error)=>{
          console.log("error:",error);
          setAddEmp((prevAddEmp)=>{
            return {...prevAddEmp}
          })
        };      
    }
  
    const submitAddEmp = (e) => {
      e.preventDefault();
        console.log(addEmp);
      setErr(validateErrors);
      console.log(addEmp)

      axios.post(`http://127.0.0.1:3012/taskmanager/inns/api/employee/create`,JSON.stringify(addEmp),{
        headers : {
          "Content-Type" : "application/json"
        }
      }).then((res)=>{
        console.log(res.data);
        if(addEmp.firstname!==""&& addEmp.lastname!=="" && addEmp.email!=="" && addEmp.empNo!=="" && addEmp.password!==""&&addEmp.confirmPassword!=="" && addEmp.empRole!=="" && addEmp.address == ""
     && addEmp.dob!=="" && addEmp.dateOfJoin!=="" && addEmp.experience!=="" && addEmp.gender!=="" && addEmp.prevJobRole!==""&& addEmp.qualification!=="" && addEmp.skill!=="" && addEmp.salary!=="" 
     && addEmp.image!==""){
          setAddEmp({
            firstname:"",
            lastname:"",
            empNo:"",
            userRole:"",
            number:"",
            password:"",
            confirmPassword:"",
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
            gender:""       
          })
          setSelectedValue(null);
      }
        setAddEmp({
          ...addEmp,
          gender: "" // Reset the gender field
        })
        setSelectedValue(null);
              }).catch((err)=>{
        console.log(err);
    })
     

      if(addEmp.firstname!==""&& addEmp.lastname!=="" && addEmp.email!=="" && addEmp.empNo!=="" && addEmp.password!==""&&addEmp.confirmPassword!=="" && addEmp.empRole!=="" && addEmp.address == ""
     && addEmp.dob!=="" && addEmp.dateOfJoin!=="" && addEmp.experience!=="" && addEmp.gender!=="" && addEmp.prevJobRole!==""&& addEmp.qualification!=="" && addEmp.skill!=="" && addEmp.salary!=="" 
     && addEmp.image!==""){
          setAddEmp({
            firstname:"",
            lastname:"",
            empNo:"",
            userRole:"",
            number:"",
            password:"",
            confirmPassword:"",
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
            gender:""       
          })
          setSelectedValue(null);
      }
  }
  
    return (
      <div className="totalDashBoardDiv">
        <div className="navDiv" id='navDiv'>
            <Navbar />
        </div>
        <div className="content-wrapper" id='content-wrapper'>
          <div className="content addEmployeeTotal" id="addprojectcontainer">
            <h1>Add Employee</h1>
            <section id="TotalEmployeeForm">            
            <section id="Totalcontainer">  
                <div>
                {image=="" || image==null? "":<img src={image}/>}
                <input accept='image/*' id="image" style={{visibility:'hidden',width:"0px",height:"0px"}} 
              type='file' onChange={converttoBase64}/><br></br><br></br>
                <label for="image" id="imageupload">Upload Profile</label>
                
          <br></br> <br />
          <p>{err.image}</p>


 <br></br>  <br /> 
 <input type='text' placeholder='Emp no' name='empNo' value={addEmp.empNo} onChange={changeAddEmp}/>
                <br /><p>{err.empNo}</p><br />
                  {/* firstname */}
                  <input type='text' placeholder='firstname' name='firstname' value={addEmp.firstname} onChange={changeAddEmp}/>
                  <br /><p>{err.firstname}</p> <br />
                  {/* lastname */}
                <input type='text' placeholder='lastname' name='lastname' value={addEmp.lastname} onChange={changeAddEmp}/>
                <br /><p>{err.lastname}</p><br />
                 
                  {/* password */}
                  
                <input type='password' placeholder='password' name='password' value={addEmp.password} onChange={changeAddEmp}/>
                <br /><p>{err.password}</p><br />
                  
                {/* confirmpassword */}
                                
                <input type='password' placeholder='confirmPassword' name='confirmPassword' value={addEmp.confirmPassword} onChange={changeAddEmp}/>
                <br /><p>{err.confirmPassword}</p><br />

                 
                <br></br>
                    <label>Gender</label>
                    <input type="radio" style={{width:"15px",height:"15px",margin:"0px 3px 0px 15px"}} name="gender" onChange={handleGenderChange} value="Female" checked={selectedValue==="Female"}/>
                    <label>Female</label>
                    
                  
                    <input type="radio" style={{width:"15px",height:"15px",margin:"0px 3px 0px 15px"}}name="gender"  onChange={handleGenderChange} value="Male"  checked={selectedValue==="Male"}/>
                   <label>Male</label>
                    
                    <input type="radio" style={{width:"15px",height:"15px",margin:"0px 3px 0px 15px"}} name="gender" onChange={handleGenderChange} value="Others"  checked={selectedValue==="Others"}/>
                   <label >Others</label> 
                   
                   
                  <p>{err.gender}</p><br></br>

                
                <label>Address </label>
                  <input type="text" placeholder="Address" id="add" name="address" value={addEmp.address} onChange={changeAddEmp}/> 
                  <p>{err.address}</p>
                  <label htmlFor="">Years of Experience</label>
                <select name="experience" id="exper" value={addEmp.experience} onChange={changeAddEmp}>
                  <option value="">--</option>
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
                  <input type='text' placeholder='Email' name='email' value={addEmp.email} onChange={changeAddEmp}/>
                <br /><p>{err.email}</p><br />
                {/* qualification */}
                <input type="text" placeholder="qualification" name="qualification" value={addEmp.qualification} onChange={changeAddEmp}/>
                <p>{err.qualification}</p>
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
                 <p>{err.dob}</p>
                <br /> <br></br>
                <label>Salary </label>
                  <input type="text" placeholder="Salary" id="sal" name="salary" value={addEmp.salary} onChange={changeAddEmp}/> 
                  <p>{err.salary}</p><br/>
                <label>Department</label>
                  {/* department */}
                  <select name="department" id="dep" value={addEmp.department} onChange={changeAddEmp}>
                    <option value="">--</option>
                  <option value="Development">Development</option>
                  <option value="Testing">Testing</option>
                  <option value="Management">Management</option>
                  <option value="Design">Design</option>
                  <option value="Prodcution">Production</option>
                </select>
                <p>{err.department}</p> <br />
                 {/* userRole */}
                 <label>Emp Role</label>
                 <select name="userRole" value={addEmp.userRole} onChange={changeAddEmp} id="emproll">
                  <option value="">--</option>
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
                 <p>{err.dateOfJoin}</p>
                <br />
                 {/* preJobRole */}
                 <input type="text" placeholder="Enter previous job role" name="prevJobRole" value={addEmp.prevJobRole} onChange={changeAddEmp}/> 
                  <p>{err.prevJobRole}</p>
                <br />

                </div>
            </section>
            
            </section>
         
            {/* <textarea name="address" id="" cols="30" rows="3" placeholder="address" value={addEmp.address} onChange={changeAddEmp}></textarea> <br /> */}

            {/* <div className="">
              <div  className="col1">
            

        
              
                
                  {/* {image=="" || image==null? "":<img src={image}/>} 
              </div> 
              <div className="col2">
                
          

              </div>
            </div> */}
            <button onClick={submitAddEmp} id="addbtn">ADD</button>
          </div>
        </div>
      </div>
    );
  }
export default AddEmployee;