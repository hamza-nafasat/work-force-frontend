/* eslint-disable react/prop-types */
import { useFormik } from "formik";
import { toast } from "react-toastify";
import Input from "../../../components/auth/Input";
import Button from "../../../components/shared/button/Button";
import Dropdown from "../../../components/shared/dropdown/Dropdown";
import { useAddSensorMutation } from "../../../redux/api/sensorApi";
import { sensorSchema } from "../../../schemas";
import { sensorTypeOptions } from "../labours/option";

const AddSensor = ({ refetch, onClose }) => {
  const [addNewSensor, { isLoading }] = useAddSensorMutation("");
  const topicSelectHandler = (option) => setFieldValue("type", option);

  const initialValues = {
    sensorName: "",
    type: "",
    ip: "",
    port: "",
    url: "",
    uniqueId: "",
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues,
    validationSchema: sensorSchema,
    onSubmit: async (values) => {
      try {
        const data = {
          name: values.sensorName,
          type: values.type,
          ip: values.ip,
          port: values.port,
          url: values.url,
          uniqueId: values.uniqueId,
        };
        const response = await addNewSensor(data).unwrap();
        if (response?.success) {
          toast.success(response?.message);
          await refetch();
          onClose();
          // console.log("Sensor added successfully", response);
        }
      } catch (error) {
        console.log("error while adding new sensor", error);
        toast.error(error?.data?.message || "Some Error Occurred while adding new Sensor");
      }
    },
  });
  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-4">
      <div className="lg:col-span-6">
        <Input
          type="text"
          label="Name"
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
      <div className="lg:col-span-6">
        <Label label="Type" />
        <Dropdown options={sensorTypeOptions} onSelect={topicSelectHandler} />
        {errors.type && touched.type && <div className="text-red-500 text-xs mt-1">{errors.type}</div>}
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
        {errors.ip && touched.ip && <div className="text-red-500 text-xs mt-1">{errors.ip}</div>}
      </div>
      <div className="lg:col-span-6">
        <Input
          type="number"
          label="Port"
          labelWeight="font-semibold"
          placeholder="5345"
          value={values.port}
          onChange={handleChange}
          onBlur={handleBlur}
          name="port"
        />

        {errors.port && touched.port && <div className="text-red-500 text-xs mt-1">{errors.port}</div>}
      </div>
      <div className="lg:col-span-6">
        <Input
          type="text"
          label="Unique Id"
          labelWeight="font-semibold"
          placeholder="45HG-FJ43"
          value={values.uniqueId}
          onChange={handleChange}
          onBlur={handleBlur}
          name="uniqueId"
        />
        {errors.uniqueId && touched.uniqueId && (
          <div className="text-red-500 text-xs mt-1">{errors.uniqueId}</div>
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
        {errors.url && touched.url && <div className="text-red-500 text-xs mt-1">{errors.url}</div>}
      </div>

      <div className="lg:col-span-12 mt-4">
        <div className="flex items-center justify-end gap-2">
          <Button text="Cancel" color="#111111b3" bg="#76767640" width="w-[150px]" onClick={onClose} />
          <Button disabled={isLoading} type="submit" text="Add" width="w-[150px]" />
        </div>
      </div>
    </form>
  );
};

export default AddSensor;

const Label = ({ label }) => (
  <label className="text-[#000] text-sm sm:text-base mb-2 block font-semibold">{label}</label>
);
