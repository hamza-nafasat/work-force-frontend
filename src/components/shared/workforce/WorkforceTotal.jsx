import React from 'react'

const WorkforceTotal = ({title, counts, data}) => {
    const totalValues = data.reduce((acc, value) => acc + value.count, 0)
  return (
    <>
        <div className="flex items-center justify-between mt-4">
            <h4 className="text-sm sm:text-base md:text-[18px] text-[#11111199]">{title}</h4>
            <h4 className="text-sm sm:text-base md:text-[18px] text-[#11111199]">{counts}</h4>
        </div>
        {data.map((workforce, i) => (
            <div className="flex items-center justify-between bg-[#7bc0f726] rounded-md p-4 mt-4" key={i}>
                <p className="text-base text-[#111111] capitalize">{workforce.name}</p>
                <p className="text-base text-[#111111]">{workforce.count}</p>     
            </div>
        ))}
        <div className="flex items-center justify-between bg-main-gradient rounded-md p-4 mt-4">
            <p className="text-base text-white font-medium">Total</p>
            <p className="text-base text-white font-medium">{totalValues}</p>
        </div>
    </>
  )
}

export default WorkforceTotal