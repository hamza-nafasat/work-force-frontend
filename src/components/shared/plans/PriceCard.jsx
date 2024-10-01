import React from "react";
import CheckIcon from "../../../assets/svgs/plans/ChecboxIcon";
import Button from "../button/Button";
import { GrCheckboxSelected } from "react-icons/gr";

const PriceCard = ({ card, onSelectPlan }) => {
  return (
    <div
      className="relative px-4 md:px-6 py-6 md:py-8 rounded-[10px] shadow-lg "
      style={{ borderTop: `5px solid ${card?.color}` }}
    >
      <h6 className="text-base md:text-xl text-[black] text-center">
        {card.title}
      </h6>
      <p className="text-base md:text-xl text-[black] text-center font-semibold mt-1">
        {card.price}
        <span className="font-normal text-sm md:text-lg">/Month</span>
      </p>
      <div className="mt-6">
        <p className="text-[black] text-[11px] md:text-xs">Features</p>
        <div className="mt-4">
          {card.featuresList.map((list, i) => (
            <div key={i} className="flex items-center gap-2 mb-3">
              <GrCheckboxSelected />
              <p className="text-[black] text-xs md:text-sm">{list}</p>
            </div>
          ))}
          <div className="mt-6 mb-8">
            <p className="text-[black] text-[11px] md:text-xs">Description</p>
            <p className="text-[black] text-xs md:text-sm mt-3">
              {card.description}
            </p>
          </div>
          <div className="absolute bottom-[-6%] left-1/2 transform -translate-x-1/2">
            <Button
              text="Subscribe Now"
              width="w-[150px] md:w-[200px]"
              bg={card.btnBg}
              onClick={() => onSelectPlan(card)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
