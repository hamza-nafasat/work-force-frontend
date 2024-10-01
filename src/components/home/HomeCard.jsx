import React from 'react'
import { BiSolidUpArrow } from "react-icons/bi";

const HomeCard = ({title, value, valuePercentage, chart}) => {
  return (
    <div className='bg-white shadow-xl rounded-[12px] flex flex-col justify-between overflow-hidden'>
        <div className="flex justify-between gap-6 px-4 md:px-6 pt-4">
            <div>
                <h3 className="text-[#112c5f] font-semibold text-sm md:text-base leading-none">
                    {title}
                </h3>
                <h6 className="font-semibold text-[#000] text-2xl md:text-[40px] leading-none mt-3">{value}</h6>
            </div>
            <div>
                <p className="text-[10px] text-[#3c3c3c]">
                    Up from last week
                </p>
                <div className="flex items-center gap-2 text-[10px] text-[#3c3c3c]">
                    {valuePercentage}%
                    <BiSolidUpArrow color='#2bc155' />
                </div>
            </div>
        </div>
        <div className='w-full'>
            {chart}
        </div>
    </div>
  )
}

export default HomeCard