import DataTable from "react-data-table-component";
import DeleteIcon from "../../../assets/svgs/DeleteIcon";
import Title from "../../../components/shared/title/Title";
import { useState } from "react";
import { usersData, vehiclesData } from "../../../data/data";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";

const columns = (modalOpenHandler, navigate, deleteHandler) => [
  {
    name: "Profile",
    selector: (row) => (
      <img
        src={row.profilePhoto}
        alt="profile pic"
        className="w-[44px] h-[44px] object-cover rounded-full"
      />
    ),
  },
  {
    name: "Name",
    selector: (row) => row.fullName,
  },
  {
    name: "Phone",
    selector: (row) => row.phoneNumber,
  },
  {
    name: "Vehicles",
    selector: (row) => row.vehicles,
  },
  {
    name: "Status",
    selector: (row) => row.status,
  },
  {
    name: "Subscription",
    selector: (row) => (
      <p
        className="text-sm md:text-base font-medium"
        style={{
          color:
            row.subscription === "Subscribed"
              ? "#F78D2C"
              : row.subscription === "Unsubscribed"
              ? "#FF0000"
              : "#50D450",
        }}
      >
        {row.subscription}
      </p>
    ),
  },
  {
    name: "Action",
    selector: (row) => (
      <div className="flex items-center gap-2">
        <div className="cursor-pointer" onClick={() => deleteHandler()}>
          <DeleteIcon />
        </div>
      </div>
    ),
  },
];

const UsersOnDashboard = () => {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  const modalOpenHandler = (modalType) => setModal(modalType);
  const modalCloseHandler = () => setModal(false);

  const deleteHandler = () => {
    confirmAlert({
      title: "Delete User",
      message: "Are you sure, you want to delete the user?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            console.log("project deleted");
          },
        },
        {
          label: "No",
        },
      ],
    });
  };

  return (
    <div className="bg-white rounded-[15px] p-4 lg:p-6 h-full overflow-hidden shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <Title title="Users" />
        </div>
        <div className="flex items-center gap-2"></div>
      </div>
      <div className="mt-5">
        <DataTable
          columns={columns(modalOpenHandler, navigate, deleteHandler)}
          data={usersData}
          selectableRows
          selectableRowsHighlight
          customStyles={tableStyles}
          pagination
          fixedHeader
          // fixedHeaderScrollHeight="100%"
        />
      </div>
    </div>
  );
};

export default UsersOnDashboard;

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
