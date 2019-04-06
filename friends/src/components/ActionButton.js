// IMPORT DEPENDENCIES
    import React, { Component } from 'react';
    import styled from 'styled-components'

// MATERIAL UI
    import Fab from '@material-ui/core/Fab';

// ** -- ** CODE START ** -- ** //
// ** -- ** CODE START ** -- ** //

const Styled_actionButton = styled.div`
    display: flex;

    align-items: center;

    width: 85px;    
`;

export default class ActionButton extends Component {
constructor(props) {
    super(props)

}

render() {
    return (
            <>
            <Styled_actionButton>
                <Fab color={this.props.color} aria-label={this.props.aria_label} >
                    {this.props.type}
                </Fab>
            </Styled_actionButton>
            </>
        
    )
}
}