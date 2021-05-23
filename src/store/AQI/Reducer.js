const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_AQI':
      const updatedState = { ...state };
      action.AQI.forEach(({ city, aqi }) => {
        updatedState[city] = aqi;
      });
      return updatedState;
    default:
      return state;
  }
};

export default reducer;
