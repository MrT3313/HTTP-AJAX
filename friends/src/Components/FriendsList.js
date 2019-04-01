import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios'

export default class FriendsList extends React.Component {
    componentDidMount() {
        console.log('inside CDM')
    }   
    
    render() {
        return (
            <h2>hello from inside FriendsList</h2>
        )
    }
}