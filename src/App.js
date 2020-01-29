import React, {Component}  from 'react';

import './App.css';
import Menu from './components/Menu'
import PlayerDisplay from './components/PlayerDisplay'

import {NotificationContainer} from 'react-notifications';
import {Header, Icon} from 'semantic-ui-react'

class App extends Component {
  state = {
    found: false,
    players: []
  }

  displayPlayers = players => {
    this.setState({
      players,
      found: true
    })
  }

  goBack = () => {
    this.setState({
      players: [],
      found: false
    })
  }

  render () {
    return (
      <div className="App">
        <NotificationContainer/>
        <Header as='h2' icon>
          <Icon name='basketball ball' color='orange'/>
          NBA Player Randomizer
        </Header>
        {this.state.found
        ?
          <PlayerDisplay players={this.state.players} goBack={this.goBack}/>
        :
          <Menu displayPlayers={this.displayPlayers}/>
        }
    </div>
    )
  }

}

export default App;
