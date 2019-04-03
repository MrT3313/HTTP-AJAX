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
    
    margin: 0px auto 20px auto;
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


    deleteFriend = e => {
        // ONLY JOB IS TO RENDER THE PASSED DELETE FRIEND METHOD
            // alert(this.props.friend.id)
        
        this.props.DeleteFriendFromServer(
            // alert('function triggered'),
            e,
            this.props.friend.id
        )
    }
    render() {
        return (
            <>
            <FriendCard>
                <p>{this.props.friend.name}</p>
                <p>{this.props.friend.age}</p>
                <p>{this.props.friend.email}</p>

                <DeleteFriend
                    onClick={this.deleteFriend}
                >
                    <i class="fas fa-user-times"></i>
                </DeleteFriend>
            </FriendCard>
            </>
        )
    }
}
