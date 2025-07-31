import "./barChart.css";
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import { useWindowSize } from "@uidotdev/usehooks";


const data = [
  {
    name: "2018",
    uv: 1000,
    growth: 5400,
    amt: 2400
  },
  {
    name: "2019",
    uv: 2000,
    growth: 4000,
    amt: 2210
  },
  {
    name: "2020",
    uv: 3000,
    growth: 1000,
    amt: 2290
  },
  {
    name: "2021",
    uv: 4000,
    growth: 1400,
    amt: 2000
  },
  {
    name: "2022",
    uv: 5000,
    growth: 2500,
    amt: 2181
  },
  {
    name: "2023",
    uv: 6000,
    growth: 3800,
    amt: 2500
  },
  {
    name: "2024",
    uv: 7000,
    growth: 5300,
    amt: 2100
  }
];

const getIntroOfPage = (label) => {
  if (label === "2019") {
    return "In year 2019 company growth";
  }
  if (label === "2020") {
    return "In year 2020 company growth";
  }
  if (label === "2021") {
    return "In year 2021 company growth";
  }
  if (label === "2022") {
    return "In year 2022 company growth";
  }
  if (label === "2023") {
    return "In year 2023 company growth";
  }
  if (label === "2024") {
    return "In year 2024 company growth";
  }
  return "";
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="intro">{getIntroOfPage(label)}</p>
      </div>
    );
  }

  return null;
};

export default function Barchart() {
  const size = useWindowSize();
  const [chartHeight,setChartHeight] = useState(0);
  const [chartWidth,setChartWidth] = useState(0);
  // Extracting unique UV values
  const uniqueUVValues = [...new Set(data.map(entry => entry.uv))];
  
  // Custom tick formatter function to convert values to percentages
  const formatYAxis = (tick) => {
    // console.log(tick)
    return `${(tick / Math.max(...uniqueUVValues) * 100).toFixed(0)}%`;
  };
  useEffect(()=>{
    let w = size.width;

    if(w >= 1200){
      setChartWidth(500)
       setChartHeight(280)
    }
    else if(w < 1200 && w >= 1000){
      setChartWidth(400)
      setChartHeight(260)
    }
    else if(w < 1000 && w >= 800){
      setChartWidth(300)
      setChartHeight(240)
    }
    else if(w < 800 && w >= 600){
      setChartWidth(320)
      setChartHeight(220)
    }
    else if(w < 600){
      setChartWidth(250)
      setChartHeight(200)
    }

}, [size.width])

  return (
    <div className="barchart" style={{width:"35w", height:"auto"}}>
      {/* <ResponsiveContainer width="100%" height={chartHeight}> */}
      <BarChart
        width={chartWidth}
        height={chartHeight}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <XAxis dataKey="name" />
        <YAxis tickFormatter={formatYAxis} />
        <Tooltip content={<CustomTooltip />} />
        {/* <Legend /> */}
        <Bar dataKey="growth" barSize={20} fill="#491d90" />
      </BarChart>
      {/* </ResponsiveContainer> */}
   
    </div> 
  );
}
