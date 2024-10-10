import React, { useState } from "react";
import Input from "../../../components/auth/Input";
import Dropdown from "../../../components/shared/dropdown/Dropdown";
import profileImg from "../../../assets/images/header/profilepic.webp";
import Button from "../../../components/shared/button/Button";
import { IoCamera } from "react-icons/io5";
import { useFormik } from "formik";
import { usersSchema } from "../../../schemas";

const AddUser = ({ onClose }) => {
  const [imgSrc, setImgSrc] = useState(null);

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      role: "",
      address: "",
      image: "",
    },
    validationSchema: usersSchema,
    onSubmit: (values) => console.log("Submitted values:", values),
  });

  const roleSelectHandler = (option) => {
    setFieldValue("role", option.option);
  };

  const uploadImgHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImgSrc(reader.result);
        setFieldValue("image", file);
      };
      reader.readAsDataURL(file);
    } else {
      setFieldValue("image", "");
    }
  };

  return (
    <form
      className="w-full grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6"
      onSubmit={handleSubmit}
    >
      <div className="lg:col-span-9">
        <div className="grid lg:grid-cols-12 gap-1 md:gap-4">
          <div className="lg:col-span-6">
            <Input
              type="text"
              label="First Name"
              placeholder="First Name"
              labelWeight="font-semibold"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.firstName && errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName}</p>
            )}
          </div>
          <div className="lg:col-span-6">
            <Input
              type="text"
              label="Last Name"
              placeholder="Last Name"
              labelWeight="font-semibold"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.lastName && errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName}</p>
            )}
          </div>
          <div className="lg:col-span-6">
            <Input
              type="email"
              label="Email Address"
              placeholder="Email Address"
              labelWeight="font-semibold"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div className="lg:col-span-6">
            <Input
              type="tel"
              label="Phone Number"
              placeholder="Phone Number"
              labelWeight="font-semibold"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.phone && errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>
          <div className="lg:col-span-6">
            <Input
              type="password"
              label="Password"
              placeholder="Password"
              labelWeight="font-semibold"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.password && errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
          <div className="lg:col-span-6">
            <Input
              type="password"
              label="Confirm Password"
              placeholder="Confirm Password"
              labelWeight="font-semibold"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </div>
          <div className="lg:col-span-6">
            <Label label="Role" />
            <Dropdown
              options={[{ option: "User" }, { option: "Admin" }]}
              defaultText="Select Role"
              onSelect={roleSelectHandler}
            />
            {touched.role && errors.role && (
              <p className="text-red-500 text-sm">{errors.role}</p>
            )}
          </div>
          <div className="lg:col-span-6">
            <Input
              type="text"
              label="Address"
              placeholder="Address"
              labelWeight="font-semibold"
              name="address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.address && errors.address && (
              <p className="text-red-500 text-sm">{errors.address}</p>
            )}
          </div>
        </div>
      </div>
      <div className="lg:col-span-3">
        <img
          src={imgSrc || profileImg}
          alt="Profile"
          className="w-[278px] h-[278px] object-cover rounded-full mb-4"
        />
        <div className="flex justify-center">
          <ChangePhoto onChange={uploadImgHandler} />
        </div>
        {touched.image && errors.image && (
          <p className="text-red-500 text-sm text-center">{errors.image}</p>
        )}
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
  <label className="text-[#000] text-base mb-2 block font-semibold">
    {label}
  </label>
);

const ChangePhoto = ({ onChange }) => (
  <button
    type="button"
    className="relative cursor-pointer bg-[rgb(12,103,188)] text-white font-medium h-[45px] md:h-[60px] w-[200px] rounded-xl flex items-center gap-1 justify-center"
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
