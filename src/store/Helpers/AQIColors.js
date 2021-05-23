const AQIColors = (AQI) => {
  if (AQI >= 51 && AQI <= 100) return '#4caf50';
  if (AQI >= 101 && AQI <= 200) return '#ffc107';
  if (AQI >= 201 && AQI <= 300) return 'darkorange';
  if (AQI >= 301 && AQI <= 400) return '#f90000a6';
  if (AQI >= 401 && AQI <= 500) return '#ff0000';

  return '#0de616';
};

export default AQIColors;
