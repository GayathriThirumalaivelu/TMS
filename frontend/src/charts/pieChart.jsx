import React, { useCallback, useState, useEffect } from "react";
import { PieChart, Pie, Sector } from "recharts";
import './pieChart.css';
import { useWindowSize } from "@uidotdev/usehooks";



const testdata = [{
  data : [
    { name: "Project A", value: 400, fill : "#eb890a", year : 2019},
    { name: "Project B", value: 300, fill : "#ba68c8", year : 2019},
    { name: "Project C", value: 300, fill : "chartreuse" , year : 2020},
    { name: "Project D", value: 180, fill : "#f9105e" , year : 2020},
    { name: "Project E", value: 280, fill : "black" , year : 2021},
    { name: "Project F", value: 400, fill : "#0fdfca" , year : 2021},
    { name: "Project G", value: 200, fill : "#757575" , year : 2022},
    { name: "Project H", value: 500, fill : "#491d90" , year : 2022},
    { name: "Project I", value: 250, fill : "#FFEB3B" , year : 2023},
    { name: "Project J", value: 150, fill : "#0b5cff" , year : 2023},
    { name: "Project K", value: 350, fill : "#ef0784" , year : 2024},
  ]
}];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={-10} textAnchor="middle" fill={fill}>
        {payload.name} 
      </text>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
      {payload.year}
      </text>
      <text
        x={cx}
        y={cy}
        dx={-20}
        dy={30}
        // textAnchor={textAnchor}
        fill="#000"
      >&nbsp; {`${ value}`} &nbsp;</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      {/* <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      /> */}
      {/* <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      /> */}
      {/* <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex}
        y={ey}
        textAnchor={textAnchor}
        fill="#000"
      >&nbsp; {`${ value}`} &nbsp;</text> */}
      {/* <text
        x={ex}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`PV ${value}`} </text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${value}%) `}
      </text> */}
    </g>
  );
};

export default function Exp() {
  const size = useWindowSize();
  const [chartHeight,setChartHeight] = useState(0);
  const [chartWidth,setChartWidth] = useState(0);
  const [innerRad,setInnerRad] = useState(0);
  const [outerRad,setOuterRad] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  useEffect(()=>{
      let w = size.width;

      if(w >= 1200){
        setChartWidth(430)
        setChartHeight(360)
        setInnerRad(77)
        setOuterRad(135)
      }
      else if(w < 1000 && w >= 800){
        setChartWidth(380)
        setChartHeight(300)
        setInnerRad(67)
        setOuterRad(125)
      }
      else if(w < 800 && w >= 600){
        setChartWidth(320)
        setChartHeight(240)
        setInnerRad(57)
        setOuterRad(115)
      }
      else if(w < 600){
        setChartWidth(200)
        setChartHeight(20)
        setInnerRad(47)
        setOuterRad(105)
      }

  }, [size.width])

  return (
    <div className="pieChartTotal">
    <PieChart width={chartWidth} height={chartHeight} 
    style={{transform : "scale(0.9) translate(-77px, -9px)"}}
    >
      {testdata.map((e)=>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={e.data}
        cx={200}
        cy={200}
        width={chartWidth} height={chartHeight} 
        innerRadius={innerRad}
        outerRadius={outerRad}
        fill="#8884d8"
        blendStroke
        dataKey="value"
        onMouseEnter={onPieEnter}
      />
      )}
    </PieChart>
    </div>
  );
}
