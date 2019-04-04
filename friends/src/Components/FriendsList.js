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
    GetUpdateID = (e, id) => {
        e.preventDefault()
        
        this.setState({
            updateId: id
        })

    }
    GetUpdateINFO = (updateInfo) => {
        // e.preventDefault()
        
        this.setState({
            updateInfo: updateInfo
        })
    }

    UpdateFriendOnServer = (e, id, updatedInfo) => {
        e.preventDefault()
        axios
            .put(`http://localhost:5000/friends/${id}`, updatedInfo)
            .then( res => {
                console.log( res )
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
                    UpdateFriendOnServer={this.UpdateFriendOnServer}
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