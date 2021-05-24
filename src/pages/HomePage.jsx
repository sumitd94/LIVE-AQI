import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import subscribeToUpdates from '../utils/websocket-request';
import classNames from './HomePage.module.css';

import AQITable from '../components/AQITable/AQITable';
import AQICategories from '../components/AQICategories/AQICategories';
import CityChart from '../components/AQIChart/CityChart';
import ComparisonChart from '../components/AQIChart/ComparisonChart';

const HomePage = () => {
  const { selectedCity } = useSelector((state) => state.City);
  const { AQI } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    subscribeToUpdates(dispatch);
  }, []);

  return (
    <div className={classNames.container}>
      <h2>LIVE Air Quality Index(AQI)</h2>
      <AQICategories />
      <div className={classNames.AQIContainer}>
        <AQITable />
        <CityChart
          city={selectedCity}
          AQI={AQI[selectedCity]?.aqi}
          timestamp={AQI[selectedCity]?.timestamp}
        />
      </div>
      <div className={classNames.chartBarContainer}>
        <ComparisonChart AQI={AQI} />
      </div>
    </div>
  );
};

export default HomePage;
