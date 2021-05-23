import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import classNames from './CityChart.module.css';

const getDataset = (AQI, city, timestamp) => {
  const dataLabels = [timestamp];
  const AQIData = [AQI];
  return {
    labels: dataLabels,
    datasets: [
      {
        label: `${city} AQI`,
        fill: true,
        data: AQIData,
        borderColor: ['rgba(42,187,155,0.9)'],
        pointBorderColor: ['rgba(42,187,155,0.9)'],
        borderWidth: 4,
      },
    ],
  };
};

const CityChart = ({ AQI, city, timestamp }) => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const chart = () => setChartData(getDataset(AQI, city, timestamp));
    chart();
  }, [AQI]);

  return (
    <div className={classNames.cityData}>
      <Line
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
                ticks: {
                  autoSkip: true,
                },
                gridLines: {
                  display: true,
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  display: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

CityChart.propTypes = {
  AQI: PropTypes.number,
  city: PropTypes.string,
  timestamp: PropTypes.number,
};

CityChart.defaultProps = {
  AQI: 0,
  city: '',
  timestamp: 0,
};

export default CityChart;
