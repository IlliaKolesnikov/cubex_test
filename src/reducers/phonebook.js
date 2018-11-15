const initialState = {
  isFetching: true,
  data: [],
  error: null,
};


function phonebook(state = initialState, action){
    switch(action.type){
        case "SET_DATA":
            return {...state, data: action.payload, isFetching: false}
        default: 
        return state
    }
}

export default phonebook