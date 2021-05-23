const initialState = {
  AQI: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_AQI':
      return {
        state,
      };
    default:
      return state;
  }
};

export default reducer;
