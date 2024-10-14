import React from "react";
import Title from "../../../components/shared/title/Title";
import AddIcon from "../../../assets/svgs/AddIcon";
import DataTable from "react-data-table-component";
import { alertsData } from "../../../data/data";

const columns = [
  {
    name: "Alert Type",
    selector: (row) => row.alert,
  },
  {
    name: "Severity",
    selector: (row) => row.severity,
  },
  {
    name: "Notification Type",
    selector: (row) => row.notificationType,
  },
  {
    name: "Status",
    selector: (row) => row.status,
  },
  {
    name: "Actions",
    selector: (row) => row.actions,
  },
];

const Alerts = () => {
  return (
    <div className="bg-white rounded-[15px] p-4 lg:p-6">
      <div className="flex items-center justify-between">
        <div>
          <Title title="Alerts" />
        </div>
        <div className="cursor-pointer">
          <AddIcon />
        </div>
      </div>
      <div className="mt-5">
        <DataTable columns={columns} data={alertsData} customStyles={tableStyles} />
      </div>
    </div>
  );
};

export default Alerts;

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
