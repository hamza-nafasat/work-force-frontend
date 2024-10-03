import React from "react";
import LineChartComponent from "../../../components/charts/lineChart/LineChartComponent";
import { IoChevronUpSharp } from "react-icons/io5";
import UsersOnDashboard from "./UsersOnDashboard";
import MostDirversHave from "./MostDriversHave";
import MostVehicles from "./MostVehicles";
import AreaChartComponent from "../../../components/charts/areaChart/AreaChartComponent";
import { totalSensorsData, totalSubscriptionPlansData, totalUsersData } from "../../../data/data";

const activeUsersData = [
  {
    name: "10",
    value: "10",
  },
  {
    name: "11",
    value: "18",
  },
  {
    name: "13",
    value: "5",
  },
  {
    name: "14",
    value: "34",
  },
  {
    name: "16",
    value: "24",
  },
  {
    name: "20",
    value: "45",
  },
  {
    name: "22",
    value: "25",
  },
  {
    name: "23",
    value: "6",
  },
  {
    name: "24",
    value: "9",
  },
  {
    name: "25",
    value: "3",
  },
  {
    name: "26",
    value: "32",
  },
];


const Dashboard = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <WidgetCards
          title="Total Users"
          value="2560"
          days="last 7 days"
          data="down"
          chart={{
            data: totalUsersData,
            color: "#50D450",
            type: "adminSideWidget",
            height: 103,
            dataKey: 'users'
          }}
        />
        <WidgetCards
          title="Total Sensors"
          value="2560"
          days="last 7 days"
          data="up"
          chart={{
            data: totalSensorsData,
            color: "#F76F2C",
            type: "adminSideWidget",
            height: 103,
            dataKey: 'sensors'
          }}
        />
        <WidgetCards
          title="Total Subscription Plans"
          value="2560"
          days="last 7 days"
          data="up"
          chart={{
            data: totalSubscriptionPlansData,
            color: "#FF0000",
            type: "adminSideWidget",
            height: 103,
            dataKey: 'plans'
          }}
        />
      </div>
      <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-8 flex flex-col">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <h6 className="text-sm md:text-base lg:text-2xl font-medium text-[#3A3541]">
                Active Users
              </h6>
              <select className="text-sm md:text-base bg-[#f0f9fc] p-2 rounded-lg focus:outline-none">
                <option>Last 7 days</option>
                <option>Last 14 days</option>
                <option>Last 21 days</option>
                <option>Last month</option>
                <option>Last year</option>
              </select>
            </div>
            <AreaChartComponent
              data={activeUsersData}
              color="#084984"
              height={270}
              type="adminSide"
            />
          </div>
          <div className="mt-4 grow">
            <UsersOnDashboard />
          </div>
        </div>
        <div className="lg:col-span-4 flex flex-col">
          <MostDirversHave />
          <div className="mt-4 h-full">
            <MostVehicles />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

const WidgetCards = ({ title, value, days, data, chart }) => {
  return (
    <div className="bg-white rounded-lg p-4 md:p-5 flex items-center gap-4 justify-between shadow-md">
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <h6 className="text-base md:text-lg text-nowrap font-medium text-#3A3541]">
            {title}
          </h6>
          <div className="bg-[#F4F5F9] rounded-lg p-1 flex items-center gap-1">
            <IoChevronUpSharp
              fontSize={12}
              color={data === "up" ? "#084984" : "#F93131"}
              style={{ transform: data === "up" ? "rotate(0deg)" : "rotate(180deg)" }}
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
        <h6 className="my-4 text-[#084984] text-2xl md:text-[32px] font-semibold">
          {value}
        </h6>
        <p className="text-sm md:text-base text-[#89868D]">{days}</p>
      </div>
      <div className="w-[146px]">
        <AreaChartComponent
          data={chart?.data}
          color={chart?.color}
          type={chart?.type}
          height={chart?.height}
          dataKey={chart?.dataKey}
        />
      </div>
    </div>
  );
};
