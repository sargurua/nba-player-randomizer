import React, {Component} from 'react'

import PlayerCard from './PlayerCard'

import { fadeIn } from 'react-animations'
import { Button, Grid, Card } from 'semantic-ui-react'

export default class PlayerDisplay extends Component {

    renderDisplay = () => {
        const style = {
            fadeIn: {
                animation: 'x 3s'
            }
        }
        
        return(
            <Card.Group style={style.fadeIn, {marginTop: '50px'}} itemsPerRow={5} centered>
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
                <Button style={{marginTop: '50px'}} color='orange' onClick={this.props.goBack}>Back</Button>
            </div>
        )
    }
}