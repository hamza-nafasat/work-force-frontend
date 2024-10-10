import React from "react";
import Dropdown from "../../../components/shared/dropdown/Dropdown";
import Input from "../../../components/auth/Input";
import Button from "../../../components/shared/button/Button";
import { useFormik } from "formik";
import { scoreCardSchema } from "../../../schemas";
import {
  violationCategoryOptions,
  violationNameOptions,
} from "../labours/option";

const AddNewScorecard = ({ onClose }) => {
  const violationNameSelect = (option) =>
    setFieldValue("violationName", option);
  const violationCategorySelect = (option) =>
    setFieldValue("violationCategory", option);

  const initialValues = {
    violationName: "",
    violationCategory: "",
    scorePoints: "",
    details: "",
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
    validationSchema: scoreCardSchema,
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
      className="mt-4 md:mt-6 grid grid-cols-1 lg:grid-cols-12 gap-4"
    >
      <div className="lg:col-span-8">
        <Label label="Violation Name" />
        <Dropdown
          onSelect={violationNameSelect}
          options={violationNameOptions}
        />
        {errors.violationName && touched.violationName && (
          <div className="text-red-500 text-xs mt-1">
            {errors.violationName}
          </div>
        )}
      </div>
      <div className="lg:col-span-4">
        <Label label="Violation Category" />
        <Dropdown
          onSelect={violationCategorySelect}
          options={violationCategoryOptions}
        />
        {errors.violationCategory && touched.violationCategory && (
          <div className="text-red-500 text-xs mt-1">
            {errors.violationCategory}
          </div>
        )}
      </div>
      <div className="lg:col-span-12">
        <Input
          type="text"
          label="Score Points"
          placeholder="10"
          labelWeight="font-semibold"
          value={values.scorePoints}
          onChange={handleChange}
          onBlur={handleBlur}
          name="scorePoints"
        />
        {errors.scorePoints && touched.scorePoints && (
          <div className="text-red-500 text-xs mt-1 mb-2">
            {errors.scorePoints}
          </div>
        )}

        <p className="text-sm text-primary mt-[-10px]">
          Current Total Score 60
        </p>
        <p className="text-sm text-[#00000099]">
          The violation Score Total for Workforces Category Should be &lt; 100
        </p>
      </div>
      <div className="lg:col-span-12">
        <Input
          type="text"
          label="Details"
          placeholder="Add more details"
          labelWeight="font-semibold"
          value={values.details}
          onChange={handleChange}
          onBlur={handleBlur}
          name="details"
        />
        {errors.details && touched.details && (
          <div className="text-red-500 text-xs mt-1">{errors.details}</div>
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

export default AddNewScorecard;

const Label = ({ label }) => {
  return (
    <label
      className={`text-[#000] text-sm sm:text-base mb-2 block font-semibold`}
    >
      {label}
    </label>
  );
};
