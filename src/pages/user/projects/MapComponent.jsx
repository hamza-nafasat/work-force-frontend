/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { FeatureGroup, MapContainer, Marker, Polygon, Popup, TileLayer, useMap } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";

export const MapComponent = ({ position, formik, area }) => {
  // Function to handle creation of geofence
  const handleGeofenceCreated = (e) => {
    const layer = e.layer;
    const geojson = layer.toGeoJSON();
    const coordinates = geojson.geometry.coordinates;
    formik.setFieldValue("area", coordinates[0]);
  };
  return (
    <MapContainer
      center={{ lat: 51.505, lng: -0.09 }}
      zoom={13}
      scrollWheelZoom={true}
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
          onCreated={handleGeofenceCreated}
        />
      </FeatureGroup>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {area && area.length > 0 && (
        <Polygon positions={area?.map(([lat, lng]) => [lng, lat])} color="blue" />
      )}
      <LocationMarker position={position} />
    </MapContainer>
  );
};

export function LocationMarker({ position }) {
  const map = useMap();
  useEffect(() => {
    if (position) {
      map.setView(position, map.getZoom());
    }
  }, [position, map]);
  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}
