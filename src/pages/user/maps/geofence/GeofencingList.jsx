/* eslint-disable react/prop-types */
import { useState } from "react";
import DataTable from "react-data-table-component";
import DeleteIcon from "../../../../assets/svgs/DeleteIcon";
import EditIcon from "../../../../assets/svgs/EditIcon";
import DateIcon from "../../../../assets/svgs/projects/DateIcon";
import GlobalLoader from "../../../../components/layout/GlobalLoader";
import ToggleButton from "../../../../components/shared/toggle/ToggleButton";
import { useGetAllGeofencesQuery } from "../../../../redux/api/geofenceApi";

const columns = (modalOpenHandler, statusToggleHandler, deleteHandler) => [
  {
    name: "Name",
    selector: (row) => row.name,
    width: "15%",
  },
  {
    name: "Start Date",
    selector: (row) => (
      <div className="flex items-center gap-1">
        <DateIcon />
        <div>
          <p className="text-[12px] text-[#11111199]">Start Date:</p>
          <p className="text-sm font-medium text-[#11111199] mt-1">{row?.startDate?.split("T")[0]}</p>
        </div>
      </div>
    ),
    width: "22%",
  },
  {
    name: "Due Date",
    selector: (row) => (
      <div className="flex items-center gap-1">
        <DateIcon />
        <div>
          <p className="text-[12px] text-[#11111199]">Due Date:</p>
          <p className="text-sm font-medium text-[#11111199] mt-1">{row?.endDate?.split("T")[0]}</p>
        </div>
      </div>
    ),
    width: "22%",
  },
  {
    name: "Type",
    selector: (row) => row?.alertType,
    width: "10%",
  },
  // {
  //   name: "Project",
  //   selector: (row) => row.project,
  //   width: "10%",
  // },
  {
    name: "Status",
    selector: (row) => (
      <ToggleButton isChecked={row?.status == "enable"} onToggle={() => statusToggleHandler(row?._id)} />
    ),
  },
  {
    name: "Action",
    selector: (row) => (
      <div className="flex items-center gap-2">
        <div className="cursor-pointer" onClick={() => modalOpenHandler("edit", row)}>
          <EditIcon />
        </div>
        <div className="cursor-pointer">
          <DeleteIcon onClick={() => deleteHandler(row?._id)} />
        </div>
      </div>
    ),
  },
];

const GeofencingList = ({ modalOpenHandler }) => {
  const { data, isLoading } = useGetAllGeofencesQuery();
  const [sensorStatus, setSensorStatus] = useState({});

  const statusToggleHandler = (sensorId) => {
    setSensorStatus((prevState) => ({
      ...prevState,
      [sensorId]: !prevState[sensorId],
    }));
  };

  const deleteHandler = (sensorId) => {
    console.log(sensorId);
  };
  return isLoading ? (
    <GlobalLoader />
  ) : (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div className="mt-5">
        <DataTable
          columns={columns(modalOpenHandler, sensorStatus, statusToggleHandler, deleteHandler)}
          data={data?.data}
          selectableRows
          selectableRowsHighlight
          customStyles={tableStyles}
          pagination
          fixedHeader
          fixedHeaderScrollHeight="70vh"
        />
      </div>
    </div>
  );
};

export default GeofencingList;

const tableStyles = {
  headCells: {
    style: {
      fontSize: "16px",
      fontWeight: 600,
      color: "rgba(17, 17, 17, 1)",
    },
  },
  rows: {
    style: {
      background: "rgba(123, 192, 247, 0.15)",
      borderRadius: "6px",
      padding: "14px 0",
      margin: "10px 0",
      borderBottomWidth: "0 !important",
    },
  },
  cells: {
    style: {
      color: "rgba(17, 17, 17, 1)",
      fontSize: "14px",
    },
  },
};
