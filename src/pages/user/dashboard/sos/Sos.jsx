import React from 'react'
import Title from '../../../../components/shared/title/Title'
import BarChartComponent from '../../../../components/charts/barChart/BarChartComponent'
import { barLineData, sosStatusData } from '../../../../data/data'
import PieChartComponent from '../../../../components/charts/pieChart/PieChartComponent'

const zoneColors = {start: '#B05000', end:'#F1822699'}
const durationColors = {start: '#AF8500', end:'#FFDB69'}

const Sos = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6'>
      <div className="lg:col-span-7">
        <div className="bg-white p-4 lg:p-6 rounded-[12px] drop-shadow-md">
          <Title title='SOS Count by Contractor' />
          <BarChartComponent data={barLineData} barSize={25} />
        </div>
      </div>
      <div className="lg:col-span-5">
        <div className="bg-white p-4 lg:p-6 rounded-[12px] drop-shadow-md">
        <Title title='SOS Count by Zone' />
        <BarChartComponent data={barLineData} colors={zoneColors} gradientID={'sosCountByZone'} barSize={20} />
        </div>
      </div>
      <div className="lg:col-span-7">
        <div className="bg-white p-4 lg:p-6 rounded-[12px] drop-shadow-md">
          <Title title='SOS Count by Duration' />
          <BarChartComponent data={barLineData} barSize={25} colors={durationColors} gradientID={'sosCountByDuration'} />
        </div>
      </div>
      <div className="lg:col-span-5">
        <div className="bg-white p-4 lg:p-6 rounded-[12px] drop-shadow-md h-full">
          <Title title='SOS Status' />
          <div className="h-full flex items-center">
            <PieChartComponent data={sosStatusData} innerRadius={0} outerRadius={84} paddingAngle={0} layout='layout-two' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sos