import { data, databaseRef } from '../firebase.js';

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

export function addContact(contactToAdd, contactList) {
  const addNew = databaseRef.child('data/'+ contactList.length);
  addNew.update({
    general: {
      firstName: contactToAdd.firstName,
      lastName: contactToAdd.lastName
    },
    contact: {
      email: contactToAdd.email,
      phone: contactToAdd.number
    }
  });
  return {
      type: "USER_ADDED"
  }
  console.log("USER ADDED")
}
