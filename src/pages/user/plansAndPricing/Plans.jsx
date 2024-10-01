import React, { useState } from "react";
import Title from "../../../components/shared/title/Title";
import Button from "../../../components/shared/button/Button";
import PricePlans from "../../../components/shared/plans/PricePlans";
import Review from "../../../components/shared/plans/Review";

const Plans = () => {
  const [isTabActive, setIsActiveTab] = useState("price");
  const [selectedPlan, setSelectedPlan] = useState(null);

  const tabsHandler = (tab) => {
    setIsActiveTab(tab);
  };
  return (
    <div className="bg-white rounded-[15px] p-4 lg:p-6">
      <div>
        <Title title="Subscription Plan" />
      </div>
      <div className="mt-4 md:mt-8">
        <div className="flex item-center gap-4">
          <Button
            onClick={() => tabsHandler("price")}
            type="button"
            width="w-[80px] md:w-[148px]"
            height="h-[40px] md:h-[60px]"
            text="Price Plans"
            bg={isTabActive === "price" ? "#0c67bc" : "#c1c1c126"}
            color={isTabActive === "price" ? "#fff" : "#000"}
          />
          <Button
            disabled={!selectedPlan}
            onClick={() => tabsHandler("review")}
            type="button"
            width="w-[80px] md:w-[148px]"
            height="h-[40px] md:h-[60px]"
            text="Review"
            bg={isTabActive === "review" ? "#0c67bc" : "#c1c1c126"}
            color={isTabActive === "review" ? "#fff" : "#000"}
            cursor={selectedPlan ? 'cursor-pointer':'cursor-not-allowed'}
          />
        </div>
        <div className="mt-4 md:mt-6 pb-7">
          {isTabActive === "price" && <PricePlans onSelectPlan={(plan) => {setSelectedPlan(plan); tabsHandler('review')}} />}
          {isTabActive === "review" && <Review plan={selectedPlan} />}
        </div>
      </div>
    </div>
  );
};

export default Plans;
