import React, { useState } from "react";
import Title from "../../../../components/shared/title/Title";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";
import AddIcon from "../../../../assets/svgs/AddIcon";
import DeleteIcon from "../../../../assets/svgs/DeleteIcon";
import GeofencingList from "./GeofencingList";
import Modal from "../../../../components/modals/Modal";
import AddGeofence from "./AddGeofence";
import EditGeofence from "./EditGeofence";

const Geofence = () => {
  const [modal, setModal] = useState(false);
  const position = [25.276987, 55.296249];

  const modalOpenHandler = type => setModal(type);
  const modalCloseHandler = () => setModal(false);

  return (
    <>
      <div className="bg-white rounded-[15px] p-4 lg:p-6">
        <div>
          <Title title="Geofence" />
        </div>
        <div className="mt-5 md:mt-8"> 
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
      <div className="bg-white rounded-[15px] p-4 lg:p-6 mt-4 md:mt-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <Title title="All Geofencing" />
          </div>
          <div className="flex items-center gap-2">
            <div
              className="cursor-pointer"
              onClick={() => modalOpenHandler("add")}
            >
              <AddIcon />
            </div>
            <div className="cursor-pointer">
              <DeleteIcon />
            </div> 
          </div>
        </div>
        <GeofencingList modalOpenHandler={modalOpenHandler} />
      </div>
      {modal === 'add' && (
        <Modal title='Add Geofence Detail' onClose={modalCloseHandler}>
          <AddGeofence onClose={modalCloseHandler} />
        </Modal>
      )}
      {modal === 'edit' && (
        <Modal title='Edit Geofence Detail' onClose={modalCloseHandler}>
          <EditGeofence onClose={modalCloseHandler} />
        </Modal>
      )}
    </>
  );
};

export default Geofence;
