import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";


const MapComponent = ({ position }) => {
  return (
    <MapContainer
      center={position}
      zoom={5}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "480px", zIndex: '1', borderRadius: '10px'}}
      attributionControl={false}
    > 
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>Sensor is here {position}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
