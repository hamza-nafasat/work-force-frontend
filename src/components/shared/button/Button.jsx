import React from "react";

const Button = ({
  bg = "#0c67bc",
  width,
  height,
  radius = "4px",
  color = "#fff",
  text,
  size,
  weight,
  cursor,
  ...rest
}) => {
  const style = {
    background: bg,
    borderRadius: radius,
    color: color,
    fontWeight: weight,
  };

  return (
    <button
      style={style}
      className={`flex items-center justify-center text-nowrap px-2 ${
        width ? width : "w-full"
      } ${height ? height : "h-[50px] sm:h-[60px]"} ${
        size ? size : "text-xs sm:text-sm md:text-base"
      } ${cursor ? cursor : "pointer"}`}
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button;
