/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditIcon from "../../../assets/svgs/EditIcon";
import Title from "../../../components/shared/title/Title";
import ToggleButton from "../../../components/shared/toggle/ToggleButton";
import { useGetSingleVehicleQuery } from "../../../redux/api/vehicleApi";
import { useGetAllSensorsQuery, useUpdateSingleSensorMutation } from "../../../redux/api/sensorApi";
import { toast } from "react-toastify";
import GlobalLoader from "../../../components/layout/GlobalLoader";

const VehicleDetail = () => {
  const { id } = useParams();
  const { refetch: sensorsRefetch } = useGetAllSensorsQuery("");
  const { data, isSuccess, refetch, isLoading } = useGetSingleVehicleQuery({ vehicleId: id });
  const [updateSensor] = useUpdateSingleSensorMutation();
  const [vehicle, setVehicle] = useState({});

  const handleToggle = async (id, status) => {
    try {
      const response = await updateSensor({
        sensorId: id,
        data: { status: status ? "false" : "true" },
      }).unwrap();
      if (response?.success) {
        await refetch();
        await sensorsRefetch();
        toast.success(response?.message);
      }
    } catch (error) {
      console.log("Error while toggling sensor status", error);
      toast.error(error?.data?.message || "Error while updating sensor status");
    }
  };

  useEffect(() => {
    if (isSuccess && data?.data) setVehicle(data?.data);
  }, [data, isSuccess]);

  return isLoading ? (
    <GlobalLoader />
  ) : (
    <div className="bg-white rounded-[15px] p-4 lg:p-6">
      {!vehicle && <p className="text-base">No vehicle data found..</p>}
      <div className="flex items-center justify-between">
        <div>
          <Title title="Vehicle Detail" />
        </div>
        <div className="cursor-pointer">
          <EditIcon />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-8">
        <div>
          <LabelAndTitle label="Vehicle Name" title={vehicle?.name} />
          <div className="mt-3">
            <LabelAndTitle label="Brand" title={vehicle?.brand} />
          </div>
          <div className="grid md:grid-cols-3 gap-5 mt-4">
            <LabelAndTitle label="Plate Number" title={vehicle?.plateNumber} />
            <LabelAndTitle label="Identification Number" title={vehicle?.idNumber} />
            <LabelAndTitle label="Color" title={vehicle?.color} />
            <LabelAndTitle label="Assign to" title={vehicle?.driver?.fullName} />
          </div>
          <div className="mt-6">
            <p className="text-sm text-[#111111cc]">Sensor</p>
            <div className="mt-2 bg-[#239cff3d] rounded-[7px] p-4 flex items-center justify-between">
              <p className="text-base font-semibold text-[#084984]"> {vehicle?.sensor?.name}</p>
              <ToggleButton
                isChecked={vehicle?.sensor?.status}
                onToggle={() => handleToggle(vehicle?.sensor?._id, vehicle?.sensor?.status)}
              />
            </div>
          </div>
        </div>
        <div>
          <img src={vehicle?.image?.url} className="w-full md:w-[70%] h-[full] object-cover m-auto" />
        </div>
      </div>
    </div>
  );
};

export default VehicleDetail;

const LabelAndTitle = ({ label, title }) => {
  return (
    <div>
      <p className="text-sm text-[#111111cc]">{label}</p>
      <h5 className="text-base md:text-md text-[#111111] font-semibold capitalize">{title}</h5>
    </div>
  );
};
