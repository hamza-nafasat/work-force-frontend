import React from "react";
import PhoneIcon from "../../../assets/svgs/users/PhoneIcon";
import PinIcon from "../../../assets/svgs/users/PinIcon";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <div className="bg-white shadow-md p-4 md:p-5 rounded-[10px] border relative">
      <div className="flex flex-col items-center">
        <img
          src={user?.profilePhoto}
          alt="profile"
          className="w-[113px] h-[113px] object-cover rounded-[20px]"
        />
        <div className="my-[12px] bg-[#047cff] rounded-[17px] w-[77px] h-[24px] text-[10px] grid place-items-center text-white">
          Subscribed
        </div>
        <h3 className="text-lg font-bold text-[#202020]">{user?.fullName}</h3>
        <p className="mt-[10px] text-[#a5a5a5] text-xs font-semibold">
          Assigned to Project{" "}
          <span className="text-[#047cff]">{user?.project}</span>
        </p>
      </div>
      <div className="mt-4 flex items-center gap-4">
        <PhoneIcon />
        <p className="font-semibold text-sm text-[#202020]">{user?.phoneNumber}</p>
      </div>
      <div className="mt-4 flex items-center gap-4">
        <PinIcon />
        <p className="font-semibold text-sm text-[#202020]">{user?.nationality}</p>
      </div>
    </div>
  );
};

export default UserCard;
