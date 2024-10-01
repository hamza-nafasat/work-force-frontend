import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { usersData } from "../../../data/data";
import Title from "../../../components/shared/title/Title";
import EditIcon from "../../../assets/svgs/EditIcon";
import ToggleButton from "../../../components/shared/toggle/ToggleButton";

const UserDetail = () => {
  const [isChecked, setIsChecked] = useState(false)
  const { id } = useParams();
  const user = usersData.find((user) => user.id === id);
    console.log('user', user)
  const handleToggle = () => {
    setIsChecked(!isChecked)
  }
  return (
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
          <LabelAndTitle label="Full Name" title={user.fullName} />
          <div className="grid md:grid-cols-3 gap-5 mt-4">
            <LabelAndTitle
              label="Phone Number"
              title={user.phoneNumber}
            />
            <LabelAndTitle
              label="Date Of Birth"
              title={user.dateOfBirth}
            />
            <LabelAndTitle label="Gender" title={user.gender} />
            <LabelAndTitle label="Passport / ID" title={user.passportOrId} />
            <LabelAndTitle label="Nationality" title={user.nationality} />
            <LabelAndTitle label="Profession" title={user.profession} />
            <LabelAndTitle label="Working Hours" title={user.workingHour} />
            <LabelAndTitle label="Working Status" title={user.status} />
          </div>
        </div>
        <div>
            <img src={user.profilePhoto} className="w-full md:w-[70%] h-[full] object-cover rounded-lg m-auto"/>
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
      <h5 className="text-base md:text-md text-[#111111] font-semibold capitalize">
        {title}
      </h5>
    </div>
  );
};
