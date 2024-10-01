import React from 'react'
import Title from '../../../components/shared/title/Title'
import DeleteIcon from '../../../assets/svgs/DeleteIcon'
import DataTable from 'react-data-table-component'
import DownloadIcon from '../../../assets/svgs/DownloadIcon'
import { subscriptionHistoryData } from '../../../data/data'

const columns = [
  {
    name: 'Date',
    selector: (row) => row.date,
  },
  {
    name: 'Plan',
    selector: (row) => row.plan,
  },
  {
    name: 'Amount',
    selector: (row) => row.amount
  },
  {
    name: 'Status',
    cell: (row) => (
      row.status === 'active' ? (
        <div className="bg-[rgba(80,212,80,1)] rounded-[6px] text-sm w-[90px] h-8 grid place-items-center capitalize">{row.status}</div>
      ) : row.status === 'expired' ? (
        <div className="bg-[rgba(255,0,0,1)] rounded-[6px] text-sm w-[90px] h-8 grid place-items-center text-white capitalize">{row.status}</div>
      ) : (
        <div className="bg-[rgba(255,184,39,1)] rounded-[6px] text-sm w-[90px] h-8 grid place-items-center capitalize">{row.status}</div>
      )
    )
  },
  {
    name: 'Invoice',
    selector: () => (
      <div className='cursor-pointer'>
        <DownloadIcon />
      </div>
    )
  },
]

const Transactions = () => {
  console.log('data', subscriptionHistoryData)
  return (
    <div className='bg-white rounded-[15px] p-4 lg:p-6 h-[calc(100vh-80px)] overflow-hidden'>
      <div className="flex items-center justify-between">
        <div>
          <Title title="Subscription History" />
        </div>
        <div className="flex items-center gap-2">
          <div className="cursor-pointer">
            <DeleteIcon />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <DataTable
          columns={columns}
          data={subscriptionHistoryData}
          selectableRows
          selectableRowsHighlight
          customStyles={tableStyles}
          pagination
          fixedHeader
          fixedHeaderScrollHeight="70vh"
        />
      </div>
    </div>
  )
}

export default Transactions

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
      borderBottomWidth: '0 !important'
    },
  },
  cells: {
    style: {
      color: 'rgba(17, 17, 17, 1)',
      fontSize: '14px'
    }
  }
};