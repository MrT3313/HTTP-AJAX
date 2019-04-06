// IMPORT DEPENDENCIES
    import React, { Component } from 'react';
    import styled from 'styled-components'

// MATERIAL UI
    import Icon from '@material-ui/core/Icon';
    import AddIcon from '@material-ui/icons/Add';

// Components
    import Form from './Form'
    import ActionButton from './ActionButton'



// ** -- ** CODE START ** -- ** //
// ** -- ** CODE START ** -- ** //

const FriendTop = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`;
const FriendBottom = styled.div`
    display: flex;

`;

export default class Friend extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editFormRendered: false
        }
    }

    toggleEditForm = () => {
        console.log('clicked')
        this.setState( prevState => {
            return {editFormRendered: !prevState.editFormRendered}
        })
    }

    render() {
        return (
            <>
                {
                this.state.editFormRendered === true ?
                    <>
                    <FriendTop>
                        <h2>{this.props.friend.name}</h2>
                        <h2>{this.props.friend.age}</h2>
                        <h2>{this.props.friend.email}</h2>
                    </FriendTop>
                    <FriendBottom>
                        <Form />
                        <ActionButton 
                            color={'primary'}
                            aria_label="Edit"
                            type={<AddIcon onClick={this.toggleEditForm} /> } 
                        />
                    </FriendBottom>
                    </>
                :
                    <>
                    <FriendTop>
                        <h2>{this.props.friend.name}</h2>
                        <h2>{this.props.friend.age}</h2>
                        <h2>{this.props.friend.email}</h2>
                    </FriendTop>
                    <FriendBottom>
                        <ActionButton 
                            color={'secondary'}
                            aria_label="Edit"
                            type={<Icon onClick={this.toggleEditForm} ></Icon>} 
                        />
                    </FriendBottom>
                    </>
                }
            </>
        )
    }
}