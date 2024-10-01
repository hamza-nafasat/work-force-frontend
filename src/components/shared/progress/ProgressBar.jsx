import React from 'react';

const ProgressBar = ({ value }) => {
  const totalSegments = 10;
  
  const getSegmentColor = (index) => {
    const segmentValue = (index + 1) * 10;

    if (segmentValue <= 30 && value >= segmentValue) {
      return 'bg-[#ff0000]';
    } else if (segmentValue <= 70 && value >= segmentValue) {
      return 'bg-[#f78d2c]';
    } else if (segmentValue <= 100 && value >= segmentValue) {
      return 'bg-[#50d450]';
    } else {
      return 'bg-[#f76f2c26]';
    }
  };

  return (
    <div>
      <div className="flex justify-between">
        <span>0</span>
        <span>{value}%</span>
        <span>100</span>
      </div>
      <div className="flex items-center space-x-1 mt-2">
        {Array.from({ length: totalSegments }, (_, i) => (
          <div
            key={i}
            className={`w-4 h-4 ${getSegmentColor(i)}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
