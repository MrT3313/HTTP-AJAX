import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios'

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
    
    render() {
        return (
            // this.state.friends.map( friend => <Friend friend={friend} />    )

            this.state.friends.map ( friend => {
                return (
                    <Friend 
                        friend={friend}
                    />
                )
                
            })
        )
    }
}