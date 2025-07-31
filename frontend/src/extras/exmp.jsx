// import React, { useCallback, useState } from "react";
// import { PieChart, Pie, Sector } from "recharts";

// const testdata = [{
//   data : [
//     { name: "Project A", value: 400, fill : "red"},
//     { name: "Project B", value: 300, fill : "green" },
//     { name: "Project C", value: 300, fill : "blue" },
//     { name: "Project D", value: 180, fill : "black" },
//     { name: "Project E", value: 280, fill : "violet" },
//     { name: "Project F", value: 400, fill : "orange" },
//     { name: "Project G", value: 200, fill : "yellow" },
//     { name: "Project H", value: 500, fill : "#491d90" },
//     { name: "Project I", value: 250, fill : "#0b5cff" },
//     { name: "Project J", value: 150, fill : "lightgreen" },
//     { name: "Project K", value: 350, fill : "pink" },
//   ]
// }];

// const renderActiveShape = (props) => {
//   const RADIAN = Math.PI / 180;
//   const {
//     cx,
//     cy,
//     midAngle,
//     innerRadius,
//     outerRadius,
//     startAngle,
//     endAngle,
//     fill,
//     payload,
//     percent,
//     value
//   } = props;
//   const sin = Math.sin(-RADIAN * midAngle);
//   const cos = Math.cos(-RADIAN * midAngle);
//   const sx = cx + (outerRadius + 10) * cos;
//   const sy = cy + (outerRadius + 10) * sin;
//   const mx = cx + (outerRadius + 30) * cos;
//   const my = cy + (outerRadius + 30) * sin;
//   const ex = mx + (cos >= 0 ? 1 : -1) * 22;
//   const ey = my;
//   const textAnchor = cos >= 0 ? "start" : "end";

//   return (
//     <g>
//       <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
//         {payload.name}
//       </text>
//       <Sector
//         cx={cx}
//         cy={cy}
//         innerRadius={innerRadius}
//         outerRadius={outerRadius}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         fill={fill}
//       />
//       <Sector
//         cx={cx}
//         cy={cy}
//         // startAngle={startAngle}
//         endAngle={endAngle}
//         innerRadius={outerRadius + 6}
//         outerRadius={outerRadius + 10}
//         fill={fill}
//       />
//       <path
//         d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
//         stroke={fill}
//         fill="none"
//       />
//       <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
//       <text
//         x={ex + (cos >= 0 ? 1 : -1) * 12}
//         y={ey}
//         textAnchor={textAnchor}
//         fill="#333"
//       >{`PV ${value}`}</text>
//       <text
//         x={ex + (cos >= 0 ? 1 : -1) * 12}
//         y={ey}
//         dy={18}
//         textAnchor={textAnchor}
//         fill="#999"
//       >
//         {`(Rate ${value}%)`}
//       </text>
//     </g>
//   );
// };

// export default function Exp() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const onPieEnter = useCallback(
//     (_, index) => {
//       setActiveIndex(index);
//     },
//     [setActiveIndex]
//   );

//   return (
//     <PieChart width={400} height={400}>
//       {testdata.map((e)=>
//       <Pie
//         activeIndex={activeIndex}
//         activeShape={renderActiveShape}
//         data={e.data}
//         cx={200}
//         cy={200}
//         innerRadius={60}
//         outerRadius={120}
//         fill="#8884d8"
//         dataKey="value"
//         onMouseEnter={onPieEnter}
//       />
//       )}
//     </PieChart>
//   );
// }




// import React, { useCallback, useState } from "react";
// import { PieChart, Pie, Sector } from "recharts";

// const testdata = [{
//   data : [
//     { name: "Project A", value: 400, fill : "#eb890a", year : 2018},
//     { name: "Project B", value: 300, fill : "#ba68c8", year : 2019},
//     { name: "Project C", value: 300, fill : "chartreuse" , year : 2019},
//     { name: "Project D", value: 180, fill : "#f9105e" , year : 2020},
//     { name: "Project E", value: 280, fill : "black" , year : 2020},
//     { name: "Project F", value: 400, fill : "#0fdfca" , year : 2021},
//     { name: "Project G", value: 200, fill : "#757575" , year : 2022},
//     { name: "Project H", value: 500, fill : "#491d90" , year : 2022},
//     { name: "Project I", value: 250, fill : "#FFEB3B" , year : 2023},
//     { name: "Project J", value: 150, fill : "#0b5cff" , year : 2023},
//     { name: "Project K", value: 350, fill : "#ef0784" , year : 2024},
//   ]
// }];

