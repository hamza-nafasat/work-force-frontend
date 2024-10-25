/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import ChevronIcon from "../../../assets/svgs/vehicles/ChevronIcon";

const Dropdown = ({ options, defaultText = "Select", onSelect, label, labelWeight }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const dropdownRef = useRef(null);

  const selectHandler = (option) => {
    setSelected(option);
    setIsOpen(false);
    if (onSelect) onSelect(option.value);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {label && (
        <label
          className={`text-[#000] text-sm md:text-base mb-2 block ${
            labelWeight ? labelWeight : "font-normal"
          }`}
        >
          {label}
        </label>
      )}
      <button
        type="button"
        className="w-full bg-[#7bc0f726] border border-[#e2e5ff] flex items-center justify-between rounded-[14px] h-[50px] sm:h-[60px] p-4 text-sm md:text-base text-[#111111e4]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm">{selected ? selected.option : defaultText}</span>
        <div className={`transition-all duration-300 ${isOpen ? "rotate-0" : "rotate-180"}`}>
          <ChevronIcon />
        </div>
      </button>
      {isOpen && (
        <ul className="absolute z-10 w-full h-fit rounded-md shadow-md cursor-pointer border-y mt-1">
          {options.map((option) => (
            <li
              className="py-2 px-4 border-b bg-white hover:bg-[hsl(208,100%,95%)]"
              key={option.value}
              onClick={() => selectHandler(option)}
            >
              {option.option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
