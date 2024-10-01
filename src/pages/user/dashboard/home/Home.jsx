import React from "react";
import HomeCard from "../../../../components/home/HomeCard";
import workforceGrad from "../../../../assets/images/home/workforce-grad.png";
import projectGrad from "../../../../assets/images/home/project-grad.png";
import placementGrad from "../../../../assets/images/home/placement-grad.png";
import averagedaysGrad from "../../../../assets/images/home/averagedays-grad.png";
import ProjectCard from "../../../../components/home/ProjectCard";
import {
  barLineData,
  deviceStatusData,
  nfcTagsData,
  nfcTagsTypeData,
  projects,
  smartTrackerData,
  vehiclesPieChartData,
} from "../../../../data/data";
import PieChartComponent from "../../../../components/charts/pieChart/PieChartComponent";
import MapComponent from "../../../../components/map/MapComponent";
import MapSensorsData from "../../../../components/home/MapSensorsData";
import BarChartComponent from "../../../../components/charts/barChart/BarChartComponent";
import DonutChart from "../../../../components/charts/donutChart/DonutChart";
import TruckIcon from "../../../../assets/svgs/home/TruckIcon";
import CircularDonutChart from "../../../../components/charts/donutChart/CircularDonutChart";
import Title from "../../../../components/shared/title/Title";
import AreaChartComponent from "../../../../components/charts/areaChart/AreaChartComponent";

const workforceData = [
  { name: "Jan", value: 0 },
  { name: "Feb", value: 40 },
  { name: "Mar", value: 10 },
  { name: "Apr", value: 43 },
  { name: "May", value: 50 },
  { name: "Mar", value: 40 },
  { name: "Apr", value: 63 },
  { name: "May", value: 80 },
];
const projectData = [
  { name: "Jan", value: 0 },
  { name: "Feb", value: 90 },
  { name: "Mar", value: 30 },
  { name: "Apr", value: 80 },
  { name: "May", value: 10 },
];
const placementData = [
  { name: "Jan", value: 0 },
  { name: "Feb", value: 20 },
  { name: "Mar", value: 90 },
  { name: "Apr", value: 10 },
  { name: "May", value: 90 },
];
const daysIdleData = [
  { name: "Jan", value: 0 },
  { name: "Feb", value: 30 },
  { name: "Mar", value: 50 },
  { name: "Apr", value: 80 },
  { name: "May", value: 60 },
];

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 2xl:gap-6 lg:mt-[30px] mb-4 md:mb-[40px]">
        <HomeCard
          title="WORKFORCE HIRE"
          value="60"
          valuePercentage="1.3"
          chart={<AreaChartComponent data={workforceData} color="#084984" />}
        />
        <HomeCard
          title="PROJECT STAFFED"
          value="82"
          valuePercentage="3.3"
          chart={<AreaChartComponent data={projectData} color="#4bcbeb" />}
        />
        <HomeCard
          title="AVERAGE DAYS TO PLACEMENT"
          value="12"
          valuePercentage="0.3"
          chart={<AreaChartComponent data={placementData} color="#1bcfb4" />}
        />
        <HomeCard
          title="AVERAGE DAYS IDLE"
          value="234"
          valuePercentage="4.3"
          chart={<AreaChartComponent data={daysIdleData} color="#9e58ff" />}
        />
      </div>
      <Title title="Todays Tasks" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 my-4 md:my-[40px]">
        <div className="bg-white rounded-[12px] p-4 lg:p-6 h-[450px] xl:h-[600px] overflow-y-scroll no-scrollbar drop-shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base text-[rgba(0, 0, 0, 0.6)] font-semibold">
              All Projects
            </h3>
            {/* <p className="text-sm text-[rgba(0, 0, 0, 0.6)]">View all</p> */}
          </div>
          {/* Projects cards */}
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              title={project.title}
              images={project.images}
              startDate={project.startDate}
              endDate={project.endDate}
              percentage={project.percentage}
            />
          ))}
        </div>
        <div className="bg-white rounded-[12px] p-4 lg:p-6 drop-shadow-xl">
          <h3 className="text-[#000] text-lg md:text-[24px] font-semibold">
            Vehicles
          </h3>
          <PieChartComponent
            layout="layout-one"
            data={vehiclesPieChartData}
            centerIcon={<TruckIcon />}
            innerRadius={90}
            outerRadius={120}
          />
        </div>
      </div>
      <Title title="Sensor" />
      {/* map section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 my-4 md:my-[40px] bg-white p-4 md:p-6 rounded-[12px] drop-shadow-xl">
        <div className="col-span-12 md:col-span-9 drop-shadow-md rounded-lg">
          <MapComponent position={[29.2985, 42.551]} />
        </div>
        <div className="col-span-12 md:col-span-3 drop-shadow-md">
          <MapSensorsData />
        </div>
      </div>
      {/* bar chart */}
      <Title title="Workers Hire" />
      <div className="bg-white p-4 md:p-6 rounded-[12px] mt-4 md:mt-[40px] drop-shadow-xl">
        <BarChartComponent data={barLineData} />
      </div>
      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4 md:mt-8 gap-4">
        <ChartColumn
          title="Smart Tracker"
          subTitle="Session by Device"
          height="220px"
        >
          <DonutChart data={smartTrackerData} />
        </ChartColumn>
        <ChartColumn title="Device Status" subTitle="Session by Device">
          <PieChartComponent
            layout="layout-two"
            data={deviceStatusData}
            innerRadius={55}
            outerRadius={85}
          />
        </ChartColumn>
        <ChartColumn title="NFC Tags" subTitle="Session by Device">
          <CircularDonutChart data={nfcTagsData} />
        </ChartColumn>
        <ChartColumn title="NFC Tags Type" subTitle="Session by Device">
          <PieChartComponent
            layout="layout-two"
            data={nfcTagsTypeData}
            innerRadius={0}
            outerRadius={84}
            paddingAngle={0}
          />
        </ChartColumn>
      </div>
    </>
  );
};

export default Home;

const ChartColumn = ({ title, subTitle, children, height }) => {
  return (
    <div className="p-4 md:p-5 bg-white rounded-[15px] drop-shadow-md h-[400px] sm:h-auto">
      <h3 className="text-base md:text-[20px] font-semibold">{title}</h3>
      <p className="text-base font-light text-[#717579]">{subTitle}</p>
      <div
        className={`mt-6 flex flex-col items-center justify-center h-[${height}]`}
      >
        {children}
      </div>
    </div>
  );
};
