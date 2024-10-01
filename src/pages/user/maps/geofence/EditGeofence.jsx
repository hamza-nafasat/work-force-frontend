import React from "react";
import Title from "../../../../components/shared/title/Title";
import {
  FeatureGroup,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import AddFenceProjectList from "./AddFenceProjectList";
import FenceForm from "./FenceForm";
import Button from "../../../../components/shared/button/Button";

const EditGeofence = ({ onClose }) => {
  const position = [25.276987, 55.296249];
  return (
    <form>
      <FenceForm />
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
        <Button text="Save" width="w-[150px]" height="h-[50px] sm:h-[60px]" />
      </div>
    </form>
  );
};

export default EditGeofence;
