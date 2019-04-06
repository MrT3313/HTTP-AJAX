// IMPORT DEPENDENCIES
    import React, { Component } from 'react';

// Material UI
    import { Paper } from '@material-ui/core';

// COMPONENTS
    import Friend from './Friend'


// ** -- ** CODE START ** -- ** //
// ** -- ** CODE START ** -- ** //

export default class FriendsList extends Component {
    constructor(props) {
        super(props)


    }

    render() {
        return (
            <>
            <Paper>
                {this.props.friends.map( friend => {
                    return (
                        <Friend 
                            key={friend.id}
                            friend={friend}
                        />
                    )
                })}
                
            </Paper>
            </>
        )
    }

}