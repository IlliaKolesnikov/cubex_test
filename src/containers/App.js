import { connect } from 'react-redux';
import App from '../components/App';
import { getData, searchContact, addContact } from '../actions/userActions';


function mapStateToProps(state) {
  return {
    phonebook: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getData: () => dispatch(getData()),
    searchContact: stringToFind => dispatch(searchContact(stringToFind)),
    addContact: (contactToAdd, contactList) => dispatch(addContact(contactToAdd, contactList))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)