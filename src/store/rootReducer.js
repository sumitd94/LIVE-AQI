import { combineReducers } from 'redux';

import AQI from './AQI/Reducer';
import City from './City/Reducer';

const rootReducer = combineReducers({
  AQI,
  City,
});

export default rootReducer;
