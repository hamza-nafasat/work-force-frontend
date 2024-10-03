import React, { useState } from "react";
import PieChartComponent from "../../../components/charts/pieChart/PieChartComponent";
import { topContractorsData } from "../../../data/data";
import OneIcon from "../../../assets/svgs/score/OneIcon";
import TwoIcon from "../../../assets/svgs/score/TwoIcon";
import ThreeIcon from "../../../assets/svgs/score/ThreeIcon";
import { MdKeyboardArrowDown } from "react-icons/md";

const icons = [OneIcon, TwoIcon, ThreeIcon];
const data = [
  {
    name: 'MKS',
    value: 70,
    color: "#0B67BC",
  },
  { name: 'TetraTech', value: 10, color: "#3DC1A1" },
  { name: 'Tech Xpert', value: 20, color: "#F15B4C" },
];

const MostVehicles = () => {
  return (
    <div className="shadow-md p-4 rounded-lg bg-white h-full">
      <div className="flex items-center justify-between">
        <h2 className="text-sm sm:text-base lg:text-lg font-semibold">
          Most Vehicles Have
        </h2>
        <select className="text-sm md:text-base bg-[#f0f9fc] p-2 rounded-lg focus:outline-none">
            <option>Last 7 days</option>
            <option>Last 14 days</option>
            <option>Last 21 days</option>
            <option>Last month</option>
            <option>Last year</option>
        </select>
      </div>
      <div className="mt-6 flex flex-col items-center justify-center">
        <PieChartComponent
          data={data}
          innerRadius={70}
          outerRadius={90}
        />
      </div>
      <div className="mt-6">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-medium text-[#00000099]">Users Name</p>
          <p className="text-sm font-medium text-[#00000099]">Drivers</p>
        </div>
        {data.map((item, i) => (
          <DataList key={i} data={item} iconComponent={icons[i]} />
        ))}
      </div>
    </div>
  );
};

export default MostVehicles;

const DataList = ({ data, }) => {
  return (
    <div className="flex items-center justify-between gap-4 bg-[#7BC0F726] p-4 rounded-lg mb-4">
      <div className="flex items-center gap-2">
        <div className={`w-6 h-6 rounded-md`} style={{background: data?.color}}></div>
        <p className="text-sm font-semibold">{data?.name}</p>
      </div>
      <p className="text-base font-semibold">{data?.value}</p>
    </div>
  );
};