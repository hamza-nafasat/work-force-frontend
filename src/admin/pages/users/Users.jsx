import React from 'react'
import UserCard from './UserCard'
import { usersData } from '../../../data/data'
import { Link } from 'react-router-dom'

const Users = () => {
  return (
    <div className="bg-[#fffafa] rounded-[14px] p-4 md:p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg md:text-[22px] text-[#414141] font-semibold">
          Users
        </h2>
        <Link to='add-user' className="w-[107px] h-[37px] grid place-items-center border border-[#0C6AC1] rounded-xl text-[#0C6AC1]
        text-sm">
          + Add User
        </Link>
      </div>
      <div className="mt-4 md:mt-8 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
        {usersData.map((user) => (
          <UserCard key={user?.id} user={user} />
        ))}
      </div>
    </div>
  )
}

export default Users