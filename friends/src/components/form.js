// IMPORT DEPENDENCIES
    import React, { Component } from 'react';
    import styled from 'styled-components'

// Material UI
    import { TextField } from '@material-ui/core';

// ** -- ** CODE START ** -- ** //
// ** -- ** CODE START ** -- ** //

const Styled_form = styled.form`
    display: flex;
    flex-grow: 1;
    justify-content: space-around;
    align-items: center;

`;

export default class Form extends Component {
    constructor(props) {
        super(props)


    }

    render() {
        return (
                <>
                <Styled_form>
                    <TextField
                        label="Name"
                        type='text'
                        // value={this.state.name}
                        // onChange={this.handleChange('name')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        label="Age"
                        type="number"
                        // value={this.state.name}
                        // onChange={this.handleChange('name')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        label="email"
                        type='text'
                        // value={this.state.name}
                        // onChange={this.handleChange('name')}
                        margin="normal"
                        variant="outlined"
                    />
                </Styled_form>

                </>
            
        )
    }
}