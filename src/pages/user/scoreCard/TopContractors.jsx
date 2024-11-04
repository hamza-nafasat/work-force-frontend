/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import OneIcon from "../../../assets/svgs/score/OneIcon";
import ThreeIcon from "../../../assets/svgs/score/ThreeIcon";
import TwoIcon from "../../../assets/svgs/score/TwoIcon";
import PieChartComponent from "../../../components/charts/pieChart/PieChartComponent";

const icons = [OneIcon, TwoIcon, ThreeIcon];

const TopContractors = ({ topLabours }) => {
  const [topContractors, setTopContractors] = useState([]);
  console.log(topLabours);
  useEffect(() => {
    if (topLabours) {
      let topContractorsData = topLabours?.map((item, i) => {
        return {
          value: item?.scorePercent,
          color:
            i == 1 ? "rgba(43, 193, 85, 1) " : i == 2 ? "rgba(247, 141, 44, 1) " : "rgba(225, 52, 30, 1)",
        };
      });
      setTopContractors(topContractorsData);
    }
  }, [topLabours]);
  return (
    <div className="shadow-md p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h2 className="text-sm sm:text-base lg:text-lg font-semibold">Top Contractors</h2>
        {/* <CustomDropDown lists={["This Week", "This Month", "This Year"]} /> */}
      </div>
      <div className="mt-6 flex flex-col items-center justify-center">
        <PieChartComponent
          data={topContractors}
          innerRadius={60}
          outerRadius={90}
          centerIcon="%"
          layout="center-percentage"
        />
      </div>
      <div className="mt-6">
        {topLabours?.map((item, i) => (
          <DataList key={i} data={item} iconComponent={icons[i]} />
        ))}
      </div>
    </div>
  );
};

export default TopContractors;

const DataList = ({ data, iconComponent: IconComponent }) => {
  return (
    <div className="flex items-center justify-between gap-4 bg-[#50d4500d] p-4 rounded-lg mb-4">
      <div className="flex items-center gap-2">
        <IconComponent className="w-6 h-6" />
        <p className="text-sm font-semibold">{data?.fullName}</p>
      </div>
      <p className="text-base font-semibold">{data?.score}</p>
    </div>
  );
};

// const CustomDropDown = ({ lists }) => {
//   const [isOptionOpen, setIsOptionOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState("Select Week");
//   const selectHandler = (option) => {
//     setSelectedOption(option);
//     setIsOptionOpen(false);
//   };
//   const optionsHandler = () => setIsOptionOpen(!isOptionOpen);
//   return (
//     <div className="relative w-[130px] z-50">
//       <div
//         className="flex items-center justify-between text-sm text-[#00000099] gap-3 cursor-pointer border py-1 px-2 rounded-md text-nowrap"
//         onClick={() => optionsHandler()}
//       >
//         {selectedOption}
//         <div className={`transition-all duration-300 ${isOptionOpen ? "rotate-180" : "rotate-0"}`}>
//           <MdKeyboardArrowDown fontSize={18} />
//         </div>
//       </div>
//       {isOptionOpen && (
//         <ul className="flex flex-col bg-white rounded-lg shadow-md absolute top-[30px] left-0 w-full">
//           {lists.map((list, i) => (
//             <li
//               key={i}
//               className="py-1 px-2 border-b text-sm cursor-pointer text-[#00000099] hover:bg-gray-100"
//               onClick={() => selectHandler(list)}
//             >
//               {list}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };
