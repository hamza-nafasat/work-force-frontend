import React from "react";
import Title from "../../../../components/shared/title/Title";
import BarChartComponent from "../../../../components/charts/barChart/BarChartComponent";
import { barLineData, trackerConnectivityData, vehiclesProfileData } from "../../../../data/data";
import RadialChart from "../../../../components/charts/radialChart/RadialChart";

const colors = { start: "#00937A", end: "#00aAC799" };

const VehiclesData = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
      <div className="bg-white p-4 lg:p-6 rounded-[12px] drop-shadow-md">
        <Title title="Count Of Vehicles Per Contractor" />
        <BarChartComponent
          data={barLineData}
          barSize={20}
          gradientID="vehiclesPerContractor"
        />
      </div>
      <div className="bg-white p-4 lg:p-6 rounded-[12px] drop-shadow-md">
        <Title title="Count Of Vehicles By Brand" />
        <BarChartComponent
          data={barLineData}
          barSize={20}
          colors={colors}
          gradientID="vehiclesByBrand"
        />
      </div>
      <div>
        <ChartColumn
          title="Vehicles Tracker Connectivity"
          subTitle="Session by Device"
        >
          <RadialChart data={trackerConnectivityData} innerRadius={90} />
        </ChartColumn>
      </div>
      <div>
        <ChartColumn title="Vehicles Profile" subTitle="Session by Device">
          <RadialChart data={vehiclesProfileData} />
        </ChartColumn>
      </div>
    </div>
  );
};

export default VehiclesData;

const ChartColumn = ({ title, subTitle, children }) => {
  return (
    <div className="p-4 md:p-5 bg-white rounded-[15px] drop-shadow-md h-[430px] sm:h-full">
      <h3 className="text-base md:text-[20px] font-semibold">{title}</h3>
      <p className="text-base font-light text-[#717579]">{subTitle}</p>
      <div className="mt-16 sm:mt-6 flex flex-col items-center justify-center w-[320px] md:w-[95%] h-[180px] lg:h-[60%]">
        {children}
      </div>
    </div>
  );
};
