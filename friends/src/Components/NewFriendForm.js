import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios'

export default class NewFriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: []
        }
    }


    render() {
        return (
            <h2>hello from inside NewFriendForm</h2>
        )
    }
}