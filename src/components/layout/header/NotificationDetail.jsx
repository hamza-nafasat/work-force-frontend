import React from "react";
import DataTable from "react-data-table-component";
import { notificationsData } from "../../../data/data";
import DeleteIcon from "../../../assets/svgs/DeleteIcon";
import { confirmAlert } from "react-confirm-alert";

const columns = (deleteHandler) => [
  {
    name: "Notification Type",
    selector: (row) => (
      <p className="capitalize">
        {row?.notificationType}
      </p>
    ),
  },
  {
    name: "Notification Message",
    selector: (row) => row?.notificationMessage,
  },
  {
    name: "Created At",
    selector: (row) => row?.createdAt,
  },
  {
    name: "Operation",
    selector: (row) => (
      <div className="cursor-pointer" onClick={() => deleteHandler(row?.id)}>
        <DeleteIcon />
      </div>
    ),
  },
];

const NotificationDetail = () => {
  const deleteHandler = (id) => {
    confirmAlert({
      title: 'Delete Notification',
      message: 'Are you sure, you want to delete the notification',
      buttons: [
        {
          label: 'Yes',
          onClick: () => console.log(id)
        },
        {
          label: 'No'
        }
      ]
    })
  }
  return (
    <div className="bg-white rounded-[15px] p-4 lg:p-6">
      <DataTable
        data={notificationsData}
        columns={columns(deleteHandler)}
        selectableRows
        selectableRowsHighlight
        customStyles={tableStyles}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="70vh"
      />
    </div>
  );
};

export default NotificationDetail;

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
