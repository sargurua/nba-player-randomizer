import React, {Component} from 'react'

import PlayerCard from './PlayerCard'

import { Button } from 'semantic-ui-react'

export default class PlayerDisplay extends Component {

    renderDisplay = () => {
        return this.props.players.map(player => {
            return (
                <div key={player.name}>
                    <PlayerCard player={player} />
                </div>
            )
        })
    }

    render() {
        return(
            <div>
                {this.renderDisplay()}
                <Button color='orange' onClick={this.props.goBack}>Go Back</Button>
            </div>
        )
    }
}