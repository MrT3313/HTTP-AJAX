
// IMPORT DEPENDENCIES
import React, { Component } from 'react';
import styled from 'styled-components'

// MATERIAL UI
import Icon from '@material-ui/core/Icon';

// Components
import Form from './Form'
import ActionButton from './ActionButton'



// ** -- ** CODE START ** -- ** //
// ** -- ** CODE START ** -- ** //

const Wrapper = styled.div`
padding: 20px 0px;

display: flex;
justify-content: space-between;
`;

export default class Friend extends Component {
constructor(props) {
    super(props)
    this.state = {
        editFormRendered: false
    }
}

render() {
    return (
        <Wrapper>
            {/* {this.state.editFormRendered === true ? */}
            {this.props.friend.age}
            <Form />
            <ActionButton 
                color={'secondary'}
                aria_label="Edit"
                type={<Icon></Icon>} 
            />
            // :

            // }
        </Wrapper>
    )
}
}







