import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios'

export default class NewFriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input_firstName: '',
            input_lastName: '',
            input_age: '',
            input_email: ''
        }
    }

    changeHandler_firstName = e => {
        this.setState( { input_firstName: e.target.value } )
    }
    changeHandler_lastName = e => {
        this.setState( { input_lastName: e.target.value } )
    }
    changeHandler_age = e => {
        this.setState( { input_age: e.target.value } )
    }
    changeHandler_email = e => {
        this.setState( { input_email: e.target.value } )
    }
    AddFriendToServer = e => {
        axios.post('http://localhost:5000/friends', { 
            name: this.state.input_firstName + ' ' + this.state.input_lastName,
            age: this.state.input_age,
            email: this.state.input_email
        })
        .then( response => {
            alert('SUCCESSFUL Axios POST')
        })
        .catch( err => {
            alert('complete and utter FAILURE w/ Axios POST')
        })
    }

    render() {
        return (
            <div>
                <h2>New Friend Entry Form</h2>
                <form>
                    <input type='text'      
                        name='FirstName'    placeholder='First Name'  
                        onChange={this.changeHandler_firstName}
                    ></input>

                    <input type='text'      
                        name='LastName'     placeholder='Last Name' 
                        onChange={this.changeHandler_lastName}  
                    ></input>

                    <input type='number'    
                        name='LastName'     placeholder='Age'   
                        onChange={this.changeHandler_age}      
                    ></input>

                    <input type='text'      
                        name='email'        placeholder='Email'  
                        onChange={this.changeHandler_email}     
                    ></input>

                    <input type='submit' value="Enter New Friend"
                        onClick={this.AddFriendToServer}
                    ></input>
                </form>
            </div>
        )
    }
}