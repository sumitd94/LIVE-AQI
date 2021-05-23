import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import subscribeToUpdates from './utils/websocket-request';
import classNames from './App.module.css';

import AQITable from './components/AQITable';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    subscribeToUpdates(dispatch);
  }, []);

  return (
    <div className={classNames.App}>
      <h2>LIVE AQI</h2>
      <div className={classNames.AQIContainer}>
        <AQITable />
      </div>
    </div>
  );
}

export default App;
