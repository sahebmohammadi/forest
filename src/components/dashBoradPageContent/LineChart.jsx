import React from 'react';
import { Line } from 'react-chartjs-2';
import classes from './lineChart.module.scss';
const LineChart = () => {
  const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    maintainAspectRatio: false,
  };
  return (
    <div className={classes.container}>
      <Line width={'95%'} height={'100px'} data={data} options={options} />
    </div>
  );
};

export default LineChart;
