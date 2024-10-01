import React from "react";
import Title from "../../../../components/shared/title/Title";
import HeatMap from "./HeatMap";
import ZoneList from "./ZoneList";

const Realtime = () => {
  return (
    <div className="bg-white rounded-[15px] p-4 lg:p-6">
      <div>
        <Title title="Realtime" />
      </div>
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-8 drop-shadow-md">
          <HeatMap />
        </div>
        <div className="lg:col-span-4 drop-shadow-md px-4 py-4 md:py-6 bg-white rounded-[20px]">
          <ZoneList labours={labours} sensors={sensors} />
        </div>
      </div>
    </div>
  );
};

export default Realtime;

var labours = [
  {
    totalLabours : 50,
    inZone: 45,
    outZone: 4
  }
]
var sensors = [
  {
    totalSensors : 10,
    activeSensors: 35,
  }
]

