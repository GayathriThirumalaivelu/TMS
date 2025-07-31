// Filename - App.js
 
import React from "react";
import {
    BarChart,
    Bar,
    
    XAxis,
    YAxis,
} from "recharts";
 
const BarChartExample = () => {
    // Sample data
    const data = [
        { name: "Project1", students: 100, percentage:"100%" },
        { name: "Project2", students: 70,percentage:"100%" },
        { name: "Project3", students: 50,percentage:"100%" },
        { name: "Project4", students: 20,percentage:"100%" },
    ];
 
    return (
        <>
        <h1 style={{textAlign:"center"}}>Task</h1>
        <BarChart width={450} height={150} data={data}>
            <Bar dataKey="students" fill="#491D90" />
            <XAxis dataKey="name" width={20} />
            <YAxis />
        </BarChart>
        </>
    );
};
 
export default BarChartExample;