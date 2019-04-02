import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios'

import NewFriendForm from './NewFriendForm'
import Friend from './Friend'


export default class FriendsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: []
        }
    }
    
    componentDidMount() {
        console.log('inside CDM')
        axios.get('http://localhost:5000/friends')
            .then( response => {
                console.log(response)
                this.setState( () => (
                    {
                        friends: response.data
                    }
                ))
            })
            .catch( error => console.log(error))
    }   
    

    //  ADD AddFriendToServer --> pass as props to New Friend Form
    AddFriendToServer = (e, NewFriend) => {
        e.preventDefault() 
        axios.post('http://localhost:5000/friends', NewFriend)
        .then( () => {
            alert('SUCCESSFUL Axios POST')
            this.setState( {
                friends: [...this.state.friends, NewFriend]
            })
        })
        .catch( () => {
            alert('complete and utter FAILURE w/ Axios POST')
        })
    }


    render() {
        return (
            // this.state.friends.map( friend => <Friend friend={friend} />    )
            <>
                <NewFriendForm 
                    AddFriendToServer={this.AddFriendToServer}
                />

                {this.state.friends.map ( friend => {
                    return (
                        <Friend 
                            friend={friend}
                        />
                    )
                    
                })}
            </>
        )
    }
}