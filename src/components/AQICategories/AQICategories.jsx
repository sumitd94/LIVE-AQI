import React from 'react';
import { STATIC_AQI } from '../../AppConstants';

import AQIColors from '../../store/Helpers/AQIColors';
import AQICategory from '../../store/Helpers/AQICategory';

import classNames from './AQICategories.module.css';

const AQICategories = () => (
  <div className={classNames.categoriesContainer}>
    {STATIC_AQI.map((AQI) => (
      <div className={classNames.categoryDetails}>
        <span style={{ backgroundColor: AQIColors(AQI) }} className={classNames.categoryColor} />
        {' '}
        <span>
          {AQICategory(AQI)}
        </span>
      </div>
    ))}
  </div>
);

export default AQICategories;
