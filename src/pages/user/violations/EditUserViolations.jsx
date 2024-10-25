/* eslint-disable react/prop-types */
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import GlobalLoader from "../../../components/layout/GlobalLoader";
import Button from "../../../components/shared/button/Button";
import Dropdown from "../../../components/shared/dropdown/Dropdown";
import { useGetAllLaboursQuery } from "../../../redux/api/labourApi";
import { useGetAllProjectsQuery } from "../../../redux/api/projectApi";
import { useUpdateSingleUserViolationMutation } from "../../../redux/api/userViolationApi";
import { violationReportSchema } from "../../../schemas";

const EditUserViolations = ({ onClose, selectedRow, refetch }) => {
  const [updateViolation, { isLoading }] = useUpdateSingleUserViolationMutation();
  const [laboursOptions, setLaboursOptions] = useState([]);
  const [projectsOptions, setProjectsOptions] = useState([]);
  const { data: projects, isLoading: isProjectsLoading } = useGetAllProjectsQuery();
  const { data: labours, isLoading: isLaboursLoading } = useGetAllLaboursQuery("");

  const initialValues = {
    violationType: selectedRow?.violationType,
    workforce: selectedRow?.project?.name,
    labour: selectedRow?.labour?.fullName,
  };

  const { values, errors, touched, handleSubmit, setFieldValue } = useFormik({
    initialValues,
    validationSchema: violationReportSchema,
    onSubmit: async (values) => {
      try {
        const data = {};
        if (values.violationType != selectedRow?.violationType) data.violationType = values.violationType;
        if (values.workforce != selectedRow?.project?.name) data.project = values.workforce;
        if (values.labour != selectedRow?.labour?.fullName) data.labour = values.labour;
        const response = await updateViolation({ userViolationId: selectedRow?._id, data: data }).unwrap();
        if (response?.success && response?.message) {
          await refetch();
          toast.success(response?.message);
        }
        onClose();
      } catch (error) {
        console.log("error while adding violation", error);
        toast.error(error?.data?.message || "Some Error Occurred while adding violation");
      }
    },
  });

  useEffect(() => {
    if (projects) {
      const projectOptions = projects?.data?.map((project) => ({
        option: project?.name,
        value: project?._id,
      }));
      setProjectsOptions(projectOptions);
    }
  }, [projects]);

  useEffect(() => {
    if (labours) {
      const labourOptions = labours?.data?.map((labour) => ({
        option: labour?.fullName,
        value: labour?._id,
      }));
      setLaboursOptions(labourOptions);
    }
  }, [labours]);

  return isLaboursLoading || isProjectsLoading ? (
    <GlobalLoader />
  ) : (
    <form className="mt-4 lg:mt-8" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        <div>
          <Dropdown
            defaultText={values.violationType || "Select Violation Type"}
            options={[
              { option: "Forget-Badge", value: "forget-badge" },
              { option: "Forget-Helmet", value: "forget-helmet" },
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
            defaultText={values.workforce || "Select Workforce"}
            options={projectsOptions}
            name="workforce"
            onSelect={(value) => setFieldValue("workforce", value)}
          />
          {errors.workforce && touched.workforce && (
            <div className="text-red-500 text-xs mt-2">{errors.workforce}</div>
          )}
        </div>
        <div>
          <Dropdown
            defaultText={values.labour || "Select Labour"}
            options={laboursOptions}
            name="labour"
            onSelect={(value) => setFieldValue("labour", value)}
          />
          {errors.labour && touched.labour && (
            <div className="text-red-500 text-xs mt-2">{errors.labour}</div>
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
          disabled={isLoading}
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

export default EditUserViolations;
