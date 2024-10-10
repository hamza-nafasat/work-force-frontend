import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditIcon from "../../../assets/svgs/EditIcon";
import GlobalLoader from "../../../components/layout/GlobalLoader";
import Title from "../../../components/shared/title/Title";
import { useGetSingleLabourQuery } from "../../../redux/api/labourApi";

const LabourDetail = () => {
  const [singleUser, setSingleUser] = useState({});
  const { id } = useParams();
  const { data, isLoading, isSuccess } = useGetSingleLabourQuery({ labourId: id });

  useEffect(() => {
    if (isSuccess && data?.data) setSingleUser(data?.data);
  }, [data, isSuccess]);

  return isLoading ? (
    <GlobalLoader />
  ) : (
    <div className="bg-white rounded-[15px] p-4 lg:p-6">
      {!singleUser?._id ? (
        <p className="text-base">No user data found..</p>
      ) : (
        <div>
          <div className="flex items-center justify-between">
            <div>
              <Title title="Labour Detail" />
            </div>
            <div className="cursor-pointer">
              <EditIcon />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-8">
            <div>
              <LabelAndTitle label="Full Name" title={singleUser?.fullName} />
              <div className="grid md:grid-cols-3 gap-5 mt-4">
                <LabelAndTitle label="Phone Number" title={singleUser?.phoneNumber} />
                <LabelAndTitle label="Date Of Birth" title={singleUser?.dateOfBirth} />
                <LabelAndTitle label="Gender" title={singleUser?.gender} />
                <LabelAndTitle label="Passport / ID" title={singleUser?.passportOrID} />
                <LabelAndTitle label="Nationality" title={singleUser?.nationality} />
                <LabelAndTitle label="Profession" title={singleUser?.profession} />
                <LabelAndTitle
                  label="Working Hours"
                  title={`${singleUser?.workingHour?.startTime} - ${singleUser?.workingHour?.endTime}`}
                />
                <LabelAndTitle label="Working Status" title={singleUser?.status} />
              </div>
            </div>
            <div>
              <img
                src={singleUser?.image?.url}
                className="w-full md:w-[70%] h-[full] object-cover rounded-lg m-auto"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LabourDetail;

const LabelAndTitle = ({ label, title }) => {
  return (
    <div>
      <p className="text-sm text-[#111111cc]">{label}</p>
      <h5 className="text-base md:text-md text-[#111111] font-semibold capitalize">{title}</h5>
    </div>
  );
};
