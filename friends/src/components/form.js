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
        this.state = {
            name: undefined,
            age: undefined,
            email: undefined
        }

    }


    render() {
        return (
                <>
                <Styled_form>
                    <TextField
                        id="name"
                        type='text'
                        
                        label="Name"
                        onChange={this.inputChangeHandler}
                        // value={this.state.name}
                        // onChange={this.handleChange('name')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        type="number"
                        id="name"

                        label="Age"
                        onChange={this.inputChangeHandler}
                        // value={this.state.name}
                        // onChange={this.handleChange('name')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        type='text'
                        id="name"

                        label="email"
                        onChange={this.inputChangeHandler}
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