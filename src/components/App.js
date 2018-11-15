import React, { Component } from 'react';
import { Menu, Grid, Search, Image } from 'semantic-ui-react';
import { speed }  from '../firebase.js';

class App extends Component {

  componentDidMount(){
  }
  render() {
    return (
      <Grid container >
        <Grid.Row columns={2}>
            <Grid.Column className="nopadding asider" width={4}>
              <Search  
                    showNoResults={false}
                    className="focus"
                    placeholder="User search"
                    input={ { fluid: true}} />
                <Menu fluid vertical className="nomargin">
               
          </Menu> 
            </Grid.Column>
            <Grid.Column className="fullviewport nopadding" stretched width={12}>
           
            </Grid.Column>
        </Grid.Row>
     </Grid>
    );
  }
}

export default App;