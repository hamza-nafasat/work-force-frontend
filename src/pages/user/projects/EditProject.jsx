import { useFormik } from "formik"; // Import useFormik
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FeatureGroup, MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import Select from "react-select";
import Input from "../../../components/auth/Input";
import Button from "../../../components/shared/button/Button";
import { projectSchema } from "../../../schemas";

const users = [
  { label: "Asif Zulfiqar", value: "asif" },
  { label: "Hamza Nafasat", value: "hamza" },
  { label: "Ahmad", value: "ahmad" },
  { label: "Moiz", value: "moiz" },
  { label: "Abdul Wahid", value: "wahid" },
];

const EditProject = ({ onClose, selectedRow }) => {
  console.log("selected row", selectedRow);
  const position = [25.276987, 55.296249];

  const formik = useFormik({
    initialValues: {
      projectName: "",
      startDate: "",
      dueDate: "",
      projectDescription: "",
      location: "",
      labours: [],
    },
    validationSchema: projectSchema,
    onSubmit: (values) => {
      // console.log(values);
    },
  });

  return (
    <div>
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
            <MultiSelectOption users={users} setFieldValue={formik.setFieldValue} name="labours" />
            {formik.touched.labours && formik.errors.labours && (
              <div className="text-red-500 text-sm">{formik.errors.labours}</div>
            )}
          </div>
        </div>
        <div className="lg:col-span-12">
          <label className="text-[#000] text-base mb-2 block font-semibold">Geo Fencing</label>
          <div className="mt-4">
            <MapContainer
              center={position}
              zoom={6}
              scrollWheelZoom={false}
              style={{
                height: "250px",
                width: "100%",
                zIndex: 0,
                borderRadius: "20px",
              }}
              attributionControl={false}
            >
              <FeatureGroup>
                <EditControl
                  position="topright"
                  draw={{
                    polygon: true,
                    rectangle: false,
                    circle: false,
                    polyline: false,
                    marker: false,
                    circlemarker: false,
                  }}
                />
              </FeatureGroup>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>Location Dubai</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
        <div className="lg:col-span-12 mt-4">
          <div className="flex items-center justify-end gap-2">
            <Button text="Cancel" color="#111111b3" bg="#76767640" width="w-[150px]" onClick={onClose} />
            <Button type="submit" text="Add" width="w-[150px]" height="h-[50px] sm:h-[60px]" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProject;

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
