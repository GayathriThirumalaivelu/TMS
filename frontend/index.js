import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import { UserDataProvider } from './userContext';

import AddTask from './addTask/AddTask';
import AddEmployee from './addEmployee/addEmployee';
// import ViewTaskEmp from './employee/viewTaskEmp';
import AddProject from './AddProject/AddProject'
import AdminLogin from './AdminLogin/AdminLogin'
import UserLogin from './employeeLogin/UserLogin';
import AdminDashBoard from './AdminDashboard/AdminDashboard';
import ListOfEmp from './listOfEmp/ListOfEmp';
import UpdateProject from './adminViewProject/UpdateProject';
// import ViewProject from './updateProject/ViewProject';
import UpdateEmployee from './adminViewEmp/UpdateEmp';

// charts
import Barchart from './charts/barChart';
import Piechart from './charts/pieChart';
import Exp from './extras/exmp';
import ViewEmployee from './adminViewEmp/viewEmp';
import EmpViewTask from './empViewTask/EmpViewTask';
import UpdateTask from './adminViewTask/updateTask';
import EmpDash from './EmployeeDash/EmpDash';
import AdminProjectView from './adminViewProject/AdminProjectView';
import AdminViewTask from './adminViewTask/AdminViewTask';
import ViewProjectEmp from './empViewProject/ViewEmpPro';

import ViewEmpProfile from './empViewProfile/viewEmpProfile';
import UpdateEmpProfile from './empViewProfile/updateEmpPro';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
    <UserDataProvider>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/AddTask' element={<AddTask />}/>
        <Route path='/AddEmp' element={<AddEmployee />}/>
        <Route path='/AddProject' element={<AddProject />}/>
        <Route path='/userLogin' element={<UserLogin/>}/>
        <Route path='/adminLogin' element={<AdminLogin/>}/>
        <Route path='/adminDashboard' element={<AdminDashBoard />} />
        <Route path='/Barchart' element={<Barchart />} />
        <Route path='/PieChart' element={<Piechart />} />
        <Route path='/ListOfEmp' element={<ListOfEmp />} />
        {/* <Route path='/viewProject' element={<ViewProject />}/> */}
        <Route path='/updateProject' element={<UpdateProject />}/>
        <Route path='/updateEmployee' element={<UpdateEmployee/>}/>
        <Route path='/viewEmp' element={<ViewEmployee/>}/>
        <Route path='/EmpViewTask' element={<EmpViewTask />} />
        <Route path='/updateTask' element={<UpdateTask/>}/>
        <Route path='/empDashboard' element={<EmpDash/>}/>
        <Route path='/adminViewProj' element={<AdminProjectView />}/>
        <Route path='/adminViewTask' element={<AdminViewTask/>}/>
        <Route path='/ViewProjectEmp' element={<ViewProjectEmp/>}/>
        <Route path='/ViewEmpProfile' element={<ViewEmpProfile/>}/>
        <Route path='/UpdateEmpProfile' element={<UpdateEmpProfile/>}/>



        {/*  */}
        <Route path='/Exp' element={<Exp />} />
      </Routes>
      </UserDataProvider>
    </BrowserRouter>
  //</React.StrictMode> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
