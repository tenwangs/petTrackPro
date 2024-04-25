"use client";
import React from 'react'
import { TbActivityHeartbeat } from "react-icons/tb";
import { FaPaw } from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";
import { FaTemperatureEmpty,  FaBatteryThreeQuarters  } from "react-icons/fa6";
import { Line, Circle } from 'rc-progress';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";


const RADIAN = Math.PI / 180;
const temp = [
  { name: 'Cold', value: 0, color: '#87CEEB' },
  { name: 'Warm', value: 0, color: '#28ed05' },
  { name: 'Hot', value: 0, color: '#ed0505' },
];
const cx = 150;
const cy = 200;
const iR = 50;
const oR = 100;
const temperature = 0; // Example temperature value

const updateTempData = (temperature, temp) => {
  if (temperature < 4) {
    temp[0].value = 1;
    
  } else if (temperature >= 4 && temperature <= 20) {
    temp[1].value = 1;
  } else {
    temp[2].value = 1;
  }
};

const needle = (temp, cx, cy, iR, oR, color) => {
  const total = temp.reduce((acc, cur) => acc + cur.value, 0);
  const ang = 180.0 * (1 - total / 3);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx + 5;
  const y0 = cy + 5;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  // return [
  //   <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
  //   <path d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`} stroke="#none" fill={color} />,
  // ];
};

updateTempData(temperature, temp);


