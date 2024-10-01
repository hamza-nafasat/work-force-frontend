import React, { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet.heat"; // Import leaflet.heat

const HeatMapLayer = ({ points }) => {
  const map = useMap();

  useEffect(() => {
    const heatLayer = L.heatLayer(points, {
      radius: 25,
      blur: 15,
      maxZoom: 10,
      gradient: {
        0.4: "rgba(98, 143, 0, 0.8)",
        0.9: "rgba(204, 104, 70, 0.8)",
      },
    }).addTo(map);
 
    return () => {
      map.removeLayer(heatLayer);
    };
  }, [map, points]);

  return null;
};

const HeatMap = () => {
  const points = [
    [37.7749, -122.4194, 450],
    [34.0522, -118.2437, 923], 
    [40.7128, -74.0060, 92399],
    [51.5074, -0.1278, 923],
    [35.6895, 139.6917, 923],
    [-33.8688, 151.2093, 923 ],
  ];

  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      style={{ height: "480px", width: "100%", borderRadius: "20px" }}
      attributionControl={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <HeatMapLayer points={points} />
    </MapContainer>
  );
};

export default HeatMap;
