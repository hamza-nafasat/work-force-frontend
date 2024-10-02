import { useFormik } from "formik";
import React, { useState } from "react";
import { IoCamera } from "react-icons/io5";
import profileImg from "../../../assets/images/header/profilepic.webp";
import Input from "../../../components/auth/Input";
import Button from "../../../components/shared/button/Button";
import Dropdown from "../../../components/shared/dropdown/Dropdown";
import { useUpdateLabourMutation } from "../../../redux/api/labourApi";
import { genderOptions, nationalityOptions, professionOptions, workingStatusOptions } from "./option";
import { toast } from "react-toastify";

const EditUser = ({ selectedRow, refetch, onClose }) => {
  const [updateLabour, { isLoading }] = useUpdateLabourMutation();
  const [imgSrc, setImgSrc] = useState(selectedRow?.profilePhoto);

  // Handlers for dropdown selections
  const nationalitySelectHandler = (option) => setFieldValue("nationality", option);
  const genderSelectHandler = (option) => setFieldValue("gender", option);
  const professionSelectHandler = (option) => setFieldValue("profession", option);
  const workingStatusSelectHandler = (option) => setFieldValue("workingStatus", option);

  const uploadImgHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImgSrc(reader.result);
        setFieldValue("image", file);
      };
      reader.readAsDataURL(file);
    }
  };

  const initialValues = {
    fullName: selectedRow?.fullName || "",
    phoneNumber: selectedRow?.phoneNumber || "",
    passportNumber: selectedRow?.passportOrId || "",
    dateOfBirth: selectedRow?.dateOfBirth || "",
    nationality: selectedRow?.nationality || "",
    gender: selectedRow?.gender || "",
    profession: selectedRow?.profession || "",
    workingStatus: selectedRow?.status || "",
    workingHoursStartTime: selectedRow?.startTime || "",
    workingHoursEndTime: selectedRow?.endTime || "",
    image: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues,
    // validationSchema: usersSchema,
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        if (values.fullName) formData.append("fullName", values.fullName);
        if (values.phoneNumber) formData.append("phoneNumber", values.phoneNumber);
        if (values.passportNumber) formData.append("passportOrId", values.passportNumber);
        if (values.dateOfBirth) formData.append("dateOfBirth", values.dateOfBirth);
        if (values.nationality) formData.append("nationality", values.nationality);
        if (values.gender) formData.append("gender", values.gender);
        if (values.profession) formData.append("profession", values.profession);
        if (values.workingStatus) formData.append("status", values.workingStatus);
        if (values.workingHoursStartTime) formData.append("startTime", values.workingHoursStartTime);
        if (values.workingHoursEndTime) formData.append("endTime", values.workingHoursEndTime);
        if (values.image) formData.append("file", values.image);

        const response = await updateLabour({ LabourId: selectedRow?.id, data: formData }).unwrap();
        if (response?.success && response?.message) {
          await refetch();
          toast.success(response?.message);
          // console.log("labour updated successfully", response);
          onClose();
        }
      } catch (error) {
        // console.log("error while updating Labour", error);
        toast.error(error?.data?.message || "Some Error Occurred while updating Labour");
      }
    },
  });

  return (
    <form onSubmit={handleSubmit} className="w-full grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
      <div className="lg:col-span-9">
        <div className="grid lg:grid-cols-12 gap-1 md:gap-4">
          <div className="lg:col-span-6">
            <Input
              type="text"
              label="Full Name"
              placeholder="Full Name"
              labelWeight="font-semibold"
              value={values.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              name="fullName"
            />
          </div>
          <div className="lg:col-span-6">
            <Input
              type="tel"
              label="Phone Number"
              placeholder="Phone Number"
              labelWeight="font-semibold"
              value={values.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              name="phoneNumber"
            />
          </div>
          <div className="lg:col-span-6">
            <Input
              type="date"
              label="Date of Birth"
              labelWeight="font-semibold"
              value={values.dateOfBirth}
              onChange={handleChange}
              onBlur={handleBlur}
              name="dateOfBirth"
            />
          </div>
          <div className="lg:col-span-6">
            <Input
              type="text"
              label="ID/Passport Number"
              placeholder="ID/Passport Number"
              labelWeight="font-semibold"
              value={values.passportNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              name="passportNumber"
            />
          </div>
          <div className="lg:col-span-6 mb-4">
            <Label label="Nationality" />
            <Dropdown
              defaultText={selectedRow?.nationality}
              options={nationalityOptions}
              onSelect={nationalitySelectHandler}
            />
          </div>
          <div className="lg:col-span-6 mb-4">
            <Label label="Gender" />
            <Dropdown
              defaultText={selectedRow?.gender}
              options={genderOptions}
              onSelect={genderSelectHandler}
            />
          </div>
          <div className="lg:col-span-6 mb-4">
            <Label label="Profession" />
            <Dropdown
              defaultText={selectedRow?.profession}
              options={professionOptions}
              onSelect={professionSelectHandler}
            />
          </div>
          <div className="lg:col-span-6 mb-4">
            <Label label="Working Status" />
            <Dropdown
              defaultText={selectedRow?.status}
              options={workingStatusOptions}
              onSelect={workingStatusSelectHandler}
            />
          </div>
          <div className="lg:col-span-6 mb-4">
            <Input
              type="time"
              label="Working Hours Start Time"
              placeholder="Working Hours Start Time"
              labelWeight="font-semibold"
              value={values.workingHoursStartTime}
              onChange={handleChange}
              onBlur={handleBlur}
              name="workingHoursStartTime"
            />
          </div>
          <div className="lg:col-span-6 mb-4">
            <Input
              type="time"
              label="Working Hours End Time"
              placeholder="Working Hours End Time"
              labelWeight="font-semibold"
              value={values.workingHoursEndTime}
              onChange={handleChange}
              onBlur={handleBlur}
              name="workingHoursEndTime"
            />
          </div>
        </div>
      </div>
      <div className="lg:col-span-3">
        <img
          src={imgSrc || profileImg}
          alt=""
          className="w-[278px] h-[278px] object-cover rounded-full mb-4"
        />
        <div className="flex flex-col justify-center">
          <ChangePhoto onChange={uploadImgHandler} />
        </div>
      </div>
      <div className="lg:col-span-12">
        <div className="flex items-center justify-end gap-2">
          <Button
            disabled={isLoading}
            text="Cancel"
            color="#111111b3"
            bg="#76767640"
            width="w-[150px]"
            onClick={onClose}
            height="h-[45px] md:h-[60px]"
          />
          <Button type="submit" text="Add" width="w-[150px]" height="h-[45px] md:h-[60px]" />
        </div>
      </div>
    </form>
  );
};

export default EditUser;

const Label = ({ label }) => (
  <label className="text-[#000] text-base mb-2 block font-semibold">{label}</label>
);

const ChangePhoto = ({ onChange }) => (
  <button
    type="button"
    className="relative cursor-pointer bg-[rgb(12,103,188)] text-white font-medium h-[45px] md:h-[60px] w-[200px] rounded-xl flex items-center gap-1 justify-center"
  >
    Change Photo
    <IoCamera fontSize={20} />
    <input type="file" onChange={onChange} className="absolute inset-0 z-50 cursor-pointer opacity-0" />
  </button>
);
