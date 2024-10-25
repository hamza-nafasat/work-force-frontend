import { Fragment, useState } from "react";
import { MapContainer, Polygon, Popup, TileLayer } from "react-leaflet";
import AddIcon from "../../../../assets/svgs/AddIcon";
import DeleteIcon from "../../../../assets/svgs/DeleteIcon";
import GlobalLoader from "../../../../components/layout/GlobalLoader";
import Modal from "../../../../components/modals/Modal";
import Title from "../../../../components/shared/title/Title";
import { useGetAllGeofencesQuery } from "../../../../redux/api/geofenceApi";
import AddGeofence from "./AddGeofence";
import EditGeofence from "./EditGeofence";
import GeofencingList from "./GeofencingList";

const Geofence = () => {
  const { data, isLoading, refetch } = useGetAllGeofencesQuery();
  const [modal, setModal] = useState(false);
  const [selectedFence, setSelectedFence] = useState(null);
  const modalOpenHandler = (type, row) => {
    setModal(type);
    if (row) setSelectedFence(row);
  };
  const modalCloseHandler = () => setModal(false);

  return isLoading ? (
    <GlobalLoader />
  ) : (
    <Fragment>
      <div className="bg-white rounded-[15px] p-4 lg:p-6">
        <div>
          <Title title="Geofence" />
        </div>
        <div className="mt-5 md:mt-8">
          <MapContainer
            center={[20.5937, 78.9629]}
            zoom={1}
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
            {data?.data?.map((fence, i) => (
              <Polygon key={i} pathOptions={{ color: "red" }} positions={fence?.area}>
                <Popup>
                  <div className="text-black text-[16px]">{fence?.name}</div>
                </Popup>
              </Polygon>
            ))}
          </MapContainer>
        </div>
      </div>
      <div className="bg-white rounded-[15px] p-4 lg:p-6 mt-4 md:mt-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <Title title="All Geofencing" />
          </div>
          <div className="flex items-center gap-2">
            <div className="cursor-pointer" onClick={() => modalOpenHandler("add")}>
              <AddIcon />
            </div>
            <div className="cursor-pointer">
              <DeleteIcon />
            </div>
          </div>
        </div>
        <GeofencingList data={data?.data || []} refetch={refetch} modalOpenHandler={modalOpenHandler} />
      </div>
      {modal === "add" && (
        <Modal title="Add Geofence Detail" onClose={modalCloseHandler}>
          <AddGeofence refetch={refetch} onClose={modalCloseHandler} />
        </Modal>
      )}
      {modal === "edit" && (
        <Modal title="Edit Geofence Detail" onClose={modalCloseHandler}>
          <EditGeofence refetch={refetch} selectedFence={selectedFence} onClose={modalCloseHandler} />
        </Modal>
      )}
    </Fragment>
  );
};

export default Geofence;
