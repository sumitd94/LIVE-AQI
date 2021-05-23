import { combineReducers } from 'redux';

import AQI from './AQI/Reducer';

const rootReducer = combineReducers({
  AQI,
});

export default rootReducer;
