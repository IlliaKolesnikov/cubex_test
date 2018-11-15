import {SET_DATA, FIND_CONTACT} from '../constants/phonebookConst';

const initialState = {
  isFetching: true,
  data: [],
  error: null,
  filteredData: []
};


function phonebook(state = initialState, action) {
  switch (action.type) {
    case SET_DATA:
      action.payload.reverse();
      return { ...state, data: action.payload, filteredData: action.payload, isFetching: false };
    case FIND_CONTACT:
      const isMatch = (result) => {
        const re = new RegExp(action.payload, 'i');
        return re.test(result.general.firstName) || re.test(result.general.lastName)
                || re.test(result.contact.phone) || re.test(result.contact.email)
      };
      const filtered = state.data.filter(isMatch);
      return {...state, filteredData: filtered };
    default:
      return state;
  }
}

export default phonebook;
