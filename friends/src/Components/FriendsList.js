import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios'

// Components
    import NewFriendForm from './NewFriendForm'
    import Friend from './Friend'

// CSS 
    import styled from 'styled-components'

// -- ** -- ** -- ** //
// Start Code
// -- ** -- ** -- ** //

// Styled Component
    const FriendList_Wrapper = styled.div`
        display: flex
        flex-wrap: wrap;
        
        margin-top: 20px;
    `;
export default class FriendsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: [],

            updateId: '',
            updateInfo: {}
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

    // POST //
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
    // PUT //
    GetUpdateID = async (e, id) => {
        e.preventDefault()

        // Is there information entered to update
        if (
            Object.keys(this.state.updateInfo).length === 0
        ) {
            alert(
            'INCOMPLETE UPDATE:' + '\n' + '\n'    
            + 'Steps to update a friend:' + '\n' 
            + 'Step 1: Add information to entry form' + '\n'
            + 'Step 2: Click the edit button (bottom right of friend card) for the friend you want to update'
            )
        } else {
            alert('proceed with update')
            // setState w/ passed ID
            await this.setState({
                updateId: id
            })

            // CALL UPDATE METHOD
            this.UpdateFriendOnServer()
        }
    }
    GetUpdateINFO = (updateInfo) => {
        // e.preventDefault()
        
        this.setState({
            updateInfo: updateInfo
        })
    }

    UpdateFriendOnServer() {
            const id = this.state.updateId
                console.log(id)
            const updateInfo = this.state.updateInfo
                console.log(updateInfo)

            axios
            .put(`http://localhost:5000/friends/${id}`, {
                age: updateInfo.input_age,
                name: updateInfo.input_firstName + ' ' + updateInfo.input_lastName,
                email: updateInfo.input_email,

            })
            .then( res => {
                console.log( res )
                this.setState( {
                    friends: [...res.data]
                })
            })
            .catch( err => {
                console.log( err )
            })
    }

    // DELETE //
    DeleteFriendFromServer = (e, id) => {
        e.preventDefault()

        axios.delete(`http://localhost:5000/friends/${id}`)
            .then( res => {
                console.log(res)
                this.setState( {
                    friends: [...res.data]
                })
            })
            .catch( err => {
                console.log('error')
            })
    }


    render() {
        return (
            // this.state.friends.map( friend => <Friend friend={friend} />    )
            <>
                <NewFriendForm 
                    AddFriendToServer={this.AddFriendToServer}
                    GetUpdateINFO={this.GetUpdateINFO}
                />

                <FriendList_Wrapper>
                    {this.state.friends.map ( friend => {
                        return (
                            <Friend 
                                friend={friend}
                                DeleteFriendFromServer={this.DeleteFriendFromServer}
                                GetUpdateID={this.GetUpdateID}
                            />
                        )
                        
                    })}
                </FriendList_Wrapper>
            </>
        )
    }
}