function page() {
  
  const data = [
  {
    name: 'Monday',
    activity: 400,
    sleep: 2400,
    amt: 2400,
  },
  {
    name: 'Tuesday',
    activity: 300,
    sleep: 1398,
    amt: 2210,
  },
  {
    name: 'wednesday',
    activity: -100,
    sleep: 9800,
    amt: 2290,
  },
  {
    name: 'Thursday',
    activity: 500,
    sleep: 3908,
    amt: 2000,
  },
  {
    name: 'Friday',
    activity: -200,
    sleep: 4800,
    amt: 2181,
  },
  {
    name: 'saturday',
    activity: -250,
    sleep: 3800,
    amt: 2500,
  },
  {
    name: 'sunday',
    activity: 349,
    sleep: 4300,
    amt: 2100,
  },
  
];

const gradientOffset = () => {
  const dataMax = Math.max(...data.map((i) => i.activity));
  const dataMin = Math.min(...data.map((i) => i.activity));

  if (dataMax <= 0) {
    return 0;
  }
  if (dataMin >= 0) {
    return 1;
  }

  return dataMax / (dataMax - dataMin);
};

const off = gradientOffset();


  return (
    <div>
   
    <div>
      <h1 className='text-3xl font-bold text-[#5A92B1] mt-12 ml-8'>Activity</h1>
    </div>
    <div className='ml-8 mt-4'>
      <div class="grid grid-cols-5 gap-0">
  <div className='bg-[#FFFFFF] w-40 h-60'>
    <TbActivityHeartbeat  className='w-8 h-8 ml-4 mt-2 text-gray-500'/>
    <div className='flex flex-col'>
       <p className='mt-36 ml-4'>Activity</p>
  <p className='ml-4 text-gray-600 font-semibold '>2h48min</p>
    </div> 
  </div>
  <div className='bg-[#F5F5F5] w-40 h-60'>
    
    <FaPaw   className='w-6 h-6 ml-4 mt-3 text-gray-500'/>
    <div className='flex flex-col'>
       <p className='mt-36 ml-4'>Rest</p>
  <p className='ml-4 text-gray-500 font-semibold'>0h48min</p>
    </div> 
  </div>


  <div className='bg-[#EBF5FC] w-40 h-60'>
    <GiPathDistance  className='w-8 h-8 ml-4 mt-2 text-gray-500'/>
    <div className='flex flex-col'>
       <p className='mt-36 ml-4'>Distance</p>
  <p className='ml-4 text-gray-500 font-semibold'>2Km</p>
    </div> 
  </div>

  <div className='bg-[#D0E0EC] w-40 h-60'>
  <FaTemperatureEmpty  className='w-8 h-8 ml-4 mt-2 text-gray-500'/>
    <div className='flex flex-col'>
       <p className='mt-36 ml-4 text-gray-500'>Temperature</p>
  <p className='ml-4 text-gray-500 font-semibold'>48 degree</p>
    </div> 
    </div>

  <div className='bg-gray-200 w-20 h-60'>
    <FaBatteryThreeQuarters  className='w-8 h-8 ml-4 mt-2 text-gray-500'/>
    <div className='flex flex-col'>
       <p className='mt-40 ml-4 font-semibold text-gray-500 '>65%</p>
  
    </div> 
  </div>
  
  
</div>
    </div>

    <div>
      <p className='text-3xl font-bold text-[#5A92B1] mt-16 ml-8'>OverView</p>
    </div>
   
   <div></div>
   <div className='grid grid-rows-2 grid-cols-4 gap-2 ml-8 mt-4 '>
   <div className='bg-gray-100 row-span-2 col-span-2 shadow shadow-gray-200'>
    <div className='w-full h-40'>
       <PieChart width={400} height={500}>
    <Pie
      dataKey="value"
      startAngle={180}
      endAngle={0}
      data={temp}
      cx={cx}
      cy={cy}
      innerRadius={iR}
      outerRadius={oR}
      fill="#8884d8"
      stroke="none"
    >
      {temp.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={entry.color} />
      ))}
    </Pie>
    {needle(temp, cx, cy, iR, oR, '#d0d000')}
  </PieChart>
  
    </div>
    <div className='flex flex-row'>
      <div className='flex flex-row'>
       <div className='w-8 h-8 bg-[#87CEEB] ml-12 mt-24'>
    <div><p className='ml-10 text-gray-800 font-bold mt-1'> Cold</p></div>
    
  </div>
    </div>
    
       <div className='w-8 h-8 bg-[#28ed05] ml-20 mt-24'>
    <div><p className='ml-10 text-gray-800 font-bold mt-1'> Normal </p></div>
    
  
    </div>
    
       <div className='w-8 h-8 bg-[#ed0505] ml-20 mt-24'>
    <div><p className='ml-10 text-gray-800 font-bold mt-1'> Hot</p></div>
    
  
    </div>
   
   </div>


    </div>
    
   <div className='row-span-2'>
    <div className="bg-[#F5F5F5]  h-40">
    <div className='p-2'>
      <Line percent={70} strokeWidth={10} strokeColor="orange"  className='pl-2 w-40 h-8 pt-4'/>
       <div className='flex flfex-row mt-14 ml-4'>
      <p className='text-gray-500  ml-2'>Movement</p>
    <p className='text-gray-500 font-semibold ml-2'>40Km</p>
    </div>
    </div>
      
    </div>
   <div className="bg-[#EBF5FC]  h-40 mt-2">
    <div className=''>
    <Circle percent={70} strokeWidth={6} strokeColor="#02bf34 " className='ml-4 pl-10 w-28 h-28'  />
    <div className='flex flfex-row'>
      <p className='text-gray-500  ml-8'>Sleep</p>
    <p className='text-gray-500 font-semibold ml-1 '>6.5Hrs</p>
    </div>
    
   </div>
   </div>
   </div>
   
   
   <div className='bg-blue-100 row-span-2 col-span-3 mb-4'>

   <div className='w-full h-80'>
    <ResponsiveContainer width="100%" height="90%">
    <p className='ml-40 text-gray-700'>Health status</p>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <defs>
            <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset={off} stopColor="green" stopOpacity={1} />
              <stop offset={off} stopColor="red" stopOpacity={1} />
            </linearGradient>
          </defs>
          <Area type="monotone" dataKey="activity" stroke="#000" fill="url(#splitColor)" />
        </AreaChart>
      </ResponsiveContainer>
   </div>
   
   </div>
   
   
    
   </div>
    </div>
  )
}

export default page