import { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import DataTable from "react-data-table-component";
import AddIcon from "../../../assets/svgs/AddIcon";
import DeleteIcon from "../../../assets/svgs/DeleteIcon";
import EditIcon from "../../../assets/svgs/EditIcon";
import Modal from "../../../components/modals/Modal";
import Title from "../../../components/shared/title/Title";
import {
  useDeleteSingleVehicleViolationMutation,
  useGetAllVehicleViolationsQuery,
} from "../../../redux/api/vehicleViolationApi";
import AddVehicleViolation from "./AddVehicleViolations";
import EditVehicleViolation from "./EditVehicleViolations";
import GlobalLoader from "../../../components/layout/GlobalLoader";
import { toast } from "react-toastify";

const columns = (modalOpenHandler, deleteHandler) => [
  {
    name: "Violation Type",
    selector: (row) => row?.violationType,
  },
  {
    name: "Date/Time",
    selector: (row) => row?.createdAt?.split("T")[0] + "/" + row?.createdAt?.split("T")[1].split(".")[0],
  },
  {
    name: "Workforce",
    selector: (row) => row?.project?.name,
  },
  {
    name: "Vehicle Brand",
    selector: (row) => row?.vehicle?.brand,
  },
  {
    name: "Vehicle IdNumber",
    selector: (row) => row?.vehicle?.idNumber,
  },
  {
    name: "Plate Number",
    selector: (row) => row?.vehicle?.plateNumber,
  },
  {
    name: "Action",
    selector: (row) => (
      <div className="flex items-center gap-2">
        <div className="cursor-pointer" onClick={() => modalOpenHandler("edit", row)}>
          <EditIcon />
        </div>
        <div className="cursor-pointer" onClick={() => deleteHandler(row._id)}>
          <DeleteIcon />
        </div>
      </div>
    ),
  },
];

const VehiclesViolations = () => {
  const [modal, setModal] = useState(false);
  const { data, isLoading, refetch } = useGetAllVehicleViolationsQuery();
  const [deleteViolation] = useDeleteSingleVehicleViolationMutation();
  const [selectedRow, setSelectedRow] = useState(null);
  const modalOpenHandler = (modalType, row) => {
    setModal(modalType);
    if (row) setSelectedRow(row);
  };
  const modalCloseHandler = () => setModal(false);

  const deleteHandler = (id) => {
    confirmAlert({
      title: "Delete Violation",
      message: "Are you sure, you want to delete the violation?",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            try {
              const response = await deleteViolation({ VehicleViolationId: id }).unwrap();
              if (response?.success && response?.message) {
                await refetch();
                toast.success(response?.message);
              }
            } catch (error) {
              console.log("error while deleting violation", error);
              toast.error(error?.data?.message || "Some Error Occurred while deleting violation");
            }
          },
        },
        {
          label: "No",
        },
      ],
    });
  };

  return isLoading ? (
    <GlobalLoader />
  ) : (
    <div className="bg-white rounded-[15px] p-4 lg:p-6 h-[calc(100vh-80px)] overflow-hidden">
      <div className="flex items-center justify-between">
        <div>
          <Title title="Vehicles Violations" />
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
          columns={columns(modalOpenHandler, deleteHandler)}
          data={data?.data || []}
          selectableRows
          selectableRowsHighlight
          customStyles={tableStyles}
          pagination
          fixedHeader
          fixedHeaderScrollHeight="70vh"
        />
      </div>
      {modal === "edit" && (
        <Modal title="Edit Vehicle Violations" width="w-[300px] md:w-[600px]" onClose={modalCloseHandler}>
          <EditVehicleViolation selectedRow={selectedRow} refetch={refetch} onClose={modalCloseHandler} />
        </Modal>
      )}
      {modal === "add" && (
        <Modal title="Add Vehicle Violations" width="w-[300px] md:w-[600px]" onClose={modalCloseHandler}>
          <AddVehicleViolation refetch={refetch} onClose={modalCloseHandler} />
        </Modal>
      )}
    </div>
  );
};

export default VehiclesViolations;

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
