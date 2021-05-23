import { w3cwebsocket as W3CWebSocket } from 'websocket';
import { SOCKET_URL } from '../AppConstants';

const client = new W3CWebSocket(SOCKET_URL);

const subscribeToUpdates = (dispatch) => {
  client.onopen = () => console.log('WebSocket Client Connected');
  client.onmessage = (message) => dispatch({ type: 'UPDATE_AQI', AQI: JSON.parse(message.data) });
};

export default subscribeToUpdates;
