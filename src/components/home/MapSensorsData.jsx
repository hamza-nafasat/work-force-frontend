import React from 'react'

const MapSensorsData = () => {
  return (
    <>
        <h3 className="text-[18px] text-[#000] font-semibold">Sensors</h3>
        <DataColumn title='Total Sensors' value='10' />
        <DataColumn title='Active Sensors' value='05' />
        <h3 className="text-[18px] text-[#000] font-semibold mt-4 xl:mt-6">Labours</h3>
        <DataColumn title='Total Labour' value='50' />
        <DataColumn title='In Zone' value='45' />
        <DataColumn title='Out Of Zone' value='05' />
    </>
  )
}

export default MapSensorsData

const DataColumn = ({title, value}) => {
    return <div className='flex items-center justify-between bg-[#7bc0f726] rounded-[6px] p-4 mt-4 xl:mt-6'>
        <h3 className="text-base text-[#0b60ae]">{title}</h3>
        <h4 className="text-base font-semibold text-[#0b60ae]">{value}</h4>
    </div>
}