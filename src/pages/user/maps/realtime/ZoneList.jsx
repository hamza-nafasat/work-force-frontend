import React from "react";

const ZoneList = ({ labours, sensors }) => {
  return (
    <div>
      <h4 className="text-sm md:text-base font-semibold text-primary">Zone 1</h4>
      <div className="mt-4">
        <h4 className="text-sm md:text-base font-semibold">Labours</h4>
        <div className="mt-4">
          {labours.map((labour, i) => (
            <div key={i}>
              <List title="Total Labour" value={labour.totalLabours} />
              <List title="In Zone" value={labour.inZone} />
              <List title="Out of Zone" value={labour.outZone} />
            </div>
          ))}
        </div>
        <div className="mt-4">
          <h4 className="text-sm md:text-base font-semibold mb-4">Sensors</h4>
          {sensors.map((sensor, i) => (
            <div key={i}>
              <List title="Total Labour" value={sensor.totalSensors} />
              <List title="In Zone" value={sensor.activeSensors} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ZoneList;

const List = ({ title, value }) => {
  return (
    <div className="flex items-center justify-between p-4 rounded-lg bg-[#7bc0f726] mt-3">
      <p className="text-primary text-sm">{title}</p>
      <p className="text-primary text-sm">{value}</p>
    </div>
  );
};
