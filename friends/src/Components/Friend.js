import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios'

import styled from 'styled-components'

// -- ** -- ** -- ** //
// Start Code
// -- ** -- ** -- ** //

const FriendCard = styled.div`
    display: flex;
    flex-direction: column; 
    
    position: relative;
    
    width: 300px
    border: 1px solid black;
`;

const DeleteFriend = styled.div`
    display: flex;
    position: absolute;
        right: 10px;
        top: 10px;
    
        font-size: 25px;
        
`;



export default class Friend extends React.Component {


    render() {
        return (
            <>
            <FriendCard>
                <p>{this.props.friend.name}</p>
                <p>{this.props.friend.age}</p>
                <p>{this.props.friend.email}</p>

                <DeleteFriend>
                    <i class="fas fa-user-times"></i>
                </DeleteFriend>
            </FriendCard>
            </>
        )
    }
}
