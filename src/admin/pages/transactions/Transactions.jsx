import React, { useState } from "react";
import Title from "../../../components/shared/title/Title";
import DataTable from "react-data-table-component";
import DownloadIcon from "../../../assets/svgs/DownloadIcon";
import { subscriptionHistoryData } from "../../../data/data";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const columns = [
  {
    name: "User",
    selector: (row) => (
      <div className="flex items-center gap-1">
        <img
          src={row.user?.userImg}
          alt="user-img"
          className="w-10 h-10 rounded-full object-cover"
        />
        <p className="text-sm">{row.user?.userName}</p>
      </div>
    ),
  },
  {
    name: "Date",
    selector: (row) => row.date,
  },
  {
    name: "Plan",
    selector: (row) => row.plan,
  },
  {
    name: "Amount",
    selector: (row) => row.amount,
  },
  {
    name: "Status",
    cell: (row) =>
      row.status === "active" ? (
        <div className="bg-[rgba(80,212,80,1)] rounded-[6px] text-sm w-[90px] h-8 grid place-items-center capitalize">
          {row.status}
        </div>
      ) : row.status === "expired" ? (
        <div className="bg-[rgba(255,0,0,1)] rounded-[6px] text-sm w-[90px] h-8 grid place-items-center text-white capitalize">
          {row.status}
        </div>
      ) : (
        <div className="bg-[rgba(255,184,39,1)] rounded-[6px] text-sm w-[90px] h-8 grid place-items-center capitalize">
          {row.status}
        </div>
      ),
  },
  {
    name: "Invoice",
    selector: () => (
      <div className="cursor-pointer">
        <DownloadIcon />
      </div>
    ),
  },
];

const Transactions = () => {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  const filteredData = subscriptionHistoryData.filter((row) => {

    const isUserSelected =
      selectedUsers.length === 0 ||
      selectedUsers.some((user) => user.value === row.user?.userName);

    const isDateSelected =
      !selectedDate || new Date(row.date).toDateString() === selectedDate.toDateString();

    return isUserSelected && isDateSelected;
  });

  const userOptions = subscriptionHistoryData.map((row) => ({
    value: row.user?.userName,
    label: row.user?.userName,
  }));

  return (
    <div className="bg-white rounded-[15px] p-4 lg:p-6 h-[calc(100vh-80px)] overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <Title title="Transactions" />
        </div>
        <div className="flex flex-wrap items-center gap-2 relative z-[9]">
          {/* User Multi-select */}
          <Select
            isMulti
            options={userOptions}
            value={selectedUsers}
            onChange={setSelectedUsers}
            styles={customStyles}
            placeholder="Filter by users"
            className="w-full md:w-[400px] focus:outline-none"
          />
          {/* Date Filter */}
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            placeholderText="Filter by date"
            className="border border-[#cccccc] rounded-md focus:outline-none py-2 px-3"
          />
        </div>
      </div>
      <div className="mt-5">
        <DataTable
          columns={columns}
          data={filteredData}
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

export default Transactions;

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


const customStyles = {
  control: (provided) => ({
    ...provided,
    borderRadius: "0.375rem",
    padding: "2px 0",
    display: "flex",
    alignItems: "center",
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "rgba(12, 106, 193, 0.13)",
    borderRadius: "50px",
    display: "flex",
    alignItems: "center",
    padding: "0px 5px",
    color: "rgba(17, 17, 17, 0.6)",
    position: "relative",
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: "rgba(17, 17, 17, 0.6)",
    fontSize: "12px",
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: "#fff",
    cursor: "pointer",
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    top: "-6px",
    position: "absolute",
    right: "-5px",
    background: "rgba(112, 112, 112, 1)",
  }),
};