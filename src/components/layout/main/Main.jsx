import React from 'react'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div className='pt-4 md:pt-6 mt-6 xl:mt-0'>
        <Outlet />
    </div>
  )
}

export default Main