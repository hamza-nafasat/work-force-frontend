import React from "react";
import Title from "../../../../components/shared/title/Title";
import BarChartComponent from "../../../../components/charts/barChart/BarChartComponent";
import {
  activeDeviceData,
  activeDeviceNfcData,
  activeNfcTagsTypeData,
  barLineData,
  smartTrackerData,
} from "../../../../data/data";
import DonutChart from "../../../../components/charts/donutChart/DonutChart";
import PieChartComponent from "../../../../components/charts/pieChart/PieChartComponent";

const ActiveDevices = () => {
  return (
    <>
      <div className="h-4"></div>
      <div className="bg-white p-4 lg:p-6 rounded-[12px]">
        <Title title="Active Devices" />
        <div className="mt-4">
          <BarChartComponent data={barLineData} />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 xl:gap-[40px] mt-4 lg:mt-6 xl:mt-[40px]">
        <ChartColumn title="NFC Tags" subTitle="Session by Device">
          <DonutChart data={activeDeviceNfcData} />
        </ChartColumn>
        <ChartColumn title="Device Data" subTitle="Session by Device">
          <PieChartComponent data={activeDeviceData} paddingAngle={0} cornerRadius={0} layout='layout-two' />
        </ChartColumn>
        <ChartColumn title="NFC Tags Types" subTitle="Session by Device">
          <PieChartComponent data={activeNfcTagsTypeData} layout='layout-two' />
        </ChartColumn>
      </div>
    </>
  );
};

export default ActiveDevices;

const ChartColumn = ({ title, subTitle, children }) => {
  return (
    <div className="p-4 md:p-5 bg-white rounded-[15px] drop-shadow-md h-[400px] sm:h-auto">
      <h3 className="text-base md:text-[20px] font-semibold">{title}</h3>
      <p className="text-base font-light text-[#717579]">{subTitle}</p>
      <div className="mt-14 md:mt-6 flex flex-col items-center justify-center h-[180px] lg:h-[60%]">
        {children}
      </div>
    </div>
  );
};
