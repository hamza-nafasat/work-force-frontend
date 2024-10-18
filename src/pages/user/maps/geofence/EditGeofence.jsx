/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import Title from "../../../../components/shared/title/Title";
import { FeatureGroup, MapContainer, Polygon, TileLayer } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import AddFenceProjectList from "./AddFenceProjectList";
import FenceForm from "./FenceForm";
import Button from "../../../../components/shared/button/Button";
import { toast } from "react-toastify";
import { useUpdateSingleGeofenceMutation } from "../../../../redux/api/geofenceApi";

const EditGeofence = ({ onClose, refetch, selectedFence }) => {
  const [updateGeofence, { isLoading }] = useUpdateSingleGeofenceMutation();
  const [fenceData, setFenceData] = useState({
    name: selectedFence?.name,
    startDate: selectedFence?.startDate.split("T")[0],
    dueDate: selectedFence?.endDate?.split("T")[0],
    alertType: selectedFence?.alertType,
    status: selectedFence?.status,
    area: selectedFence?.area,
  });

  const mapRef = useRef(null);
  const handlePolygonCreated = (e) => {
    const { layerType, layer } = e;
    if (layerType === "polygon") {
      const polygonCoords = layer.getLatLngs()[0];
      setFenceData((prevData) => ({ ...prevData, area: polygonCoords }));
    }
  };

  const handleUpdateGeofence = async (e) => {
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
      const response = await updateGeofence({ geofenceId: selectedFence?._id, data: fenceData }).unwrap();
      if (response?.success) {
        await refetch();
        toast.success(response?.message);
        onClose();
      }
    } catch (error) {
      console.log("Error while adding geofence", error);
      toast.error(error?.data?.message || "Error while adding geofence");
    }
  };

  return (
    <form onSubmit={handleUpdateGeofence}>
      <FenceForm fenceData={fenceData} setFenceData={setFenceData} />
      <div className="mt-5">
        <Title title="Map" />
        <div className="mt-4">
          <MapContainer
            center={fenceData?.area?.[0] || [51.505, -0.09]}
            zoom={6}
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
            <Polygon positions={fenceData?.area}></Polygon>
          </MapContainer>
        </div>
      </div>
      <div className="mt-5">
        <AddFenceProjectList />
      </div>
      <div className="flex items-center justify-end gap-2 md:gap-4 mt-5">
        <Button text="Cancel" color="#111111b3" bg="#76767640" width="w-[150px]" onClick={onClose} />
        <Button disabled={isLoading} text="Add" width="w-[150px]" height="h-[50px] sm:h-[60px]" />
      </div>
    </form>
  );
};

export default EditGeofence;
