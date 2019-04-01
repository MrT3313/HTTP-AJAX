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
            <div>
                <h2>New Friend Entry Form</h2>
                <form>
                    <input type='text'      name='FirstName'    placeholder='First Name'  ></input>
                    <input type='text'      name='LastName'     placeholder='Last Name'   ></input>
                    <input type='number'    name='LastName'     placeholder='Age'         ></input>
                    <input type='text'      name='email'        placeholder='Email'       ></input>
                </form>
            </div>
        )
    }
}