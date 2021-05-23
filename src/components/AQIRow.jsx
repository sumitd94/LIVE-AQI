import React from 'react';
import PropTypes from 'prop-types';
import classNames from './AQIRow.module.css';

import AQIColors from '../store/Helpers/AQIColors';
import TimeWas from '../store/Helpers/TimeWas';

const AQIRow = ({ city, qualityIndex, timestamp }) => {
  const color = AQIColors(qualityIndex);
  return (
    <tr>
      <td>{city}</td>
      <td className={classNames.qualityIndex} style={{ color }}>{qualityIndex.toFixed(2)}</td>
      <td>{TimeWas(timestamp)}</td>
    </tr>
  );
};

AQIRow.propTypes = {
  city: PropTypes.string.isRequired,
  qualityIndex: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
};

export default AQIRow;
