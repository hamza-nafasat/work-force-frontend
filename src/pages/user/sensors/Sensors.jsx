import DataTable from "react-data-table-component";
import DeleteIcon from "../../../assets/svgs/DeleteIcon";
import AddIcon from "../../../assets/svgs/AddIcon";
import Title from "../../../components/shared/title/Title";
import Modal from "../../../components/modals/Modal";
import { useState } from "react";
import EditIcon from "../../../assets/svgs/EditIcon";
import { sensorData } from "../../../data/data";
import AddSensor from "./AddSensor";
import EditSensor from "./EditSensor";
import ToggleButton from "../../../components/shared/toggle/ToggleButton";
import { confirmAlert } from "react-confirm-alert";

const columns = (modalOpenHandler, sensorStatus, statusToggleHandler, deleteHandler) => [
  {
    name: "Sensor Name",
    selector: (row) => row.sensorName,
  },
  {
    name: "IP",
    selector: (row) => row.ip,
  },
  {
    name: "URL",
    selector: (row) => row.url,
  },
  {
    name: "Port",
    selector: (row) => row.port,
  },
  {
    name: "Topic",
    selector: (row) => row.topic,
  },
  {
    name: "Location",
    selector: (row) => row.location,
  },
  {
    name: "Status",
    selector: (row) => (
      <ToggleButton
        isChecked={sensorStatus[row._id] || false}
        onToggle={() => statusToggleHandler(row._id)}
      />
    ),
  },
  {
    name: "Action",
    selector: () => (
      <div className="flex items-center gap-2">
        <div
          className="cursor-pointer"
          onClick={() => modalOpenHandler("edit")}
        >
          <EditIcon />
        </div>
        <div className="cursor-pointer" onClick={() => deleteHandler()}>
          <DeleteIcon />
        </div>
      </div>
    ),
  },
];

const Sensors = () => {
  const [modal, setModal] = useState(false);
  const [sensorStatus, setSensorStatus] = useState({});

  const modalOpenHandler = (modalType) => setModal(modalType);
  const modalCloseHandler = () => setModal(false);
  
  const statusToggleHandler = (sensorId) => {
    setSensorStatus((prevState) => ({
      ...prevState,
      [sensorId]: !prevState[sensorId],
    }));
  };

  const deleteHandler = () => {
    confirmAlert({
      title: 'Delete Sensor',
      message: 'Are you sure, you want to delete the sensor?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            console.log("project deleted")
          }
        },
        {
          label: 'No'
        }
      ]
    })
  }
  return (
    <div className="bg-white rounded-[15px] p-4 lg:p-6 h-[calc(100vh-80px)] overflow-hidden">
      <div className="flex items-center justify-between">
        <div>
          <Title title="Sensors" />
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
      <div className="mt-5">
        <DataTable
          columns={columns(modalOpenHandler, sensorStatus, statusToggleHandler, deleteHandler)}
          data={sensorData}
          selectableRows
          selectableRowsHighlight
          customStyles={tableStyles}
          pagination
          fixedHeader
          fixedHeaderScrollHeight="70vh"
        />
      </div>
      {modal === "add" && (
        <Modal title="Add Sensor" width='w-[300px] md:w-[650px]' onClose={modalCloseHandler}>
          <AddSensor onClose={modalCloseHandler} />
        </Modal>
      )}
      {modal === "edit" && (
        <Modal title="Edit Sensor" width='w-[300px] md:w-[650px]' onClose={modalCloseHandler}>
          <EditSensor onClose={modalCloseHandler} />
        </Modal>
      )}
    </div>
  );
};

export default Sensors;

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
