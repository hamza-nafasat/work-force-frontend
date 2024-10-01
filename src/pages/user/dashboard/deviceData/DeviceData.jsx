import React from "react";
import BarChartComponent from "../../../../components/charts/barChart/BarChartComponent";
import {
  barLineData,
  batteryLevelData,
  gatewayStatsData,
  trackerData,
} from "../../../../data/data";
import Title from "../../../../components/shared/title/Title";
import DonutChart from "../../../../components/charts/donutChart/DonutChart";
import PieChartComponent from "../../../../components/charts/pieChart/PieChartComponent";
import RadialChart from "../../../../components/charts/radialChart/RadialChart";

const batteryLevelColors = { start: "#C1950A", end: "#FFDB69" };
const devicePerTypeColors = { start: "#006265", end: "#33C0C4" };

const DeviceData = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
        <div className="lg:col-span-5">
          <div className="bg-white p-4 lg:p-6 rounded-[12px] drop-shadow-md">
            <Title title="Count Of Device By Battery Level" />
            <BarChartComponent
              data={barLineData}
              colors={{ start: "#C1950A", end: "#FFDB69" }}
              barSize={20}
              gradientID="batteryLevelColors"
            />
          </div>
        </div>
        <div className="lg:col-span-3">
          <div className="bg-white p-4 lg:p-6 rounded-[12px] drop-shadow-md h-full">
            <Title title="Battery Level Devices" />
            <div className="mt-4 flex flex-col items-center justify-center">
              <RadialChart data={batteryLevelData} />
            </div>
          </div>
        </div>
        <div className="lg:col-span-4">
          <div className="bg-white p-4 lg:p-6 rounded-[12px] drop-shadow-md h-full">
            <Title title="Workforces" />
            <div className="flex items-center justify-between mt-4">
              <h4 className="text-sm sm:text-base text-[#11111199] text-center">
                Disconnected Devices
              </h4>
              <h4 className="text-sm sm:text-base text-[#11111199] text-center">
                Assigned Workforce
              </h4>
              <h4 className="text-sm sm:text-base text-[#11111199] text-center">
                Contractor
              </h4>
            </div>
            <Workforces data={workforce} />
            <p className="mt-6 text-[#ff6b6b] text-center text-base">
              Disconnected Devices &gt; 15min/24 hours
            </p>
          </div>
        </div>
      </div>
      {/* second grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 mt-4 md:mt-6 xl:mt-8">
        <div className="lg:col-span-3">
          <ChartColumn
            title="Gateway Connectivity Stats"
            subTitle="Session by Device"
          >
            <DonutChart data={gatewayStatsData} />
          </ChartColumn>
        </div>
        <div className="lg:col-span-3">
          <ChartColumn
            title="Tracker Connectivity Status"
            subTitle="Session by Device"
          >
            <div className="mt-5">
              <PieChartComponent
                data={trackerData}
                paddingAngle={0}
                cornerRadius={0}
                layout='layout-two'
              />
            </div>
          </ChartColumn>
        </div>
        <div className="lg:col-span-6">
          <div className="bg-white p-4 lg:p-6 rounded-[12px] drop-shadow-md h-full">
            <Title title="Count Of Device Per Type" />
            <BarChartComponent
              data={barLineData}
              colors={{ start: "#006265", end: "#33C0C4" }}
              barSize={23}
              gradientID="devicePerTypeColors"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DeviceData;

export const Workforces = ({ data }) => {
  return (
    <>
      {data.map((entry, i) => (
        <div
          className="flex items-center justify-between bg-[#7bc0f726] rounded-md p-4 mt-4"
          key={i}
        >
          <p className="text-sm sm:text-base text-[#111111] font-medium">
            {entry.devices}
          </p>
          <p className="text-sm sm:text-base text-[#111111] font-medium">
            {entry.assignedWorkforce}
          </p>
          <p className="text-sm sm:text-base text-[#111111] font-medium">
            {entry.contractor}
          </p>
        </div>
      ))}
    </>
  );
};

const ChartColumn = ({ title, subTitle, children }) => {
  return (
    <div className="p-4 md:p-5 bg-white rounded-[15px] drop-shadow-md h-[400px] sm:h-full">
      <h3 className="text-base md:text-[20px] font-semibold">{title}</h3>
      <p className="text-base font-light text-[#717579]">{subTitle}</p>
      <div className="mt-14 sm:mt-6 flex flex-col items-center justify-center w-[320px] md:w-[95%] h-[180px] lg:h-[60%]">
        {children}
      </div>
    </div>
  );
};

const workforce = [
  {
    devices: "TRC-RS001",
    assignedWorkforce: "MKS",
    contractor: "Dar",
  },
  {
    devices: "TRC-RS001",
    assignedWorkforce: "MKS",
    contractor: "Dar",
  },
  {
    devices: "TRC-RS001",
    assignedWorkforce: "MKS",
    contractor: "Dar",
  },
  {
    devices: "TRC-RS001",
    assignedWorkforce: "MKS",
    contractor: "Dar",
  },
];
