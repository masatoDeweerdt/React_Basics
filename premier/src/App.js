import React, { Component } from 'react'
import './App.css';
import Membre from './component/Membre'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>{this.props.titre}</h1>
        <Membre nom='Bob' />
        <Membre nom='Lazar' />
        <Membre nom='Ken' />
        <Membre nom='Spencer' />
      </div>
    )
  }
}

export default App;
