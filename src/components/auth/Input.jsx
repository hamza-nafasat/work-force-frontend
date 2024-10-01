const Input = ({ height, labelWeight, error,label, ...rest }) => {
  return (
    <div className="mb-4">
      <label
        className={`text-[#000] text-sm md:text-base mb-2 block ${
          labelWeight ? labelWeight : "font-normal"
        }`}
      >
        {label}
      </label>
      <input
        {...rest}
        className={`bg-[#7bc0f726] text-sm md:text-base text-[#111111e4] border ${
          error ? "border-red-500" : "border-[#e2e5ff]"
        } rounded-[14px] w-full ${
          height ? height : "h-[50px] sm:h-[60px]"
        } focus:outline-none px-4`}
      />
      {error && (
        <span className="text-red-500 text-sm mt-1 block">{error}</span>
      )}
    </div>
  );
};

export default Input;
