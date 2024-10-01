import React from 'react';
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';

const AreaChartComponent = ({ data, color }) => {
  return (
    <ResponsiveContainer width="100%" height={60}>
      <AreaChart data={data} margin={{ top: 0, right: 0, bottom: 0, left: 0}}>
        <defs>
          <linearGradient id={`colorGradient-${color}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.9} />
            <stop offset="95%" stopColor={color} stopOpacity={0.4} />
          </linearGradient>
        </defs>
        <Tooltip />
        <Area
          type="monotone"
          dataKey="value"
          stroke={color}
          fillOpacity={1}
          fill={`url(#colorGradient-${color})`}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;
