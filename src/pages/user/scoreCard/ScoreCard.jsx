import React, { useState } from 'react'
import Title from '../../../components/shared/title/Title'
import AddIcon from '../../../assets/svgs/AddIcon'
import DeleteIcon from '../../../assets/svgs/DeleteIcon'
import TopContractors from './TopContractors'
import ViolationsSummary from './ViolationsSummary'
import AllContractors from './AllContractors'
import Modal from '../../../components/modals/Modal'
import AddNewScorecard from './AddNewScorecard'

const ScoreCard = () => {
  const [modal, setModal] = useState(false);
  const modalOpenHandler = (type) => setModal(type)
  const modalCloseHandler = () => setModal(false)
  
  return (
    <div className='bg-white rounded-[15px] p-4 lg:p-6'>
      <div className="flex items-center justify-between">
        <div>
          <Title title="Scores 2022" />
        </div>
        <div className="flex items-center gap-2">
          <div className="cursor-pointer" onClick={() => modalOpenHandler('add')}>
            <AddIcon />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-4 md:mt-8 gap-4">
        <TopContractors />
        <ViolationsSummary />
      </div>
      <div className="mt-6 md:mt-8 grid grid-cols-1">
        <AllContractors modalOpenHandler={modalOpenHandler} />
      </div>
      {modal === 'add' && (
        <Modal title='New Score Card' width='w-[300px] md:w-[700px]' onClose={modalCloseHandler}>
          <AddNewScorecard onClose={modalCloseHandler} />
        </Modal>
      )}
    </div>
  )
}

export default ScoreCard