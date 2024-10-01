import React, { useState } from "react";
import PieChartComponent from "../../../components/charts/pieChart/PieChartComponent";
import { violationsSummaryData } from "../../../data/data";
import { MdKeyboardArrowDown } from "react-icons/md";

const violationsLists = [
  {
    value: "Visitor exceeds the time allowed to visit",
    percentage: "70",
  },
  {
    value: "Use someone else vehicle",
    percentage: "50",
  },
  {
    value: "Lost smart badge",
    percentage: "30",
  },
];

const ViolationsSummary = () => {
  return (
    <div className="shadow-md p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h2 className="text-sm sm:text-base lg:text-lg font-semibold">
          Violations Summary
        </h2>
        <CustomDropDown lists={["This Week", "This Month", "This Year"]} />
      </div>
      <div className="mt-6 flex flex-col items-center justify-center">
        <PieChartComponent
          data={violationsSummaryData}
          innerRadius={60}
          outerRadius={90}
          centerIcon="%"
          layout="center-percentage"
        />
      </div>
      <p className="mt-6 text-sm md:text-base mb-4">Frequent Violations</p>
      {violationsLists.map((item, i) => (
        <ViolationsList
          value={item.value}
          percentage={item.percentage}
          key={i}
        />
      ))}
    </div>
  );
};

export default ViolationsSummary;

const ViolationsList = ({ value, percentage }) => {
  return (
    <div className="flex items-center gap-2 mb-4">
      <div
        className="px-4 py-2 bg-[#f78d2c26] text-[9px] sm:text-sm rounded-full"
        style={{ flexBasis: percentage ? `${percentage}%` : "unset" }}
      >
        {value}
      </div>
      <p className="text-sm">{percentage}%</p>
    </div>
  );
};

const CustomDropDown = ({ lists }) => {
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select Week");
  const selectHandler = (option) => {
    setSelectedOption(option);
    setIsOptionOpen(false);
  };
  const optionsHandler = () => setIsOptionOpen(!isOptionOpen);
  return (
    <div className="relative w-[130px] z-50">
      <div
        className="flex items-center justify-between text-sm text-[#00000099] gap-3 cursor-pointer border py-1 px-2 rounded-md text-nowrap"
        onClick={() => optionsHandler()}
      >
        {selectedOption}
        <div
          className={`transition-all duration-300 ${
            isOptionOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <MdKeyboardArrowDown fontSize={18} />
        </div>
      </div>
      {isOptionOpen && (
        <ul className="flex flex-col bg-white rounded-lg shadow-md absolute top-[30px] left-0 w-full">
          {lists.map((list, i) => (
            <li
              key={i}
              className="py-1 px-2 border-b text-sm cursor-pointer text-[#00000099] hover:bg-gray-100"
              onClick={() => selectHandler(list)}
            >
              {list}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
