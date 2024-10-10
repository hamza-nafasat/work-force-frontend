import { useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import DataTable from "react-data-table-component";
import { toast } from "react-toastify";
import AddIcon from "../../../assets/svgs/AddIcon";
import DeleteIcon from "../../../assets/svgs/DeleteIcon";
import EditIcon from "../../../assets/svgs/EditIcon";
import GlobalLoader from "../../../components/layout/GlobalLoader";
import Modal from "../../../components/modals/Modal";
import Title from "../../../components/shared/title/Title";
import ToggleButton from "../../../components/shared/toggle/ToggleButton";
import {
  useDeleteSingleSensorMutation,
  useGetAllSensorsQuery,
  useUpdateSingleSensorMutation,
} from "../../../redux/api/sensorApi";
import AddSensor from "./AddSensor";
import EditSensor from "./EditSensor";

const columns = (modalOpenHandler, statusToggleHandler, deleteHandler) => [
  {
    name: "Name",
    selector: (row) => row.name,
  },
  {
    name: "Type",
    selector: (row) => row.type,
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
    name: "Unique Id",
    selector: (row) => row.uniqueId,
  },
  {
    name: "Port",
    selector: (row) => row.port,
  },
  {
    name: "Status",
    selector: (row) => (
      <ToggleButton isChecked={row.status} onToggle={() => statusToggleHandler(row?._id, row?.status)} />
    ),
  },
  {
    name: "Action",
    selector: (row) => (
      <div className="flex items-center gap-2">
        <div className="cursor-pointer" onClick={() => modalOpenHandler("edit", row)}>
          <EditIcon />
        </div>
        <div className="cursor-pointer" onClick={() => deleteHandler(row?._id)}>
          <DeleteIcon />
        </div>
      </div>
    ),
  },
];

const Sensors = () => {
  const { data, isSuccess, isLoading, refetch } = useGetAllSensorsQuery("");
  const [updateSensor] = useUpdateSingleSensorMutation();
  const [deleteSensor] = useDeleteSingleSensorMutation();
  const [sensorsData, setSensorsData] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const modalOpenHandler = (modalType, row) => {
    setModal(modalType);
    if (row) setSelectedRow(row);
  };
  const modalCloseHandler = () => setModal(false);

  const statusToggleHandler = async (id, status) => {
    try {
      const response = await updateSensor({
        sensorId: id,
        data: { status: status ? "false" : "true" },
      }).unwrap();
      if (response?.success) {
        await refetch();
        toast.success(response?.message);
      }
    } catch (error) {
      console.log("Error while toggling sensor status", error);
      toast.error(error?.data?.message || "Error while updating sensor status");
    }
  };

  const deleteHandler = (id) => {
    confirmAlert({
      title: "Delete Sensor",
      message: "Are you sure, you want to delete the sensor?",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            if (!id) return toast.error("Error while deleting sensor");
            try {
              const response = await deleteSensor({ sensorId: id }).unwrap();
              if (response?.success) {
                await refetch();
                toast.success(response?.message);
              }
            } catch (error) {
              console.log("Error while deleting sensor", error);
              toast.error(error?.data?.message || "Error while deleting sensor");
            }
          },
        },
        {
          label: "No",
        },
      ],
    });
  };

  useEffect(() => {
    if (isSuccess) {
      const sensors = data?.data;
      setSensorsData(sensors);
    }
  }, [data, isSuccess, refetch]);

  return isLoading ? (
    <GlobalLoader />
  ) : (
    <div className="bg-white rounded-[15px] p-4 lg:p-6 h-[calc(100vh-80px)] overflow-hidden">
      <div className="flex items-center justify-between">
        <div>
          <Title title="Sensors" />
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
      <div className="mt-5">
        <DataTable
          columns={columns(modalOpenHandler, statusToggleHandler, deleteHandler)}
          data={sensorsData}
          selectableRows
          selectableRowsHighlight
          customStyles={tableStyles}
          pagination
          fixedHeader
          fixedHeaderScrollHeight="70vh"
        />
      </div>
      {modal === "add" && (
        <Modal title="Add Sensor" width="w-[300px] md:w-[650px]" onClose={modalCloseHandler}>
          <AddSensor refetch={refetch} onClose={modalCloseHandler} />
        </Modal>
      )}
      {modal === "edit" && (
        <Modal title="Edit Sensor" width="w-[300px] md:w-[650px]" onClose={modalCloseHandler}>
          <EditSensor selectedSensor={selectedRow} refetch={refetch} onClose={modalCloseHandler} />
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
