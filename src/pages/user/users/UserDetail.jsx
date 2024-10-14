/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditIcon from "../../../assets/svgs/EditIcon";
import GlobalLoader from "../../../components/layout/GlobalLoader";
import Title from "../../../components/shared/title/Title";
import { useGetSingleUserQuery } from "../../../redux/api/userApi";

const UserDetail = () => {
  const { id } = useParams();
  const [singleUser, setSingleUser] = useState({});
  const { data, isLoading, isSuccess } = useGetSingleUserQuery({ userId: id });

  useEffect(() => {
    if (isSuccess && data?.user) setSingleUser(data?.user);
  }, [data, isSuccess]);

  const user = singleUser;
  return isLoading ? (
    <GlobalLoader />
  ) : (
    <div className="bg-white rounded-[15px] p-4 lg:p-6">
      {!user && <p className="text-base">No vehicle data found..</p>}
      <div className="flex items-center justify-between">
        <div>
          <Title title="User Detail" />
        </div>
        <div className="cursor-pointer">
          <EditIcon />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-8">
        <div>
          <LabelAndTitle label="Full Name" title={`${user?.firstName} ${user?.lastName}`} />
          <div className="grid md:grid-cols-2 gap-5 mt-4">
            <LabelAndTitle label="Phone Number" title={user?.phoneNumber} />
            <LabelAndTitle label="Email" title={user?.email} />
            <LabelAndTitle label="Role" title={user?.role} />
            <LabelAndTitle label="Address" title={user?.address} />
          </div>
        </div>
        <div>
          <img
            src={user?.image?.url}
            className="w-full md:w-[70%] h-[200px] object-contain rounded-lg m-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default UserDetail;

const LabelAndTitle = ({ label, title }) => {
  return (
    <div>
      <p className="text-sm text-[#111111cc]">{label}</p>
      <h5 className="text-base md:text-md text-[#111111] font-semibold">{title}</h5>
    </div>
  );
};
