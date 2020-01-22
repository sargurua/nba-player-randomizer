import React, {Component} from 'react'

import MenuForm from './MenuForm'

import 'react-notifications/lib/notifications.css';
import {Icon, Header} from 'semantic-ui-react'
import {NotificationContainer, NotificationManager} from 'react-notifications';

export default class Menu extends Component {
    state = {
        loading: undefined,
        error: false,
        players: []
    }

    handleSubmit = event => {
        const selected = event.target.children[0].children[0].children[0].textContent

        if (selected === 'Num of Players') {
            NotificationManager.info('Choose your Number of Players', 'Hold up', 3000, null, null)
        }
        else {
            const reqObj = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    num_players: parseInt(selected)
                })
            }
            console.log(reqObj, parseInt(selected))
            fetch('http://localhost:3000/random', reqObj)
            .then(resp => resp.json())
            .then(json => console.log(json))
        }
    }

    render() {
        return (
            <div>
                <NotificationContainer/>
                <Header as='h2' icon>
                    <Icon name='basketball ball' color='orange'/>
                    NBA Player Randomizer
                </Header>
                <MenuForm handleSubmit={this.handleSubmit}/>
            </div>
        )
        
    }
}