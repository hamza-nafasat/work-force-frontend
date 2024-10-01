import DataTable from 'react-data-table-component'
import DeleteIcon from '../../../assets/svgs/DeleteIcon'
import AddIcon from '../../../assets/svgs/AddIcon'
import Title from '../../../components/shared/title/Title'
import Modal from '../../../components/modals/Modal'
import { useState } from 'react'
import { IoEye } from "react-icons/io5";
import EditIcon from '../../../assets/svgs/EditIcon'
import { usersViolationData } from '../../../data/data'
import EditReport from './EditReport'
import { confirmAlert } from 'react-confirm-alert'

const columns = (modalOpenHandler, deleteHandler) => [
  {
    name: 'Violoation Type',
    selector: (row) => row.violationType
  },
  {
    name: 'Date/Time',
    selector: (row) => row.dateTime
  },
  {
    name: 'Workforce',
    selector: (row) => row.workforce
  },
  { 
    name: 'Contractor',
    selector: (row) => row.contractor
  },
  {
    name: 'Nationality',
    selector: (row) => row.nationality
  },
  {
    name: 'Plate Number',
    selector: (row) => row.plateNumber
  },
  {
    name: 'Action',
    selector: (row) => (
      <div className="flex items-center gap-2">
        <div className="cursor-pointer" onClick={() => modalOpenHandler('edit')}>
          <EditIcon />
        </div>
        <div className="cursor-pointer" onClick={() => deleteHandler()}>
          <DeleteIcon />
        </div>
      </div>
    )
  },
]

const vehiclesViolations = () => {
  const [modal, setModal] = useState(false);
  
  const modalOpenHandler = (modalType) => setModal(modalType)
  const modalCloseHandler = () => setModal(false)

  const deleteHandler = () => {
    confirmAlert({
      title: 'Delete Violation',
      message: 'Are you sure, you want to delete the violation?',
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
    <div className='bg-white rounded-[15px] p-4 lg:p-6 h-[calc(100vh-80px)] overflow-hidden'>
      <div className="flex items-center justify-between">
        <div>
          <Title title="Users Violations" />
        </div>
        <div className="flex items-center gap-2">
          <div className="cursor-pointer" onClick={() => modalOpenHandler('add')}>
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
          data={usersViolationData}
          selectableRows
          selectableRowsHighlight
          customStyles={tableStyles}
          pagination
          fixedHeader
          fixedHeaderScrollHeight="70vh"
        />
      </div>
      {modal === 'edit' && (
        <Modal title='Violation Report' width='w-[300px] md:w-[600px]' onClose={modalCloseHandler}>
          <EditReport onClose={modalCloseHandler} />
        </Modal>
      )}
    </div>
  )
}

export default vehiclesViolations

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
