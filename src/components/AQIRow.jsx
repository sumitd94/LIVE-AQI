import React from 'react';
import PropTypes from 'prop-types';
import classNames from './AQIRow.module.css';

import AQIColors from '../utils/AQIColors';

const AQIRow = ({ city, qualityIndex }) => {
  const color = AQIColors(qualityIndex);
  return (
    <tr>
      <td>{city}</td>
      <td className={classNames.qualityIndex} style={{ color }}>{qualityIndex.toFixed(2)}</td>
    </tr>
  );
};

AQIRow.propTypes = {
  city: PropTypes.string.isRequired,
  qualityIndex: PropTypes.string.isRequired,
};

export default AQIRow;
