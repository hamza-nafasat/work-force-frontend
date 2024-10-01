import React from 'react'

const Title = ({title}) => {
  return (
    <>
    <h4 className="text[#111111] text-sm sm:text-base lg:text-lg font-medium sm:font-semibold">
        {title}
      </h4>
      {/* diver */}
      <div className="w-[50x] md:w-[104px] h-[2px] sm:h-1 bg-[#111111] rounded-xl mt-0"></div>
    </>
  )
}

export default Title