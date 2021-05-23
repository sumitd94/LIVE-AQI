import React from 'react';
import { useSelector } from 'react-redux';
import classNames from './AQITable.module.css';

import AQIRow from './AQIRow';

const renderRows = (AQI, cityNames) => cityNames.map((city) => (
  <AQIRow key={city} city={city} qualityIndex={AQI[city]} />
));

const AQITable = () => {
  const { AQI } = useSelector((state) => state);
  const cityNames = Object.keys(AQI);

  return (
    <div className={classNames.tableContainer}>
      <table>
        <thead>
          <tr>
            <th>City</th>
            <th>Current AQI</th>
          </tr>
        </thead>
        <tbody>
          {renderRows(AQI, cityNames)}
        </tbody>
      </table>
    </div>
  );
};

export default AQITable;
