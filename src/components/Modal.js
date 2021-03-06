import React, { Component } from 'react';
import { Button, Modal, Icon, Input, Label } from 'semantic-ui-react';
import NumberFormat from 'react-number-format';


export default class MyModal extends Component {
    state = {
      firstName: '',
      lastName: '',
      number: '0',
      email: '',
      error: null,
      img: ''
    }


    handleChange = field => (event) => {
      this.setState({ [field]: event.target.value });
    }

    componentWillMount() {
      this.initialState = this.state
    }

    validationCheck = () => {
      if (this.state.firstName.trim() !== '') {
        if (this.state.number[13] !== '_' && this.state.number[1] === '0' ) {
          if (this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) !== null) {
            this.props.addContact(this.state, this.props.contactList);
            this.setState(this.initialState);
            this.props.onClose(false);
          }
          else {
            this.setState({ error: 'The email is not valid' });
          }
        }
        else {
          this.setState({ error: 'The phone number is invalid' });
        }
      }
      else {
        this.setState({error: 'Set the name of the contact' });
      }
    }

    render() {
      const { firstName, lastName, number, email, error, img } = this.state;
      return (
        <Modal size={'tiny'} open={this.props.open}
        trigger={<Button onClick={() => this.props.onOpen(true)}
        color='green'>
            <Icon name='add circle' />Add contact</Button>}>
            <Modal.Header>Add new User</Modal.Header>
            <Modal.Content image>
           <Modal.Description>
                <Input placeholder="Name" onChange={this.handleChange('firstName')} value={firstName} /> <br />
                <Input placeholder="Last name" onChange={this.handleChange('lastName')} value={lastName} /> <br />
                <NumberFormat mask="_" label='+38 '
                format="(###) ### ####" customInput={Input}
                onChange={this.handleChange('number')} value={number}
                 /> <br />
                <Input placeholder="email" onChange={this.handleChange('email')} value={email} /> <br />
                <Input placeholder="url of image" onChange={this.handleChange('img')} value={img} />
                {error != null ? <div><Label color='red'>{error}</Label></div> : null}
            </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button color="red" onClick={() => this.props.onClose(false)}>Cancel</Button>
                <Button color='green' onClick={() => this.validationCheck()} inverted>
                    Add contact
                </Button>
            </Modal.Actions>
        </Modal>
      );
    }
}
