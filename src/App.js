import React from 'react';
import './App.css';
import Menu from './components/Menu'
import {Header, Icon} from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
      <Header as='h2' icon>
        <Icon name='basketball ball' color='orange'/>
        NBA Player Randomizer
      </Header>
      <Menu />
    </div>
  );
}

export default App;
