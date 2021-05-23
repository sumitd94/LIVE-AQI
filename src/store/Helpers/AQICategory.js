const AQICategory = (AQI) => {
  if (AQI >= 51 && AQI <= 100) return 'Satisfactory';
  if (AQI > 100 && AQI <= 200) return 'Moderate';
  if (AQI > 200 && AQI <= 300) return 'Poor';
  if (AQI > 300 && AQI <= 400) return 'Very Poor';
  if (AQI > 400 && AQI <= 500) return 'Severe';

  return 'Good';
};

export default AQICategory;
