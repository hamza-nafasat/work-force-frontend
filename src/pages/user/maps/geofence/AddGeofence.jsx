/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import Title from "../../../../components/shared/title/Title";
import { FeatureGroup, MapContainer, TileLayer } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import FenceForm from "./FenceForm";
import Button from "../../../../components/shared/button/Button";
import { toast } from "react-toastify";
import { useAddGeofenceMutation } from "../../../../redux/api/geofenceApi";
import { useGetAllProjectsQuery } from "../../../../redux/api/projectApi";
import Select from "react-select";
import GlobalLoader from "../../../../components/layout/GlobalLoader";

const AddGeofence = ({ onClose, refetch }) => {
  const [addGeofence, { isLoading }] = useAddGeofenceMutation();
  const { data, isSuccess, isLoading: isLoadingProjects } = useGetAllProjectsQuery("");
  const [projectsData, setProjectsData] = useState([]);
  const [fenceData, setFenceData] = useState({
    name: "",
    startDate: "",
    dueDate: "",
    alertType: "",
    status: "",
  });
  const mapRef = useRef(null);
  const handlePolygonCreated = (e) => {
    const { layerType, layer } = e;
    if (layerType === "polygon") {
      const polygonCoords = layer.getLatLngs()[0];
      setFenceData((prevData) => ({ ...prevData, area: polygonCoords }));
    }
  };

  const handleAddClick = async (e) => {
    e.preventDefault();
    console.log("formData:", fenceData);
    try {
      if (
        !fenceData.name ||
        !fenceData.area ||
        !fenceData.startDate ||
        !fenceData.dueDate ||
        !fenceData.alertType ||
        !fenceData.status
      ) {
        return toast.error("Please fill all the fields");
      }
      const response = await addGeofence(fenceData).unwrap();
      if (response?.success) {
        toast.success(response?.message);
        await refetch();
        onClose();
      }
    } catch (error) {
      console.log("Error while adding geofence", error);
      toast.error(error?.data?.message || "Error while adding geofence");
    }
  };

  useEffect(() => {
    if (isSuccess) {
      const projects = data?.data?.map((project) => {
        return {
          label: project?.name,
          value: project?._id,
        };
      });
      setProjectsData(projects);
    }
  }, [data, isSuccess]);

  console.log('projectsdata', projectsData);

  return (isLoadingProjects? <GlobalLoader /> :
    <form onSubmit={handleAddClick}>
      <FenceForm fenceData={fenceData} setFenceData={setFenceData} />
      <div className="mt-5">
        <Title title="Map" />
        <div className="mt-4">
          <MapContainer
            center={[25.276987, 55.296249]}
            zoom={6}
            scrollWheelZoom={false}
            style={{
              height: "480px",
              width: "100%",
              zIndex: 0,
              borderRadius: "20px",
            }}
            attributionControl={false}
            whenCreated={(mapInstance) => (mapRef.current = mapInstance)}
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
                onCreated={handlePolygonCreated}
              />
            </FeatureGroup>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
        </div>
      </div>
      <div className="mt-5">
        <Title title="Add Projects" />
        <div className="mt-4">
          <Select
            options={projectsData}
            placeholder="Select Project"
            isMulti={true}
            styles={customStyles}
          />
        </div>
      </div>
      <div className="flex items-center justify-end gap-2 md:gap-4 mt-5">
        <Button
          text="Cancel"
          color="#111111b3"
          bg="#76767640"
          width="w-[150px]"
          onClick={onClose}
        />
        <Button
          disabled={isLoading}
          text="Add"
          width="w-[150px]"
          height="h-[50px] sm:h-[60px]"
        />
      </div>
    </form>
  );
};

export default AddGeofence;

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
