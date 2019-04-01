import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios'

export default class FriendsList extends React.Component {
    componentDidMount() {
        console.log('inside CDM')
        axios.get('http://localhost:5000/friends')
            .then( response => console.log(response))
            .catch( error => console.log(error))
    }   
    
    render() {
        return (
            <h2>hello from inside FriendsList</h2>
        )
    }
}