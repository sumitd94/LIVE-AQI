import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import classNames from './ComparisonChart.module.css';

const getDataset = (AQI) => {
  const citNames = Object.keys(AQI);
  const AQIData = [];

  citNames.map((city) => (AQIData.push(AQI[city].aqi)));

  return {
    labels: citNames,
    datasets: [
      {
        label: 'AQI',
        data: AQIData,
        borderColor: ['rgba(42,187,155,0.9)'],
        pointBorderColor: ['rgba(42,187,155,0.9)'],
        borderWidth: 4,
        backgroundColor: ['orange'],
      },
    ],
  };
};

const ComparisonChart = ({ AQI }) => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const chart = () => setChartData(getDataset(AQI));
    chart();
  }, [AQI]);

  return (
    <div className={classNames.cityData}>
      <Bar
        width={500}
        height={300}
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          title: { text: 'AQI Monitoring', display: true },
          scales: {
            yAxes: [
              {
                gridLines: {
                  display: false,
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  display: false,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

ComparisonChart.propTypes = {
  AQI: PropTypes.number,
};

ComparisonChart.defaultProps = {
  AQI: 0,
};

export default ComparisonChart;
