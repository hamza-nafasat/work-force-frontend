import React from 'react'
import Title from '../../../../components/shared/title/Title'
import BarChartComponent from '../../../../components/charts/barChart/BarChartComponent'
import { activeDeviceNfcData, barLineData, workforces, workforcesNationality, workforcesZone } from '../../../../data/data'
import DonutChart from '../../../../components/charts/donutChart/DonutChart'
import WorkforceTotal from '../../../../components/shared/workforce/WorkforceTotal'
import PieChartComponent from '../../../../components/charts/pieChart/PieChartComponent'

const barColors = {start: '#1497a6', end: '#14a68b99'}

const Workforce = () => {
  return (
    <>
      <div className='grid lg:grid-cols-12 gap-4 md:gap-6'>
        <div className="grid-cols-1 lg:col-span-8">
          <div className="bg-white p-4 lg:p-6 rounded-[12px] drop-shadow-md">
            <Title title='Workforces' />
            <BarChartComponent data={barLineData} colors={barColors} barSize={30} />
          </div>
        </div>
        <div className="lg:col-span-4">
          <ChartColumn title='Smart Tracker' subTitle='Session by Device'>
            <DonutChart data={activeDeviceNfcData} />
          </ChartColumn>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-4 md:mt-6 lg:mt-8">
          <div className="p-4 md:p-5 bg-white rounded-[15px] drop-shadow-md h-full">
            <Title title='Workforces' />
            <WorkforceTotal title='Profession Type' counts='Count Of Workers' data={workforces} />
          </div>
          <div className="p-4 md:p-5 bg-white rounded-[15px] drop-shadow-md h-full">
            <Title title='Workforces Nationality' />
            <WorkforceTotal title='Nationality' counts='Count Of Workerforces' data={workforcesNationality} />
          </div>
        <ChartColumn title='Workforces zone' subTitle='Session by Device'>
          <PieChartComponent data={workforcesZone} paddingAngle={0} cornerRadius={0} layout='layout-two' />
        </ChartColumn>
      </div>
    </>
  )
}

export default Workforce

const ChartColumn = ({ title, subTitle, children }) => {
  return (
    <div className="p-4 md:p-5 bg-white rounded-[15px] drop-shadow-md h-[400px] sm:h-full">
      <h3 className="text-base md:text-[20px] font-semibold">{title}</h3>
      <p className="text-base font-light text-[#717579]">{subTitle}</p>
      <div className="mt-10 flex flex-col items-center justify-center h-[180px] lg:h-[75%]">
        {children}
      </div>
    </div>
  );
};