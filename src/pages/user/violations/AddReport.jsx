import React, { useState } from "react";
import Button from "../../../components/shared/button/Button";
import { useFormik } from "formik";
import { violationReportSchema } from "../../../schemas"; // Updated import for the correct schema
import Dropdown from "../../../components/shared/dropdown/Dropdown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import DatePicker's CSS

const AddReport = ({ onClose }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const initialValues = {
    violationType: "",
    date: "",
    workforce: "",
    contractor: "",
    plateNumber: "",
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
    validationSchema: violationReportSchema, // Use correct schema
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
    <form className="mt-4 lg:mt-8" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        <div>
          <Dropdown
            defaultText="Select Violation Type"
            options={[
              { option: "Type one", value: "type-one" },
              { option: "Type two", value: "type-two" },
            ]}
            name="violationType"
            onSelect={(value) => setFieldValue("violationType", value)}
          />
          {errors.violationType && touched.violationType && (
            <div className="text-red-500 text-xs mt-2">{errors.violationType}</div>
          )}
        </div>
        <div>
          <Dropdown
            defaultText="Select Workforce"
            options={[
              { option: "Type one", value: "type-one" },
              { option: "Type two", value: "type-two" },
            ]}
            name="workforce"
            onSelect={(value) => setFieldValue("workforce", value)}
          />
          {errors.workforce && touched.workforce && (
            <div className="text-red-500 text-xs mt-2">{errors.workforce}</div>
          )}
        </div>
        <div>
          <Dropdown
            defaultText="Select Contractor"
            options={[
              { option: "Type one", value: "type-one" },
              { option: "Type two", value: "type-two" },
            ]}
            name="contractor"
            onSelect={(value) => setFieldValue("contractor", value)}
          />
          {errors.contractor && touched.contractor && (
            <div className="text-red-500 text-xs mt-2">{errors.contractor}</div>
          )}
        </div>
        <div>
          <Dropdown
            defaultText="Select Plate Number"
            options={[
              { option: "Type one", value: "type-one" },
              { option: "Type two", value: "type-two" },
            ]}
            name="plateNumber"
            onSelect={(value) => setFieldValue("plateNumber", value)}
          />
          {errors.plateNumber && touched.plateNumber && (
            <div className="text-red-500 text-xs mt-2">{errors.plateNumber}</div>
          )}
        </div>
        <div>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => {
              setSelectedDate(date);
              setFieldValue("date", date);
            }}
            placeholderText="Select Date"
            className="w-full bg-[#7bc0f726] border border-[#e2e5ff] outline-none rounded-[14px] h-[50px] sm:h-[60px] p-4 text-sm text-[#111111e4]"
          />
          {errors.date && touched.date && (
            <div className="text-red-500 text-xs mt-2">{errors.date}</div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-end gap-4 mt-4 lg:mt-8">
        <Button
          text="Cancel"
          bg="#76767640"
          color="#111111b3"
          onClick={onClose}
          width="w-[200px]"
          height="h-[50px]"
        />
        <Button
          type="submit"
          text="Yes"
          bg="#084984"
          width="w-[200px]"
          height="h-[50px]"
        />
      </div>
    </form>
  );
};

export default AddReport;
