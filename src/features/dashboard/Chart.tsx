import React from 'react';
import { Line } from 'react-chartjs-2';
import { useHistoricalData } from '../hooks/useCovidData';

const Chart: React.FC = () => {
  const { data } = useHistoricalData();

  const chartData = {
    labels: Object.keys(data?.cases || {}),
    datasets: [
      {
        label: 'Cases',
        data: Object.values(data?.cases || {}),
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default Chart;
