import React from "react";

const LoaderIcon = () => {
  const svgStyle = {
    animation: 'bounce 1s infinite',
  };

  const keyframes = `
    @keyframes bounce {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <svg
        style={svgStyle}
        width="97"
        height="104"
        viewBox="0 0 97 104"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 55.092V48.0157H7.16861C7.16861 48.0157 7.44351 17.1469 33.3689 9.32912L40.4318 27.041L36.8158 4.51979C36.8158 4.51979 47.3255 -5.64973 59.2097 4.51979L55.3188 27.1258L63.1218 9.5198C63.1218 9.5198 88.9415 15.6851 89.4913 47.6555H96.1101V55.092H0Z"
          fill="url(#paint0_linear_10_6)"
        />
        <path
          d="M0.993652 64.3145H12.8567C12.8567 64.3145 20.3848 87.7467 42.1233 90.734V64.3145H54.1767V90.734C54.1767 90.734 75.1115 88.8272 83.7181 64.3145H95.412C95.412 64.3145 92.515 90.734 62.4237 100.819C32.3325 110.904 4.63082 87.7467 0.993652 64.3145Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear_10_6"
            x1="48.055"
            y1="0"
            x2="48.055"
            y2="55.092"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E75D50" />
            <stop offset="1" stopColor="#FF412F" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default LoaderIcon;
