import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios'

// Components

// CSS
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

const UpdateFriend = styled.div`
    display: flex;
    position: absolute;
        right: 10px;
        bottom: 10px;

        font-size: 25px;
`;

const DeleteFriend = styled.div`
    display: flex;
    position: absolute;
        right: 10px;
        top: 10px;
    
        font-size: 25px;
        
`;
export default class Friend extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            
        }
    }

    deleteFriend = e => {
        // ONLY JOB IS TO RENDER THE PASSED DELETE FRIEND METHOD
            // alert(this.props.friend.id)
        
        this.props.DeleteFriendFromServer(
            // alert('function triggered'),
            e,
            this.props.friend.id
        )
    }

    updateFriend = e => {
        alert('update icon clicked')
    }
    render() {
        return (
            <>
            <FriendCard
                onClick={this.modalToggle}
            >
                <p>{this.props.friend.name}</p>
                <p>{this.props.friend.age}</p>
                <p>{this.props.friend.email}</p> 

                <DeleteFriend
                    onClick={this.deleteFriend}
                >
                    <i class="fas fa-user-times"></i>
                </DeleteFriend>
                <UpdateFriend
                    onClick={this.updateFriend}
                >
                    <i class="far fa-edit"></i>    
                </UpdateFriend> 
            </FriendCard>
            </>
        )
    }
}
