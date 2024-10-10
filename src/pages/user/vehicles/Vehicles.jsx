import DataTable from "react-data-table-component";
import DeleteIcon from "../../../assets/svgs/DeleteIcon";
import AddIcon from "../../../assets/svgs/AddIcon";
import Title from "../../../components/shared/title/Title";
import Modal from "../../../components/modals/Modal";
import { useEffect, useState } from "react";
import AddVehicle from "./AddVehicle";
import { IoEye } from "react-icons/io5";
import EditIcon from "../../../assets/svgs/EditIcon";
import EditVehicle from "./EditVehicle";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import { useDeleteSingleVehicleMutation, useGetAllVehiclesQuery } from "../../../redux/api/vehicleApi";
import { toast } from "react-toastify";

const columns = (modalOpenHandler, navigate, deleteHandler) => [
  {
    name: "Name",
    selector: (row) => row.name,
  },
  {
    name: "Brand",
    selector: (row) => row.brand,
  },
  {
    name: "Plate No",
    selector: (row) => row.plateNumber,
  },
  {
    name: "ID Number",
    selector: (row) => row.idNumber,
  },
  {
    name: "Driver",
    selector: (row) => row?.driver?.fullName || "Not Assigned",
  },
  {
    name: "Color",
    selector: (row) => row.color,
  },
  {
    name: "Action",
    selector: (row) => (
      <div className="flex items-center gap-2">
        <div className="cursor-pointer" onClick={() => navigate(`/user/vehicles/${row?._id}`)}>
          <IoEye fontSize={18} style={{ marginTop: "4px" }} />
        </div>
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

const Vehicles = () => {
  const [vehiclesData, setVehiclesData] = useState([]);
  const { data, isSuccess, refetch } = useGetAllVehiclesQuery("");
  const [modal, setModal] = useState(false);
  const [deleteVehicle] = useDeleteSingleVehicleMutation();
  const [selectedTruck, setSelectedTruck] = useState({});
  const navigate = useNavigate();

  const modalOpenHandler = (modalType, row) => {
    setModal(modalType);
    if (row) setSelectedTruck(row);
  };
  const modalCloseHandler = () => setModal(false);

  const deleteHandler = (id) => {
    confirmAlert({
      title: "Delete Vehicle",
      message: "Are you sure, you want to delete the vehicle?",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            try {
              const response = await deleteVehicle({ vehicleId: id }).unwrap();
              if (response?.success && response?.message) {
                await refetch();
                toast.success(response?.message);
              }
            } catch (error) {
              console.log("error while deleting vehicle", error);
              toast.error(error?.data?.message || "Some Error Occurred while deleting vehicle");
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
      setVehiclesData(data?.data);
    }
  }, [data, isSuccess]);

  return (
    <div className="bg-white rounded-[15px] p-4 lg:p-6 h-[calc(100vh-80px)] overflow-hidden">
      <div className="flex items-center justify-between">
        <div>
          <Title title="Vehicles" />
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
          columns={columns(modalOpenHandler, navigate, deleteHandler)}
          data={vehiclesData}
          selectableRows
          selectableRowsHighlight
          customStyles={tableStyles}
          pagination
          fixedHeader
          fixedHeaderScrollHeight="70vh"
        />
      </div>
      {modal === "add" && (
        <Modal title="Add Vehicle" onClose={modalCloseHandler}>
          <AddVehicle vehicleRefetch={refetch} onClose={modalCloseHandler} />
        </Modal>
      )}
      {modal === "edit" && (
        <Modal title="Edit Vehicle" onClose={modalCloseHandler}>
          <EditVehicle vehicleRefetch={refetch} selectedTruck={selectedTruck} onClose={modalCloseHandler} />
        </Modal>
      )}
    </div>
  );
};

export default Vehicles;

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
