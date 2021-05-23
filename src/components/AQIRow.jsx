import React from 'react';
import PropTypes from 'prop-types';
import classNames from './AQIRow.module.css';

const AQIRow = ({ city, qualityIndex }) => {
  const color = 'red';
  return (
    <tr>
      <td>{city}</td>
      <td>{qualityIndex.toFixed(2)}</td>
    </tr>
  );
};

AQIRow.propTypes = {
  city: PropTypes.string.isRequired,
  qualityIndex: PropTypes.string.isRequired,
};

export default AQIRow;
