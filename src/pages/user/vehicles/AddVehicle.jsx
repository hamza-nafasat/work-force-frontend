/* eslint-disable react/prop-types */
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import profile from "../../../assets/images/vehicles/vehicle.png";
import CameraIcon from "../../../assets/svgs/vehicles/CameraIcon";
import Input from "../../../components/auth/Input";
import Button from "../../../components/shared/button/Button";
import Dropdown from "../../../components/shared/dropdown/Dropdown";
import { useGetAllSensorsQuery } from "../../../redux/api/sensorApi";
import { useAddVehicleMutation } from "../../../redux/api/vehicleApi";
import { vehicleSchema } from "../../../schemas";

const AddVehicle = ({ onClose }) => {
  const [sensorsOptions, setSensorsOptions] = useState([]);
  const { data, isSuccess } = useGetAllSensorsQuery("");
  const [imgSrc, setImgSrc] = useState("");
  const [AddVehicle, { isLoading }] = useAddVehicleMutation();

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
  const sensorSelectHandler = (option) => setFieldValue("sensor", option);

  const { values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue } = useFormik({
    initialValues: {
      vehicleName: "",
      brand: "",
      identificationNumber: "",
      plateNumber: "",
      color: "",
      image: "",
      sensor: "",
    },
    validationSchema: vehicleSchema,
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        formData.append("name", values.vehicleName);
        formData.append("idNumber", values.identificationNumber);
        formData.append("brand", values.brand);
        formData.append("color", values.color);
        formData.append("file", values.image);
        formData.append("plateNumber", values.plateNumber);
        formData.append("sensor", values.sensor);
        const response = await AddVehicle(formData).unwrap();
        if (response?.success) {
          toast.success(response.message);
        }
      } catch (error) {
        console.log("Error while adding new vehicle ", error);
        toast.error(error?.data?.message || "Some Error Ocurred");
      }
    },
  });

  useEffect(() => {
    if (isSuccess) {
      const newData = [];
      data?.data?.forEach((sensor) => {
        if (!sensor.isConnected) newData.push({ option: sensor?.name, value: sensor?._id });
      });
      setSensorsOptions(newData);
    }
  }, [data?.data, isSuccess]);

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
        {touched.image && errors.image && <p className="text-red-500">{errors.image}</p>}
      </div>
      <div className="md:col-span-4">
        <Input
          label="Vehicle Name"
          type="text"
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
      <div className="md:col-span-4">
        <Input
          label="Brand"
          type="text"
          placeholder="Company Name"
          labelWeight="font-semibold"
          value={values.brand}
          onChange={handleChange}
          onBlur={handleBlur}
          name="brand"
        />
        {touched.brand && errors.brand && <p className="text-red-500 text-xs mt-4">{errors.brand}</p>}
      </div>
      <div className="md:col-span-4">
        <Input
          label="ID Number"
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
          label="Plate Number"
          placeholder="Plate Number"
          labelWeight="font-semibold"
          value={values.plateNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          name="plateNumber"
        />
        {touched.plateNumber && errors.plateNumber && (
          <p className="text-red-500 text-xs">{errors.plateNumber}</p>
        )}
      </div>
      <div className="md:col-span-6">
        <Input
          label="Color"
          placeholder="Color"
          labelWeight="font-semibold"
          value={values.color}
          onChange={handleChange}
          onBlur={handleBlur}
          name="color"
        />
        {touched.color && errors.color && <p className="text-red-500 text-xs mt-4">{errors.color}</p>}
      </div>
      <div className="md:col-span-12">
        <Label label="Add Sensor" />
        <Dropdown options={sensorsOptions} onSelect={sensorSelectHandler} />
      </div>
      <div className="md:col-span-12">
        <div className="flex items-center justify-end gap-2">
          <Button text="Cancel" color="#111111b3" bg="#76767640" width="w-[150px]" onClick={onClose} />
          <Button
            disabled={isLoading}
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
  return <label className="text-[#000] text-base mb-2 block font-semibold">{label}</label>;
};
