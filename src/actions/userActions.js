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


export function searchContact(stringToFind) {
  return {
    type: 'FIND_CONTACT',
    payload: stringToFind
  };
}
