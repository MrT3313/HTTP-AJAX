// IMPORT DEPENDENCIES
import React, { Component } from 'react';
import styled from 'styled-components'

// ** -- ** CODE START ** -- ** //
// ** -- ** CODE START ** -- ** //

const Styled_formTitle = styled.div`
display: flex;
justify-content: center;
`;

export default class FormTitle extends Component {
constructor(props) {
    super(props)


}

render() {
    return (
            <>
            <Styled_formTitle>
                <h2>
                    Please Enter User Information
                </h2>
            </Styled_formTitle>
            </>
        
    )
}
}