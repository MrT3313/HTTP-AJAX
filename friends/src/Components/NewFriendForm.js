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
    // CHANGE HANDLERS 
        changeHandler_firstName = e => {
            this.setState( { input_firstName: e.target.value } )
            this.updateFriendInfo()
        }
        changeHandler_lastName = e => {
            this.setState( { input_lastName: e.target.value } )
            this.updateFriendInfo()
        }
        changeHandler_age = e => {
            this.setState( { input_age: e.target.value } )
            this.updateFriendInfo()
        }
        changeHandler_email = e => {
            this.setState( { input_email: e.target.value } )
            this.updateFriendInfo()
        }

    // POST //
    newFriendSubmit = e => {
        this.props.AddFriendToServer(
            e,
            { 
                name: this.state.input_firstName + ' ' + this.state.input_lastName,
                age: this.state.input_age,
                email: this.state.input_email
            }
        )
    }

    // PUT //
    updateFriendInfo() {
        this.props.GetUpdateINFO(
            this.state
        )
    }

    render() {
        return (
            <div>
                <h2>Entry Form</h2>
                <form onSubmit={this.newFriendSubmit}>
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

                    <button>Submit New Friend</button>
                </form>
            </div>
        )
    }
}