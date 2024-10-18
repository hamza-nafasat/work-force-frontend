/* eslint-disable react/prop-types */
import DataTable from "react-data-table-component";
import { toast } from "react-toastify";
import DeleteIcon from "../../../../assets/svgs/DeleteIcon";
import EditIcon from "../../../../assets/svgs/EditIcon";
import DateIcon from "../../../../assets/svgs/projects/DateIcon";
import ToggleButton from "../../../../components/shared/toggle/ToggleButton";
import {
  useDeleteSingleGeofenceMutation,
  useUpdateSingleGeofenceMutation,
} from "../../../../redux/api/geofenceApi";
import { confirmAlert } from "react-confirm-alert";

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
          <p className="text-sm font-medium text-[#11111199] mt-1">
            {row?.startDate?.split("T")[0]?.split("-")?.reverse().join("-")}
          </p>
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
          <p className="text-sm font-medium text-[#11111199] mt-1">
            {row?.endDate?.split("T")[0]?.split("-")?.reverse().join("-")}
          </p>
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
  {
    name: "Status",
    selector: (row) => (
      <ToggleButton
        isChecked={row?.status == "enable"}
        onToggle={() => statusToggleHandler(row?._id, row?.status)}
      />
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

const GeofencingList = ({ modalOpenHandler, refetch, data }) => {
  const [updateGeofence] = useUpdateSingleGeofenceMutation("");
  const [deleteGeofence] = useDeleteSingleGeofenceMutation("");

  const statusToggleHandler = async (fenceId, status) => {
    try {
      const response = await updateGeofence({
        geofenceId: fenceId,
        data: { status: status == "enable" ? "disable" : "enable" },
      }).unwrap();
      if (response?.success) {
        await refetch();
        toast.success(response?.message);
      }
    } catch (error) {
      console.log("Error while updating geofence status", error);
      toast.error(error?.data?.message || "Error while updating geofence status");
    }
  };

  const deleteHandler = (id) => {
    confirmAlert({
      title: "Delete Geofence",
      message: "Are you sure, you want to delete this geofence?",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            if (!id) return toast.error("Error while deleting Geofence");
            try {
              const response = await deleteGeofence({ geofenceId: id }).unwrap();
              if (response?.success) {
                await refetch();
                toast.success(response?.message);
              }
            } catch (error) {
              console.log("Error while deleting geofence", error);
              toast.error(error?.data?.message || "Error while deleting geofence");
            }
          },
        },
        {
          label: "No",
        },
      ],
    });
  };

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div className="mt-5">
        <DataTable
          columns={columns(modalOpenHandler, statusToggleHandler, deleteHandler)}
          data={data}
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
