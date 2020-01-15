import React, {Component} from 'react'

import MenuForm from './MenuForm'

import {Icon, Header} from 'semantic-ui-react'
import Alert from 'react-bootstrap/Alert'

export default class Menu extends Component {
    state = {
        error: false,
        players: []
    }

    handleSubmit = event => {
        const selected = event.target.children[0].children[0].children[0].textContent

        if (selected === 'Num of Players') {
            this.setState({
                error: true
            })
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.error 
                    ? 
                        <Alert key='alert' variant='primary'>
                            Please Choose Your Number of Players
                        </Alert>
                    : 
                        null
                }
                 <Header as='h2' icon>
                    <Icon name='basketball ball' color='orange'/>
                    NBA Player Randomizer
                </Header>
                <MenuForm handleSubmit={this.handleSubmit}/>
            </div>
        )
        
    }
}