import React from "react";
import Button from '../../../components/shared/button/Button'

const EditReport = ({onClose}) => {
  return (
    <form className="mt-4 lg:mt-8">
      <label className="text-sm md:text-lg"></label>
      <textarea
        className="bg-[#7bc0f726] p-4 text-sm md:text-base text-[#11111199] rounded-md w-full focus:outline-none"
        rows={4}
        placeholder="Please add your comment"
      ></textarea>
      <div className="flex items-center gap-4 mt-4">
        <Button text='Cancel' bg="#76767640" color="#111111b3" onClick={onClose} />
        <Button type='button' text='False Report' bg="#ff6060" />
        <Button type='submit' text='Yes' bg="#084984" />
      </div>
    </form>
  );
};

export default EditReport;
