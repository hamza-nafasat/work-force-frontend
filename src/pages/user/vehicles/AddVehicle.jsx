import React, { useState } from "react";
import CameraIcon from "../../../assets/svgs/vehicles/CameraIcon";
import profile from "../../../assets/images/vehicles/vehicle.png";
import Dropdown from "../../../components/shared/dropdown/Dropdown";
import { brandOptions } from "../../../data/data";
import Input from "../../../components/auth/Input";
import Button from "../../../components/shared/button/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { vehicleSchema } from "../../../schemas";

const AddVehicle = ({ onClose }) => {
  const [imgSrc, setImgSrc] = useState("");

  const imgSrcHandler = (e) => {
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

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      vehicleName: "",
      brand: "",
      identificationNumber: "",
      licensePlateNumber: "",
      project: "",
      color: "",
      assignTo: "",
      image: "",
      sensor: "",
    },
    validationSchema: vehicleSchema,
    onSubmit: (values) => {
      console.log("Form submitted successfully:", values);
    },
  });

  const brandSelectHandler = (option) => setFieldValue('brand', option.value)
  const projectSelectHandler = (option) => setFieldValue('project', option.value)
  const colorSelectHandler = (option) => setFieldValue('color', option.value)
  const assignToSelectHandler = (option) => setFieldValue('assignTo', option.value)
  const sensorSelectHandler = (option) => setFieldValue('sensor', option.value)


  return (
    <form
      onSubmit={handleSubmit}
      className="w-full grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 lg:gap-8"
    >
      <div className="md:col-span-12 relative bg-[#f9f9f9] rounded[5px] shadow-md">
        <img
          src={imgSrc || profile}
          alt="profile"
          className="w-full sm:w-[400px] h-[300px] mx-auto object-cover rounded-md"
        />
        <UploadImage onChange={imgSrcHandler} />
        {touched.image && errors.image && (
          <p className="text-red-500">{errors.image}</p>
        )}
      </div>
      <div className="md:col-span-6">
        <Input
          label="Vehicle Name"
          placeholder="Vehicle Name"
          labelWeight="font-semibold"
          value={values.vehicleName}
          onChange={handleChange}
          onBlur={handleBlur}
          name="vehicleName"
        />
        {touched.vehicleName && errors.vehicleName && (
          <p className="text-red-500 text-xs">{errors.vehicleName}</p>
        )}
      </div>
      <div className="md:col-span-3">
        <Label label="Brand" />
        <Dropdown options={brandOptions} onSelect={brandSelectHandler} />
        {touched.brand && errors.brand && (
          <p className="text-red-500 text-xs mt-4">{errors.brand}</p>
        )}
      </div>
      <div className="md:col-span-3">
        <Input
          label="Identification Number"
          placeholder="Identification Number"
          labelWeight="font-semibold"
          value={values.identificationNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          name="identificationNumber"
        />
        {touched.identificationNumber && errors.identificationNumber && (
          <p className="text-red-500 text-xs">{errors.identificationNumber}</p>
        )}
      </div>
      <div className="md:col-span-6">
        <Input
          label="License Plate Number"
          placeholder="License Plate Number"
          labelWeight="font-semibold"
          value={values.licensePlateNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          name="licensePlateNumber"
        />
        {touched.licensePlateNumber && errors.licensePlateNumber && (
          <p className="text-red-500 text-xs">{errors.licensePlateNumber}</p>
        )}
      </div>
      <div className="md:col-span-6">
        <Label label="Project" />
        <Dropdown options={brandOptions} onSelect={projectSelectHandler} />
        {touched.project && errors.project && (
          <p className="text-red-500 text-xs mt-4">{errors.project}</p>
        )}
      </div>
      <div className="md:col-span-4">
        <Label label="Color" />
        <Dropdown options={brandOptions} onSelect={colorSelectHandler} />
        {touched.color && errors.color && (
          <p className="text-red-500 text-xs mt-4">{errors.color}</p>
        )}
      </div>
      <div className="md:col-span-4">
        <Label label="Assign To" />
        <Dropdown options={brandOptions} onSelect={assignToSelectHandler} />
        {touched.assignTo && errors.assignTo && (
          <p className="text-red-500 text-xs mt-4">{errors.assignTo}</p>
        )}
      </div>
      <div className="md:col-span-4">
        <Label label="Add Sensor" />
        <Dropdown options={brandOptions} onSelect={sensorSelectHandler} />
        {touched.sensor && errors.sensor && (
          <p className="text-red-500 text-xs mt-4">{errors.sensor}</p>
        )}
      </div>
      <div className="md:col-span-12">
        <div className="flex items-center justify-end gap-2">
          <Button
            type="button"
            text="Cancel"
            color="#111111b3"
            bg="#76767640"
            width="w-[150px]"
            onClick={onClose}
          />
          <Button
            type="submit"
            text="Add"
            width="w-[150px]"
            height="h-[50px] sm:h-[60px]"
          />
        </div>
      </div>
    </form>
  );
};

export default AddVehicle;

const UploadImage = ({ onChange }) => {
  return (
    <button
      type="button"
      className="absolute bottom-2 right-2 flex flex-col items-center gap-2 text-sm md:text-base text-primary cursor-pointer bg-white p-2 rounded-md"
    >
      <CameraIcon />
      <input
        type="file"
        className="absolute top-[-100%] left-0 inset-0 cursor-pointer opacity-0"
        onChange={onChange}
      />
    </button>
  );
};

const Label = ({ label }) => {
  return (
    <label className="text-[#000] text-base mb-2 block font-semibold">
      {label}
    </label>
  );
};
