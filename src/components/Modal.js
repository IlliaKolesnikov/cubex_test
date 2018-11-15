import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import { Input } from 'semantic-ui-react';


export default class MyModal extends Component {
    state= { firstName: '', lastName: '', number: '', email: '' }

    handleChange = field => (event) => {
      this.setState({ [field]: event.target.value });
    }

    render() {
      return (
        <Modal trigger={<Button>Show Modal</Button>}>
            <Modal.Header>Add new User</Modal.Header>
            <Modal.Content image>
            <Modal.Description>
                <Input placeholder="Name" onChange={this.handleChange('firstName')} value={this.state.firstName} /> <br />
                <Input placeholder="Last name" onChange={this.handleChange('lastName')} value={this.state.lastName} /> <br />
                <Input placeholder="number" onChange={this.handleChange('number')} value={this.state.number} /> <br />
                <Input placeholder="email" onChange={this.handleChange('email')} value={this.state.email} /> <br />
            </Modal.Description>
            <Modal.Actions>
                <Button color='green' onClick={() => this.props.addContact(this.state, this.props.contactList)}inverted>
                    Add contact
                </Button>
            </Modal.Actions>
            </Modal.Content>
        </Modal>
      );
    }
}
