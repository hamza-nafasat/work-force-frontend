import React, { useState } from "react";
import Title from "../../../components/shared/title/Title";
import Input from "../../../components/auth/Input";
import Button from "../../../components/shared/button/Button";
import profileImg from "../../../assets/images/header/profilepic.webp";
import { IoCamera } from "react-icons/io5";

const UpdateProfile = () => {
  const [imgSrc, setImgSrc] = useState(null);

  const uploadImgHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImgSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white rounded-[15px] p-4 lg:p-6 mt-4">
      <Title title="Edit Profile" />
      <form className="mt-4 md:mt-6 grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-8">
          <div className="p-4 rounded-md shadow-lg">
            <p className="text-sm md:text-base text-[#084984]">
              This data will not be change
            </p>
            <DetailList title="First Name" value="MKS" />
            <DetailList title="Last Name" value="MKS" />
            <DetailList title="Email" value="MKS" />
            <DetailList
              title="Address"
              value="Tetratech, Lakhpat Road, Lahore"
            />
          </div>
          <div className="mt-4 md:mt-8">
            <Input
              type="tel"
              label="Phone Number"
              labelWeight="font-semibold"
            />
            <Input
              type="password"
              label="Password"
              labelWeight="font-semibold"
            />
            <Input
              type="password"
              label="Confirm Password"
              labelWeight="font-semibold"
            />
          </div>
        </div>
        <div className="lg:col-span-4 mx-auto">
          <img
            src={imgSrc || profileImg}
            alt=""
            className="w-[278px] h-[278px] object-cover rounded-full mb-4"
          />
          <div className="flex justify-center">
            <ChangePhoto onChange={uploadImgHandler} />
          </div>
        </div>
        <div className="lg:col-span-8 flex justify-center sm:justify-end">
          <div className="flex items-center gap-4">
            <Button
              type="button"
              text="Cancel"
              color="#111111b3"
              bg="#76767640"
              width="w-[120px] sm:w-[150px]"
              height="h-[40px] sm:h-[60px]"
            />
            <Button
              text="Add"
              width="w-[120px] sm:w-[150px]"
              height="h-[40px] sm:h-[60px]"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;

const DetailList = ({ title, value }) => {
  return (
    <div className="flex items-center gap-6 mt-2">
      <p className="text-sm md:text-base text-[#00000099] md:basis-[25%]">
        {title}
      </p>
      <p className="text-sm md:text-base text-[#000000] font-medium">{value}</p>
    </div>
  );
};

const ChangePhoto = ({ onChange }) => (
  <button
    type="button"
    className="relative cursor-pointer bg-[rgb(12,103,188)] text-white font-normal sm:font-medium h-[45px] md:h-[60px] w-[200px] rounded-xl flex items-center gap-1 justify-center text-sm sm:text-base"
  >
    Change Photo
    <IoCamera fontSize={20} />
    <input
      type="file"
      onChange={onChange}
      className="absolute inset-0 z-50 cursor-pointer opacity-0"
    />
  </button>
);
