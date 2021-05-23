import { SELECT_CITY } from '../../AppConstants';

const initialState = {
  selectedCity: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CITY:
      return {
        selectedCity: action.city,
      };
    default:
      return state;
  }
};

export default reducer;
