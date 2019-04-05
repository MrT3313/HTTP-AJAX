// IMPORT DEPENDENCIES
    import React, { Component } from 'react';
    import styled from 'styled-components'

// Material UI
    import { TextField } from '@material-ui/core';
    import Fab from '@material-ui/core/Fab';
    import AddIcon from '@material-ui/icons/Add';



// ** -- ** CODE START ** -- ** //
// ** -- ** CODE START ** -- ** //

const Styled_formTitle = styled.div`
    display: flex;
    justify-content: center;
`;

const Styled_form = styled.form`
    display: flex;
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
                <Styled_formTitle>
                    <h2>
                        Please Enter User Information
                    </h2>
                </Styled_formTitle>
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
                    <Fab color="primary" aria-label="Add">
                        <AddIcon />
                    </Fab>
                </Styled_form>
                
                </>
            
        )
    }

}