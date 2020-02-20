import React, {Component} from 'react'

import MenuForm from './MenuForm'

import 'react-notifications/lib/notifications.css';
import {Icon, Header} from 'semantic-ui-react'
import {NotificationManager} from 'react-notifications';

export default class Menu extends Component {
    state = {
        loading: undefined,
        error: false,
        players: [],
        top250: false,
        positonRequirement: false
    }

    handleSubmit = event => {
        const selected = event.target.children[0].children[0].children[0].textContent

        if (selected === 'Number of Players') {
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
            fetch('https://shielded-plains-12735.herokuapp.com/random', reqObj)
            .then(resp => resp.json())
            .then(json => this.props.displayPlayers(json))
        }
    }

    handleTop250Change = event => {
        console.log(this.state.top250)
        this.setState({
            top250: !this.state.top250
        })
    }

    handlePosReqChange = event => {
        console.log(this.state.positonRequirement)
        this.setState({
            positonRequirement: !this.state.positonRequirement
        })
    }

    render() {
        return (
            <div>
                <MenuForm handlePosReqChange={this.handlePosReqChange} handleTop250Change={this.handleTop250Change} handleSubmit={this.handleSubmit}/>
            </div>
        )
        
    }
}