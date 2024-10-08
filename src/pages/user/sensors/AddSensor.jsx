import React from "react";
import Input from "../../../components/auth/Input";
import Dropdown from "../../../components/shared/dropdown/Dropdown";
import { FaMapMarkerAlt } from "react-icons/fa";
import Button from "../../../components/shared/button/Button";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { sensorSchema } from "../../../schemas";
import { portOptions, topicOptions } from "../users/option";

const AddSensor = ({ onClose }) => {
  const topicSelectHandler = (option) => setFieldValue("topic", option);
  const portSelectHandler = (option) => setFieldValue("port", option);

  const initialValues = {
    sensorName: "",
    topic: "",
    ip: "",
    port: "",
    url: "",
    location: "",
  };
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: sensorSchema,
    onSubmit: async (values) => {
      try {
        console.log("Form Values: ", values);
        onClose();
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 lg:grid-cols-12 gap-4"
    >
      <div className="lg:col-span-8">
        <Input
          type="text"
          label="Sensor Name"
          labelWeight="font-semibold"
          placeholder="Temperature Sensor 01"
          value={values.sensorName}
          onChange={handleChange}
          onBlur={handleBlur}
          name="sensorName"
        />
        {errors.sensorName && touched.sensorName && (
          <div className="text-red-500 text-xs mt-1">{errors.sensorName}</div>
        )}
      </div>
      <div className="lg:col-span-4">
        <Label label="Topic" />
        <Dropdown options={topicOptions} onSelect={topicSelectHandler} />
        {errors.topic && touched.topic && (
          <div className="text-red-500 text-xs mt-1">{errors.topic}</div>
        )}
      </div>
      <div className="lg:col-span-6">
        <Input
          type="text"
          label="IP"
          labelWeight="font-semibold"
          placeholder="192.168.1.1"
          value={values.ip}
          onChange={handleChange}
          onBlur={handleBlur}
          name="ip"
        />
        {errors.ip && touched.ip && (
          <div className="text-red-500 text-xs mt-1">{errors.ip}</div>
        )}
      </div>
      <div className="lg:col-span-6">
        <Label label="Port" />
        <Dropdown options={portOptions} onSelect={portSelectHandler} />
        {errors.port && touched.port && (
          <div className="text-red-500 text-xs mt-1">{errors.port}</div>
        )}
      </div>
      <div className="lg:col-span-6">
        <Input
          type="text"
          label="URL"
          labelWeight="font-semibold"
          placeholder="http://example.com/sensors"
          value={values.url}
          onChange={handleChange}
          onBlur={handleBlur}
          name="url"
        />
        {errors.url && touched.url && (
          <div className="text-red-500 text-xs mt-1">{errors.url}</div>
        )}
      </div>
      <div className="lg:col-span-6">
        <div className="relative">
          <Input
            label="Location"
            labelWeight="font-semibold"
            type="text"
            placeholder="Warehouse A"
            height="h-[50px] md:h-[60px]"
            value={values.location}
            onChange={handleChange}
            onBlur={handleBlur}
            name="location"
          />
          <div className="absolute right-2 lg:right-5 bottom-[25%]">
            <FaMapMarkerAlt />
          </div>
        </div>
        {errors.location && touched.location && (
          <div className="text-red-500 text-xs mt-1">{errors.location}</div>
        )}
      </div>
      <div className="lg:col-span-12 mt-4">
        <div className="flex items-center justify-end gap-2">
          <Button
            type="submit"
            text="Cancel"
            color="#111111b3"
            bg="#76767640"
            width="w-[150px]"
            onClick={onClose}
          />
          <Button text="Add" width="w-[150px]" />
        </div>
      </div>
    </form>
  );
};

export default AddSensor;

const Label = ({ label }) => (
  <label className="text-[#000] text-sm sm:text-base mb-2 block font-semibold">
    {label}
  </label>
);