// const renderActiveShape = (props) => {
//   const RADIAN = Math.PI / 180;
//   const {
//     cx,
//     cy,
//     midAngle,
//     innerRadius,
//     outerRadius,
//     startAngle,
//     endAngle,
//     fill,
//     payload,
//     percent,
//     value
//   } = props;
//   const sin = Math.sin(-RADIAN * midAngle);
//   const cos = Math.cos(-RADIAN * midAngle);
//   const sx = cx + (outerRadius + 10) * cos;
//   const sy = cy + (outerRadius + 10) * sin;
//   const mx = cx + (outerRadius + 30) * cos;
//   const my = cy + (outerRadius + 30) * sin;
//   const ex = mx + (cos >= 0 ? 1 : -1) * 22;
//   const ey = my;
//   const textAnchor = cos >= 0 ? "start" : "end";

//   return (
//     <g>
//       <text x={cx} y={cy} dy={-10} textAnchor="middle" fill={fill}>
//         {payload.name} 
//       </text>
//       <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
//       {payload.year}
//       </text>
      
//       <Sector
//         cx={cx}
//         cy={cy}
//         innerRadius={innerRadius}
//         outerRadius={outerRadius}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         fill={fill}
//       />
//       <Sector
//         cx={cx}
//         cy={cy}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         innerRadius={outerRadius + 6}
//         outerRadius={outerRadius + 10}
//         fill={fill}
//       />
//       <path
//         d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
//         stroke={fill}
//         fill="none"
//       />
//       <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
//       <text
//         x={ex}
//         y={ey}
//         textAnchor={textAnchor}
//         fill="#000"
//       >&nbsp; {`${ value}`} &nbsp;</text>
//       {/* <text
//         x={ex}
//         y={ey}
//         textAnchor={textAnchor}
//         fill="#333"
//       >{`PV ${value}`} </text>
//       <text
//         x={ex + (cos >= 0 ? 1 : -1) * 12}
//         y={ey}
//         dy={18}
//         textAnchor={textAnchor}
//         fill="#999"
//       >
//         {`(Rate ${value}%) `}
//       </text> */}
//     </g>
//   );
// };

// export default function Exp() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const onPieEnter = useCallback(
//     (_, index) => {
//       setActiveIndex(index);
//     },
//     [setActiveIndex]
//   );

//   return (
//     <PieChart width={400} height={400}>
//       {testdata.map((e)=>
//       <Pie
//         activeIndex={activeIndex}
//         activeShape={renderActiveShape}
//         data={e.data}
//         cx={200}
//         cy={200}
//         innerRadius={60}
//         outerRadius={120}
//         fill="#8884d8"
//         dataKey="value"
//         onMouseEnter={onPieEnter}
//       />
//       )}
//     </PieChart>
//   );
// }

import React, {useState} from 'react';
import { Progress, ButtonGroup, Button, Row, Col } from 'rsuite';

function Exp(){
  const [percent, setPercent] = React.useState(30);

  const status = percent === 100 ? 'success' : null;
  const color = percent === 100 ? '#52c41a' : '#3385ff';

  return (
    <>
      {/* <ButtonGroup>
        <Button onClick={decline}>-</Button>
        <Button onClick={increase}>+</Button>
      </ButtonGroup>
      <hr className='hr'/>
      <Progress.Line percent={percent} strokeColor={'red'} status={status} /> */}
      <Row>
        {/* <Col md={6}>
          <Progress.Line vertical percent={percent} strokeColor={color} status={status} />
        </Col> */}
        <Col md={6}>
          <div style={{ width: 120, marginTop: 10 }}>
            <Progress.Circle percent={percent} strokeColor={color} status={status} />
          </div>
        </Col>
      </Row>
      {/* <Progress.Line /> */}
    </>
  );
};

export default  Exp