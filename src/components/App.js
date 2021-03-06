import React, { Component } from 'react';
import { Menu, Grid, Search, Image } from 'semantic-ui-react';
import MyModal from './Modal';

class App extends Component {
  componentDidMount() {
    this.props.getData();
  }

  state = { value: '', open: false }

    handleSearchChange = (e, { value }) => {
      this.setState({ value });
      this.props.searchContact(value);
    }

    handleClose = (value) =>{
      this.setState({ open: value });
    }

    handleOpen = (value) => {
      this.setState({ open: value });
    }

    render() {
      const { phonebook, isFetching } = this.props;

      if (isFetching) {
        return <div> Loading </div>;
      }
      return (
      <Grid container >
        <Grid.Row columns={2}>
            <Grid.Column className="nopadding asider" width={5}>
              <Search
                    showNoResults={false}
                    className="focus"
                    placeholder="User search"
                    onSearchChange={this.handleSearchChange}
                    value={ this.state.value }
                    input={ { fluid: true }} />
                <Menu fluid vertical className="nomargin">
                  <MyModal
                    addContact={this.props.addContact}
                    onOpen={this.handleOpen}
                    contactList={phonebook.data}
                    open={this.state.open}
                    onClose={this.handleClose}/>
               { phonebook.filteredData.map((item, index) => {
                 return (
                <Menu.Item
                key={index}
                index={index}
                onClick={this.handleItemClick}
                >
                <Grid className="middle aligned">
                    <Grid.Column width={4}>
                        <Image size="small"avatar src={item.general.photo} />
                    </Grid.Column>
                    <Grid.Column className="nopadding" width={11}>
                        <span><strong>{item.general.firstName} {item.general.lastName}</strong><br/>
                        {item.contact.phone} <br/>
                        {item.contact.email}
                    </span>
                    </Grid.Column>
                    </Grid>
                </Menu.Item>);
               })
            }
          </Menu>
            </Grid.Column>
        </Grid.Row>
     </Grid>
      );
    }
}

export default App;