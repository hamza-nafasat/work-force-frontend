/* eslint-disable react/prop-types */
import { useState } from "react";
import Title from "../../../../components/shared/title/Title";
import { FeatureGroup, MapContainer, TileLayer } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import AddFenceProjectList from "./AddFenceProjectList";
import FenceForm from "./FenceForm";
import Button from "../../../../components/shared/button/Button";

const EditGeofence = ({ onClose }) => {
  const [fenceData, setFenceData] = useState(null);
  const [polygonData, setPolygonData] = useState(null);
  const position = [25.276987, 55.296249];

  const handlePolygonCreated = (e) => {
    const { layerType, layer } = e;
    if (layerType === "polygon") {
      const polygonCoords = layer.getLatLngs();
      console.log("Polygon coordinates:", polygonCoords);
      setPolygonData(polygonCoords);
    }
  };

  const handleAddClick = (e) => {
    e.preventDefault();
    console.log("formData:", fenceData);
    console.log("polygn:", polygonData);
  };

  return (
    <form>
      <FenceForm onFormChange={setFenceData} />
      <div className="mt-5">
        <Title title="Map" />
        <div className="mt-4">
          <MapContainer
            center={position}
            zoom={6}
            scrollWheelZoom={false}
            style={{
              height: "480px",
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
        <AddFenceProjectList />
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
          text="Add"
          width="w-[150px]"
          height="h-[50px] sm:h-[60px]"
          onClick={handleAddClick}
        />
      </div>
    </form>
  );
};

export default EditGeofence;
