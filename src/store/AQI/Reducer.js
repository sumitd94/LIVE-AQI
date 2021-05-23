/* eslint-disable no-case-declarations */
const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_AQI':
      const updatedState = { ...state };
      action.AQI.forEach(({ city, aqi }) => {
        updatedState[city] = {
          aqi,
          timestamp: +new Date(),
        };
      });
      return updatedState;
    default:
      return state;
  }
};

export default reducer;
