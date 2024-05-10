"use client";
import React, { useState, useEffect } from "react";
import { TbActivityHeartbeat } from "react-icons/tb";
import { FaPaw } from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";
import { FaTemperatureEmpty, FaBatteryThreeQuarters } from "react-icons/fa6";
import { Chart } from "primereact/chart";
import Image from "next/image";
import Pet from "/app/dashboard/find-pet/domchu.png";
import { LuSyringe } from "react-icons/lu";
import { FaUserCircle } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa6";
import { BsTransparency } from "react-icons/bs";

const VaccineCard = ({ vaccineName, frequency, date }) => {
  return (
    <div className="flex bg-gray-100 rounded-md items-center justify-center gap-3 px-3 py-1">
      <LuSyringe className="w-5 h-5"/>
      <div className="flex flex-col justify-start">
        <p className="font-semibold text-sm">{vaccineName}</p>
        <div className="flex text-xs">
          <p className="">{frequency}</p>
          <span className="px-1">|</span>
          <p className="">{date}</p>
        </div>
      </div>
    </div>
  );
};

function Page() {
  const data = [
    {
      name: "Monday",
      activity: 100,
      sleep: 2400,
      amt: 2400,
    },
    {
      name: "Tuesday",
      activity: 300,
      sleep: 1398,
      amt: 2210,
    },
    {
      name: "wednesday",
      activity: 100,
      sleep: 9800,
      amt: 2290,
    },
    {
      name: "Thursday",
      activity: 150,
      sleep: 3908,
      amt: 2000,
    },
    {
      name: "Friday",
      activity: 200,
      sleep: 4800,
      amt: 2181,
    },
    {
      name: "saturday",
      activity: 232,
      sleep: 3800,
      amt: 2500,
    },
    {
      name: "sunday",
      activity: 39,
      sleep: 4300,
      amt: 2100,
    },
  ];

  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary"
    );
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");

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

    const chartData = {
      labels: data.map((day) => day.name),
      datasets: [
        {
          label: "Activity",
          data: data.map((day) => day.activity),
          fill: true,
          borderColor: "#00929B",
          tension: 0.4,
          backgroundColor: data.map((day) =>
            day.activity < 0 ? "#FF0000" : "#82D9DF"
    
          ),
          
        },
        // Add more datasets if needed
      ],
    };

    const chartOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            colors: ["#f8f8f8", "transparent"],
            display: true,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            colors: ["#e5e5e5", "transparent"],
            opacity: 0.5,
            display: true,
          },
        },
      },
    };

    setChartData(chartData);
    setChartOptions(chartOptions);
  }, []);

  return (
    <div className="w-full p-10">
      <div className="flex justify-end items-center gap-2">
        <div>
          <IoIosNotificationsOutline className="w-5 h-5" />
        </div>

        <div>
          <FaUserCircle className="w-5 h-5" />
        </div>

        <div>
          <p>Dorji Penjore</p>
        </div>

        <div>
          <FaChevronDown />
        </div>
      </div>

      <div className="flex flex-row justify-start items-center w-full">
        <div className="w-1/2">

        <h1 className="text-3xl font-bold text-[#5A92B1] ml-8">Activity</h1>
        </div>

        <div className="avatar-group -space-x-6 rtl:space-x-reverse w-1/2 ml-96">
          <div className="avatar">
            <div className="w-12">
              <Image src={require("/public/assets/images/c.jpg")} />
            </div>

          </div>
          <div className="avatar">
            <div className="w-12">
            <Image src={require("/public/assets/images/d.jpg")} />
            </div>
          </div>
          <div className="avatar">
            <div className="w-12">
            <Image src={require("/public/assets/images/domchu.png")} />
            </div>
          </div>
          <div className="avatar">
            <div className="w-12">
            <Image src={require("/public/assets/images/R.jpg")}/>
            </div>
          </div>
        </div>

      </div>


      <div className="flex flex-row ml-8 mt-4">
        <div class="grid grid-cols-5 gap-0">
          <div className="bg-[#FFFFFF] w-40 h-60">
            <TbActivityHeartbeat className="w-8 h-8 ml-4 mt-2 text-gray-500" />
            <div className="flex flex-col">
              <p className="mt-36 ml-4">Sleep</p>
              <p className="ml-4 text-gray-600 font-semibold ">2h 48min</p>
            </div>
          </div>

          <div className="bg-[#F5F5F5] w-40 h-60">
            <FaPaw className="w-6 h-6 ml-4 mt-3 text-gray-500" />
            <div className="flex flex-col">
              <p className="mt-36 ml-4">Pedometer</p>
              <p className="ml-4 text-gray-500 font-semibold">256 steps</p>
            </div>
          </div>

          <div className="bg-[#EBF5FC] w-40 h-60">
            <GiPathDistance className="w-8 h-8 ml-4 mt-2 text-gray-500" />
            <div className="flex flex-col">
              <p className="mt-36 ml-4">Distance</p>
              <p className="ml-4 text-gray-500 font-semibold">2Km</p>
            </div>
          </div>

          <div className="bg-[#D0E0EC] w-40 h-60">
            <FaTemperatureEmpty className="w-8 h-8 ml-4 mt-2 text-gray-500" />
            <div className="flex flex-col">
              <p className="mt-36 ml-4 text-gray-500">Temperature</p>
              <p className="ml-4 text-gray-500 font-semibold">48 degree</p>
            </div>
          </div>

          <div className="bg-gray-200 w-40 h-60">
            <FaBatteryThreeQuarters className="w-8 h-8 ml-4 mt-2 text-gray-500" />
            <div className="flex flex-col ">
            <p className="mt-36 ml-4 text-gray-500">Battery</p>
            <p className="ml-4 font-semibold text-gray-500 ">65%</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center item-center bg-[#5A92B1] w-60 rounded-lg shadow-md p-2 ml-20">
          <div className="rounded-full  flex justify-center items-center">
            <Image
              src={Pet}
              alt="pet image"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>

          <div className="flex justify-evenly items-center w-[90%] ml-3">
            <div className="flex flex-col justify-center items-center gap-2 ">
              <p className="text-md text-white font-semibold -mb-2">Bulu</p>
              <span className="text-xs">NAME</span>
            </div>

            <div class="h-10 w-1 bg-gray-400 mx-auto"></div>

            <div className="flex flex-col justify-center items-center gap-2">
              <p className="text-md text-white font-semibold -mb-2">8 Years</p>
              <p className="text-xs">AGE</p>
            </div>

            <div class="h-10 w-1 bg-gray-400 mx-auto"></div>
            <div className="flex flex-col justify-center items-center gap-2">
              <p className="text-md text-white font-semibold -mb-2">Female</p>
              <p className="text-xs">GENDER</p>
            </div>
          </div>

          <div className="flex justify-center items-center text-md font-semibold text-white mt-2">
            <p>Vaccination Schedule</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <VaccineCard
              vaccineName="DHPP vaccine"
              frequency="Every 3 years"
              date="20/21/2025"
            />
          </div>
        </div>
      </div>

      <div>
        <p className="text-3xl font-bold text-[#5A92B1] mt-5 ml-8">Overview</p>
      </div>

      <div className="w-full">
        <div className="w-2/3 bg-white shadow-md p-4 rounded-lg">
          <div className="flex justify-end items-center mb-4">
            <select
              id="option"
              value="weekly"
              onChange="Daily"
              className="bg-blue-100 border-none rounded-md p-2 text-sm"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
            </select>
          </div>
          <Chart type="line" data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
}

export default Page;
