import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios'


export default class Friend extends React.Component {


    render() {
        return (
            <div>
                <p>{this.props.friend.name}</p>
                <p>{this.props.friend.age}</p>
                <p>{this.props.friend.email}</p>
            </div>
        )
    }
}
