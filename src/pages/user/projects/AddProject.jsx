/* eslint-disable react/prop-types */
import { useFormik } from "formik"; // Import useFormik
import { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { toast } from "react-toastify";
import Input from "../../../components/auth/Input";
import GlobalLoader from "../../../components/layout/GlobalLoader";
import Button from "../../../components/shared/button/Button";
import { useGetAllLaboursQuery } from "../../../redux/api/labourApi";
import { useAddProjectMutation } from "../../../redux/api/projectApi";
import { projectSchema } from "../../../schemas";
import { MapComponent } from "./MapComponent";

const AddProject = () => {
  const navigate = useNavigate();
  const [position, setPosition] = useState([25.276987, 55.296249]);
  const [labours, setLabours] = useState([]);
  const { data, isLoading, isSuccess } = useGetAllLaboursQuery();
  const [addProject, { isLoading: isProjectAdding }] = useAddProjectMutation();

  const formik = useFormik({
    initialValues: {
      projectName: "",
      startDate: "",
      dueDate: "",
      projectDescription: "",
      location: "",
      labours: [],
      area: [],
    },
    validationSchema: projectSchema,
    onSubmit: async (values) => {
      try {
        const modifiedLabours = values?.labours?.map((labour) => labour.value);

        const data = {
          name: values.projectName,
          startDate: values.startDate,
          endDate: values.dueDate,
          description: values.projectDescription,
          location: values.location,
          area: values.area,
          labours: modifiedLabours,
          position: position,
        };

        const response = await addProject(data).unwrap();
        if (response?.success && response?.message) {
          toast.success(response?.message);
          // console.log("Project added successfully", response);
          return navigate("/user/projects");
        }
      } catch (error) {
        // console.log("error while adding new project", error);
        toast.error(error?.data?.message || "Some Error Occurred while adding new Project");
      }
    },
  });

  useEffect(() => {
    if (isSuccess) {
      const labour = data?.data.map((labour) => ({ label: labour?.fullName, value: labour?._id }));
      setLabours(labour);
    }
  }, [data, isSuccess]);

  return isLoading ? (
    <GlobalLoader />
  ) : (
    <div className="bg-white rounded-[15px] p-4 lg:p-6">
      <h2 className="text[#111111] text-lg 2xl:text-[20px] font-semibold">Add Project</h2>
      <form
        onSubmit={formik.handleSubmit}
        className="mt-4 md:mt-6 lg:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-4"
      >
        <div className="lg:col-span-4">
          <Input
            label="Project Name"
            type="text"
            height="h-[50px] md:h-[60px]"
            placeholder="Project 1"
            labelWeight="font-semibold"
            value={formik.values.projectName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="projectName"
          />
          {formik.touched.projectName && formik.errors.projectName && (
            <div className="text-red-500 text-sm">{formik.errors.projectName}</div>
          )}
        </div>
        <div className="lg:col-span-4">
          <Input
            label="Start Date"
            type="date"
            height="h-[50px] md:h-[60px]"
            placeholder="Project 1"
            labelWeight="font-semibold"
            value={formik.values.startDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="startDate"
          />
          {formik.touched.startDate && formik.errors.startDate && (
            <div className="text-red-500 text-sm">{formik.errors.startDate}</div>
          )}
        </div>
        <div className="lg:col-span-4">
          <Input
            label="Due Date"
            type="date"
            height="h-[50px] md:h-[60px]"
            placeholder="Project 1"
            labelWeight="font-semibold"
            value={formik.values.dueDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="dueDate"
          />
          {formik.touched.dueDate && formik.errors.dueDate && (
            <div className="text-red-500 text-sm">{formik.errors.dueDate}</div>
          )}
        </div>
        <div className="lg:col-span-12">
          <label className="text-[#000] text-base mb-2 block font-semibold">Project Description</label>
          <textarea
            cols={12}
            rows={5}
            className="bg-[#7bc0f726] border border-[#e2e5ff] rounded-[14px] w-full focus:outline-none p-4"
            placeholder="Project Description"
            value={formik.values.projectDescription}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="projectDescription"
          />
          {formik.touched.projectDescription && formik.errors.projectDescription && (
            <div className="text-red-500 text-sm">{formik.errors.projectDescription}</div>
          )}
        </div>
        <div className="lg:col-span-12">
          <div>
            <div className="relative">
              <Input
                label="Location"
                labelWeight="font-semibold"
                type="text"
                placeholder="Taetratech, Lakhpat Road, Lahore"
                height="h-[50px] md:h-[60px]"
                value={formik.values.location}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="location"
              />
              <div className="absolute right-2 lg:right-5 bottom-[25%]">
                <FaMapMarkerAlt />
              </div>
            </div>
            {formik.touched.location && formik.errors.location && (
              <div className="text-red-500 text-sm">{formik.errors.location}</div>
            )}
          </div>
        </div>
        <div className="lg:col-span-12">
          <label className="text-[#000] text-base mb-2 block font-semibold">Add Labours</label>
          <div>
            <MultiSelectOption users={labours} setFieldValue={formik.setFieldValue} name="labours" />
            {formik.touched.labours && formik.errors.labours && (
              <div className="text-red-500 text-sm">{formik.errors.labours}</div>
            )}
          </div>
        </div>
        <div className="lg:col-span-6">
          <Input
            label="Latitude"
            type="number"
            height="h-[50px] md:h-[60px]"
            placeholder="23.453453"
            labelWeight="font-semibold"
            value={position[0]}
            onChange={(e) => setPosition([parseFloat(e.target.value), position[1]])}
            name="Latitude"
          />
        </div>
        <div className="lg:col-span-6">
          <Input
            label="Longitude"
            type="number"
            height="h-[50px] md:h-[60px]"
            placeholder="54.453453"
            labelWeight="font-semibold"
            value={position[1]}
            onChange={(e) => setPosition([position[0], parseFloat(e.target.value)])}
            name="Longitude"
          />
        </div>
        <div className="lg:col-span-12">
          <label className="text-[#000] text-base mb-2 block font-semibold">Geo Fencing</label>
          <div className="mt-4">
            <MapComponent position={position} formik={formik} />
          </div>
        </div>
        <div className="lg:col-span-12 mt-4">
          <div className="flex items-center justify-end gap-2">
            <Button
              disabled={isProjectAdding}
              text="Cancel"
              color="#111111b3"
              bg="#76767640"
              width="w-[150px]"
            />
            <Button
              disabled={isProjectAdding}
              type="submit"
              text="Add"
              width="w-[150px]"
              height="h-[50px] sm:h-[60px]"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProject;

const MultiSelectOption = ({ users, setFieldValue, name }) => {
  return (
    <Select
      options={users}
      placeholder="Select User"
      isMulti={true}
      onChange={(selectedOptions) => {
        setFieldValue(name, selectedOptions);
      }}
      styles={customStyles}
    />
  );
};

const customStyles = {
  control: (provided) => ({
    ...provided,
    borderRadius: "0.375rem",
    padding: "0.25rem",
    display: "flex",
    alignItems: "center",
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "rgba(12, 106, 193, 0.13)",
    borderRadius: "34px",
    display: "flex",
    alignItems: "center",
    padding: "0.35rem 1rem",
    color: "rgba(17, 17, 17, 0.6)",
    position: "relative",
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: "rgba(17, 17, 17, 0.6)",
    fontSize: "14px",
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: "#fff",
    cursor: "pointer",
    width: "18px",
    height: "18px",
    borderRadius: "50%",
    top: "-4px",
    position: "absolute",
    right: "0px",
    background: "rgba(112, 112, 112, 1)",
  }),
};
