// IMPORT DEPENDENCIES
  import React, { Component } from 'react';
  
// Material UI
  import { Paper } from '@material-ui/core';
  import AddIcon from '@material-ui/icons/Add';

// Styled Components
  import styled from 'styled-components'
  
// AXIOS
  import axios from 'axios'

// Components
  import FormTitle from './components/FormTitle'
  import Form from './components/Form'
  import FriendsList from './components/FriendsList'
  import ActionButton from './components/ActionButton'

// ** -- ** CODE START ** -- ** //
// ** -- ** CODE START ** -- ** //


const TopDiv = styled.div`
  background: #C1C3C4;
  padding: 20px 0px;

  div {
    display: flex;
    justify-content: space-between;
  }
`;

const BottomDiv = styled.div`
`;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      friends: []
    }
  }
  
  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then( res => {
        this.setState({
          friends: [...res.data]
        })
      })
      .catch( err => {
        alert('TOTAL FAILURE -- ABANDON SHIP!!!!')
      })
  }
  render() {
    return (
      <div className="App">
        <Paper elevation={1}>
          <TopDiv>
            <FormTitle />
            <div>
              <Form />
              <ActionButton 
                  color={'primary'}
                  // aria_label="-"
                  type={<AddIcon /> } 
              />
            </div>
          </TopDiv>
          <BottomDiv>
            <FriendsList friends={this.state.friends}/>
          </BottomDiv>
        </Paper>
      </div>
    );
  }
}

export default App;
