import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import subscribeToUpdates from './utils/websocket-request';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    subscribeToUpdates(dispatch);
  }, []);

  return (
    <div className="App">
      LIVE AQI
    </div>
  );
}

export default App;
