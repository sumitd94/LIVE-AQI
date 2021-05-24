import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import classNames from './CityChart.module.css';

import AQIColors from '../../store/Helpers/AQIColors';
import AQICategory from '../../store/Helpers/AQICategory';

const getDataset = (AQI, city, timestamp) => {
  const date = new Date(+timestamp);
  const label = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

  const dataLabels = [label];
  const AQIData = [AQI];
  return {
    labels: dataLabels,
    datasets: [
      {
        label: `${city} AQI`,
        fill: true,
        data: AQIData,
        borderColor: [AQIColors(AQI)],
        pointBorderColor: [AQIColors(AQI)],
        borderWidth: 4,
      },
    ],
  };
};

const CityChart = ({ AQI, city, timestamp }) => (
  <div>
    <h2 className={classNames.cityDetails}>
      {AQI > 0 ? (
        <>
          {city}
          :
          {' '}
          {AQI.toFixed(2)}
          {' '}
          <span style={{ color: AQIColors(AQI) }}>
            {AQICategory(AQI)}
          </span>
        </>

      ) : (
        <span>Click on a city to view the details on graph</span>
      )}
    </h2>
    <div className={classNames.cityData}>
      <Line
        width={500}
        height={200}
        data={getDataset(AQI, city, timestamp)}
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
  </div>
);
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
