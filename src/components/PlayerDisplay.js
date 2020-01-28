import React, {Component} from 'react'

import PlayerCard from './PlayerCard'

import { Button, Grid, Card } from 'semantic-ui-react'

export default class PlayerDisplay extends Component {

    renderDisplay = () => {
        let i = 0
        
        return(
            <Card.Group itemsPerRow={5} centered>
                {this.props.players.map(player => {
                    return (
                        <div key={player.name}>
                            <PlayerCard player={player} />
                        </div>
                        
                    )
                })}
            </Card.Group>
        )
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