import React from 'react';
import { LineChart, Line } from 'recharts';

export default function ({ data }) {
  return (
    <LineChart width={300} height={100} data={data}>
      <Line type="monotone" dataKey="ping" stroke="#39ff14" strokeWidth={2} dot={false} />
    </LineChart>
  )
}
