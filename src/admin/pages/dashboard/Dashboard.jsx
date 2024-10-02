import React from "react";
import LineChartComponent from "../../../components/charts/lineChart/LineChartComponent";
import { IoChevronUpSharp } from "react-icons/io5";
import UsersOnDashboard from "./UsersOnDashboard";
import MostDirversHave from "./MostDriversHave";

const Dashboard = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <WidgetCards title="Total Users" value="2560" days='last 7 days' data='down' />
        <WidgetCards title="Total Users" value="2560" days='last 7 days' data='up' />
        <WidgetCards title="Total Users" value="2560" days='last 7 days' data='up' />
      </div>
      <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-8">
          <div>
            <UsersOnDashboard />
          </div>
        </div>
        <div className="lg:col-span-4">
           <MostDirversHave />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

const WidgetCards = ({ title, value, days, data }) => {
  return (
    <div className="bg-white rounded-lg p-4 md:p-5 flex items-center gap-4 justify-between shadow-md">
      <div>
        <div className="flex items-center gap-2">
          <h6 className="text-base md:text-lg font-medium text-#3A3541]">
            {title}
          </h6>
          <div className="bg-[#F4F5F9] rounded-lg p-1 flex items-center gap-1">
            <IoChevronUpSharp
              fontSize={12}
              color={data === "up" ? "#084984" : "#F93131"}
              transform={data === "up" ? 'rotateX(0)':'rotateX(180deg)'}
            />
            <p
              className={`text-sm ${
                data === "up" ? "text-[#084984]" : "text-[#F93131]"
              }`}
            >
              10.0%
            </p>
          </div>
        </div>
        <h6 className="my-4 text-[#084984] text-2xl md:text-[32px] font-semibold">{value}</h6>
        <p className="text-sm md:text-base text-[#89868D]">{days}</p>
      </div>
      <p className="text-[40px]">GRAPH</p>
    </div>
  );
};
