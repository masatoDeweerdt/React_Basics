import React, { Component } from 'react'
import './App.css';
import Membre from './component/Membre'
import Button from './component/Button'

const famille = {
  membre1: {
    nom: 'Bob',
    age: 31
  },
  membre2: {
    nom: 'lazar',
    age: 61
  },
  membre3: {
    nom: 'ken',
    age: 46
  },
  membre4: {
    nom: 'spencer',
    age: 99
  }
}

class App extends Component {
  state = {
    famille
  }

  handleClick = num => {
    const famille = { ...this.state.famille }
    famille.membre1.age += num
    this.setState({ famille })
  }

  handleChange = event => {
    const famille = { ...this.state.famille }
    const nom = event.target.value
    famille.membre1.nom = nom
    this.setState({ famille })
  }

  render() {
    const { titre } = this.props
    const { famille } = this.state
    return (
      <div className='App'>
        <h1>{this.props.titre}</h1>
        <input value={famille.membre1.nom} onChange={this.handleChange} type='text' />
        <Membre
          age={famille.membre1.age}
          nom={famille.membre1.nom} />
        <Membre
          age={famille.membre2.age}
          nom={famille.membre2.nom} />
        <Membre
          age={famille.membre3.age}
          nom={famille.membre3.nom} />
        <Membre
          age={famille.membre4.age}
          nom={famille.membre4.nom}>
          <strong>From Resident Evil</strong>
        </Membre>
        <Button
          vieillir={() => this.handleClick(5)} />
      </div>
    )
  }
}

export default App;
