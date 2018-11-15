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
  if(contactToAdd.img === ''){
    contactToAdd.img = 'http://www.gigtime.co/assets/fallback/default_user_avatar_huge.jpg'
  }
  const addNew = databaseRef.child('data/'+ contactList.length);
  addNew.update({
    general: {
      firstName: contactToAdd.firstName,
      lastName: contactToAdd.lastName,
      photo: contactToAdd.img
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
