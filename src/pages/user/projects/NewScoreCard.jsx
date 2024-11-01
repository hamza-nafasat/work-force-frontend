/* eslint-disable react/prop-types */
import Button from "../../../components/shared/button/Button";
import StarIcon from "../../../assets/svgs/projects/StarIcon";
import { useState } from "react";

const NewScoreCard = ({ onClose }) => {
  const [isReviewSelected, setIsReviewSelected] = useState(false);

  return (
    <div className="px-0 md:px-4">
      <h4 className="text-base md:text-lg font-semibold">Labor Details</h4>
      <div className="mt-4 md:mt-5 grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-3">
          <h3 className="mb-4 text-center text-xs font-semibold">Labours ID</h3>
        </div>
        <div className="col-span-12 lg:col-span-3">
          <h3 className="mb-4 text-center text-xs font-semibold">
            Labours Name
          </h3>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <h3 className="mb-4 text-center text-xs font-semibold">Reviews</h3>
        </div>
      </div>
      <div className="h-[277px] overflow-y-scroll custom-scrollbar">
        <div className="grid grid-cols-12 gap-4 mb-2">
          <List title="011" />
          <List title="Mason" />
          <Reviews />
        </div>
      </div>
      <div className="flex items-center justify-end gap-4 mt-4">
        <Button
          text="Cancel"
          color="#111111b3"
          bg="#76767640"
          width="w-[150px]"
          height="h-[40px] sm:h-[50px]"
          onClick={onClose}
        />
        <Button
          type="submit"
          text="Update"
          width="w-[150px]"
          height="h-[40px] sm:h-[50px]"
        />
      </div>
    </div>
  );
};

export default NewScoreCard;

const Reviews = () => {
  return (
    <div className="flex items-center justify-center gap-4 bg-[#EBF3FA] rounded-lg px-3 py-1 col-span-12 lg:col-span-6">
      {[1, 2, 3, 4, 5].map((item) => (
        <button key={item}>
          <StarIcon />
        </button>
      ))}
    </div>
  );
};

const List = ({ title }) => {
  return (
    <div className="bg-[#EBF3FA] rounded-lg p-3 text-center text-xs font-medium col-span-12 lg:col-span-3">
      {title}
    </div>
  );
};
