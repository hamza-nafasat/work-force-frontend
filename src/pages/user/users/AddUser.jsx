import React, { useState } from "react";
import Input from "../../../components/auth/Input";
import Dropdown from "../../../components/shared/dropdown/Dropdown";
import profileImg from "../../../assets/images/header/profilepic.webp";
import Button from "../../../components/shared/button/Button";
import { IoCamera } from "react-icons/io5";
import { useFormik } from "formik";
import { usersSchema } from "../../../schemas";
import { useAddLabourMutation } from "../../../redux/api/labourApi";
import { toast } from "react-toastify";

const workingStatusOptions = [
  { option: "On leave", value: "on-leave" },
  { option: "Working", value: "working" },
];
const professionOptions = [
  { option: "Supervisor", value: "supervisor" },
  { option: "Labour", value: "labour" },
];
const genderOptions = [
  { option: "Male", value: "male" },
  { option: "Female", value: "female" },
];
const nationalityOptions = [
  { option: "Saudi Arabia", value: "saudi-arabia" },
  { option: "Pakistan", value: "pakistan" },
  { option: "UAE", value: "uae" },
];

const AddUser = ({ onClose, refetch }) => {
  const [imgSrc, setImgSrc] = useState(null);
  const [addLabour, { isLoading }] = useAddLabourMutation();

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
    fullName: "",
    phoneNumber: "",
    passportNumber: "",
    dateOfBirth: "",
    nationality: "",
    gender: "",
    profession: "",
    workingStatus: "",
    workingHoursStartTime: "",
    workingHoursEndTime: "",
    image: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues,
    validationSchema: usersSchema,
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        formData.append("fullName", values.fullName);
        formData.append("phoneNumber", values.phoneNumber);
        formData.append("passportOrID", values.passportNumber);
        formData.append("dateOfBirth", values.dateOfBirth);
        formData.append("nationality", values.nationality);
        formData.append("gender", values.gender);
        formData.append("profession", values.profession);
        formData.append("status", values.workingStatus);
        formData.append("startTime", values.workingHoursStartTime);
        formData.append("endTime", values.workingHoursEndTime);
        formData.append("file", values.image);
        const response = await addLabour(formData).unwrap();
        if (response?.success && response?.message) {
          await refetch();
          toast.success(response?.message);
          // console.log("labour added successfully", response);
          onClose();
        }
      } catch (error) {
        console.log("error while adding new labour", error);
        toast.error(error?.data?.message || "Some Error Occurred while adding new Labour");
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
            {errors.fullName && touched.fullName && (
              <div className="text-red-500 text-xs mt-1">{errors.fullName}</div>
            )}
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
            {errors.phoneNumber && touched.phoneNumber && (
              <div className="text-red-500 text-xs mt-1">{errors.phoneNumber}</div>
            )}
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
            {errors.dateOfBirth && touched.dateOfBirth && (
              <div className="text-red-500 text-xs mt-1">{errors.dateOfBirth}</div>
            )}
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
            {errors.passportNumber && touched.passportNumber && (
              <div className="text-red-500 text-xs mt-1">{errors.passportNumber}</div>
            )}
          </div>
          <div className="lg:col-span-6 mb-4">
            <Label label="Nationality" />
            <Dropdown options={nationalityOptions} onSelect={nationalitySelectHandler} />
            {errors.nationality && touched.nationality && (
              <div className="text-red-500 text-xs mt-1">{errors.nationality}</div>
            )}
          </div>
          <div className="lg:col-span-6 mb-4">
            <Label label="Gender" />
            <Dropdown options={genderOptions} onSelect={genderSelectHandler} />
            {errors.gender && touched.gender && (
              <div className="text-red-500 text-xs mt-1">{errors.gender}</div>
            )}
          </div>
          <div className="lg:col-span-6 mb-4">
            <Label label="Profession" />
            <Dropdown options={professionOptions} onSelect={professionSelectHandler} />
            {errors.profession && touched.profession && (
              <div className="text-red-500 text-xs mt-1">{errors.profession}</div>
            )}
          </div>
          <div className="lg:col-span-6 mb-4">
            <Label label="Working Status" />
            <Dropdown options={workingStatusOptions} onSelect={workingStatusSelectHandler} />
            {errors.workingStatus && touched.workingStatus && (
              <div className="text-red-500 text-xs mt-1">{errors.workingStatus}</div>
            )}
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
            {errors.workingHoursStartTime && touched.workingHoursStartTime && (
              <div className="text-red-500 text-xs mt-1">{errors.workingHoursStartTime}</div>
            )}
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
            {errors.workingHoursEndTime && touched.workingHoursEndTime && (
              <div className="text-red-500 text-xs mt-1">{errors.workingHoursEndTime}</div>
            )}
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
          {errors.image && touched.image && <div className="text-red-500 text-xs mt-1">{errors.image}</div>}
        </div>
      </div>
      <div className="lg:col-span-12">
        <div className="flex items-center justify-end gap-2">
          <Button
            text="Cancel"
            color="#111111b3"
            bg="#76767640"
            width="w-[150px]"
            onClick={onClose}
            height="h-[45px] md:h-[60px]"
          />
          <Button
            disabled={isLoading}
            type="submit"
            text="Add"
            width="w-[150px]"
            height="h-[45px] md:h-[60px]"
          />
        </div>
      </div>
    </form>
  );
};

export default AddUser;

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
