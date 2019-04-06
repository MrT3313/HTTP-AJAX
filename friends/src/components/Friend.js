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

    }

    render() {
        return (
            <Wrapper>
                <Form />
                <ActionButton 
                    color={'secondary'}
                    aria_label="Edit"
                    type={<Icon></Icon>} 
                />
            </Wrapper>
        )
    }
}