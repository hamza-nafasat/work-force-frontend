import React from "react";
import { Link, useParams } from "react-router-dom";
import { usersData } from "../../../data/data";
import PhoneIcon from "../../../assets/svgs/users/PhoneIcon";
import PinIcon from "../../../assets/svgs/users/PinIcon";
import Button from "../../../components/shared/button/Button";
import BarChartComponent from "../../../components/charts/barChart/BarChartComponent";
import SensorsIcon from "../../../assets/svgs/admin/SensorsIcon";
import ProjectsList from "./ProjectsList";

export const data = [
  { name: "Dar", uv: 3428 },
  { name: "Elegant", uv: 7120 },
  { name: "Enjaz", uv: 6650 },
  { name: "ESOM", uv: 5985 },
  { name: "FHM", uv: 2132 },
  { name: "FMCO", uv: 4300 },
  { name: "FSCL", uv: 6480 },
  { name: "GACS", uv: 5640 },
  { name: "GKI", uv: 3482 },
  { name: "HMA", uv: 2940 },
  { name: "ICAD", uv: 5200 },
  { name: "IFMI", uv: 4000 },
  { name: "KCC", uv: 2800 },
  { name: "MNO", uv: 4000 },
  { name: "HCF", uv: 2800 },
  { name: "KFT", uv: 1800 },
  { name: "POLM", uv: 6500 },
];

const barColors = { start: "#0C6AC1", end: "#06325b70" };

const UserDetail = () => {
  const { id } = useParams();
  const user = usersData.find((user) => user.id === id);
  console.log(user);
  return (
    <div className="bg-[#fffafa] rounded-[14px] p-4 md:p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg md:text-[22px] text-[#414141] font-semibold">
          User Detail
        </h2>
        <h6 className="bg-[#0C6AC1] rounded-[27px] w-[107px] h-[37px] text-sm grid place-items-center text-white">
          Subscribed
        </h6>
      </div>
      <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-4 bg-white rounded-xl shadow-md p-4 border flex items-center">
          <User user={user} />
        </div>
        <div className="lg:col-span-8 bg-white rounded-xl shadow-md p-4 border">
          <Performance />
        </div>
        <div className="col-span-12 bg-white rounded-xl shadow-md p-4 border">
          <ProjectsList />
        </div>
      </div>
    </div>
  );
};

export default UserDetail;

const Performance = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-[rgba(65,65,65,1)]">
          Performance
        </h2>
        <div className="flex items-center justify-end gap-4">
          <p className="text-[#767676] text-[10px] w-[50%] leading-none">
            Your performance is 50% better compare to last month
          </p>
          <h3 className="text-lg font-bold text-[#0C6AC1]">50%</h3>
        </div>
      </div>
      <div className="my-4">
        <BarChartComponent data={data} barSize={30} colors={barColors} />
      </div>
      <div className="flex gap-5">
        <div className="w-full">
          <h3 className="text-sm font-medium text-[#047cff]">Buildings</h3>
          <div className="mt-3 bg-[rgba(243,249,255,1)] flex items-center justify-between relative px-4 py-6 rounded-md">
            <div className="flex items-center gap-2">
              {/* <BuildingSvg /> */}
              <p className="text-sm font-medium text-[rgba(95,95,95,1)]">
                Numbers Of Buildings
              </p>
            </div>
            <p className="text-lg md:text-2xl font-semibold text-[#047cff]">
              26
            </p>
            <div className="absolute left-0 top-[15px] w-[7px] h-[50px] bg-[#047cff] rounded-tr-xl rounded-br-xl"></div>
          </div>
        </div>
        <div className="w-full">
          <h3 className="text-sm font-medium text-[#047cff]">Sensors</h3>
          <div className="mt-3 bg-[rgba(243,249,255,1)] flex items-center justify-between relative px-4 py-6 rounded-md">
            <div className="flex items-center gap-2">
              <SensorsIcon />
              <p className="text-sm font-medium text-[rgba(95,95,95,1)]">
                Numbers Of Sensors
              </p>
            </div>
            <p className="text-lg md:text-2xl font-semibold text-[#047cff]">
              10
            </p>
            <div className="absolute left-0 top-[15px] w-[7px] h-[50px] bg-[#047cff] rounded-tr-xl rounded-br-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const User = ({ user }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center">
        <img
          src={"https://placehold.co/113x105"}
          alt="profile"
          className="w-full h-[165px] object-cover rounded-[20px]"
        />
        <div className="my-[12px] bg-[#0C6AC1] rounded-[17px] w-[77px] h-[24px] text-[10px] grid place-items-center text-white">
          Subscribed
        </div>
        <h3 className="text-lg font-bold text-[#202020]">{user?.fullName}</h3>
        <p className="mt-[10px] text-[#a5a5a5] text-xs font-semibold">
          Building Owner at{" "}
          <span className="text-[#0C6AC1]">{user?.project}</span>
        </p>
      </div>
      <div className="mt-4 flex items-center gap-4">
        <PhoneIcon />
        <p className="font-semibold text-sm text-[#202020]">
          {user?.phoneNumber}
        </p>
      </div>
      <div className="mt-4 flex items-center gap-4">
        <PinIcon />
        <p className="font-semibold text-sm text-[#202020]">
          {user?.nationality}
        </p>
      </div>
      <div className="mt-4 flex justify-center">
        <Link to="/admin/users/edit-user">
          <Button
            text="Edit Profile"
            bg="#0C6AC1"
            width="w-[150px]"
            height="h-[50px]"
          />
        </Link>
      </div>
    </div>
  );
};
