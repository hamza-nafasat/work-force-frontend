/* eslint-disable react/prop-types */
import Button from "../../../components/shared/button/Button";
import StarIcon from "../../../assets/svgs/projects/StarIcon";
import { useEffect, useState } from "react";
import { useAddReviewToProjectMutation } from "../../../redux/api/projectApi";
import { toast } from "react-toastify";

const NewScoreCard = ({ onClose, labours, projectId, refetch }) => {
  const [projectLabourReviews, setProjectLabourReviews] = useState({});
  const [addReviewsInProject, { isLoading }] = useAddReviewToProjectMutation();

  const addReviewsHandler = async () => {
    console.log("projectLabourReviews", projectLabourReviews);
    // only add those reviews in modifiedReviews which have value >
    const modifiedReviews = [];
    for (const [labourId, review] of Object.entries(projectLabourReviews)) {
      if (review > 0) modifiedReviews.push({ [labourId]: review });
    }
    console.log("ProjectModifiedReviews", modifiedReviews);
    try {
      if (!modifiedReviews?.length) return toast.error("Please give atleast one review");
      if (!projectId) return toast.error("Project Id not found");
      const response = await addReviewsInProject({
        projectId,
        reviews: modifiedReviews,
      }).unwrap();
      if (response?.success && response?.message) {
        await refetch();
        toast.success(response?.message);
        onClose();
      }
    } catch (error) {
      console.log("Error while adding reviews", error);
      toast.error(error?.data?.message || "Error while adding reviews");
    }
  };

  useEffect(() => {
    if (labours) {
      const labourReviews = {};
      labours?.forEach((labour) => (labourReviews[labour?._id] = 0));
      setProjectLabourReviews(labourReviews);
    }
  }, [labours]);
  return (
    <div className="px-0 md:px-4">
      <h4 className="text-base md:text-lg font-semibold">Labor Details</h4>
      <div className="mt-4 md:mt-5 grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-3">
          <h3 className="mb-4 text-center text-xs font-semibold">Labours ID</h3>
        </div>
        <div className="col-span-12 lg:col-span-3">
          <h3 className="mb-4 text-center text-xs font-semibold">Labours Name</h3>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <h3 className="mb-4 text-center text-xs font-semibold">Reviews</h3>
        </div>
      </div>
      <div className="h-[277px] overflow-y-scroll custom-scrollbar">
        {labours?.map((labour) => (
          <div key={labour?._id} className="grid grid-cols-12 gap-4 mb-2">
            <List title={labour?._id} />
            <List title={labour?.fullName} />
            <Reviews
              projectLabourReviews={projectLabourReviews}
              setProjectLabourReviews={setProjectLabourReviews}
              labourId={labour?._id}
            />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-end gap-4 mt-4">
        <Button
          disabled={isLoading}
          text="Cancel"
          color="#111111b3"
          bg="#76767640"
          width="w-[150px]"
          height="h-[40px] sm:h-[50px]"
          onClick={onClose}
        />
        <Button onClick={addReviewsHandler} text="Update" width="w-[150px]" height="h-[40px] sm:h-[50px]" />
      </div>
    </div>
  );
};

export default NewScoreCard;

const Reviews = ({ projectLabourReviews, setProjectLabourReviews, labourId }) => {
  const reviewSelectHandler = (index) => {
    setProjectLabourReviews((prev) => ({ ...prev, [labourId]: index }));
  };
  return (
    <div className="flex items-center justify-center gap-4 bg-[#EBF3FA] rounded-lg px-3 py-1 col-span-12 lg:col-span-6">
      {[1, 2, 3, 4, 5].map((item) => (
        <button
          key={item}
          onClick={() => reviewSelectHandler(item)}
          className={`${item <= projectLabourReviews[labourId] ? "opacity-100" : "opacity-50"}`}
        >
          <StarIcon />
        </button>
      ))}
    </div>
  );
};

const List = ({ title }) => {
  return (
    <div className="bg-[#EBF3FA] rounded-lg p-3 capitalize text-center text-xs font-medium col-span-12 lg:col-span-3">
      {title}
    </div>
  );
};
