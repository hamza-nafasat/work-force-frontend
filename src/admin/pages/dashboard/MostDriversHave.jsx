import React, { useState } from "react";
import PieChartComponent from "../../../components/charts/pieChart/PieChartComponent";
import { topContractorsData } from "../../../data/data";
import OneIcon from "../../../assets/svgs/score/OneIcon";
import TwoIcon from "../../../assets/svgs/score/TwoIcon";
import ThreeIcon from "../../../assets/svgs/score/ThreeIcon";
import { MdKeyboardArrowDown } from "react-icons/md";

const icons = [OneIcon, TwoIcon, ThreeIcon];
const dataList = [
  { name: "MKS", value: "1205" },
  { name: "Tetra Intech", value: "850" },
  { name: "Tech Xpert", value: "560" },
];

const MostDirversHave = () => {
  return (
    <div className="shadow-md p-4 rounded-lg bg-white">
      <div className="flex items-center justify-between">
        <h2 className="text-sm sm:text-base lg:text-lg font-semibold">
          Most Drivers Have
        </h2>
        <select>
            <option>Last 7 days</option>
            <option>Last 14 days</option>
            <option>Last 21 days</option>
            <option>Last month</option>
            <option>Last year</option>
        </select>
      </div>
      <div className="mt-6 flex flex-col items-center justify-center">
        <PieChartComponent
          data={topContractorsData}
          innerRadius={70}
          outerRadius={90}
        />
      </div>
      <div className="mt-6">
        {dataList.map((item, i) => (
          <DataList key={i} data={item} iconComponent={icons[i]} />
        ))}
      </div>
    </div>
  );
};

export default MostDirversHave;

const DataList = ({ data, iconComponent: IconComponent }) => {
  return (
    <div className="flex items-center justify-between gap-4 bg-[#50d4500d] p-4 rounded-lg mb-4">
      <div className="flex items-center gap-2">
        <IconComponent className="w-6 h-6" />
        <p className="text-sm font-semibold">{data.name}</p>
      </div>
      <p className="text-base font-semibold">{data.value}</p>
    </div>
  );
};
