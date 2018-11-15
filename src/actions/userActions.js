import { data } from '../firebase.js';

export function getData() {
  return (dispatch) => {
    data.on('value', (snap) => {
      dispatch({
        type: 'SET_DATA',
        payload: snap.val(),
      });
    }) 
  };
}
